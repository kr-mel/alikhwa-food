// لوحة تحكّم للزائر ليتخيّل متجره: لون (جاهز + مخصص)، خط، اسم، زوايا + شريط تقدّم.
const LS = { accent: "cz_accent", color: "cz_color", font: "cz_font", name: "cz_name", radius: "cz_radius", theme: "cz_theme" };

const SWATCHES = [
  ["#c8ad96", "#a98c72"], ["#9bb39a", "#6f8a6e"], ["#d09b86", "#b06f57"],
  ["#9bb0c4", "#6f8aa6"], ["#cda7ac", "#ad7f86"], ["#d4b483", "#b08f5a"],
];

const FONTS = [
  { head: '"El Messiri", serif', body: '"Tajawal", sans-serif', load: null },
  { head: '"Cairo", sans-serif', body: '"Cairo", sans-serif', load: "Cairo:wght@400;600;700" },
  { head: '"Amiri", serif', body: '"Tajawal", sans-serif', load: "Amiri:wght@400;700" },
  { head: '"Markazi Text", serif', body: '"Tajawal", sans-serif', load: "Markazi+Text:wght@500;700" },
];

const T = {
  ar: { btn: "🎨 خصّص متجرك", title: "خصّص متجرك", hint: "غيّر اللون والخط والاسم وتخيّل متجرك 👇", color: "اللون", custom: "لون مخصص", font: "الخط", fonts: ["أنيق", "عصري", "كلاسيكي", "ناعم"], name: "اسم المتجر", namePh: "اكتب اسم متجرك", corners: "الزوايا", soft: "ناعمة", sharp: "حادة", theme: "الإضاءة", light: "فاتح", dark: "ليلي", reset: "إرجاع" },
  tr: { btn: "🎨 Özelleştir", title: "Mağazanı özelleştir", hint: "Renk, yazı tipi ve adı değiştir 👇", color: "Renk", custom: "Özel renk", font: "Yazı tipi", fonts: ["Zarif", "Modern", "Klasik", "Yumuşak"], name: "Mağaza adı", namePh: "Mağaza adını yaz", corners: "Köşeler", soft: "Yumuşak", sharp: "Keskin", theme: "Tema", light: "Açık", dark: "Koyu", reset: "Sıfırla" },
  en: { btn: "🎨 Customize", title: "Customize your store", hint: "Change color, font and name — picture your store 👇", color: "Color", custom: "Custom", font: "Font", fonts: ["Elegant", "Modern", "Classic", "Soft"], name: "Store name", namePh: "Type your store name", corners: "Corners", soft: "Soft", sharp: "Sharp", theme: "Theme", light: "Light", dark: "Dark", reset: "Reset" },
};
const curLang = () => { const l = localStorage.getItem("lang"); return ["ar", "tr", "en"].includes(l) ? l : "ar"; };
const root = document.documentElement.style;

function darken(hex, a = 0.17) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.max(0, Math.round(v * (1 - a))).toString(16).padStart(2, "0");
  return "#" + f((n >> 16) & 255) + f((n >> 8) & 255) + f(n & 255);
}
function luminance(hex) {
  const n = parseInt(hex.slice(1), 16), f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f((n >> 16) & 255) + 0.7152 * f((n >> 8) & 255) + 0.0722 * f(n & 255);
}
function setAccent(main, deep) {
  root.setProperty("--amber-500", main);
  root.setProperty("--amber-600", deep || darken(main));
  root.setProperty("--on-accent", luminance(main) > 0.45 ? "#36392f" : "#ffffff");
}
function applySwatch(i) { const s = SWATCHES[i] || SWATCHES[0]; setAccent(s[0], s[1]); }
function applyRadius(soft) { root.setProperty("--radius", soft ? "22px" : "6px"); root.setProperty("--radius-sm", soft ? "14px" : "4px"); }
function applyName(name) { if (name) document.querySelectorAll(".logo__text").forEach((el) => (el.textContent = name)); }
function applyTheme(t) { if (t === "dark") document.documentElement.setAttribute("data-theme", "dark"); else document.documentElement.removeAttribute("data-theme"); }

