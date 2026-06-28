// لوحة تحكّم للزائر (العميل) ليتخيّل متجره: لون، اسم، زوايا + شريط تقدّم القراءة.
const LS = { accent: "cz_accent", name: "cz_name", radius: "cz_radius" };

const SWATCHES = [
  ["#c8ad96", "#a98c72"], // طيني (افتراضي)
  ["#9bb39a", "#6f8a6e"], // سيج
  ["#d09b86", "#b06f57"], // تراكوتا
  ["#9bb0c4", "#6f8aa6"], // أزرق هادئ
  ["#cda7ac", "#ad7f86"], // وردي
  ["#d4b483", "#b08f5a"], // ذهبي
];

const T = {
  ar: { btn: "🎨 خصّص متجرك", title: "خصّص متجرك", hint: "غيّر اللون والاسم والزوايا وتخيّل متجرك 👇", color: "اللون", name: "اسم المتجر", namePh: "اكتب اسم متجرك", corners: "الزوايا", soft: "ناعمة", sharp: "حادة", reset: "إرجاع" },
  tr: { btn: "🎨 Özelleştir", title: "Mağazanı özelleştir", hint: "Renk, ad ve köşeleri değiştir, mağazanı hayal et 👇", color: "Renk", name: "Mağaza adı", namePh: "Mağaza adını yaz", corners: "Köşeler", soft: "Yumuşak", sharp: "Keskin", reset: "Sıfırla" },
  en: { btn: "🎨 Customize", title: "Customize your store", hint: "Change color, name and corners — picture your store 👇", color: "Color", name: "Store name", namePh: "Type your store name", corners: "Corners", soft: "Soft", sharp: "Sharp", reset: "Reset" },
};
const curLang = () => { const l = localStorage.getItem("lang"); return ["ar", "tr", "en"].includes(l) ? l : "ar"; };

function applyAccent(i) {
  const s = SWATCHES[i] || SWATCHES[0];
  document.documentElement.style.setProperty("--amber-500", s[0]);
  document.documentElement.style.setProperty("--amber-600", s[1]);
}
function applyRadius(soft) {
  document.documentElement.style.setProperty("--radius", soft ? "22px" : "6px");
  document.documentElement.style.setProperty("--radius-sm", soft ? "14px" : "4px");
}
function applyName(name) {
  if (!name) return;
  document.querySelectorAll(".logo__text").forEach((el) => (el.textContent = name));
}

function el(h) { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; }

const css = `
#scrollProgress{position:fixed;top:0;inset-inline-start:0;height:3px;width:0;z-index:80;
 background:linear-gradient(90deg,var(--amber-500),var(--amber-600));transition:width .1s linear}
.cz-btn{position:fixed;inset-inline-start:50%;transform:translateX(-50%);bottom:18px;z-index:62;
 background:var(--olive-900);color:var(--bone);border:none;cursor:pointer;font-family:inherit;font-weight:700;
 font-size:.9rem;padding:11px 22px;border-radius:999px;box-shadow:var(--shadow);transition:transform .2s}
.cz-btn:hover{transform:translateX(-50%) translateY(-2px)}
.cz-panel{position:fixed;inset-inline-start:50%;transform:translateX(-50%) translateY(20px);bottom:70px;z-index:63;
 width:min(340px,calc(100vw - 32px));background:var(--paper);border:1px solid var(--line);border-radius:18px;
 box-shadow:var(--shadow);padding:20px;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s}
.cz-panel.open{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.cz-panel h4{font-family:"El Messiri",serif;color:var(--olive-900);margin-bottom:4px;font-size:1.15rem}
.cz-hint{color:var(--ink-soft);font-size:.82rem;margin-bottom:16px}
.cz-row{margin-bottom:16px}
.cz-row>span{display:block;font-weight:700;font-size:.8rem;color:var(--ink-soft);margin-bottom:8px}
.cz-swatches{display:flex;gap:10px;flex-wrap:wrap}
.cz-sw{width:30px;height:30px;border-radius:50%;border:2px solid transparent;cursor:pointer;transition:transform .15s}
.cz-sw:hover{transform:scale(1.12)}
.cz-sw.active{border-color:var(--ink);box-shadow:0 0 0 2px var(--paper) inset}
.cz-name{width:100%;font-family:inherit;font-size:.95rem;padding:9px 12px;border:1px solid var(--line);
 border-radius:10px;outline:none;background:var(--bone)}
.cz-name:focus{border-color:var(--amber-500)}
.cz-corners{display:flex;gap:8px}
.cz-corners button{flex:1;font-family:inherit;font-weight:700;font-size:.85rem;padding:8px;border-radius:10px;
 border:1px solid var(--line);background:var(--bone);color:var(--ink-soft);cursor:pointer;transition:all .2s}
.cz-corners button.active{background:var(--olive-700);border-color:var(--olive-700);color:#fff}
.cz-reset{margin-top:4px;background:none;border:none;color:var(--amber-600);font-family:inherit;font-weight:700;
 font-size:.82rem;cursor:pointer;padding:0}
`;

