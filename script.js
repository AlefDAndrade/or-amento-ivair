const WHATS="+5591982755053"; // troque pelo seu número com DDI e DDD
const $=id=>document.getElementById(id);
const brl=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const d=(p,c,r=3)=>p.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join("");
const bowl=(c,i)=>`<path d="M14 44h72c0 24-15 38-36 38S14 68 14 44Z" fill="#2F5D45"/><ellipse cx="50" cy="44" rx="36" ry="11" fill="${c}"/>${i}`;
const mound=(c,i)=>`<path d="M16 68Q50 8 84 68Z" fill="${c}"/>${i}`;
const ART={
brus:`<g transform="rotate(-12 50 50)"><rect x="18" y="36" width="36" height="26" rx="6" fill="#C98A4B"/>${d([[28,47],[41,45],[35,54]],"#E4442F",5)}<path d="M28 42q5-7 10 0q-5 4-10 0" fill="#2F8F4E"/></g><g transform="rotate(10 50 50)"><rect x="50" y="42" width="30" height="24" rx="6" fill="#C98A4B"/>${d([[60,52],[71,55]],"#E4442F",4.5)}</g>`,
cox:`<path d="M50 20C68 34 76 56 62 72Q50 80 38 72C24 56 32 34 50 20Z" fill="#E0A23A"/><path d="M41 42q4-9 11-12" stroke="#F8D98A" stroke-width="4" fill="none" stroke-linecap="round"/>`,
pas:`<g transform="rotate(-20 50 50)"><path d="M16 60a34 34 0 0 1 68 0Z" fill="#E0A23A"/><path d="M20 60h60" stroke="#B87A1E" stroke-width="4" stroke-dasharray="4 4"/><path d="M30 46q6-8 14-10" stroke="#F8D98A" stroke-width="4" fill="none" stroke-linecap="round"/></g>`,
frio:`<rect x="14" y="26" width="72" height="48" rx="9" fill="#9A6B3F"/>${d([[30,42],[44,40],[36,56]],"#D9534F",8)}${d([[30,42],[44,40],[36,56]],"#F4A3A0",2)}<path d="M58 32l18 7-18 9zM60 54l18 4-14 11z" fill="#FFD25A"/>${d([[72,62],[78,57],[76,67]],"#6B3FA0",4)}`,
fra:`<g transform="rotate(-28 50 50)"><ellipse cx="42" cy="38" rx="22" ry="13" fill="#C9822B"/><rect x="60" y="35" width="22" height="6" rx="3" fill="#fff" stroke="#CFCFCF"/></g><g transform="rotate(-8 50 50)"><ellipse cx="40" cy="64" rx="22" ry="13" fill="#D79433"/><rect x="58" y="61" width="22" height="6" rx="3" fill="#fff" stroke="#CFCFCF"/></g>${d([[34,36],[44,62],[50,44]],"#2F8F4E",2.5)}`,
stew:bowl("#7A4A2A",d([[36,42],[54,39],[66,44]],"#FF8A1F",4.5)+d([[46,47],[60,48]],"#E8C45A",4.5)),
strog:bowl("#C98A4B",d([[38,43],[52,40],[64,45],[48,48]],"#8A5A34",4.5)+d([[58,42],[44,45]],"#E4442F",2.5)),
risot:bowl("#F1E3B8",d([[38,43],[52,40],[64,45]],"#8A5A34",5)+d([[48,47],[58,40]],"#2F8F4E",2.5)),
fish:`<ellipse cx="46" cy="52" rx="28" ry="15" fill="#8FB7C9"/><path d="M70 52l16-13v26z" fill="#6F9DB3"/><circle cx="32" cy="48" r="3" fill="#13211A"/>${d([[44,46],[54,52],[46,60]],"#FFB627",5)}${d([[44,46],[54,52],[46,60]],"#6B3FA0",1.5)}`,
rib:`<rect x="22" y="32" width="62" height="38" rx="12" fill="#8A3B1F"/><path d="M30 42h46M30 52h46M30 62h46" stroke="#B85A30" stroke-width="3" stroke-linecap="round"/><rect x="12" y="38" width="14" height="7" rx="3.5" fill="#fff" stroke="#CFCFCF"/><rect x="12" y="49" width="14" height="7" rx="3.5" fill="#fff" stroke="#CFCFCF"/><rect x="12" y="60" width="14" height="7" rx="3.5" fill="#fff" stroke="#CFCFCF"/>`,
rice:mound("#F4F1E8",`<path d="M34 56h8M50 46h8M56 58h8M44 64h8" stroke="#D3CDBA" stroke-width="3" stroke-linecap="round"/>`),
grega:mound("#F2D98A",d([[44,52],[56,48],[50,60],[40,62],[62,62]],"#E4442F",3.2)+d([[50,44],[46,57],[58,56]],"#2F8F4E",3)),
far:mound("#D9A25E",d([[40,60],[50,48],[58,58],[48,64],[62,64],[44,54]],"#8A5A34",2.6)),
bat:[-18,0,18].map((a,i)=>`<rect x="18" y="${36+i*10}" width="60" height="15" rx="7" fill="#D9A441" transform="rotate(${a/3} 50 50)"/>`).join("")+d([[34,43],[60,52],[44,62]],"#B87A1E",2.5),
sal:d([[36,54],[52,42],[64,54],[48,62]],"#3FA55B",13)+d([[44,50],[58,50]],"#2F8F4E",8)+d([[54,46],[38,60],[64,62]],"#E4442F",5),
mai:mound("#F6E7B5",d([[44,52],[56,50],[50,60]],"#FF8A1F",3)+d([[50,44],[40,62],[60,60]],"#2F8F4E",2.6)),
mou:`<path d="M26 30h48l-7 46H33Z" fill="#FFD25A"/><path d="M26 30h48l-1 8H27Z" fill="#FFE894"/>${d([[42,50],[56,46],[50,62],[60,58],[40,64]],"#3B2216",2)}<path d="M46 24q4-8 10 0q-4 5-10 0" fill="#2F8F4E"/>`,
pud:`<path d="M24 68L32 42h36l8 26Z" fill="#E7A93B"/><path d="M30 42Q50 30 70 42Q71 50 64 50Q60 60 56 50Q50 56 44 50Q36 54 33 47Q29 47 30 42Z" fill="#7A3E12"/>`,
bri:d([[34,58],[60,56],[48,40]],"#3B2216",13)+d([[30,56],[38,62],[56,52],[64,60],[44,38],[52,44]],"#FFB627",1.8)+d([[36,52],[62,62],[46,44]],"#E4442F",1.8),
tor:`<path d="M14 68L86 68L76 42Q50 32 24 42Z" fill="#F3EBA0"/><path d="M14 68h72v8H14Z" fill="#C98A4B"/><circle cx="50" cy="38" r="10" fill="#8CC63F"/><circle cx="50" cy="38" r="6" fill="#D6F08A"/>`,
suc:`<path d="M32 28h36l-5 50H37Z" fill="#FF9F1C"/><path d="M32 28h36l-.7 8H32.7Z" fill="#FFC15E"/><rect x="58" y="10" width="5" height="34" rx="2" fill="#E4442F" transform="rotate(14 60 30)"/><circle cx="34" cy="28" r="9" fill="#FF9F1C" stroke="#fff" stroke-width="3"/>`,
ref:`<rect x="38" y="12" width="24" height="10" rx="3" fill="#8A8F8C"/><rect x="34" y="22" width="32" height="56" rx="9" fill="#E4442F"/><rect x="34" y="40" width="32" height="14" fill="#fff"/><circle cx="46" cy="30" r="2" fill="#fff"/>`,
agua:`<rect x="43" y="12" width="14" height="8" rx="2" fill="#fff" stroke="#CFCFCF"/><path d="M43 20h14v8l9 10v40H34V38l9-10Z" fill="#7CC6E8"/><rect x="34" y="48" width="32" height="14" fill="#fff" opacity=".8"/>`
};

