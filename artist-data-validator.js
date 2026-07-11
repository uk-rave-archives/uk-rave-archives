(function(){
  const records=window.BTOS_ARTISTS||[];
  const ids=new Map(),names=new Map(),errors=[],warnings=[];
  const validRoles=new Set(["DJ","MC"]);
  const isImage=v=>typeof v==="string"&&(/\.(jpg|jpeg|png|webp|gif|svg)(\?|$)/i.test(v)||/^https?:\/\//.test(v));
  records.forEach((a,i)=>{
    const row=i+1,label=a.id||`record-${row}`;
    if(!a.id) errors.push(`${label}: missing id`);
    else if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.id)) errors.push(`${label}: invalid id format`);
    if(ids.has(a.id)) errors.push(`${label}: duplicate id also used by row ${ids.get(a.id)}`); else ids.set(a.id,row);
    const key=(a.name||"").trim().toLowerCase();
    if(!key) errors.push(`${label}: missing name`);
    else if(names.has(key)) errors.push(`${label}: duplicate name also used by row ${names.get(key)}`); else names.set(key,row);
    if(!validRoles.has(a.role)) errors.push(`${label}: role must be DJ or MC`);
    if(a.archiveTo!==2005) warnings.push(`${label}: archiveTo is not 2005`);
    if(a.public){
      ["name","role","image","photoCredit","summary"].forEach(f=>{if(!a[f])errors.push(`${label}: public record missing ${f}`)});
      if(!isImage(a.image)) errors.push(`${label}: public image is not a usable local file or URL`);
      if(!Array.isArray(a.biography)||!a.biography.length) errors.push(`${label}: public record missing biography`);
      if(!Array.isArray(a.sources)||!a.sources.length) warnings.push(`${label}: public record has no sources`);
    } else if(a.image||a.photoCredit||a.summary||(a.biography||[]).length){
      warnings.push(`${label}: staged record contains partial publication data`);
    }
  });
  window.BTOS_ARTIST_VALIDATION={total:records.length,public:records.filter(a=>a.public).length,staged:records.filter(a=>!a.public).length,errors,warnings};
})();