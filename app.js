import { business, products, services, serviceCurrency, waLink, orderText } from "./src/data.js";

/* ---------- SVG icons (stroke) ---------- */
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

const catIcon = {
  "أعسال": icon.jar,
  "زيت زيتون": icon.bottle,
  "خلطات": icon.spark,
  "منتجات بيتوتية": icon.butter,
};

function placeholder(svg) {
  return `<div class="ph">${svg}</div>`;
}

/* ---------- media frames (hero, feature band) ---------- */
function loadFrame(el, fallbackSvg) {
  const src = el.dataset.img;
  const alt = el.dataset.alt || "";
  const img = new Image();
  img.onload = () => { img.alt = alt; el.innerHTML = ""; el.appendChild(img); };
  img.onerror = () => { el.innerHTML = placeholder(fallbackSvg); };
  img.src = src;
}

/* ---------- WHY ---------- */
const whyItems = [
  { ic: icon.leaf, t: "طبيعي بلا إضافات", d: "منتجات نقية كما هي من مصدرها، بلا مواد حافظة." },
  { ic: icon.truck, t: "توصيل لباب البيت", d: "نوصّل طلبك داخل سوريا وتركيا بسرعة وعناية." },
  { ic: icon.wallet, t: "دفع عند الاستلام", d: "تدفع بعد ما توصلك الطلبية وتطمئن عليها." },
  { ic: icon.shield, t: "ضمان الجودة", d: "إذا ما عجبك المنتج، حقك محفوظ وبيرجع." },
];

function whyCard(w) {
  return `<div class="why__card"><div class="why__icon">${w.ic}</div><h3>${w.t}</h3><p>${w.d}</p></div>`;
}

/* ---------- PRODUCTS ---------- */
function priceHTML(p) {
  if (p.price == null) return `<span class="price__ask">تواصل للسعر</span>`;
  const was = p.oldPrice ? `<span class="price__was">${p.oldPrice} ${business.currency}</span>` : "";
  return `<span class="price"><span class="price__now">${p.price} ${business.currency}</span>${was}</span>`;
}

function productCard(p) {
  const badge = p.badge ? `<span class="card__badge">${p.badge}</span>` : "";
  return `
    <article class="card" data-cat="${p.category}">
      <div class="card__img">
        <span class="card__tag">${p.category}</span>${badge}
        ${placeholder(catIcon[p.category] || icon.jar)}
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.name}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__foot">${priceHTML(p)}</div>
        <a class="btn btn--wa" href="${waLink(orderText(p))}" target="_blank" rel="noopener">اطلب عبر واتساب</a>
      </div>
    </article>`;
}

function loadCardImage(card, p) {
  const box = card.querySelector(".card__img");
  const ph = box.querySelector(".ph");
  const img = new Image();
  img.onload = () => { img.alt = p.name; img.loading = "lazy"; ph.replaceWith(img); };
  img.src = p.img; // إذا ما في صورة بيضل الـ placeholder
}

function buildFilters() {
  const cats = ["الكل", ...new Set(products.map((p) => p.category))];
  const wrap = document.getElementById("filters");
  wrap.innerHTML = cats
    .map((c, i) => `<button class="filter${i === 0 ? " active" : ""}" data-f="${c}">${c}</button>`)
    .join("");
  wrap.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    wrap.querySelectorAll(".filter").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.f;
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = f === "الكل" || card.dataset.cat === f ? "" : "none";
    });
  });
}

/* ---------- STEPS ---------- */
const steps = [
  { t: "اختر منتجك", d: "تصفّح المتجر واختر اللي بدك ياه." },
  { t: "اطلب عبر واتساب", d: "اضغط زر الطلب وأكّد العنوان والكمية." },
  { t: "استلم وادفع", d: "توصلك الطلبية لباب البيت وتدفع عند الاستلام." },
];