function init() {
  document.head.appendChild(el(`<style>${css}</style>`));
  document.body.appendChild(el(`<div id="scrollProgress"></div>`));

  // restore saved
  let accent = parseInt(localStorage.getItem(LS.accent) ?? "0", 10) || 0;
  let soft = localStorage.getItem(LS.radius) !== "sharp";
  const savedName = localStorage.getItem(LS.name) || "";
  applyAccent(accent); applyRadius(soft); applyName(savedName);

  const btn = el(`<button class="cz-btn"></button>`);
  const panel = el(`
    <div class="cz-panel" role="dialog">
      <h4 class="cz-title"></h4>
      <p class="cz-hint"></p>
      <div class="cz-row"><span class="cz-l-color"></span><div class="cz-swatches"></div></div>
      <div class="cz-row"><span class="cz-l-name"></span><input class="cz-name" type="text"></div>
      <div class="cz-row"><span class="cz-l-corners"></span><div class="cz-corners">
        <button data-soft="1"></button><button data-soft="0"></button></div></div>
      <button class="cz-reset"></button>
    </div>`);
  document.body.append(btn, panel);

  const sw = panel.querySelector(".cz-swatches");
  sw.innerHTML = SWATCHES.map((s, i) => `<button class="cz-sw" data-i="${i}" style="background:${s[0]}"></button>`).join("");
  const nameInput = panel.querySelector(".cz-name");
  nameInput.value = savedName;
  const cornerBtns = panel.querySelectorAll(".cz-corners button");

  function paintActive() {
    sw.querySelectorAll(".cz-sw").forEach((b) => b.classList.toggle("active", +b.dataset.i === accent));
    cornerBtns.forEach((b) => b.classList.toggle("active", (b.dataset.soft === "1") === soft));
  }
  function applyLabels() {
    const t = T[curLang()];
    btn.textContent = t.btn;
    panel.querySelector(".cz-title").textContent = t.title;
    panel.querySelector(".cz-hint").textContent = t.hint;
    panel.querySelector(".cz-l-color").textContent = t.color;
    panel.querySelector(".cz-l-name").textContent = t.name;
    panel.querySelector(".cz-l-corners").textContent = t.corners;
    nameInput.placeholder = t.namePh;
    cornerBtns[0].textContent = t.soft;
    cornerBtns[1].textContent = t.sharp;
    panel.querySelector(".cz-reset").textContent = t.reset;
  }
  applyLabels(); paintActive();

  btn.onclick = () => panel.classList.toggle("open");
  sw.onclick = (e) => { const b = e.target.closest(".cz-sw"); if (!b) return; accent = +b.dataset.i; applyAccent(accent); localStorage.setItem(LS.accent, accent); paintActive(); };
  cornerBtns.forEach((b) => b.onclick = () => { soft = b.dataset.soft === "1"; applyRadius(soft); localStorage.setItem(LS.radius, soft ? "soft" : "sharp"); paintActive(); });
  nameInput.addEventListener("input", () => { applyName(nameInput.value); localStorage.setItem(LS.name, nameInput.value); });
  panel.querySelector(".cz-reset").onclick = () => {
    accent = 0; soft = true; nameInput.value = "";
    applyAccent(0); applyRadius(true);
    localStorage.removeItem(LS.accent); localStorage.removeItem(LS.radius); localStorage.removeItem(LS.name);
    document.dispatchEvent(new CustomEvent("cz-reset"));
    paintActive();
  };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") panel.classList.remove("open"); });

  // keep custom name after language switch (app.js re-renders logo text)
  window.addEventListener("langchange", () => { applyLabels(); if (nameInput.value) applyName(nameInput.value); });

  // scroll progress
  const bar = document.getElementById("scrollProgress");
  const onScroll = () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.width = Math.min(100, p * 100) + "%";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
