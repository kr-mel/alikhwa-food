// ============================================================
// نظام الترجمة (٣ لغات) — عربي / تركي / إنجليزي
// النصوص الثابتة هنا. محتوى المنتجات/الخدمات في data.js.
// ============================================================

export const LANGS = ["ar", "tr", "en"];

export const UI = {
  ar: {
    dir: "rtl",
    ticker: ["🚚 توصيل لباب البيت", "💬 طلب عبر واتساب", "💵 دفع عند الاستلام", "🌐 ثلاث لغات", "⭐ تجربة تسوّق سهلة"],
    nav: { store: "المتجر", why: "لماذا نحن", how: "كيف تطلب", services: "الخدمات والأسعار" },
    orderNow: "اطلب الآن",
    hero: {
      eyebrow: "متجرك الإلكتروني الأنيق",
      titleA: "متجرك أونلاين", titleB: "بأناقة وسهولة",
      lead: "اعرض منتجاتك بصور جميلة، واستقبل طلبات زبائنك بضغطة واحدة عبر واتساب — بثلاث لغات.",
      browse: "تصفّح المنتجات", contact: "تواصل واتساب",
      stats: [["طلب", "سهل وسريع"], ["توصيل", "لباب البيت"], ["دفع", "عند الاستلام"]],
      badge: "دفع عند الاستلام",
    },
    why: { eyebrow: "لماذا نحن", title: "كل ما يحتاجه متجرك", cards: [
      ["عرض جذّاب", "منتجاتك بصور وأسعار واضحة تجذب الزبون وتسهّل الطلب."],
      ["توصيل لباب البيت", "نوصّل طلب زبونك بسرعة وعناية."],
      ["دفع عند الاستلام", "يدفع الزبون بعد ما توصله الطلبية ويطمئن."],
      ["ثقة وضمان", "تجربة شراء موثوقة تكسب ثقة زبائنك."],
    ]},
    products: { eyebrow: "جرّبها بنفسك", title: "املأ متجرك", hint: "أضف صور منتجاتك وأسعارك وتخيّل شكل متجرك مباشرة 👇", uploadHint: "اضغط لإضافة صورة منتجك", namePh: "اسم المنتج", pricePh: "السعر", addProduct: "أضف منتجاً", order: "اطلب عبر واتساب", ask: "تواصل للسعر", heroUpload: "اضغط لإضافة صورة متجرك" },
    featured: { eyebrow: "عرض خاص", title: "مجموعة مختارة بسعر مميّز", desc: "تشكيلة من أفضل منتجاتنا الطبيعية، مع هدية مع كل طلب.", cta: "اطلب الآن" },
    how: { eyebrow: "سهلة وسريعة", title: "كيف تطلب؟", steps: [
      ["اختر منتجك", "تصفّح المتجر واختر اللي بدك ياه."],
      ["اطلب عبر واتساب", "اضغط زر الطلب وأكّد العنوان والكمية."],
      ["استلم وادفع", "توصلك الطلبية لباب البيت وتدفع عند الاستلام."],
    ]},
    reviews: { eyebrow: "ثقة زبائننا", title: "شو بيقولوا عنا", items: [
      ["المنتجات ممتازة والجودة عالية، والتوصيل وصلني بسرعة.", "أبو محمد"],
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
    ticker: ["🚚 Kapıya teslimat", "💬 WhatsApp ile sipariş", "💵 Kapıda ödeme", "🌐 Üç dil", "⭐ Kolay alışveriş"],
    nav: { store: "Mağaza", why: "Neden biz", how: "Nasıl sipariş", services: "Hizmetler & Fiyatlar" },
    orderNow: "Sipariş ver",
    hero: {
      eyebrow: "Şık online mağazanız",
      titleA: "Online mağazanız", titleB: "şık ve kolay",
      lead: "Ürünlerinizi güzel görsellerle sergileyin, müşterilerinizden tek tıkla WhatsApp siparişi alın — üç dilde.",
      browse: "Ürünleri gör", contact: "WhatsApp",
      stats: [["Sipariş", "kolay & hızlı"], ["Teslimat", "kapıya"], ["Ödeme", "kapıda"]],
      badge: "Kapıda ödeme",
    },
    why: { eyebrow: "Neden biz", title: "Mağazanızın ihtiyacı olan her şey", cards: [
      ["Çekici vitrin", "Net görseller ve fiyatlarla ürünleriniz dikkat çeker, sipariş kolaylaşır."],
      ["Kapıya teslimat", "Müşterinizin siparişini hızlı ve özenle ulaştırırız."],
      ["Kapıda ödeme", "Müşteri, ürün eline ulaşınca öder."],
      ["Güven ve garanti", "Müşterilerinizin güvenini kazanan güvenilir alışveriş."],
    ]},
    products: { eyebrow: "Kendiniz deneyin", title: "Mağazanızı doldurun", hint: "Ürün görsellerinizi ve fiyatlarınızı ekleyin, mağazanızı canlı hayal edin 👇", uploadHint: "Ürün görselinizi eklemek için tıklayın", namePh: "Ürün adı", pricePh: "Fiyat", addProduct: "Ürün ekle", order: "WhatsApp ile sipariş", ask: "Fiyat için iletişim", heroUpload: "Mağaza görselinizi eklemek için tıklayın" },
    featured: { eyebrow: "Özel teklif", title: "Özel fiyatlı seçki", desc: "En iyi doğal ürünlerimizden bir seçki, her siparişte hediyeyle.", cta: "Sipariş ver" },
    how: { eyebrow: "Kolay ve hızlı", title: "Nasıl sipariş verilir?", steps: [
      ["Ürününü seç", "Mağazayı gez ve istediğini seç."],
      ["WhatsApp ile sipariş", "Sipariş butonuna bas, adres ve adedi onayla."],
      ["Teslim al ve öde", "Sipariş kapına gelir, kapıda ödersin."],
    ]},
    reviews: { eyebrow: "Müşteri güveni", title: "Hakkımızda ne diyorlar", items: [
      ["Ürünler mükemmel, kalite yüksek ve teslimat çok hızlıydı.", "Ahmet"],
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
    ticker: ["🚚 Home delivery", "💬 Order via WhatsApp", "💵 Cash on delivery", "🌐 Three languages", "⭐ Easy shopping"],
    nav: { store: "Shop", why: "Why us", how: "How to order", services: "Services & Pricing" },
    orderNow: "Order now",
    hero: {
      eyebrow: "Your elegant online store",
      titleA: "Your online store", titleB: "elegant & easy",
      lead: "Showcase your products with beautiful photos and take customer orders in one tap via WhatsApp — in three languages.",
      browse: "Browse products", contact: "WhatsApp",
      stats: [["Ordering", "easy & fast"], ["Delivery", "to your door"], ["Payment", "on delivery"]],
      badge: "Cash on delivery",
    },
    why: { eyebrow: "Why us", title: "Everything your store needs", cards: [
      ["Attractive display", "Clear photos and prices make your products stand out and ordering easy."],
      ["Home delivery", "We deliver your customer's order quickly and with care."],
      ["Cash on delivery", "The customer pays once the order arrives."],
      ["Trust & guarantee", "A reliable shopping experience that earns your customers' trust."],
    ]},
    products: { eyebrow: "Try it yourself", title: "Fill your store", hint: "Add your product photos and prices and picture your store live 👇", uploadHint: "Click to add your product photo", namePh: "Product name", pricePh: "Price", addProduct: "Add product", order: "Order on WhatsApp", ask: "Contact for price", heroUpload: "Click to add your store photo" },
    featured: { eyebrow: "Special offer", title: "A curated set at a special price", desc: "A selection of our finest natural products, with a gift on every order.", cta: "Order now" },
    how: { eyebrow: "Easy and fast", title: "How to order?", steps: [
      ["Pick your product", "Browse the shop and choose what you want."],
      ["Order on WhatsApp", "Tap the order button and confirm address and quantity."],
      ["Receive and pay", "Your order arrives at your door, pay on delivery."],
    ]},
    reviews: { eyebrow: "Customer trust", title: "What they say about us", items: [
      ["The products are excellent, great quality and fast delivery.", "Ahmad"],
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