/* ---------- REVIEWS (نماذج مؤقتة) ---------- */
const reviews = [
  { n: "أبو محمد", w: "تركيا", s: 5, t: "العسل طبيعي وطعمته أصلية، والتوصيل وصلني بسرعة. تعامل محترم." },
  { n: "ريم", w: "سوريا", s: 5, t: "زيت الزيتون من أحسن اللي جربته، رائحته وطعمته بلدية ١٠٠٪." },
  { n: "خالد", w: "حماة", s: 5, t: "الدفع عند الاستلام أراحني، والمنتجات وصلت مغلّفة منيح." },
];
function reviewCard(r) {
  return `
    <div class="review">
      <div class="review__stars">${"★".repeat(r.s)}</div>
      <p class="review__text">"${r.t}"</p>
      <div class="review__who"><span class="review__avatar">${r.n.charAt(0)}</span>${r.n} — ${r.w}</div>
    </div>`;
}

/* ---------- آلية العمل (للتاجر) ---------- */
const processSteps = [
  { t: "ترسل لنا التفاصيل", d: "شعارك، منتجاتك، أسعارك، وصورك (أو نجهّزها لك)." },
  { t: "نصمّم موقعك", d: "باسمك وألوانك، متجاوب مع الموبايل." },
  { t: "نضيف المميزات", d: "بوت ذكي، أزرار طلب واتساب، وأي شي بدك ياه." },
  { t: "نرفعه أونلاين", d: "يصير جاهز برابط خاص فيك — وتبدأ تستقبل طلبات." },
];

/* ---------- الخدمات والأسعار ---------- */
function priceTag(s) {
  if (s.price === 0) return `<span class="svc-price svc-price--free">مشمول مجاناً</span>`;
  return `<span class="svc-price">${serviceCurrency}${s.price}<small>${s.unit || ""}</small></span>`;
}
function serviceCard(s) {
  return `
    <article class="svc-card${s.featured ? " svc-card--featured" : ""}">
      ${s.featured ? '<span class="svc-badge">الأكثر طلباً</span>' : ""}
      <h3 class="svc-name">${s.name}</h3>
      <p class="svc-desc">${s.desc}</p>
      ${priceTag(s)}
    </article>`;
}

/* ---------- INIT ---------- */
function init() {
  document.getElementById("processSteps").innerHTML = processSteps
    .map((s) => `<li><h3>${s.t}</h3><p>${s.d}</p></li>`)
    .join("");
  document.getElementById("servicesGrid").innerHTML = services.map(serviceCard).join("");
  document.getElementById("whyGrid").innerHTML = whyItems.map(whyCard).join("");
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = products.map(productCard).join("");
  grid.querySelectorAll(".card").forEach((card, i) => loadCardImage(card, products[i]));
  buildFilters();
  document.getElementById("steps").innerHTML = steps
    .map((s) => `<li><h3>${s.t}</h3><p>${s.d}</p></li>`)
    .join("");
  document.getElementById("reviewsGrid").innerHTML = reviews.map(reviewCard).join("");

  document.querySelectorAll(".hero__frame").forEach((el) => loadFrame(el, icon.bottle));
  document.querySelectorAll(".feature-band__media").forEach((el) => loadFrame(el, icon.jar));

  const hello = waLink("مرحبا، حابب استفسر عن منتجاتكم 🙂");
  ["ctaHeader", "ctaHeroWa", "waFloat", "waFooter"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = hello;
  });
  const offer = products.find((p) => p.id === "royal-honey-set");
  document.getElementById("ctaOffer").href = waLink(orderText(offer));

  document.querySelector(".copyright").textContent =
    `© ${new Date().getFullYear()} متجر الطبيعة — جميع الحقوق محفوظة`;

  // header scroll state
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  if (navToggle && nav) {
    const setNav = (open) => {
      nav.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    navToggle.addEventListener("click", () => setNav(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setNav(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setNav(false); });
  }

  initReveal();
}

// ظهور تدريجي للعناصر مع السكرول (مع stagger للمجموعات)
function initReveal() {
  const groups = [
    ["#why .why__card", 90],
    [".section-head", 0],
    ["#productsGrid .card", 70],
    [".feature-band__media", 0],
    [".feature-band__copy", 120],
    ["#steps li", 110],
    ["#reviewsGrid .review", 90],
    ["#processSteps li", 110],
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

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((el) => io.observe(el));
}

init();
