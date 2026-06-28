import { UI, LANGS, detectLang, setLang } from "./src/i18n.js";
import { business, services, serviceCurrency, t, waLink } from "./src/data.js";

let lang = detectLang();

/* ---------- SVG icons ---------- */
const icon = {
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M8 14h5"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h13v4"/><rect x="3" y="7" width="18" height="12" rx="2"/><circle cx="16.5" cy="13" r="1.3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V7m0 0L8.5 10.5M12 7l3.5 3.5"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
};
const whyIcons = [icon.leaf, icon.truck, icon.wallet, icon.shield];

const $ = (id) => document.getElementById(id);
const resolve = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
const elFrom = (h) => { const tp = document.createElement("template"); tp.innerHTML = h.trim(); return tp.content.firstChild; };

/* ---------- uploadable image zone (client fills) ---------- */
function makeUploadable(el, hint) {
  el.classList.add("uploadable");
  el.innerHTML = `<input type="file" accept="image/*" hidden><span class="up-hint">${icon.upload}<span class="up-text">${hint}</span></span>`;
  const input = el.querySelector("input");
  el.addEventListener("click", () => input.click());
  input.addEventListener("change", () => {
    const f = input.files && input.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { el.style.backgroundImage = `url('${r.result}')`; el.classList.add("has-img"); };
    r.readAsDataURL(f);
  });
}

/* ---------- static text ---------- */
function renderStatic() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = resolve(UI[lang], el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });
}

function renderHeroStats() {
  $("heroStats").innerHTML = UI[lang].hero.stats
    .map(([n, l]) => `<li><strong>${n}</strong><span>${l}</span></li>`)
    .join("");
}

function renderWhy() {
  $("whyGrid").innerHTML = UI[lang].why.cards
    .map((c, i) => `<div class="why__card"><div class="why__icon">${whyIcons[i]}</div><h3>${c[0]}</h3><p>${c[1]}</p></div>`)
    .join("");
}

/* ---------- interactive products (client fills photo + price) ---------- */
function editCard() {
  return `
    <article class="card card--edit">
      <div class="card__img" data-up></div>
      <div class="card__body">
        <input class="edit-name" placeholder="${UI[lang].products.namePh}" />
        <div class="edit-price">
          <input class="edit-price-input" inputmode="numeric" placeholder="${UI[lang].products.pricePh}" />
          <span class="cur">${business.currency}</span>
        </div>
        <button class="btn btn--wa edit-order" type="button">${UI[lang].products.order}</button>
      </div>
    </article>`;
}

function wireCard(card) {
  makeUploadable(card.querySelector("[data-up]"), UI[lang].products.uploadHint);
  card.querySelector(".edit-order").addEventListener("click", () => {
    const name = card.querySelector(".edit-name").value.trim() || UI[lang].products.namePh;
    const price = card.querySelector(".edit-price-input").value.trim();
    const msg = `${UI[lang].chat.hello}: ${name}${price ? ` ${price} ${business.currency}` : ""}`;
    window.open(waLink(msg), "_blank");
  });
}

function renderProducts() {
  const grid = $("productsGrid");
  grid.innerHTML =
    Array.from({ length: 3 }, editCard).join("") +
    `<button class="add-card" id="addCard" type="button"><span class="plus">+</span><span>${UI[lang].products.addProduct}</span></button>`;
  grid.querySelectorAll(".card--edit").forEach(wireCard);
  $("addCard").addEventListener("click", () => {
    const node = elFrom(editCard());
    grid.insertBefore(node, $("addCard"));
    wireCard(node);
  });
}

function renderReviews() {
  $("reviewsGrid").innerHTML = UI[lang].reviews.items
    .map((r) => `
      <div class="review">
        <div class="review__stars">★★★★★</div>
        <p class="review__text">"${r[0]}"</p>
        <div class="review__who"><span class="review__avatar">${r[1].charAt(0)}</span>${r[1]}</div>
      </div>`)
    .join("");
}

