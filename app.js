import { UI, LANGS, detectLang, setLang } from "./src/i18n.js";
import { business, products, services, serviceCurrency, CATEGORIES, t, waLink, orderText } from "./src/data.js";

let lang = detectLang();

/* ---------- SVG icons ---------- */
const icon = {
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 4.5-9 16-9 0 9-5 16-9 16z"/><path d="M11 20c0-5 2-9 8-12"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h13v4"/><rect x="3" y="7" width="18" height="12" rx="2"/><circle cx="16.5" cy="13" r="1.3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  jar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8M9 3v2.5C9 6 8.5 6.5 8 7a4 4 0 0 0-1 2.6V18a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9.6A4 4 0 0 0 16 7c-.5-.5-1-1-1-1.5V3"/><path d="M7 12h10"/></svg>',
  bottle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4v3M10 2v3M10 5c0 1.5-2 2.5-2 5v9a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-9c0-2.5-2-3.5-2-5"/><path d="M8 13h8"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/></svg>',
  butter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l10-4 6 3-10 4z"/><path d="M4 10v5l10 4 6-3v-6"/><path d="M14 13v6"/></svg>',
};
const whyIcons = [icon.leaf, icon.truck, icon.wallet, icon.shield];
const catIcon = { honey: icon.jar, oil: icon.bottle, mix: icon.spark, home: icon.butter };

const $ = (id) => document.getElementById(id);
const resolve = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
const placeholder = (svg) => `<div class="ph">${svg}</div>`;

/* ---------- media frames ---------- */
function loadFrame(el, fallbackSvg) {
  const img = new Image();
  img.onload = () => { img.alt = el.dataset.alt || ""; el.innerHTML = ""; el.appendChild(img); };
  img.onerror = () => { el.innerHTML = placeholder(fallbackSvg); };
  img.src = el.dataset.img;
}

/* ---------- renderers (lang-aware) ---------- */
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

function priceHTML(p) {
  if (p.price == null) return `<span class="price__ask">${UI[lang].products.ask}</span>`;
  const was = p.oldPrice ? `<span class="price__was">${p.oldPrice} ${business.currency}</span>` : "";
  return `<span class="price"><span class="price__now">${p.price} ${business.currency}</span>${was}</span>`;
}

function productCard(p) {
  const badge = p.badge ? `<span class="card__badge">${UI[lang].featured.eyebrow}</span>` : "";
  return `
    <article class="card" data-cat="${p.category}">
      <div class="card__img">
        <span class="card__tag">${t(CATEGORIES[p.category], lang)}</span>${badge}
        ${placeholder(catIcon[p.category] || icon.jar)}
      </div>
      <div class="card__body">
        <h3 class="card__name">${t(p.name, lang)}</h3>
        <p class="card__desc">${t(p.desc, lang)}</p>
        <div class="card__foot">${priceHTML(p)}</div>
        <a class="btn btn--wa" href="${waLink(orderText(p, lang))}" target="_blank" rel="noopener">${UI[lang].products.order}</a>
      </div>
    </article>`;
}

function renderProducts() {
  const grid = $("productsGrid");
  grid.innerHTML = products.map(productCard).join("");
  grid.querySelectorAll(".card").forEach((card, i) => {
    const p = products[i];
    const box = card.querySelector(".card__img");
    const ph = box.querySelector(".ph");
    const img = new Image();
    img.onload = () => { img.alt = t(p.name, lang); img.loading = "lazy"; ph.replaceWith(img); };
    img.src = p.img;
  });

  const cats = [...new Set(products.map((p) => p.category))];
  const wrap = $("filters");
  wrap.innerHTML =
    `<button class="filter active" data-f="all">${UI[lang].products.all}</button>` +
    cats.map((c) => `<button class="filter" data-f="${c}">${t(CATEGORIES[c], lang)}</button>`).join("");
  wrap.onclick = (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    wrap.querySelectorAll(".filter").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.f;
    grid.querySelectorAll(".card").forEach((card) => {
      card.style.display = f === "all" || card.dataset.cat === f ? "" : "none";
    });
  };
}

function renderList(id, items, tag = "li") {
  $(id).innerHTML = items.map((s) => `<${tag}><h3>${s[0]}</h3><p>${s[1]}</p></${tag}>`).join("");
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

function renderServices() {
  $("servicesGrid").innerHTML = services.map(serviceCard).join("");
}

function renderLinks() {
  const hello = waLink(UI[lang].chat.hello);
  ["ctaHeader", "ctaHeroWa", "waFloat"].forEach((id) => { const el = $(id); if (el) el.href = hello; });
  const offer = products.find((p) => p.id === "royal-honey-set") || products[0];
  $("ctaOffer").href = waLink(orderText(offer, lang));
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
    [".feature-band__media", 0], [".feature-band__copy", 120], ["#steps li", 110],
    ["#reviewsGrid .review", 90], ["#processSteps li", 110], ["#servicesGrid .svc-card", 80],
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

/* ---------- init ---------- */
function init() {
  buildSwitcher();
  applyLang(lang);

  document.querySelectorAll(".hero__frame").forEach((el) => loadFrame(el, icon.bottle));
  document.querySelectorAll(".feature-band__media").forEach((el) => loadFrame(el, icon.jar));

  const navToggle = $("navToggle"), nav = $("primaryNav");
  if (navToggle && nav) {
    const setNav = (open) => { nav.classList.toggle("open", open); navToggle.setAttribute("aria-expanded", open ? "true" : "false"); };
    navToggle.addEventListener("click", () => setNav(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setNav(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setNav(false); });
  }

  const header = $("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

init();