const STEAM=`<g class="steam" fill="none" stroke-linecap="round" stroke-linejoin="round">`+[32,50,68].map(x=>{const D="M0 0c-10-5 10-10 0-17s10-10 0-17";return `<g transform="translate(${x} 22)"><path class="w" style="stroke:var(--deep)" stroke-width="8" d="${D}"/><path class="w" style="stroke:#fff" stroke-width="3.8" d="${D}"/></g>`}).join("")+`</g>`;
const svg=k=>`<svg viewBox="0 0 100 100" style="overflow:visible" aria-hidden="true"><ellipse cx="50" cy="90" rx="34" ry="5" fill="#000" opacity=".16"/><circle cx="50" cy="50" r="40" fill="#fff"/><circle cx="50" cy="50" r="31" fill="none" stroke="#E4E8E2" stroke-width="2"/>${ART[k]}${STEAM}</svg>`;
const BUF={
 cc:{n:"Churrasco comum",pp:40,desc:"Frango assado, costela e linguiça na brasa, arroz branco, farofa crocante e salada verde.",k:["fra","rib","rice","far"]},
 cf:{n:"Churrasco fogo de chão",pp:50,desc:"Costela de chão, picanha e cortes nobres assados no fogo, batata rústica, farofa e salada de maionese.",k:["rib","bat","far","mai"]},
 jp:{n:"Jantar padrão",pp:40,desc:"Strogonoff de frango, arroz branco, salada verde e mousse de maracujá de sobremesa.",k:["strog","rice","sal","mou"]},
 jl:{n:"Jantar La Turpelé",pp:50,desc:"Bruschetta de entrada, peixe ao molho de maracujá, risoto de cogumelos e torta de limão.",k:["brus","fish","risot","tor"]}};