function serviceCard(s) {
  const price = s.price === 0
    ? `<span class="svc-price svc-price--free">${UI[lang].services.free}</span>`
    : `<span class="svc-price">${serviceCurrency}${s.price}<small>${s.unit ? t(s.unit, lang) : ""}</small></span>`;
  return `
    <article class="svc-card${s.featured ? " svc-card--featured" : ""}">
      ${s.featured ? `<span class="svc-badge">${UI[lang].services.featured}</span>` : ""}
      <h3 class="svc-name">${t(s.name, lang)}</h3>
      <p class="svc-desc">${t(s.desc, lang)}</p>
      ${price}
    </article>`;
}
function renderServices() { $("servicesGrid").innerHTML = services.map(serviceCard).join(""); }

function renderList(id, items) {
  $(id).innerHTML = items.map((s) => `<li><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join("");
}

function renderLinks() {
  const hello = waLink(UI[lang].chat.hello);
  ["ctaHeader", "ctaHeroWa", "waFloat"].forEach((id) => { const el = $(id); if (el) el.href = hello; });
  $("copyright").textContent = `© ${new Date().getFullYear()} ${UI[lang].ph.shopNameShort} — ${UI[lang].footer.rights}`;
  $("ticker").innerHTML = `<div class="ticker__track">${[...UI[lang].ticker, ...UI[lang].ticker].map((x) => `<span>${x}</span><span>•</span>`).join("")}</div>`;
}

/* ---------- language ---------- */
function applyLang(newLang) {
  lang = newLang;
  setLang(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = UI[lang].dir;
  renderStatic();
  renderHeroStats();
  renderWhy();
  renderProducts();
  renderReviews();
  renderServices();
  renderList("steps", UI[lang].how.steps);
  renderList("processSteps", UI[lang].process.steps);
  renderLinks();
  const h = document.querySelector("#heroFrame .up-text");
  if (h) h.textContent = UI[lang].products.heroUpload;
  document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  initReveal();
}

function buildSwitcher() {
  const wrap = $("langSwitch");
  if (!wrap) return;
  wrap.innerHTML = LANGS.map((l) => `<button class="lang-btn" data-lang="${l}">${l.toUpperCase()}</button>`).join("");
  wrap.onclick = (e) => { const b = e.target.closest(".lang-btn"); if (b) applyLang(b.dataset.lang); };
}

/* ---------- scroll reveal ---------- */
let io;
function initReveal() {
  const groups = [
    ["#whyGrid .why__card", 90], [".section-head", 0], ["#productsGrid .card", 70],
    ["#steps li", 110], ["#reviewsGrid .review", 90], ["#processSteps li", 110],
    ["#servicesGrid .svc-card", 80],
  ];
  const items = [];
  groups.forEach(([sel, step]) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add("reveal");
      if (step) el.style.transitionDelay = `${(i % 4) * step}ms`;
      items.push(el);
    });
  });
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("in")); return; }
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  items.forEach((el) => io.observe(el));
}

/* ---------- 3D tilt on cards (fine pointer only) ---------- */
function attachTilt() {
  if (!window.matchMedia("(pointer:fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const sel = ".card, .why__card, .svc-card";
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest(sel);
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-6px)`;
  });
  document.addEventListener("pointerout", (e) => {
    const card = e.target.closest(sel);
    if (card) card.style.transform = "";
  });
}

/* ---------- init ---------- */
function init() {
  buildSwitcher();
  const hero = $("heroFrame");
  if (hero) makeUploadable(hero, UI[lang].products.heroUpload);
  applyLang(lang);

  const navToggle = $("navToggle"), nav = $("primaryNav");
  if (navToggle && nav) {
    const setNav = (open) => { nav.classList.toggle("open", open); navToggle.setAttribute("aria-expanded", open ? "true" : "false"); };
    navToggle.addEventListener("click", () => setNav(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setNav(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setNav(false); });
  }

  window.addEventListener("cz-reset", renderStatic);
  attachTilt();

  const header = $("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

init();
