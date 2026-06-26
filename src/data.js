// ============================================================
// المصدر الوحيد للبيانات — يُستورد في الموقع + البوت + الـ Worker
// لا تضع هنا أي import للصور/DOM حتى يعمل في المتصفح وفي Worker.
// عدّل الأسعار من هون فقط.
// ============================================================

export const business = {
  name: "متجر الطبيعة",
  tagline: "منتجات غذائية طبيعية نختارها بعناية",
  about:
    "زيت زيتون وأعسال فاخرة ومنتجات طبيعية — منتقاة بعناية. توصيل لباب البيت مع الدفع عند الاستلام.",
  currency: "₺",
  whatsapp: "905000000000", // ← ضع رقم واتسابك هنا (بدون + وبدون مسافات)
  instagram: "#", // ← ضع رابط حسابك إن وجد
};

export const delivery = {
  areas: ["سوريا", "تركيا"],
  cod: true, // الدفع عند الاستلام
  free: true, // توصيل مجاني لباب البيت
  guarantee: "ضمان استرجاع إذا ما عجبك",
};

// price: رقم بالليرة | null = "تواصل للسعر"
// oldPrice: للخصم (اختياري)
export const products = [
  {
    id: "royal-honey-set",
    name: "المجموعة الملكية من العسل الطبيعي",
    desc: "٤ أنواع عسل طبيعي ١٠٠٪ (٥٠٠غ لكل نوع): حبة البركة، سدر بقّي، جبلي مع مكسرات، مزيج الأزهار — مع سمنة غنم بلدية هدية.",
    price: 2150,
    oldPrice: 3150,
    badge: "عرض",
    category: "أعسال",
    img: "assets/products/royal-set.webp",
  },
  {
    id: "royal-mix",
    name: "الخلطة الملكية",
    desc: "خلطة تركية مركّزة (غذاء ملكات + سدر + جنسنغ + طلع نخيل) — طاقة ونشاط، خيار مثالي للمتزوجين.",
    price: 800,
    oldPrice: 1100,
    badge: "عرض",
    category: "خلطات",
    img: "assets/products/royal-mix.webp",
  },
  {
    id: "olive-oil",
    name: "زيت زيتون بكر — نخب أول",
    desc: "عصرة أولى على البارد. لونه ذهبي مخضرّ وطعمه بلدي صافي.",
    price: 450,
    category: "زيت زيتون",
    img: "assets/products/olive-oil.webp",
  },
  {
    id: "honey-sidr",
    name: "عسل سدر بقّي",
    desc: "سدر أصلي، كثيف وغني. من أفخر أنواع العسل.",
    price: 950,
    category: "أعسال",
    img: "assets/products/honey-sidr.webp",
  },
  {
    id: "honey-nuts",
    name: "عسل جبلي مع مكسرات",
    desc: "عسل جبلي معبّأ مع لوز وجوز وفستق — لقمة كاملة بالطاقة.",
    price: 700,
    category: "أعسال",
    img: "assets/products/honey-nuts.webp",
  },
  {
    id: "honey-flowers",
    name: "عسل مزيج الأزهار",
    desc: "من رحيق أزهار الموسم, طعمه متوازن وخفيف.",
    price: 500,
    category: "أعسال",
    img: "assets/products/honey-flowers.webp",
  },
  {
    id: "honey-citrus",
    name: "عسل الحمضيات",
    desc: "رائحة الليمون والبرتقال واضحة فيه، منعش ولذيذ.",
    price: 480,
    category: "أعسال",
    img: "assets/products/honey-citrus.webp",
  },
  {
    id: "sheep-ghee",
    name: "سمنة غنم بلدية",
    desc: "سمنة غنم أصلية، تعطي الأكل نكهة ما إلها مثيل.",
    price: 600,
    category: "منتجات بيتوتية",
    img: "assets/products/sheep-ghee.webp",
  },
];

// روابط مساعدة (تعمل في المتصفح + النصوص)
export function priceLabel(p) {
  if (p.price == null) return "تواصل للسعر";
  return `${p.price} ${business.currency}`;
}

export function waLink(text) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function orderText(p) {
  const price = p.price != null ? ` (${p.price} ${business.currency})` : "";
  return `مرحبا، بدي اطلب: ${p.name}${price}`;
}