const loaded = new Set();
function applyFont(i) {
  const f = FONTS[i] || FONTS[0];
  if (f.load && !loaded.has(f.load)) {
    loaded.add(f.load);
    const link = document.createElement("link"); link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${f.load}&display=swap`;
    document.head.appendChild(link);
  }
  root.setProperty("--font-head", f.head); root.setProperty("--font-body", f.body);
}

const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };

const css = `
#scrollProgress{position:fixed;top:0;inset-inline-start:0;height:3px;width:0;z-index:80;background:linear-gradient(90deg,var(--amber-500),var(--amber-600));transition:width .1s linear}
.cz-btn{position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:62;background:var(--olive-900);color:var(--bone);border:none;cursor:pointer;font-family:inherit;font-weight:700;font-size:.9rem;padding:11px 22px;border-radius:999px;box-shadow:var(--shadow);transition:transform .2s}
.cz-btn:hover{transform:translateX(-50%) translateY(-2px)}
.cz-panel{position:fixed;left:50%;transform:translateX(-50%) translateY(20px);bottom:70px;z-index:63;width:min(340px,calc(100vw - 32px));max-height:78vh;overflow:auto;background:var(--paper);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow);padding:20px;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s}
.cz-panel.open{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.cz-panel h4{font-family:var(--font-head);color:var(--olive-900);margin-bottom:4px;font-size:1.15rem}
.cz-hint{color:var(--ink-soft);font-size:.82rem;margin-bottom:16px}
.cz-row{margin-bottom:16px}.cz-row>span{display:block;font-weight:700;font-size:.8rem;color:var(--ink-soft);margin-bottom:8px}
.cz-swatches{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.cz-sw{width:30px;height:30px;border-radius:50%;border:2px solid transparent;cursor:pointer;transition:transform .15s;padding:0}
.cz-sw:hover{transform:scale(1.12)}.cz-sw.active{border-color:var(--ink)}
.cz-color{width:34px;height:34px;border:1px solid var(--line);border-radius:8px;cursor:pointer;background:none;padding:0}
.cz-fonts{display:flex;gap:8px;flex-wrap:wrap}
.cz-fonts button{flex:1;min-width:64px;font-family:inherit;font-weight:700;font-size:.82rem;padding:8px;border-radius:10px;border:1px solid var(--line);background:var(--bone);color:var(--ink-soft);cursor:pointer;transition:all .2s}
.cz-fonts button.active{background:var(--olive-700);border-color:var(--olive-700);color:#fff}
.cz-name{width:100%;font-family:inherit;font-size:.95rem;padding:9px 12px;border:1px solid var(--line);border-radius:10px;outline:none;background:var(--bone)}
.cz-name:focus{border-color:var(--amber-500)}
.cz-corners{display:flex;gap:8px}.cz-corners button{flex:1;font-family:inherit;font-weight:700;font-size:.85rem;padding:8px;border-radius:10px;border:1px solid var(--line);background:var(--bone);color:var(--ink-soft);cursor:pointer;transition:all .2s}
.cz-corners button.active{background:var(--olive-700);border-color:var(--olive-700);color:#fff}
.cz-reset{margin-top:2px;background:none;border:none;color:var(--amber-600);font-family:inherit;font-weight:700;font-size:.82rem;cursor:pointer;padding:0}
`;

function init() {
  document.head.appendChild(el(`<style>${css}</style>`));
  document.body.appendChild(el(`<div id="scrollProgress"></div>`));
  root.setProperty("--font-head", FONTS[0].head); root.setProperty("--font-body", FONTS[0].body);

  let accent = parseInt(localStorage.getItem(LS.accent) ?? "0", 10) || 0;
  let custom = localStorage.getItem(LS.color) || "";
  let font = parseInt(localStorage.getItem(LS.font) ?? "0", 10) || 0;
  let soft = localStorage.getItem(LS.radius) !== "sharp";
  let theme = localStorage.getItem(LS.theme) || "light";
  const savedName = localStorage.getItem(LS.name) || "";
  if (custom) setAccent(custom); else applySwatch(accent);
  applyFont(font); applyRadius(soft); applyName(savedName); applyTheme(theme);

  const btn = el(`<button class="cz-btn"></button>`);
  const panel = el(`
    <div class="cz-panel" role="dialog">
      <h4 class="cz-title"></h4><p class="cz-hint"></p>
      <div class="cz-row"><span class="cz-l-color"></span><div class="cz-swatches"></div></div>
      <div class="cz-row"><span class="cz-l-font"></span><div class="cz-fonts"></div></div>
      <div class="cz-row"><span class="cz-l-name"></span><input class="cz-name" type="text"></div>
      <div class="cz-row"><span class="cz-l-corners"></span><div class="cz-corners"><button data-soft="1"></button><button data-soft="0"></button></div></div>
      <div class="cz-row"><span class="cz-l-theme"></span><div class="cz-corners cz-theme"><button data-th="light"></button><button data-th="dark"></button></div></div>
      <button class="cz-reset"></button>
    </div>`);
  document.body.append(btn, panel);

  const sw = panel.querySelector(".cz-swatches");
  sw.innerHTML = SWATCHES.map((s, i) => `<button class="cz-sw" data-i="${i}" style="background:${s[0]}"></button>`).join("") +
    `<input type="color" class="cz-color" value="${custom || "#c8ad96"}" title="custom">`;
  const colorInput = panel.querySelector(".cz-color");
  const fontsWrap = panel.querySelector(".cz-fonts");
  fontsWrap.innerHTML = FONTS.map((_, i) => `<button data-f="${i}"></button>`).join("");
  const nameInput = panel.querySelector(".cz-name"); nameInput.value = savedName;
  const cornerBtns = panel.querySelectorAll("[data-soft]");
  const themeBtns = panel.querySelectorAll("[data-th]");
  const fontBtns = fontsWrap.querySelectorAll("button");

  function paint() {
    sw.querySelectorAll(".cz-sw").forEach((b) => b.classList.toggle("active", !custom && +b.dataset.i === accent));
    fontBtns.forEach((b) => b.classList.toggle("active", +b.dataset.f === font));
    cornerBtns.forEach((b) => b.classList.toggle("active", (b.dataset.soft === "1") === soft));
    themeBtns.forEach((b) => b.classList.toggle("active", b.dataset.th === theme));
  }
  function labels() {
    const t = T[curLang()];
    btn.textContent = t.btn;
    panel.querySelector(".cz-title").textContent = t.title;
    panel.querySelector(".cz-hint").textContent = t.hint;
    panel.querySelector(".cz-l-color").textContent = t.color;
    panel.querySelector(".cz-l-font").textContent = t.font;
    panel.querySelector(".cz-l-name").textContent = t.name;
    panel.querySelector(".cz-l-corners").textContent = t.corners;
    nameInput.placeholder = t.namePh;
    cornerBtns[0].textContent = t.soft; cornerBtns[1].textContent = t.sharp;
    panel.querySelector(".cz-l-theme").textContent = t.theme;
    themeBtns[0].textContent = t.light; themeBtns[1].textContent = t.dark;
    panel.querySelector(".cz-reset").textContent = t.reset;
    fontBtns.forEach((b, i) => (b.textContent = t.fonts[i]));
    colorInput.title = t.custom;
  }
  labels(); paint();

  btn.onclick = () => panel.classList.toggle("open");
  sw.onclick = (e) => { const b = e.target.closest(".cz-sw"); if (!b) return; accent = +b.dataset.i; custom = ""; applySwatch(accent); localStorage.setItem(LS.accent, accent); localStorage.removeItem(LS.color); paint(); };
  colorInput.oninput = () => { custom = colorInput.value; setAccent(custom); localStorage.setItem(LS.color, custom); paint(); };
  fontsWrap.onclick = (e) => { const b = e.target.closest("button"); if (!b) return; font = +b.dataset.f; applyFont(font); localStorage.setItem(LS.font, font); paint(); };
  cornerBtns.forEach((b) => (b.onclick = () => { soft = b.dataset.soft === "1"; applyRadius(soft); localStorage.setItem(LS.radius, soft ? "soft" : "sharp"); paint(); }));
  themeBtns.forEach((b) => (b.onclick = () => { theme = b.dataset.th; applyTheme(theme); localStorage.setItem(LS.theme, theme); paint(); }));
  nameInput.addEventListener("input", () => { applyName(nameInput.value); localStorage.setItem(LS.name, nameInput.value); });
  panel.querySelector(".cz-reset").onclick = () => {
    accent = 0; custom = ""; font = 0; soft = true; theme = "light"; nameInput.value = ""; colorInput.value = "#c8ad96";
    applySwatch(0); applyFont(0); applyRadius(true); applyTheme("light");
    Object.values(LS).forEach((k) => localStorage.removeItem(k));
    window.dispatchEvent(new CustomEvent("cz-reset")); paint();
  };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") panel.classList.remove("open"); });
  document.addEventListener("click", (e) => {
    if (panel.classList.contains("open") && !panel.contains(e.target) && !btn.contains(e.target)) panel.classList.remove("open");
  });
  window.addEventListener("langchange", () => { labels(); if (nameInput.value) applyName(nameInput.value); });

  const bar = document.getElementById("scrollProgress");
  const onScroll = () => { const h = document.documentElement; bar.style.width = Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100) + "%"; };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
