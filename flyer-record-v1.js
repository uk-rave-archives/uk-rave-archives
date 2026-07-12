const e=window.BTOS_ARCHIVE_ENGINE,raw=new URLSearchParams(location.search).get("id")||"",id=raw.startsWith("flyer-")?raw:`flyer-${String(Number(raw)+1).padStart(3,"0")}`,f=e.get("flyers",id),root=document.querySelector("#root"),esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));if(!f){root.innerHTML="<p>Flyer not found.</p>"}else{const p=f.promoterId?e.get("promoters",f.promoterId):null,v=f.venueId?e.get("venues",f.venueId):null,ev=f.eventId?e.get("events",f.eventId):null,d=(f.djIds||[]).map(x=>e.get("artists",x)).filter(Boolean),m=(f.mcIds||[]).map(x=>e.get("artists",x)).filter(Boolean);root.innerHTML=`<section class="record"><div class="scan"><img id="scan" src="${f.image}" alt="${esc(f.title)}"></div><div class="details"><p class="kicker">Flyer record</p><h1>${esc(f.title)}</h1><div class="facts"><div class="fact"><small>Date</small><b>${esc(f.dateText||f.year||"Review required")}</b></div><div class="fact"><small>Type</small><b>${esc(f.eventType)}</b></div><div class="fact"><small>Promoter</small><b>${p?esc(p.name):"Review required"}</b></div><div class="fact"><small>Venue</small><b>${v?esc(v.name):"Review required"}</b></div></div>${ev?`<h2>Event</h2><div class="links"><a href="event.html?id=${ev.id}">${esc(ev.name)}</a></div>`:""}<h2>DJs</h2><div class="links">${d.length?d.map(a=>`<a href="artist.html?id=${a.id}">${esc(a.name)}</a>`).join(""):"No confirmed DJs entered."}</div><h2>MCs</h2><div class="links">${m.length?m.map(a=>`<a href="artist.html?id=${a.id}">${esc(a.name)}</a>`).join(""):"No confirmed MCs entered."}</div></div></section><div class="lightbox" id="box"><button>Close</button><img src="${f.image}"></div>`;const b=document.querySelector("#box");document.querySelector("#scan").onclick=()=>b.classList.add("open");b.onclick=()=>b.classList.remove("open")}
document.addEventListener("DOMContentLoaded",()=>{
 const engine=window.BTOS_ARCHIVE_ENGINE,raw=new URLSearchParams(location.search).get("id")||"",id=raw.startsWith("flyer-")?raw:`flyer-${String(Number(raw)+1).padStart(3,"0")}`,f=engine.get("flyers",id);
 if(!f)return;
 const main=document.querySelector("#root");
 const relatedIds=new Set();
 (f.artistIds||[]).forEach(aid=>{
   const rel=engine.relatedIds("artists",aid,"flyers");
   rel.forEach(fid=>{
     const other=engine.get("flyers",fid);
     (other?.artistIds||[]).forEach(x=>x!==aid&&relatedIds.add(x));
   });
 });
 const related=[...relatedIds].map(x=>engine.get("artists",x)).filter(Boolean).slice(0,12);
 if(related.length){
   const panel=document.createElement("section");
   panel.className="relationship-panel";
   panel.innerHTML=`<h2>Related artists</h2><div class="record-links">${related.map(a=>`<a href="artist.html?id=${a.id}">${a.name}</a>`).join("")}</div>`;
   main.appendChild(panel);
 }
});
