
const records = window.BTOS_ARTISTS || [];
const params = new URLSearchParams(location.search);
const id = params.get("id") || "";
const artist = records.find(item => item.id === id);
const root = document.querySelector("#artist-profile");
const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[char]));

document.querySelector(".menu-button")?.addEventListener("click", () => {
  const nav = document.querySelector(".museum-nav");
  const open = nav.classList.toggle("open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", String(open));
});

const publishable = item =>
  item && item.public === true && item.name && item.role && item.image &&
  item.photoCredit && item.summary && Array.isArray(item.biography) &&
  item.biography.length > 0;

if (!publishable(artist)) {
  root.innerHTML = `<section class="not-public">
    <h1>Profile not published</h1>
    <p>This artist is either not in the database or has not passed the publication checks for a real photo, credit and minimum profile information.</p>
    <a href="djs.html">Return to the DJ &amp; MC Archive</a>
  </section>`;
} else {
  document.title = `${artist.name} — ${artist.role} Profile | Back to the Old Skool Archive`;
  const fallbackEnvironment = artist.role === "MC"
    ? "artist-env-mc-stage.jpg"
    : (artist.activeFrom && artist.activeFrom <= 1990)
      ? "artist-env-early-warehouse.jpg"
      : (artist.activeFrom && artist.activeFrom >= 1997)
        ? "artist-env-superclub-hangar.jpg"
        : "artist-env-jungle-warehouse.jpg";
  document.documentElement.style.setProperty(
    "--artist-environment",
    `url("${artist.environment || fallbackEnvironment}")`
  );
  const fact = (label, value) => `<div class="fact"><small>${esc(label)}</small><b>${esc(value || "Researching")}</b></div>`;
  const timeline = artist.timeline.length
    ? artist.timeline.map(item => `<div class="timeline-item"><b>${esc(item.year)}</b><strong>${esc(item.title)}</strong><span>${esc(item.text)}</span></div>`).join("")
    : `<div class="researching"><b>Timeline research active</b>The profile is live, but verified year-by-year milestones are still being added.</div>`;
  const cards = (items, label) => items.length
    ? items.map(item => `<article class="connection"><h3>${esc(item.title)}</h3><a href="${item.href}">Open ${label} →</a></article>`).join("")
    : `<div class="researching"><b>${esc(label)} matching active</b>No verified linked records have been added yet.</div>`;
  const sources = artist.sources.length
    ? `<ul class="sources">${artist.sources.map(item => `<li><a href="${item.href}" target="_blank" rel="noopener">${esc(item.title)}</a></li>`).join("")}</ul>`
    : `<div class="researching"><b>Source research active</b>Verified references will be recorded here.</div>`;

  root.innerHTML = `
    <section class="profile-hero">
      <div class="profile-photo"><img src="${artist.image}" alt="${esc(artist.name)}"><span class="photo-credit">Photo: ${esc(artist.photoCredit)}</span></div>
      <div class="profile-copy"><p class="kicker">${esc(artist.role)} archive profile</p><h1>${esc(artist.name)}</h1><p class="summary">${esc(artist.summary)}</p>
        <div class="facts">
          ${fact("Role", artist.role)}${fact("Origin", artist.origin)}
          ${fact("Archive period", `${artist.activeFrom || "?"}–${artist.archiveTo || 2005}`)}
          ${fact("Styles", artist.styles.join(", "))}
        </div>
      </div>
    </section>
    <nav class="profile-nav"><a href="#biography">Biography</a><a href="#timeline">Timeline</a><a href="#tapes">Tape sets</a><a href="#flyers">Flyers</a><a href="#events">Events</a><a href="#sources">Sources</a></nav>
    <div class="profile-main">
      <section class="panel" id="biography"><h2>Biography</h2>${artist.biography.map(p => `<p>${esc(p)}</p>`).join("")}</section>
      <section class="panel" id="timeline"><h2>Career timeline to 2005</h2><div class="timeline">${timeline}</div></section>
      <section class="panel" id="tapes"><h2>Tape recordings</h2><div class="connections">${cards(artist.tapes, "recording")}</div></section>
      <section class="panel" id="flyers"><h2>Flyer appearances</h2><div class="connections">${cards(artist.flyers, "flyer")}</div></section>
      <section class="panel" id="events"><h2>Events</h2><div class="connections">${cards(artist.events, "event")}</div></section>
      <section class="panel" id="sources"><h2>Sources and photo credits</h2>${sources}</section>
    </div>`;
}
