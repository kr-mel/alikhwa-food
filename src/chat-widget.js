// ودجت شات متعدد اللغات — يقرأ اللغة الحالية ويتحدّث عند تغييرها.
import { SITE_CONFIG } from "./config.js";
import { business, waLink } from "./data.js";
import { UI, detectLang } from "./i18n.js";

let lang = detectLang();
const apiUrl = SITE_CONFIG.chatApiUrl;
const history = [];

function render(text) {
  const esc = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n/g, "<br>");
}

const css = `
.cw-btn{position:fixed;inset-inline-start:22px;bottom:22px;z-index:60;width:58px;height:58px;border-radius:50%;
 background:var(--olive-700,#4a5a23);color:#fff;border:none;cursor:pointer;display:grid;place-items:center;
 box-shadow:0 12px 28px -8px rgba(44,51,21,.6);transition:transform .2s}
.cw-btn:hover{transform:scale(1.08)}
.cw-btn svg{width:28px;height:28px}
.cw-panel{position:fixed;inset-inline-start:22px;bottom:90px;z-index:61;width:min(370px,calc(100vw - 44px));
 height:min(540px,calc(100vh - 130px));background:var(--paper,#fffdf8);border:1px solid var(--line,#e7dec9);
 border-radius:18px;box-shadow:0 24px 60px -20px rgba(44,51,21,.4);display:none;flex-direction:column;overflow:hidden}
.cw-panel.open{display:flex}
.cw-head{background:var(--olive-900,#2c3315);color:#fff;padding:14px 18px;display:flex;align-items:center;gap:10px}
.cw-head b{font-family:"El Messiri",serif}
.cw-head .cw-x{margin-inline-start:auto;background:none;border:none;color:#fff;font-size:1.3rem;cursor:pointer;line-height:1}
.cw-dot{width:9px;height:9px;border-radius:50%;background:#34d36b}
.cw-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--bone,#f7f3ea)}
.cw-msg{max-width:82%;padding:10px 14px;border-radius:14px;font-size:.93rem;line-height:1.6}
.cw-msg.bot{background:#fff;border:1px solid var(--line,#e7dec9);align-self:flex-start;border-bottom-inline-start-radius:4px}
.cw-msg.me{background:var(--amber-500,#e0a43c);color:var(--olive-900,#2c3315);align-self:flex-end;border-bottom-inline-end-radius:4px}
.cw-foot{display:flex;gap:8px;padding:12px;border-top:1px solid var(--line,#e7dec9);background:var(--paper,#fffdf8)}
.cw-foot input{flex:1;font-family:inherit;font-size:.93rem;padding:10px 14px;border:1px solid var(--line,#e7dec9);border-radius:999px;outline:none}
.cw-foot input:focus{border-color:var(--amber-500,#e0a43c)}
.cw-foot button{background:var(--olive-700,#4a5a23);color:#fff;border:none;width:42px;height:42px;border-radius:50%;cursor:pointer;font-size:1.1rem;flex-shrink:0}
.cw-typing{font-size:.85rem;color:var(--ink-soft,#5f5a45);align-self:flex-start;padding:4px 8px}
@media(max-width:600px){.cw-btn{inset-inline-start:auto;inset-inline-end:22px;bottom:88px}.cw-panel{inset-inline-start:12px;inset-inline-end:12px;width:auto}}
`;

const chatIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"/></svg>';
const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };

function init() {
  const style = document.createElement("style"); style.textContent = css; document.head.appendChild(style);
  const btn = el(`<button class="cw-btn" aria-label="chat">${chatIcon}</button>`);
  const panel = el(`
    <div class="cw-panel" role="dialog">
      <div class="cw-head"><span class="cw-dot"></span><b class="cw-title"></b><button class="cw-x" aria-label="close">×</button></div>
      <div class="cw-body"></div>
      <form class="cw-foot"><input type="text" autocomplete="off" /><button type="submit" aria-label="send">➤</button></form>
    </div>`);
  document.body.append(btn, panel);

  const body = panel.querySelector(".cw-body");
  const input = panel.querySelector("input");
  const title = panel.querySelector(".cw-title");

  function applyTexts() {
    title.textContent = UI[lang].chat.title;
    input.placeholder = UI[lang].chat.placeholder;
  }
  applyTexts();

  function add(text, who) {
    const m = el(`<div class="cw-msg ${who}"></div>`);
    if (who === "bot") m.innerHTML = render(text); else m.textContent = text;
    body.appendChild(m); body.scrollTop = body.scrollHeight; return m;
  }
  add(UI[lang].chat.greeting, "bot");

  const open = () => { panel.classList.add("open"); input.focus(); };
  const close = () => { panel.classList.remove("open"); btn.focus(); };
  btn.onclick = () => (panel.classList.contains("open") ? close() : open());
  panel.querySelector(".cw-x").onclick = close;
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && panel.classList.contains("open")) close(); });

  window.addEventListener("langchange", (e) => { lang = e.detail.lang; applyTexts(); });

  panel.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = input.value.trim(); if (!msg) return;
    input.value = ""; add(msg, "me"); history.push({ role: "user", content: msg });

    if (!apiUrl) {
      add(UI[lang].chat.greeting, "bot");
      const a = el(`<a class="cw-msg bot" style="text-decoration:underline" href="${waLink(UI[lang].chat.hello)}" target="_blank">WhatsApp +${business.whatsapp}</a>`);
      body.appendChild(a); body.scrollTop = body.scrollHeight; return;
    }

    const typing = el(`<div class="cw-typing">…</div>`);
    body.appendChild(typing); body.scrollTop = body.scrollHeight;
    try {
      const res = await fetch(apiUrl, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, history: history.slice(0, -1) }),
      });
      const data = await res.json();
      typing.remove();
      const reply = data.reply || "…";
      add(reply, "bot"); history.push({ role: "assistant", content: reply });
    } catch {
      typing.remove();
      add("WhatsApp +" + business.whatsapp, "bot");
    }
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