const opt=(v,n,c,dsc,ks)=>`<label class="opt"><input type="radio" name="buf" value="${v}"><h3>${n}<span class="chip">${c}</span></h3><small>${dsc}</small><div class="mini">${ks.map(k=>svg(k)).join("")}</div></label>`;
$("buf").innerHTML=Object.entries(BUF).map(([k,b])=>opt(k,b.n,"R$ "+b.pp+" por pessoa",b.desc,b.k)).join("")+opt("pz","Personalizado","Você monta","Escolha entradas, pratos principais, petiscos e sobremesas. O valor soma conforme você escolhe.",["brus","rib","cox","pud"]);
const CAT={"Entradas":[["Bruschetta de tomate","brus",3.5],["Salada verde","sal",3],["Salada de maionese","mai",3]],
"Pratos principais":[["Frango assado com ervas","fra",11],["Carne de panela","stew",14],["Strogonoff de frango","strog",12],["Peixe ao molho de maracujá","fish",18],["Costela assada","rib",19],["Risoto de cogumelos","risot",13],["Arroz branco","rice",2.5],["Arroz à grega","grega",3.5],["Farofa crocante","far",2]],
"Petiscos":[["Mini coxinha de frango","cox",4],["Mini pastel de queijo","pas",3],["Batata rústica","bat",4],["Tábua de frios","frio",6.5]],
"Sobremesas":[["Mousse de maracujá","mou",4],["Pudim","pud",4.5],["Brigadeiro gourmet","bri",3.5],["Torta de limão","tor",5]]};
let h=`<h2>Monte seu cardápio</h2><p class="sub">Toque nos pratos. Valor por pessoa: <b id="ppv">R$ 0,00</b></p>`;
for(const [c,items] of Object.entries(CAT)){h+=`<h2 style="font-size:24px">${c}</h2><div class="grid" style="margin-top:10px">`+items.map(([n,k,p])=>`<label class="dish"><input type="checkbox" data-p="${p}" data-n="${n}" data-k="${k}"><span class="chk">✓</span><span class="art">${svg(k)}</span><b>${n}</b><span class="p">${brl(p)}</span></label>`).join("")+`</div>`}
$("custom").innerHTML=h;
document.querySelectorAll(".mini").forEach(m=>{});
const ok=["fra","tor","stew","bri","rib","sal"],ang=[0,60,120,180,240,300];
$("orbit").insertAdjacentHTML("afterbegin",ok.map((k,i)=>`<div class="o" style="--a:${ang[i]}deg">${svg(k)}</div>`).join(""));
$("mq").textContent="Churrasco ✦ Jantar ✦ Personalizado ✦ Orçamento na hora ✦ ".repeat(8);

