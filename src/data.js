// ============================================================
// المصدر الوحيد للبيانات — يُستورد في الموقع + البوت + الـ Worker
// المحتوى ثلاثي اللغة: { ar, tr, en }
// ============================================================

export const business = {
  name: "المتجر",
  currency: "₺",
  whatsapp: "905000000000", // رقم المتجر التجريبي (placeholder لأزرار طلب المنتجات)
  ownerWhatsapp: "905555520223", // رقم عمر — تُرسل إليه طلبات الخدمات (السلة)
};

export const delivery = {
  areas: { ar: "منطقتك", tr: "bölgeniz", en: "your area" },
  cod: true,
  free: true,
};

export const CATEGORIES = {
  honey: { ar: "أعسال", tr: "Ballar", en: "Honey" },
  oil: { ar: "زيت زيتون", tr: "Zeytinyağı", en: "Olive oil" },
  mix: { ar: "خلطات", tr: "Karışımlar", en: "Blends" },
  home: { ar: "منتجات بيتوتية", tr: "Ev yapımı", en: "Homemade" },
};

export const products = [
  {
    id: "royal-honey-set", category: "honey", price: 2150, oldPrice: 3150, badge: true,
    img: "assets/products/royal-set.webp",
    name: { ar: "المجموعة الملكية من العسل", tr: "Kraliyet bal seti", en: "Royal honey set" },
    desc: {
      ar: "٤ أنواع عسل طبيعي ١٠٠٪ (٥٠٠غ لكل نوع) مع سمنة غنم بلدية هدية.",
      tr: "4 çeşit %100 doğal bal (her biri 500g), hediye koyun sadeyağıyla.",
      en: "Four 100% natural honeys (500g each) with farm sheep ghee as a gift.",
    },
  },
  {
    id: "royal-mix", category: "mix", price: 800, oldPrice: 1100, badge: true,
    img: "assets/products/royal-mix.webp",
    name: { ar: "الخلطة الملكية", tr: "Kraliyet karışımı", en: "Royal blend" },
    desc: {
      ar: "خلطة مركّزة (غذاء ملكات + سدر + جنسنغ + طلع نخيل) — طاقة ونشاط.",
      tr: "Yoğun karışım (arı sütü + sidr + ginseng + hurma poleni) — enerji.",
      en: "Concentrated blend (royal jelly + sidr + ginseng + date pollen) — energy.",
    },
  },
  {
    id: "olive-oil", category: "oil", price: 450,
    img: "assets/products/olive-oil.webp",
    name: { ar: "زيت زيتون بكر — نخب أول", tr: "Sızma zeytinyağı — birinci kalite", en: "Extra-virgin olive oil — top grade" },
    desc: {
      ar: "عصرة أولى على البارد. لونه ذهبي مخضرّ وطعمه بلدي صافي.",
      tr: "İlk soğuk sıkım. Altın-yeşil rengi ve saf köy tadı.",
      en: "First cold press. Golden-green color and a pure country taste.",
    },
  },
  {
    id: "honey-sidr", category: "honey", price: 950,
    img: "assets/products/honey-sidr.webp",
    name: { ar: "عسل سدر بقّي", tr: "Sidr balı", en: "Sidr honey" },
    desc: {
      ar: "سدر أصلي، كثيف وغني. من أفخر أنواع العسل.",
      tr: "Gerçek sidr, yoğun ve zengin. En değerli bal türlerinden.",
      en: "Authentic sidr, thick and rich. One of the finest honeys.",
    },
  },
  {
    id: "honey-nuts", category: "honey", price: 700,
    img: "assets/products/honey-nuts.webp",
    name: { ar: "عسل جبلي مع مكسرات", tr: "Kuruyemişli dağ balı", en: "Mountain honey with nuts" },
    desc: {
      ar: "عسل جبلي معبّأ مع لوز وجوز وفستق — لقمة كاملة بالطاقة.",
      tr: "Badem, ceviz ve fıstıkla dolu dağ balı — enerji dolu.",
      en: "Mountain honey packed with almonds, walnuts and pistachios.",
    },
  },
  {
    id: "honey-flowers", category: "honey", price: 500,
    img: "assets/products/honey-flowers.webp",
    name: { ar: "عسل مزيج الأزهار", tr: "Çiçek balı", en: "Wildflower honey" },
    desc: {
      ar: "من رحيق أزهار الموسم، طعمه متوازن وخفيف.",
      tr: "Mevsim çiçeklerinin nektarından, dengeli ve hafif.",
      en: "From seasonal flower nectar, balanced and light.",
    },
  },
  {
    id: "honey-citrus", category: "honey", price: 480,
    img: "assets/products/honey-citrus.webp",
    name: { ar: "عسل الحمضيات", tr: "Narenciye balı", en: "Citrus honey" },
    desc: {
      ar: "رائحة الليمون والبرتقال واضحة فيه، منعش ولذيذ.",
      tr: "Limon ve portakal kokusu belirgin, ferah ve lezzetli.",
      en: "Clear lemon and orange aroma, fresh and delicious.",
    },
  },
  {
    id: "sheep-ghee", category: "home", price: 600,
    img: "assets/products/sheep-ghee.webp",
    name: { ar: "سمنة غنم بلدية", tr: "Köy koyun sadeyağı", en: "Farm sheep ghee" },
    desc: {
      ar: "سمنة غنم أصلية، تعطي الأكل نكهة ما إلها مثيل.",
      tr: "Gerçek koyun sadeyağı, yemeklere eşsiz lezzet katar.",
      en: "Authentic sheep ghee, gives food an unmatched flavor.",
    },
  },
];

