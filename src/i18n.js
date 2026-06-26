// ============================================================
// نظام الترجمة (٣ لغات) — عربي / تركي / إنجليزي
// النصوص الثابتة هنا. محتوى المنتجات/الخدمات في data.js.
// ============================================================

export const LANGS = ["ar", "tr", "en"];

export const UI = {
  ar: {
    dir: "rtl",
    ticker: ["🚚 توصيل مجاني لباب البيت", "💵 الدفع عند الاستلام", "🌿 منتجات طبيعية ١٠٠٪", "🎁 عروض خاصة", "✅ ضمان الجودة"],
    nav: { store: "المتجر", why: "لماذا نحن", how: "كيف تطلب", services: "الخدمات والأسعار" },
    orderNow: "اطلب الآن",
    hero: {
      eyebrow: "طبيعية ١٠٠٪ — مختارة بعناية",
      titleA: "من الأرض إلى", titleB: "باب بيتك",
      lead: "زيت زيتون بكر، أعسال جبلية، ومنتجات طبيعية أصيلة. ننتقيها بأنفسنا ونوصّلها لباب بيتك.",
      browse: "تصفّح المنتجات", contact: "تواصل واتساب",
      stats: [["١٠٠٪", "طبيعي"], ["توصيل", "سريع وآمن"], ["دفع", "عند الاستلام"]],
      badge: "دفع عند الاستلام",
    },
    why: { eyebrow: "لماذا نحن", title: "وعدنا في كل منتج", cards: [
      ["طبيعي بلا إضافات", "منتجات نقية كما هي من مصدرها، بلا مواد حافظة."],
      ["توصيل لباب البيت", "نوصّل طلبك بسرعة وعناية."],
      ["دفع عند الاستلام", "تدفع بعد ما توصلك الطلبية وتطمئن عليها."],
      ["ضمان الجودة", "إذا ما عجبك المنتج، حقك محفوظ وبيرجع."],
    ]},
    products: { eyebrow: "متجرنا", title: "منتجاتنا المختارة", all: "الكل", order: "اطلب عبر واتساب", ask: "تواصل للسعر" },
    featured: { eyebrow: "عرض خاص", title: "مجموعة مختارة بسعر مميّز", desc: "تشكيلة من أفضل منتجاتنا الطبيعية، مع هدية مع كل طلب.", cta: "اطلب الآن" },
    how: { eyebrow: "سهلة وسريعة", title: "كيف تطلب؟", steps: [
      ["اختر منتجك", "تصفّح المتجر واختر اللي بدك ياه."],
      ["اطلب عبر واتساب", "اضغط زر الطلب وأكّد العنوان والكمية."],
      ["استلم وادفع", "توصلك الطلبية لباب البيت وتدفع عند الاستلام."],
    ]},
    reviews: { eyebrow: "ثقة زبائننا", title: "شو بيقولوا عنا", items: [
      ["المنتجات طبيعية وطعمتها أصلية، والتوصيل وصلني بسرعة.", "أبو محمد"],
      ["جودة ممتازة وتعامل محترم، رح أطلب كمان.", "ريم"],
      ["الدفع عند الاستلام أراحني، ووصلت الطلبية مغلّفة منيح.", "خالد"],
    ]},
    process: { eyebrow: "آلية العمل", title: "كيف نجهّز موقعك؟", note: "من فكرة إلى موقع جاهز باسمك خلال أيام.", steps: [
      ["ترسل لنا التفاصيل", "شعارك، منتجاتك، أسعارك، وصورك (أو نجهّزها لك)."],
      ["نصمّم موقعك", "باسمك وألوانك، متجاوب مع الموبايل."],
      ["نضيف المميزات", "بوت ذكي، أزرار طلب واتساب، وأي شي بدك ياه."],
      ["نرفعه أونلاين", "يصير جاهز برابط خاص فيك — وتبدأ تستقبل طلبات."],
    ]},
    services: { eyebrow: "الخدمات والأسعار", title: "شو بنقدّملك؟", note: "اختر اللي بناسبك — كل خدمة بسعرها.", free: "مشمول مجاناً", featured: "الأكثر طلباً", disclaimer: "* الأسعار تقريبية وقابلة للتعديل حسب حجم متجرك وطلبك." },
    footer: { about: "نبذة قصيرة عن متجرك تكتب هنا.", links: "روابط", contact: "تواصل", phone: "📞 رقم تواصلك هنا", socials: "📷 حساباتك هنا", rights: "جميع الحقوق محفوظة" },
    ph: { logo: "شعارك هنا", shopName: "اسم متجرك هنا", shopNameShort: "اسم متجرك" },
    chat: { title: "مساعد المتجر", greeting: "هلا وسهلا 👋 اسألني عن المنتجات، الأسعار، أو التوصيل.", placeholder: "اكتب سؤالك...", hello: "مرحبا، حابب استفسر عن منتجاتكم" },
  },

  tr: {
    dir: "ltr",
    ticker: ["🚚 Kapıya ücretsiz teslimat", "💵 Kapıda ödeme", "🌿 %100 doğal ürünler", "🎁 Özel teklifler", "✅ Kalite garantisi"],
    nav: { store: "Mağaza", why: "Neden biz", how: "Nasıl sipariş", services: "Hizmetler & Fiyatlar" },
    orderNow: "Sipariş ver",
    hero: {
      eyebrow: "%100 doğal — özenle seçilmiş",
      titleA: "Topraktan", titleB: "kapınıza",
      lead: "Sızma zeytinyağı, dağ balları ve özgün doğal ürünler. Kendimiz seçer, kapınıza kadar getiririz.",
      browse: "Ürünleri gör", contact: "WhatsApp",
      stats: [["%100", "doğal"], ["Teslimat", "hızlı & güvenli"], ["Ödeme", "kapıda"]],
      badge: "Kapıda ödeme",
    },
    why: { eyebrow: "Neden biz", title: "Her üründe sözümüz", cards: [
      ["Katkısız doğal", "Kaynağından geldiği gibi saf, koruyucu maddesiz."],
      ["Kapıya teslimat", "Siparişinizi hızlı ve özenle ulaştırırız."],
      ["Kapıda ödeme", "Ürün elinize ulaşınca ödersiniz."],
      ["Kalite garantisi", "Beğenmezseniz iadesi mümkün."],
    ]},
    products: { eyebrow: "Mağazamız", title: "Seçkin ürünlerimiz", all: "Tümü", order: "WhatsApp ile sipariş", ask: "Fiyat için iletişim" },
    featured: { eyebrow: "Özel teklif", title: "Özel fiyatlı seçki", desc: "En iyi doğal ürünlerimizden bir seçki, her siparişte hediyeyle.", cta: "Sipariş ver" },
    how: { eyebrow: "Kolay ve hızlı", title: "Nasıl sipariş verilir?", steps: [
      ["Ürününü seç", "Mağazayı gez ve istediğini seç."],
      ["WhatsApp ile sipariş", "Sipariş butonuna bas, adres ve adedi onayla."],
      ["Teslim al ve öde", "Sipariş kapına gelir, kapıda ödersin."],
    ]},
    reviews: { eyebrow: "Müşteri güveni", title: "Hakkımızda ne diyorlar", items: [
      ["Ürünler doğal ve tadı gerçek, teslimat çok hızlıydı.", "Ahmet"],
      ["Mükemmel kalite ve nazik ilgi, tekrar sipariş vereceğim.", "Reem"],
      ["Kapıda ödeme çok rahattı, paket özenliydi.", "Halit"],
    ]},
    process: { eyebrow: "Çalışma şekli", title: "Siteni nasıl hazırlarız?", note: "Fikirden adınıza hazır siteye birkaç günde.", steps: [
      ["Detayları gönder", "Logon, ürünlerin, fiyatların ve görseller (ya da biz hazırlarız)."],
      ["Siteni tasarlarız", "Adın ve renklerinle, mobil uyumlu."],
      ["Özellikleri ekleriz", "Akıllı bot, WhatsApp sipariş butonları ve istediğin her şey."],
      ["Yayına alırız", "Sana özel bir bağlantıyla hazır — siparişler başlar."],
    ]},
    services: { eyebrow: "Hizmetler & Fiyatlar", title: "Size ne sunuyoruz?", note: "Size uygun olanı seçin — her hizmet kendi fiyatıyla.", free: "Ücretsiz dahil", featured: "En çok tercih edilen", disclaimer: "* Fiyatlar tahminidir ve mağaza büyüklüğüne göre değişebilir." },
    footer: { about: "Mağazanız hakkında kısa bir açıklama buraya.", links: "Bağlantılar", contact: "İletişim", phone: "📞 İletişim numaranız", socials: "📷 Hesaplarınız", rights: "Tüm hakları saklıdır" },
    ph: { logo: "Logonuz burada", shopName: "Mağaza adınız", shopNameShort: "Mağaza adınız" },
    chat: { title: "Mağaza asistanı", greeting: "Merhaba 👋 Ürünler, fiyatlar veya teslimat hakkında sorun.", placeholder: "Sorunuzu yazın...", hello: "Merhaba, ürünleriniz hakkında bilgi almak istiyorum" },
  },

  en: {
    dir: "ltr",
    ticker: ["🚚 Free home delivery", "💵 Cash on delivery", "🌿 100% natural products", "🎁 Special offers", "✅ Quality guarantee"],
    nav: { store: "Shop", why: "Why us", how: "How to order", services: "Services & Pricing" },
    orderNow: "Order now",
    hero: {
      eyebrow: "100% natural — carefully selected",
      titleA: "From the land", titleB: "to your door",
      lead: "Extra-virgin olive oil, mountain honey and authentic natural products. Hand-picked and delivered to your door.",
      browse: "Browse products", contact: "WhatsApp",
      stats: [["100%", "natural"], ["Delivery", "fast & safe"], ["Payment", "on delivery"]],
      badge: "Cash on delivery",
    },
    why: { eyebrow: "Why us", title: "Our promise in every product", cards: [
      ["Natural, no additives", "Pure as it comes from its source, no preservatives."],
      ["Home delivery", "We deliver your order quickly and with care."],
      ["Cash on delivery", "Pay after your order arrives and you're satisfied."],
      ["Quality guarantee", "If you don't like it, you can return it."],
    ]},
    products: { eyebrow: "Our shop", title: "Our selected products", all: "All", order: "Order on WhatsApp", ask: "Contact for price" },
    featured: { eyebrow: "Special offer", title: "A curated set at a special price", desc: "A selection of our finest natural products, with a gift on every order.", cta: "Order now" },
    how: { eyebrow: "Easy and fast", title: "How to order?", steps: [
      ["Pick your product", "Browse the shop and choose what you want."],
      ["Order on WhatsApp", "Tap the order button and confirm address and quantity."],
      ["Receive and pay", "Your order arrives at your door, pay on delivery."],
    ]},
    reviews: { eyebrow: "Customer trust", title: "What they say about us", items: [
      ["The products are natural and taste authentic, delivery was fast.", "Ahmad"],
      ["Excellent quality and kind service, I'll order again.", "Reem"],
      ["Cash on delivery was convenient, the package was well wrapped.", "Khaled"],
    ]},
    process: { eyebrow: "How we work", title: "How we build your site", note: "From idea to a ready site in your name within days.", steps: [
      ["Send us the details", "Your logo, products, prices and photos (or we prepare them)."],
      ["We design your site", "In your name and colors, mobile-friendly."],
      ["We add features", "Smart bot, WhatsApp order buttons, and anything you want."],
      ["We publish it online", "Ready with your own link — and orders start coming in."],
    ]},
    services: { eyebrow: "Services & Pricing", title: "What we offer", note: "Pick what suits you — each service with its price.", free: "Included free", featured: "Most popular", disclaimer: "* Prices are approximate and adjustable based on your shop's size and needs." },
    footer: { about: "A short description of your shop goes here.", links: "Links", contact: "Contact", phone: "📞 Your contact number", socials: "📷 Your accounts", rights: "All rights reserved" },
    ph: { logo: "Your logo here", shopName: "Your shop name", shopNameShort: "Your shop" },
    chat: { title: "Shop assistant", greeting: "Hi 👋 Ask me about products, prices, or delivery.", placeholder: "Type your question...", hello: "Hello, I'd like to ask about your products" },
  },
};

export function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved && LANGS.includes(saved)) return saved;
  const n = (navigator.language || "ar").slice(0, 2).toLowerCase();
  return LANGS.includes(n) ? n : "ar";
}

export function setLang(lang) {
  localStorage.setItem("lang", lang);
}