const SK=["#F1C9A5","#E0AC82","#C68B5E","#8D5A3B","#5C3A24"],SH=["#2B1B12","#5A3A22","#B0732C","#1A1A1A","#8A8A8A","#C9A24A"],SC=["#B08A3E","#2F5D45","#8B2E2E","#35527A","#6B4A8A","#D9D4C5","#C0662B"];
const pick=(a,i,n)=>{const x=Math.sin(i*97.3+n*31.7)*10000;return a[Math.floor((x-Math.floor(x))*a.length)]};
const person=i=>`<svg viewBox="0 0 20 28" aria-hidden="true"><path d="M2 28v-7a8 7 0 0 1 16 0v7z" fill="${pick(SC,i,1)}"/><circle cx="10" cy="9" r="5.2" fill="${pick(SK,i,2)}"/><path d="M4.6 8.6a5.4 5.2 0 0 1 10.8 0c-2.2-2-8.6-2-10.8 0z" fill="${pick(SH,i,3)}"/><circle cx="8.2" cy="9.8" r=".7" fill="#2B1B12"/><circle cx="11.8" cy="9.8" r=".7" fill="#2B1B12"/></svg>`;
function fit(n){const c=$("crowd"),w=c.clientWidth,g=3,h=Math.round((innerWidth<=480?64:84)*1.3),hh=h-6;c.style.height=h+"px";
 if(!w)return 20;let s=40;while(s>5){const cols=Math.floor((w+g)/(s+g)),r=Math.floor((hh+g)/(s*1.4+g));if(cols*r>=n)break;s-=.5}return s}
function crowd(g){const c=$("crowd"),n=Math.min(150,Math.max(0,g));let k=c.children.length,a=0;
 while(k<n){const e=document.createElement("span");e.className="pp";e.style.setProperty("--d",Math.min(a*.03,.6)+"s");e.innerHTML=person(k);c.appendChild(e);k++;a++}
 while(k>n){c.lastChild.remove();k--}
 c.style.setProperty("--pw",fit(n)+"px")}
const N=6,NAMES=["Pessoas","Louça","Equipe","Duração","Buffet","Resumo"],seen={};let step=0,shown=0,raf;const S={g:100,h:1,hc:false,louca:null,eq:null,chef:null,buf:null};
const dishes=()=>[...document.querySelectorAll("#custom input:checked")];
const q=n=>{const e=document.querySelector(`input[name=${n}]:checked`);return e?e.value:null};
function calc(){
 const g=S.g,tr=+$("region").value;let pp=0,L=[],tx=[];
 L.push([null,`${g} pessoas`,""]);
 if(S.buf==="pz"){tx.push("Buffet: Personalizado");dishes().forEach(i=>{pp+=+i.dataset.p;L.push([i.dataset.k,i.dataset.n,+i.dataset.p*g]);tx.push("- "+i.dataset.n)});
  if(!pp)L.push([null,"Escolha os pratos do seu cardápio",""])}
 else if(S.buf){const b=BUF[S.buf];pp=b.pp;L.push([b.k[0],`${b.n} (${brl(pp)} por pessoa)`,pp*g]);tx.push("Buffet: "+b.n)}
 const eq=S.eq===1?500:0,ex=Math.max(0,S.h-4)*150,lo=S.louca===1?5*g:0;
 if(S.eq===1)L.push([null,"Equipe de garçons",500]);
 else if(S.eq===0)L.push([null,"Só o chef, "+(S.chef==="leva"?"levando o material":S.chef?"só cozinhando":"detalhes a combinar")+" (a combinar com o chef)",""]);
 L.push([null,S.h<4?`Evento de ${S.h} hora${S.h>1?"s":""} (valor base, até 4 horas)`:"Evento até 4 horas",700]);
 if(ex)L.push([null,`${S.h-4} hora(s) extra`,ex]);
 if(S.louca===1)L.push([null,"Louça incluída",""]);
 if(tr)L.push([null,"Deslocamento",tr]);
 return{pp,tx,L,total:pp*g+eq+ex+700+lo+tr}}
const valid=i=>i===0?S.g>=20&&S.g<=1000:i===1?S.louca!==null:i===2?(S.eq===1||(S.eq===0&&S.chef!==null)):i===3?S.hc:i===4?(S.buf&&(S.buf!=="pz"||dishes().length>0)):true;
function tween(t){cancelAnimationFrame(raf);const s=shown,t0=performance.now();
 (function f(n){const k=Math.min(1,(n-t0)/450),e=1-Math.pow(1-k,3);shown=s+(t-s)*e;$("barTotal").textContent=brl(shown);const x=$("tot");if(x)x.textContent=brl(shown);if(k<1)raf=requestAnimationFrame(f)})(t0)}