// خدمات التصميم — عدّل الأسعار من هون
export const serviceCurrency = "$";
export const services = [
  {
    price: 150, featured: true,
    name: { ar: "موقع متجر احترافي", tr: "Profesyonel mağaza sitesi", en: "Professional store website" },
    desc: { ar: "صفحة واحدة سريعة وأنيقة، متجاوبة مع الموبايل، باسمك وألوانك.", tr: "Tek sayfa, hızlı ve şık, mobil uyumlu, adınız ve renklerinizle.", en: "Fast, elegant one-page site, mobile-friendly, in your name and colors." },
  },
  {
    price: 100, featured: true,
    name: { ar: "مساعد ذكي (بوت)", tr: "Akıllı asistan (bot)", en: "Smart assistant (bot)" },
    desc: { ar: "يرد على زبائنك ٢٤/٧ بالعربي والتركي والإنجليزي: أسعار، توصيل، استفسارات.", tr: "Müşterilerinize 7/24 Arapça, Türkçe ve İngilizce yanıt verir.", en: "Replies to your customers 24/7 in Arabic, Turkish and English." },
  },
  {
    price: 6, unit: { ar: "/ صورة", tr: "/ görsel", en: "/ photo" },
    name: { ar: "صور منتجات احترافية", tr: "Profesyonel ürün görselleri", en: "Professional product photos" },
    desc: { ar: "صور عالية الجودة لمنتجاتك بالذكاء الاصطناعي — بدون جلسة تصوير.", tr: "Yapay zekâ ile yüksek kaliteli ürün görselleri — çekim gerekmez.", en: "High-quality AI product photos — no photoshoot needed." },
  },
  {
    price: 0,
    name: { ar: "أزرار طلب واتساب", tr: "WhatsApp sipariş butonları", en: "WhatsApp order buttons" },
    desc: { ar: "زر طلب مباشر لكل منتج يفتح واتساب برسالة جاهزة.", tr: "Her ürün için hazır mesajla WhatsApp açan sipariş butonu.", en: "A direct order button per product that opens WhatsApp with a ready message." },
  },
  {
    price: 60, unit: { ar: "/ سنة", tr: "/ yıl", en: "/ year" },
    name: { ar: "استضافة ونشر", tr: "Barındırma ve yayın", en: "Hosting & publishing" },
    desc: { ar: "رفع الموقع أونلاين برابط خاص + تجديد سنوي.", tr: "Siteyi özel bir bağlantıyla yayına alma + yıllık yenileme.", en: "Publishing the site with a dedicated link + yearly renewal." },
  },
  {
    price: 55,
    name: { ar: "تحسين الظهور بجوجل (SEO)", tr: "Google görünürlüğü (SEO)", en: "Google visibility (SEO)" },
    desc: { ar: "إعداد الموقع ليظهر بنتائج البحث ويُشارك بشكل جذّاب.", tr: "Sitenin arama sonuçlarında çıkması ve şık paylaşılması için ayar.", en: "Setting up the site to rank in search and share attractively." },
  },
];

// ---------- helpers ----------
export function t(field, lang) {
  return (field && (field[lang] || field.ar)) || "";
}

export function waLink(text) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function orderText(p, lang) {
  const name = t(p.name, lang);
  const price = p.price != null ? ` (${p.price} ${business.currency})` : "";
  const intro = { ar: "مرحبا، بدي اطلب:", tr: "Merhaba, sipariş vermek istiyorum:", en: "Hello, I'd like to order:" };
  return `${intro[lang] || intro.ar} ${name}${price}`;
}