function update(){
 S.g=parseInt($("g").value)||0;crowd(S.g);
 S.louca=q("louca")===null?null:+q("louca");S.eq=q("eq")===null?null:+q("eq");S.chef=q("chef");S.buf=q("buf");
 const c=calc();
 $("gh").textContent=S.g<20?"Mínimo de 20 pessoas":"";
 $("hv").textContent=S.h===1?"1 hora":S.h+" horas";$("hok").textContent=S.hc?"✓ Duração confirmada":"Confirmar "+$("hv").textContent;$("hok").classList.toggle("ok",S.hc);
 $("chefq").hidden=S.eq!==0;$("custom").hidden=S.buf!=="pz";
 $("ppv").textContent=brl(c.pp);
 $("sum").innerHTML=c.L.map(([k,n,v])=>`<li><span>${k?svg(k):""}</span><span>${n}</span><span>${v!==""?brl(v):""}</span></li>`).join("")+`<li class="total"><span></span><span>Total</span><span id="tot">${brl(shown)}</span></li>`;
 tween(c.total);
 document.querySelectorAll(".step").forEach((s,i)=>s.hidden=i!==step);
 seen[step]=1;$("prog").innerHTML=NAMES.map((n,i)=>{const d=i!==step&&seen[i]&&valid(i);return `<button class="pg${i===step?" on":""}${d?" done":""}" data-go="${i}"><b>${d?"✓":i+1}</b>${n}</button>`}).join("");
 $("back").hidden=step===0;$("next").hidden=step===N-1;$("st").textContent=`Etapa ${step+1} de ${N}`;
 $("next").textContent=step===N-2?"Ver orçamento":"Continuar";
 const dt=$("date").value?$("date").value.split("-").reverse().join("/"):"a combinar";
 const msg=`Olá! Fiz um orçamento pelo site.\n\nNome: ${$("name").value||"-"}\nPessoas: ${S.g}\nData: ${dt}\nLocal: ${$("place").value||"-"}\nDuração: ${S.h} hora${S.h>1?"s":""}\nLouça: ${S.louca===1?"Sim":"Não"}\nGarçons: ${S.eq===1?"Sim":"Não, só o chef ("+(S.chef==="leva"?"leva o material":"só cozinha")+")"}\n${c.tx.join("\n")}\n\nTotal estimado: ${brl(c.total)}`;
 const miss=[];if(S.g<20||S.g>1000)miss.push([0,"Número de pessoas"]);if(S.louca===null)miss.push([1,"Louça"]);
 if(!(S.eq===1||(S.eq===0&&S.chef!==null)))miss.push([2,S.eq===0?"Opção do chef":"Equipe de garçons"]);
 if(!S.hc)miss.push([3,"Confirmar a duração"]);
 if(!S.buf||(S.buf==="pz"&&!dishes().length))miss.push([4,S.buf?"Pratos do cardápio":"Buffet"]);
 $("miss").hidden=!miss.length;$("miss").innerHTML=miss.length?"<b>Antes de enviar, falta escolher:</b><br>"+miss.map(([i,n])=>`<button data-go="${i}">${n}</button>`).join(""):"";
 $("send").setAttribute("aria-disabled",miss.length>0);
 $("send").href=miss.length?"#":`https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`}
function go(n){step=Math.max(0,Math.min(N-1,n));update();crowd(S.g);const e=document.querySelector(".step:not([hidden])");scrollTo({top:e.getBoundingClientRect().top+scrollY-96,behavior:"smooth"})}
$("next").onclick=()=>go(step+1);$("back").onclick=()=>go(step-1);
document.addEventListener("input",update);addEventListener("resize",()=>crowd(S.g));
document.addEventListener("click",e=>{if(e.target.closest("#hok")){S.hc=true;update()}const b=e.target.closest("[data-go]");if(b)go(+b.dataset.go)});
document.addEventListener("click",e=>{const b=e.target.closest("[data-g],[data-h],[data-set]");if(!b)return;
 if(b.dataset.g)$("g").value=Math.max(0,(+$("g").value||0)+ +b.dataset.g);
 if(b.dataset.set)$("g").value=b.dataset.set;
 if(b.dataset.h){const n=S.h+ +b.dataset.h,j=$("hj");if(n>20){j.hidden=false;j.style.animation="none";void j.offsetWidth;j.style.animation="";clearTimeout(window._hj);window._hj=setTimeout(()=>j.hidden=true,4500)}else{j.hidden=true;const m=Math.max(1,n);if(m!==S.h)S.hc=false;S.h=m}}
 update()});
update();
