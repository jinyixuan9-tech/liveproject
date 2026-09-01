(() => {
  const PLUGIN_ID = "vela-live";
  const APP_ID = "vela-live-home";
  const VERSION = "0.1.3";

  if (!window.RochePlugin || typeof window.RochePlugin.register !== "function") {
    console.warn("[Vela] RochePlugin.register is unavailable.");
    return;
  }

  const escapeHTML = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const normalizeHandle = (value = "") => {
    const raw = String(value || "").trim();
    if (!raw) return "";
    return raw.startsWith("@") ? raw : `@${raw}`;
  };

  const initials = (value = "") => {
    const clean = String(value || "").trim();
    if (!clean) return "V";
    return clean.slice(0, 2).toUpperCase();
  };

  const isImageURL = (value = "") => /^(https?:|data:image\/|blob:)/i.test(String(value || "").trim());

  const avatarHTML = (value = "", fallback = "V") => {
    const raw = String(value || "").trim();
    if (isImageURL(raw)) {
      return `<img src="${escapeHTML(raw)}" alt="" loading="lazy">`;
    }
    return escapeHTML(raw || initials(fallback));
  };

  const displayProfileName = (profile = {}) =>
    String(profile?.handle || profile?.name || profile?.displayName || "未命名").trim();

  const safeArray = (value) => Array.isArray(value) ? value : [];

  function createDefaultState() {
    return {
      activePage: "home",
      drawerOpen: false,
      publishOpen: false,
      viewerIdentityId: "alias-night",
      rocheLink: {
        ownerPersonaId: "",
        linkedCharacterIds: []
      },
      identities: [
        {
          id: "alias-night",
          type: "anonymous",
          displayName: "Nini",
          handle: "@night_vela",
          avatar: "NN",
          bio: "匿名频道",
          banner: "",
          followers: 0,
          following: 0,
          isAnonymous: true
        }
      ],
      channels: [
        {
          id: "char-aster",
          kind: "character",
          name: "Aster",
          handle: "@aster_room",
          avatar: "A",
          live: true,
          title: "今晚不赶时间，坐下来聊一会儿",
          viewers: 4281,
          bio: "Shell 演示频道",
          banner: "",
          followers: 0,
          following: 0,
          profileCustomized: false,
          isDemo: true
        },
        {
          id: "char-noir",
          kind: "character",
          name: "Noir",
          handle: "@noir_after5",
          avatar: "☾",
          live: false,
          title: "",
          viewers: 0,
          bio: "Shell 演示频道",
          banner: "",
          followers: 0,
          following: 0,
          profileCustomized: false,
          isDemo: true
        }
      ],
      recommendedLives: [
        {
          id: "rec-mellow",
          name: "mellowroom",
          handle: "@mellowroom",
          avatar: "♫",
          title: "半夜突然想把房间重新收拾一遍",
          category: "深夜聊天 · 音乐",
          viewers: 3821,
          followed: false
        },
        {
          id: "rec-cloud",
          name: "cloudafter2",
          handle: "@cloudafter2",
          avatar: "☁",
          title: "桌面很乱，边整理边聊",
          category: "日常 · 桌面直播",
          viewers: 1940,
          followed: false
        },
        {
          id: "rec-anon",
          name: "anon_room",
          handle: "@anon_room",
          avatar: "◇",
          title: "今天只开灯，不露脸",
          category: "匿名频道 · 舞蹈",
          viewers: 6240,
          followed: false
        }
      ],
      schedule: {
        visible: true,
        dateText: "9/12 · 20:00",
        title: "Mellow Studio 合作直播",
        detail: "展示新品一次 + 挂合作链接 · 已收定金 ¥800",
        type: "合作直播"
      },
      wallet: {
        balance: 12680.4,
        transactions: [
          { title: "直播礼物", note: "Aster 联播", amount: 328 },
          { title: "订阅收入", note: "@anon_room", amount: 96 },
          { title: "提现", note: "Vela Card ·••• 0718", amount: -1000 }
        ]
      },
      messages: [
        {
          id: "biz-mellow",
          avatar: "M",
          name: "Mellow Studio",
          badge: "合作邀约",
          preview: "你好，我们想邀请你在 9/12 的直播里展示新品……",
          unread: 1
        },
        {
          id: "aster-dm",
          avatar: "A",
          name: "Aster",
          badge: "",
          preview: "今晚要不要一起开一场？我已经把标题想好了。",
          unread: 2
        }
      ],
      liveSession: null,
      roleCommerce: {
        "char-aster": { enabled: true, tendency: 35 }
      },
      liveChat: [
        { user: "yoo_n", text: "声音听着很舒服，今晚会播多久？" },
        { user: "Sato_Aki", text: "刚进来，今天的气氛好安静。" },
        { user: "Mika", text: "What song are you listening to?" }
      ]
    };
  }

  function formatMoney(value) {
    const abs = Math.abs(Number(value || 0));
    return `${value < 0 ? "-" : "+"} ¥${abs.toFixed(2)}`;
  }

  function formatViewers(value) {
    const n = Number(value || 0);
    if (n >= 10000) return `${(n / 10000).toFixed(n >= 100000 ? 0 : 1)}万`;
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return String(n);
  }

  function styles() {
    return `
<style data-vela-style>
.vela-roche{--v-bg:#f6f6f8;--v-card:#fff;--v-text:#111116;--v-muted:#7c7c86;--v-line:#e8e8ed;--v-soft:#efeff3;--v-live:#ff415d;position:relative;width:100%;height:100%;min-height:0;background:var(--v-bg);color:var(--v-text);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;-webkit-tap-highlight-color:transparent;isolation:isolate}
.vela-roche *{box-sizing:border-box}.vela-roche button,.vela-roche input,.vela-roche textarea{font:inherit}.vela-roche button{cursor:pointer}.vela-roche .v-top{position:absolute;z-index:20;left:0;right:0;top:0;height:62px;padding:0 14px;display:flex;align-items:center;justify-content:space-between;background:rgba(246,246,248,.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(0,0,0,.035)}
.vela-roche .v-brand{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:900}.vela-roche .v-logo{width:28px;height:28px;border-radius:10px;background:#111;color:#fff;display:grid;place-items:center;font-size:13px}.vela-roche .v-plainbtn{width:42px;height:42px;border:0;border-radius:14px;background:#fff;color:#111;font-size:19px;display:grid;place-items:center}.vela-roche .v-top-actions{display:flex;gap:7px}
.vela-roche .v-main{position:absolute;inset:62px 0 calc(78px + env(safe-area-inset-bottom,0px));overflow:auto;overscroll-behavior:contain;padding:12px 14px 24px;-webkit-overflow-scrolling:touch}.vela-roche .v-page{display:none}.vela-roche .v-page.is-active{display:block}.vela-roche .v-title{display:flex;justify-content:space-between;align-items:flex-end;margin:5px 2px 13px;font-size:22px;font-weight:900}.vela-roche .v-title small{font-size:11px;color:var(--v-muted);font-weight:700}
.vela-roche .v-channels{display:flex;gap:12px;overflow-x:auto;padding:2px 0 11px;scrollbar-width:none}.vela-roche .v-channels::-webkit-scrollbar{display:none}.vela-roche .v-channel{width:64px;flex:0 0 auto;text-align:center;border:0;background:none;color:inherit;padding:0}.vela-roche .v-avatar-wrap{position:relative;width:58px;height:58px;border-radius:20px;padding:2px;background:linear-gradient(135deg,#111,#aaa);margin:auto}.vela-roche .v-avatar{width:100%;height:100%;display:grid;place-items:center;border-radius:18px;background:linear-gradient(135deg,#dadbe1,#fff);font-weight:900;font-size:18px}.vela-roche .v-live-dot{position:absolute;right:-4px;bottom:-3px;background:var(--v-live);color:#fff;border:3px solid var(--v-bg);border-radius:8px;font-size:8px;font-weight:900;padding:2px 5px}.vela-roche .v-channel-name{font-size:11px;font-weight:750;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vela-roche .v-schedule{background:#111;color:#fff;border-radius:22px;padding:13px 14px;margin:4px 0 13px}.vela-roche .v-schedule-top,.vela-roche .v-schedule-main{display:flex;align-items:center;justify-content:space-between;gap:10px}.vela-roche .v-kicker{font-size:10px;opacity:.62;font-weight:800}.vela-roche .v-schedule-time{font-size:17px;font-weight:900;margin-top:3px}.vela-roche .v-pill{font-size:10px;background:#fff;color:#111;border-radius:9px;padding:5px 8px;font-weight:900}.vela-roche .v-schedule-main{margin-top:10px}.vela-roche .v-schedule-icon{width:38px;height:38px;border-radius:13px;background:#2a2a30;display:grid;place-items:center;font-weight:900}.vela-roche .v-schedule-copy{flex:1;min-width:0}.vela-roche .v-schedule-copy b{display:block;font-size:13px}.vela-roche .v-schedule-copy span{display:block;font-size:11px;opacity:.68;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-small-dark{border:0;background:#2a2a30;color:#fff;border-radius:12px;padding:9px 11px;font-size:11px;font-weight:850;min-height:38px}
.vela-roche .v-filters{display:flex;gap:8px;margin:9px 0 14px}.vela-roche .v-chip{border:0;border-radius:14px;background:#e9e9ee;padding:9px 14px;font-size:12px;font-weight:850;color:#111}.vela-roche .v-chip.is-active{background:#111;color:#fff}.vela-roche .v-card{background:#fff;border-radius:24px;padding:14px;margin-bottom:14px}.vela-roche .v-author{display:flex;align-items:center;gap:10px}.vela-roche .v-mini{width:41px;height:41px;border-radius:14px;background:#ececf1;display:grid;place-items:center;font-weight:900}.vela-roche .v-meta{min-width:0;flex:1}.vela-roche .v-name{font-size:14px;font-weight:900}.vela-roche .v-sub{font-size:11px;color:var(--v-muted);margin-top:2px}.vela-roche .v-stage{display:flex;align-items:flex-end;width:100%;aspect-ratio:16/9;margin-top:12px;padding:14px;border:0;border-radius:20px;background:radial-gradient(circle at 72% 16%,rgba(255,255,255,.34),transparent 29%),linear-gradient(135deg,#1b1b22,#7a7d88);color:#fff;text-align:left;overflow:hidden;position:relative}.vela-roche .v-stage:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 38%,rgba(0,0,0,.48))}.vela-roche .v-stage-copy{position:relative;z-index:1}.vela-roche .v-badge{display:inline-block;background:var(--v-live);padding:5px 8px;border-radius:8px;font-size:9px;font-weight:900;margin-bottom:7px}.vela-roche .v-live-title{font-size:18px;font-weight:900;line-height:1.25}.vela-roche .v-viewers{font-size:11px;opacity:.82;margin-top:4px}.vela-roche .v-engage{display:flex;gap:14px;margin-top:10px;color:#555;font-size:12px}.vela-roche .v-postimg{height:170px;border-radius:19px;margin-top:12px;background:linear-gradient(135deg,#d7d8df,#fafafd);display:grid;place-items:center;font-size:42px}.vela-roche .v-posttext{font-size:14px;line-height:1.55;margin-top:10px}
.vela-roche .v-rec-card{padding:0;overflow:hidden}.vela-roche .v-rec-cover{display:flex;align-items:flex-end;aspect-ratio:16/9;padding:14px;background:radial-gradient(circle at 75% 15%,rgba(255,255,255,.4),transparent 26%),linear-gradient(135deg,#2a2b31,#8c8f99);color:#fff;position:relative}.vela-roche .v-rec-cover:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 42%,rgba(0,0,0,.55))}.vela-roche .v-rec-cover>*{position:relative;z-index:1}.vela-roche .v-rec-body{padding:12px 14px 14px;display:flex;gap:10px;align-items:center}.vela-roche .v-follow{border:0;background:#111;color:#fff;border-radius:12px;padding:9px 12px;font-size:11px;font-weight:900;min-height:38px}.vela-roche .v-follow.is-on{background:#e9e9ee;color:#111}
.vela-roche .v-msg{display:flex;align-items:center;gap:11px;padding:12px 2px;border-bottom:1px solid var(--v-line);border-top:0;border-left:0;border-right:0;background:none;width:100%;text-align:left;color:inherit}.vela-roche .v-msg:last-child{border-bottom:0}.vela-roche .v-preview{font-size:12px;color:var(--v-muted);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-unread{min-width:20px;height:20px;border-radius:10px;background:#111;color:#fff;font-size:10px;display:grid;place-items:center}.vela-roche .v-biz{font-size:9px;padding:3px 6px;border-radius:7px;background:#fff0d4;color:#925e00;margin-left:5px}.vela-roche .v-wallet{background:#111;color:#fff;border-radius:28px;padding:22px;margin:7px 0 16px}.vela-roche .v-balance-label{font-size:12px;opacity:.65}.vela-roche .v-balance{font-size:35px;font-weight:900;margin:7px 0 18px}.vela-roche .v-wallet-actions{display:flex;gap:8px}.vela-roche .v-wallet-actions button{flex:1;border:0;background:#fff;color:#111;border-radius:14px;padding:12px;font-weight:900}.vela-roche .v-tx{display:flex;justify-content:space-between;gap:12px;padding:13px 2px;border-bottom:1px solid var(--v-line);font-size:13px}.vela-roche .v-tx:last-child{border-bottom:0}.vela-roche .v-tx small{display:block;color:var(--v-muted);margin-top:3px}
.vela-roche .v-nav{position:absolute;z-index:30;left:0;right:0;bottom:0;height:calc(78px + env(safe-area-inset-bottom,0px));padding-bottom:env(safe-area-inset-bottom,0px);display:grid;grid-template-columns:repeat(5,1fr);background:rgba(255,255,255,.96);backdrop-filter:blur(18px);border-top:1px solid var(--v-line)}.vela-roche .v-nav button{border:0;background:none;color:#8b8b93;font-size:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-width:0;min-height:52px}.vela-roche .v-nav button b{font-size:20px;font-weight:500}.vela-roche .v-nav button.is-active{color:#111;font-weight:900}.vela-roche .v-nav .v-publish b{width:42px;height:42px;border-radius:15px;background:#111;color:#fff;display:grid;place-items:center;font-size:25px;margin-top:-13px;box-shadow:0 7px 18px rgba(0,0,0,.17)}
.vela-roche .v-mask{position:absolute;z-index:50;inset:0;background:rgba(0,0,0,.28);opacity:0;pointer-events:none;transition:opacity .18s}.vela-roche .v-mask.is-open{opacity:1;pointer-events:auto}.vela-roche .v-drawer{position:absolute;z-index:60;top:0;bottom:0;left:0;width:min(84%,350px);padding:18px 16px calc(16px + env(safe-area-inset-bottom,0px));background:#fff;transform:translateX(-102%);transition:transform .22s ease;overflow:auto;display:flex;flex-direction:column}.vela-roche .v-drawer.is-open{transform:none}.vela-roche .v-drawer-main{flex:1;min-height:0}.vela-roche .v-userhead{width:100%;border:0;background:#f6f6f8;border-radius:22px;padding:13px;display:flex;align-items:center;gap:12px;margin:6px 0 18px;text-align:left;color:inherit}.vela-roche .v-userav{width:58px;height:58px;border-radius:20px;background:linear-gradient(135deg,#111,#777);color:#fff;display:grid;place-items:center;font-weight:900;flex:0 0 auto}.vela-roche .v-avatar img,.vela-roche .v-mini img,.vela-roche .v-userav img{width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block}.vela-roche .v-usercopy{min-width:0;flex:1}.vela-roche .v-userhead b{display:block;font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-userhead span{display:block;color:var(--v-muted);font-size:12px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-identity-chip{display:inline-flex!important;width:auto!important;margin-top:7px!important;padding:4px 7px;border-radius:8px;background:#111;color:#fff!important;font-size:9px!important;font-weight:900}.vela-roche .v-drawer-section{margin-top:14px}.vela-roche .v-drawer-label{padding:0 4px 7px;color:#a0a0a8;font-size:10px;font-weight:900;letter-spacing:.06em}.vela-roche .v-drawer-item{width:100%;padding:13px 4px;border:0;border-bottom:1px solid var(--v-line);background:none;display:flex;align-items:center;justify-content:space-between;gap:10px;text-align:left;color:inherit;font-size:14px;font-weight:800;min-height:48px}.vela-roche .v-drawer-item .v-itemcopy{display:flex;align-items:center;gap:10px;min-width:0}.vela-roche .v-drawer-item .v-itemicon{width:30px;height:30px;border-radius:10px;background:#f2f2f5;display:grid;place-items:center;font-size:14px;flex:0 0 auto}.vela-roche .v-drawer-item .v-itembadge{font-size:10px;color:var(--v-muted);font-weight:800}.vela-roche .v-drawer-foot{padding-top:18px;margin-top:auto}.vela-roche .v-version{font-size:10px;color:#b0b0b7;text-align:center;margin:0 0 9px}.vela-roche .v-exit{width:100%;min-height:48px;border:0;border-radius:15px;background:#f3f3f6;color:#b3261e;font-weight:900;font-size:13px}
.vela-roche .v-sheetmask{position:absolute;z-index:80;inset:0;background:rgba(0,0,0,.28);display:none;align-items:flex-end}.vela-roche .v-sheetmask.is-open{display:flex}.vela-roche .v-sheet{width:100%;max-height:82%;overflow:auto;background:#fff;border-radius:28px 28px 0 0;padding:13px 16px calc(24px + env(safe-area-inset-bottom,0px));overscroll-behavior:contain}.vela-roche .v-handle{width:42px;height:5px;border-radius:3px;background:#d2d2d7;margin:0 auto 15px}.vela-roche .v-create-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.vela-roche .v-create{border:0;border-radius:18px;background:#f1f1f4;padding:17px;text-align:left;font-weight:900;min-height:92px}.vela-roche .v-create b{display:block;font-size:24px;margin-bottom:12px}.vela-roche .v-hint{font-size:11px;line-height:1.5;color:var(--v-muted)}
.vela-roche .v-subscreen{position:absolute;z-index:70;inset:0;background:var(--v-bg);transform:translateX(102%);transition:transform .22s ease;overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}.vela-roche .v-subscreen.is-open{transform:none}.vela-roche .v-subhead{position:sticky;z-index:2;top:0;height:62px;padding:0 14px;display:flex;align-items:center;gap:10px;background:rgba(246,246,248,.96);backdrop-filter:blur(16px);border-bottom:1px solid var(--v-line)}.vela-roche .v-subhead>button:first-child{width:42px;height:42px;border:0;border-radius:14px;background:#fff;font-size:21px;flex:0 0 auto}.vela-roche .v-subhead .v-head-action{width:auto!important;height:34px!important;min-height:34px!important;padding:0 10px!important;border:0;border-radius:11px;background:#fff!important;color:#111!important;font-size:11px!important;font-weight:850!important;white-space:nowrap}.vela-roche .v-subbody{padding:14px 14px 28px}.vela-roche .v-tabs{display:flex;gap:8px;overflow:auto;margin-bottom:13px}.vela-roche .v-tabs button{border:0;border-radius:13px;background:#e9e9ee;padding:9px 12px;font-size:12px;font-weight:850}.vela-roche .v-tabs button.is-active{background:#111;color:#fff}.vela-roche .v-empty{padding:65px 14px;text-align:center;color:var(--v-muted);font-size:13px;line-height:1.6}.vela-roche .v-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid var(--v-line)}.vela-roche .v-row:last-child{border-bottom:0}.vela-roche .v-row b{font-size:13px}.vela-roche .v-row small{display:block;color:var(--v-muted);font-size:11px;margin-top:3px}.vela-roche .v-action{border:0;border-radius:12px;background:#111;color:#fff;padding:9px 12px;font-size:11px;font-weight:900;min-height:38px}.vela-roche .v-action.light{background:#efeff3;color:#111}.vela-roche .v-linkbox{border:1px solid var(--v-line);border-radius:18px;padding:12px;margin:10px 0;background:#fafafd}.vela-roche .v-linkstatus{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--v-muted);margin-top:4px}.vela-roche .v-dot{width:7px;height:7px;border-radius:50%;background:#b9b9c1;flex:0 0 auto}.vela-roche .v-dot.on{background:#38a169}.vela-roche .v-rolecard{border-top:1px solid var(--v-line);padding-top:12px;margin-top:12px}.vela-roche .v-rolecard:first-child{border-top:0;padding-top:0;margin-top:0}
.vela-roche .v-profile-shell{padding-bottom:18px}.vela-roche .v-profile-banner{height:138px;background:linear-gradient(135deg,#d5d6dc,#f5f5f8);overflow:hidden;position:relative}.vela-roche .v-profile-banner img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-profile-info{position:relative;padding:0 16px 14px;background:#fff}.vela-roche .v-profile-avatar{width:78px;height:78px;border-radius:50%;border:4px solid #fff;background:linear-gradient(135deg,#222,#888);color:#fff;display:grid;place-items:center;font-weight:900;font-size:18px;overflow:hidden;position:relative;margin-top:-39px}.vela-roche .v-profile-avatar img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-profile-main{display:flex;align-items:flex-end;justify-content:space-between;gap:12px}.vela-roche .v-profile-maincopy{min-width:0;flex:1;padding-top:8px}.vela-roche .v-profile-maincopy h2{font-size:22px;line-height:1.2;margin:0 0 4px}.vela-roche .v-profile-handle{font-size:12px;color:var(--v-muted)}.vela-roche .v-profile-stats{display:flex;gap:14px;margin-top:10px;font-size:12px;color:var(--v-muted)}.vela-roche .v-profile-stats b{color:var(--v-text);font-size:13px}.vela-roche .v-profile-bio{font-size:13px;line-height:1.55;margin-top:11px;white-space:pre-wrap}.vela-roche .v-profile-tabs{display:grid;grid-template-columns:repeat(3,1fr);background:#fff;border-top:1px solid var(--v-line);border-bottom:1px solid var(--v-line)}.vela-roche .v-profile-tabs button{border:0;background:#fff;padding:13px 6px;font-size:12px;font-weight:850;color:var(--v-muted);position:relative}.vela-roche .v-profile-tabs button.is-active{color:#111}.vela-roche .v-profile-tabs button.is-active:after{content:"";position:absolute;left:24%;right:24%;bottom:0;height:2px;background:#111;border-radius:2px}.vela-roche .v-profile-tabbody{padding:14px}.vela-roche .v-editform{display:grid;gap:12px}.vela-roche .v-field label{display:block;font-size:11px;font-weight:850;margin-bottom:6px}.vela-roche .v-field input,.vela-roche .v-field textarea{width:100%;border:1px solid var(--v-line);background:#fff;border-radius:13px;padding:11px 12px;font-size:16px;color:#111;outline:none}.vela-roche .v-field textarea{min-height:88px;resize:vertical}.vela-roche .v-fieldpair{display:grid;grid-template-columns:1fr 1fr;gap:10px}.vela-roche .v-identity-card{border:1px solid var(--v-line);background:#fff;border-radius:18px;padding:12px;margin-top:10px}.vela-roche .v-identity-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.vela-roche .v-roche-compact{background:#fafafd;border:1px solid var(--v-line);border-radius:18px;padding:12px}.vela-roche .v-roche-persona{display:flex;align-items:center;gap:9px;padding:9px 0;border-top:1px solid var(--v-line)}.vela-roche .v-roche-persona:first-of-type{border-top:0}.vela-roche .v-role-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.vela-roche .v-profile-empty{padding:42px 12px;text-align:center;color:var(--v-muted);font-size:12px;line-height:1.6}.vela-roche .v-settings-note{font-size:12px;line-height:1.65;color:var(--v-muted)}.vela-roche .v-live-screen{background:#0d0d10;color:#fff}.vela-roche .v-live-screen .v-subhead{background:rgba(13,13,16,.95);border-bottom-color:#26262c}.vela-roche .v-live-screen .v-subhead button{background:#24242a;color:#fff}.vela-roche .v-live-body{padding:10px 12px 28px}.vela-roche .v-live-stage{aspect-ratio:16/9;border-radius:20px;background:radial-gradient(circle at 70% 15%,rgba(255,255,255,.25),transparent 27%),linear-gradient(135deg,#1d1e24,#747783);position:relative;overflow:hidden;padding:14px;display:flex;align-items:flex-end}.vela-roche .v-live-stage:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 43%,rgba(0,0,0,.56))}.vela-roche .v-live-stage-copy{position:relative;z-index:1}.vela-roche .v-live-stage h2{font-size:19px;line-height:1.3;margin:7px 0 4px}.vela-roche .v-live-stage p{margin:0;font-size:11px;opacity:.8}.vela-roche .v-chat-panel{margin-top:10px;background:#fff;color:#111;border-radius:22px;padding:13px}.vela-roche .v-chat-title{font-weight:900;margin-bottom:7px}.vela-roche .v-chatline{display:flex;gap:8px;padding:7px 0;font-size:12px;line-height:1.45}.vela-roche .v-chatline b{flex:0 0 auto}.vela-roche .v-composer{display:grid;grid-template-columns:1fr 44px 44px;gap:8px;margin-top:10px}.vela-roche .v-composer input{width:100%;min-width:0;border:0;border-radius:15px;background:#efeff2;padding:11px 12px;font-size:16px}.vela-roche .v-composer button{border:0;border-radius:15px;background:#111;color:#fff;min-height:44px}.vela-roche .v-continue{width:100%;margin-top:8px;border:0;border-radius:15px;background:#24242a;color:#fff;padding:12px;font-weight:900;min-height:44px}.vela-roche .v-toast{position:absolute;z-index:120;left:50%;bottom:calc(92px + env(safe-area-inset-bottom,0px));transform:translate(-50%,12px);background:#111;color:#fff;border-radius:13px;padding:10px 13px;font-size:11px;opacity:0;pointer-events:none;transition:.18s;white-space:nowrap;max-width:86%;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-toast.is-show{opacity:1;transform:translate(-50%,0)}
@media (max-width:360px){.vela-roche .v-main{padding-left:10px;padding-right:10px}.vela-roche .v-live-title{font-size:16px}.vela-roche .v-balance{font-size:30px}}
</style>`;
  }

  function mountMarkup(root, state) {
    const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
    root.innerHTML = `${styles()}
      <header class="v-top">
        <div class="v-brand"><button class="v-plainbtn" data-action="open-drawer">☰</button><span class="v-logo">V</span>Vela</div>
        <div class="v-top-actions"><button class="v-plainbtn" data-action="noop">⌕</button><button class="v-plainbtn" data-action="noop">◌</button></div>
      </header>
      <main class="v-main">
        <section class="v-page is-active" data-page="home">
          <div class="v-title">首页 <small>关注中的频道</small></div>
          <div class="v-channels" data-role="channel-strip"></div>
          <div data-role="schedule"></div>
          <div class="v-filters"><button class="v-chip is-active">全部</button><button class="v-chip">正在直播</button><button class="v-chip">贴文</button></div>
          <div data-role="home-feed"></div>
        </section>
        <section class="v-page" data-page="discover">
          <div class="v-title">推荐 <small>现在正在播什么</small></div>
          <div data-role="recommended"></div>
        </section>
        <section class="v-page" data-page="messages">
          <div class="v-title">私信 <small>角色、陌生消息与合作</small></div>
          <div class="v-filters"><button class="v-chip is-active">全部</button><button class="v-chip">合作邀约</button><button class="v-chip">陌生消息</button></div>
          <div class="v-card" data-role="messages"></div>
        </section>
        <section class="v-page" data-page="wallet">
          <div class="v-title">钱包 <small>平台虚拟资产</small></div>
          <div class="v-wallet"><div class="v-balance-label">可提现余额</div><div class="v-balance" data-role="balance"></div><div class="v-wallet-actions"><button data-action="wallet-demo">提现</button><button data-action="wallet-demo">银行卡</button></div></div>
          <div class="v-card"><b>最近流水</b><div data-role="transactions"></div></div>
        </section>
      </main>
      <nav class="v-nav">
        <button class="is-active" data-nav="home"><b>⌂</b>首页</button>
        <button data-nav="discover"><b>✦</b>推荐</button>
        <button class="v-publish" data-action="open-publish"><b>＋</b>发布</button>
        <button data-nav="messages"><b>✉</b>私信</button>
        <button data-nav="wallet"><b>◈</b>钱包</button>
      </nav>
      <div class="v-mask" data-role="mask" data-action="close-drawer"></div>
      <aside class="v-drawer" data-role="drawer">
        <div class="v-drawer-main">
          <button class="v-userhead" data-action="open-user-profile">
            <div class="v-userav">${avatarHTML(identity?.avatar || "", identity?.displayName || "U")}</div>
            <div class="v-usercopy">
              <b>${escapeHTML(identity?.displayName || "Vela User")}</b>
              <span>${escapeHTML(identity?.handle || "@vela")}</span>
              <span class="v-identity-chip">${identity?.isAnonymous ? "匿名身份" : "公开身份"}</span>
            </div>
            <span>›</span>
          </button>

          <div class="v-drawer-section">
            <div class="v-drawer-label">账号与频道</div>
            <button class="v-drawer-item" data-action="open-identities"><span class="v-itemcopy"><span class="v-itemicon">◎</span><span>身份与账号</span></span><span>›</span></button>
            <button class="v-drawer-item" data-action="open-roles"><span class="v-itemcopy"><span class="v-itemicon">◌</span><span>角色与频道管理</span></span><span class="v-itembadge">${safeArray(state.rocheLink?.linkedCharacterIds).length} 已连接&nbsp; ›</span></button>
          </div>

          <div class="v-drawer-section">
            <div class="v-drawer-label">Vela 设置</div>
            <button class="v-drawer-item" data-action="settings-note" data-settings-kind="presets"><span class="v-itemcopy"><span class="v-itemicon">✦</span><span>生成预设</span></span><span>›</span></button>
            <button class="v-drawer-item" data-action="settings-note" data-settings-kind="appearance"><span class="v-itemcopy"><span class="v-itemicon">◐</span><span>外观设置</span></span><span>›</span></button>
            <button class="v-drawer-item" data-action="settings-note" data-settings-kind="platform"><span class="v-itemcopy"><span class="v-itemicon">⚙</span><span>平台设置</span></span><span>›</span></button>
            <button class="v-drawer-item" data-action="settings-note" data-settings-kind="memory"><span class="v-itemcopy"><span class="v-itemicon">↔</span><span>记忆互通</span></span><span class="v-itembadge">稍后&nbsp; ›</span></button>
          </div>
        </div>

        <div class="v-drawer-foot">
          <div class="v-version">Vela v${VERSION}</div>
          <button class="v-exit" data-action="exit-vela">退出 Vela</button>
        </div>
      </aside>
      <div class="v-sheetmask" data-role="publish-sheet" data-action="sheet-bg-close">
        <div class="v-sheet"><div class="v-handle"></div><h3>发布</h3><div class="v-create-grid">
          <button class="v-create" data-action="start-own-live"><b>●</b>开始直播</button>
          <button class="v-create" data-action="noop"><b>▣</b>发布贴文</button>
          <button class="v-create" data-action="noop"><b>♢</b>创建粉丝社群</button>
          <button class="v-create" data-action="noop"><b>✦</b>限定内容</button>
        </div><p class="v-hint">后续会接入身份选择、联播、合作任务、观看权限和 AI 生成。</p></div>
      </div>
      <section class="v-subscreen" data-screen="live"></section>
      <section class="v-subscreen" data-screen="channel"></section>
      <section class="v-subscreen" data-screen="message"></section>
      <section class="v-subscreen" data-screen="identities"></section>
      <section class="v-subscreen" data-screen="roles"></section>
      <section class="v-subscreen" data-screen="profile"></section>
      <section class="v-subscreen" data-screen="profile-edit"></section>
      <section class="v-subscreen" data-screen="settings"></section>
      <div class="v-toast" data-role="toast"></div>
    `;
  }

  function registerApp() {
    window.RochePlugin.register({
      id: PLUGIN_ID,
      name: "Vela",
      version: VERSION,
      apps: [
        {
          id: APP_ID,
          name: "Vela",
          icon: "chat",
          iconImage: "",
          async mount(container, roche) {
            container.replaceChildren();
            const root = document.createElement("div");
            root.className = "vela-roche";
            container.appendChild(root);

            let state = createDefaultState();
            try {
              const saved = await roche?.storage?.get?.("vela-shell-state");
              if (saved && typeof saved === "object") {
                state = {
                  ...state,
                  ...saved,
                  wallet: { ...state.wallet, ...(saved.wallet || {}) },
                  roleCommerce: { ...state.roleCommerce, ...(saved.roleCommerce || {}) }
                };
              }
            } catch (err) {
              console.warn("[Vela] failed to load shell state", err);
            }

            state.rocheLink = {
              ownerPersonaId: String(state.rocheLink?.ownerPersonaId || ""),
              linkedCharacterIds: safeArray(state.rocheLink?.linkedCharacterIds).map(id => String(id))
            };

            const rocheRuntime = {
              loaded: false,
              error: "",
              activePersona: null,
              personas: [],
              characters: []
            };

            mountMarkup(root, state);

            const q = (sel) => root.querySelector(sel);
            const qa = (sel) => [...root.querySelectorAll(sel)];
            let toastTimer = null;

            const persist = async () => {
              try {
                await roche?.storage?.set?.("vela-shell-state", {
                  viewerIdentityId: state.viewerIdentityId,
                  rocheLink: state.rocheLink,
                  identities: state.identities,
                  channels: state.channels,
                  recommendedLives: state.recommendedLives,
                  schedule: state.schedule,
                  wallet: state.wallet,
                  roleCommerce: state.roleCommerce,
                  liveChat: state.liveChat
                });
              } catch (err) {
                console.warn("[Vela] failed to persist shell state", err);
              }
            };

            const toast = (message) => {
              const el = q('[data-role="toast"]');
              if (!el) return;
              el.textContent = message;
              el.classList.add("is-show");
              if (toastTimer) clearTimeout(toastTimer);
              toastTimer = setTimeout(() => el.classList.remove("is-show"), 1700);
            };


            const syncLinkedChannelSnapshots = async () => {
              const linkedIds = new Set(safeArray(state.rocheLink?.linkedCharacterIds).map(String));
              if (!linkedIds.size) return;

              for (const charId of linkedIds) {
                let char = rocheRuntime.characters.find(x => String(x?.id) === charId) || null;
                try {
                  const full = await roche?.character?.get?.(charId);
                  if (full) char = full;
                } catch (_) {}
                if (!char) continue;

                const channelId = `roche-char-${charId}`;
                const existing = state.channels.find(x => x.id === channelId);
                const displayName = displayProfileName(char);
                const snapshot = {
                  id: channelId,
                  kind: "character",
                  sourceCharacterId: charId,
                  realName: String(char?.name || ""),
                  name: displayName,
                  handle: normalizeHandle(char?.handle || ""),
                  avatar: String(char?.avatar || initials(displayName)),
                  bio: String(char?.bio || ""),
                  banner: "",
                  followers: 0,
                  following: 0,
                  profileCustomized: false,
                  live: Boolean(existing?.live),
                  title: String(existing?.title || ""),
                  viewers: Number(existing?.viewers || 0)
                };
                if (existing) {
                  const custom = existing.profileCustomized ? {
                    name: existing.name, handle: existing.handle, avatar: existing.avatar,
                    bio: existing.bio, banner: existing.banner, followers: existing.followers,
                    following: existing.following, profileCustomized: true
                  } : {};
                  Object.assign(existing, snapshot, custom);
                } else state.channels.push(snapshot);
              }
            };

            const refreshRocheData = async ({ announce = false, sync = true } = {}) => {
              try {
                const [activePersona, personas, characters] = await Promise.all([
                  roche?.persona?.getActiveUserPersona?.(),
                  roche?.persona?.getUserPersonas?.(),
                  roche?.character?.list?.()
                ]);

                rocheRuntime.activePersona = activePersona || null;
                rocheRuntime.personas = safeArray(personas);
                rocheRuntime.characters = safeArray(characters);
                rocheRuntime.loaded = true;
                rocheRuntime.error = "";

                if (!state.rocheLink.ownerPersonaId && activePersona?.id != null) {
                  state.rocheLink.ownerPersonaId = String(activePersona.id);
                }
                if (sync) await syncLinkedChannelSnapshots();
                await persist();
                if (announce) toast("已重新读取 Roche 用户与角色");
                return true;
              } catch (err) {
                rocheRuntime.loaded = true;
                rocheRuntime.error = String(err?.message || err || "读取失败");
                console.warn("[Vela] failed to read Roche persona/characters", err);
                if (announce) toast("读取 Roche 用户或角色失败");
                return false;
              }
            };

            const linkCharacter = async (charId) => {
              const id = String(charId || "");
              if (!id) return;
              let char = rocheRuntime.characters.find(x => String(x?.id) === id) || null;
              try {
                const full = await roche?.character?.get?.(id);
                if (full) char = full;
              } catch (_) {}
              if (!char) {
                toast("没有读取到这个 Roche 角色");
                return;
              }

              if (!state.rocheLink.linkedCharacterIds.includes(id)) {
                state.rocheLink.linkedCharacterIds.push(id);
              }

              // 第一次加入真实 Roche 角色后，移除 Shell 演示角色。
              state.channels = state.channels.filter(ch => !ch.isDemo && !["char-aster", "char-noir"].includes(ch.id));

              const channelId = `roche-char-${id}`;
              const displayName = displayProfileName(char);
              const existing = state.channels.find(x => x.id === channelId);
              const snapshot = {
                id: channelId,
                kind: "character",
                sourceCharacterId: id,
                name: displayName,
                realName: String(char?.name || ""),
                handle: normalizeHandle(char?.handle || ""),
                avatar: String(char?.avatar || initials(displayName)),
                bio: String(char?.bio || ""),
                live: Boolean(existing?.live),
                title: String(existing?.title || ""),
                viewers: Number(existing?.viewers || 0)
              };
              if (existing) Object.assign(existing, snapshot);
              else state.channels.unshift(snapshot);

              if (!state.roleCommerce[id]) {
                state.roleCommerce[id] = { enabled: false, tendency: 35 };
              }

              await persist();
              rerender();
              toast(`${displayName} 已加入 Vela`);
            };

            const unlinkCharacter = async (charId) => {
              const id = String(charId || "");
              state.rocheLink.linkedCharacterIds = state.rocheLink.linkedCharacterIds.filter(x => String(x) !== id);
              state.channels = state.channels.filter(ch => String(ch.sourceCharacterId || "") !== id);
              await persist();
              rerender();
              toast("已从 Vela 移除角色频道");
            };

            const closeDrawer = () => {
              q('[data-role="drawer"]')?.classList.remove("is-open");
              q('[data-role="mask"]')?.classList.remove("is-open");
            };

            const switchPage = (page) => {
              state.activePage = page;
              qa(".v-page").forEach(el => el.classList.toggle("is-active", el.dataset.page === page));
              qa("[data-nav]").forEach(el => el.classList.toggle("is-active", el.dataset.nav === page));
            };

            const renderChannels = () => {
              const host = q('[data-role="channel-strip"]');
              host.innerHTML = state.channels.map(ch => `
                <button class="v-channel" data-action="open-channel" data-channel-id="${escapeHTML(ch.id)}">
                  <div class="v-avatar-wrap"><div class="v-avatar">${avatarHTML(ch.avatar, ch.name)}</div>${ch.live ? '<span class="v-live-dot">LIVE</span>' : ''}</div>
                  <div class="v-channel-name">${escapeHTML(ch.name)}</div>
                </button>`).join("") + `
                <button class="v-channel" data-action="open-roles"><div class="v-avatar-wrap"><div class="v-avatar">＋</div></div><div class="v-channel-name">添加角色</div></button>`;
            };

            const renderSchedule = () => {
              const host = q('[data-role="schedule"]');
              if (!state.schedule?.visible) { host.innerHTML = ""; return; }
              host.innerHTML = `<div class="v-schedule"><div class="v-schedule-top"><div><div class="v-kicker">即将开始 · 已加入日程</div><div class="v-schedule-time">${escapeHTML(state.schedule.dateText)}</div></div><span class="v-pill">${escapeHTML(state.schedule.type)}</span></div><div class="v-schedule-main"><div class="v-schedule-icon">M</div><div class="v-schedule-copy"><b>${escapeHTML(state.schedule.title)}</b><span>${escapeHTML(state.schedule.detail)}</span></div><button class="v-small-dark" data-action="open-message" data-message-id="biz-mellow">查看任务</button></div></div>`;
            };

            const renderHome = () => {
              const host = q('[data-role="home-feed"]');
              const cards = state.channels.map(ch => {
                const handleText = ch.handle ? ` · ${escapeHTML(ch.handle)}` : "";
                if (ch.live) {
                  return `<article class="v-card"><div class="v-author"><div class="v-mini">${avatarHTML(ch.avatar, ch.name)}</div><div class="v-meta"><div class="v-name">${escapeHTML(ch.name)}${handleText}</div><div class="v-sub">正在直播${ch.sourceCharacterId ? " · Roche 角色频道" : ""}</div></div><div>•••</div></div><button class="v-stage" data-action="open-live" data-live-id="${escapeHTML(ch.id)}"><div class="v-stage-copy"><span class="v-badge">LIVE</span><div class="v-live-title">${escapeHTML(ch.title || "正在直播")}</div><div class="v-viewers">${formatViewers(ch.viewers || 0)} 人正在观看</div></div></button></article>`;
                }
                return `<article class="v-card"><div class="v-author"><div class="v-mini">${avatarHTML(ch.avatar, ch.name)}</div><div class="v-meta"><div class="v-name">${escapeHTML(ch.name)}${handleText}</div><div class="v-sub">${ch.sourceCharacterId ? "已连接 Roche 角色" : "已关注频道"}</div></div><button class="v-action light" data-action="open-channel" data-channel-id="${escapeHTML(ch.id)}">主页</button></div>${ch.bio ? `<div class="v-posttext">${escapeHTML(ch.bio)}</div>` : ""}${ch.sourceCharacterId ? `<p class="v-hint">角色频道已经链接成功。下一阶段接入 AI 后，这里会出现角色生成的直播、贴文与社群动态。</p>` : ""}</article>`;
              }).join("");

              host.innerHTML = cards || `<div class="v-empty">还没有加入任何角色频道。<br><button class="v-action" style="margin-top:12px" data-action="open-roles">从 Roche 添加角色</button></div>`;
            };

            const renderRecommended = () => {
              q('[data-role="recommended"]').innerHTML = state.recommendedLives.map(live => `
                <article class="v-card v-rec-card">
                  <button class="v-rec-cover" data-action="open-recommended-live" data-rec-id="${escapeHTML(live.id)}" style="border:0;width:100%;text-align:left">
                    <div><span class="v-badge">LIVE</span><div class="v-live-title">${escapeHTML(live.title)}</div><div class="v-viewers">${formatViewers(live.viewers)} 人正在观看 · ${escapeHTML(live.category)}</div></div>
                  </button>
                  <div class="v-rec-body"><div class="v-mini">${escapeHTML(live.avatar)}</div><div class="v-meta"><div class="v-name">${escapeHTML(live.handle)}</div><div class="v-sub">点直播间直接看正在播什么</div></div><button class="v-follow ${live.followed ? "is-on" : ""}" data-action="follow-rec" data-rec-id="${escapeHTML(live.id)}">${live.followed ? "已关注" : "关注"}</button></div>
                </article>`).join("");
            };

            const renderMessages = () => {
              q('[data-role="messages"]').innerHTML = state.messages.map(msg => `
                <button class="v-msg" data-action="open-message" data-message-id="${escapeHTML(msg.id)}"><div class="v-mini">${avatarHTML(msg.avatar, msg.name)}</div><div class="v-meta"><div class="v-name">${escapeHTML(msg.name)}${msg.badge ? `<span class="v-biz">${escapeHTML(msg.badge)}</span>` : ""}</div><div class="v-preview">${escapeHTML(msg.preview)}</div></div>${msg.unread ? `<span class="v-unread">${msg.unread}</span>` : ""}</button>`).join("");
            };

            const renderWallet = () => {
              q('[data-role="balance"]').textContent = `¥ ${Number(state.wallet.balance || 0).toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
              q('[data-role="transactions"]').innerHTML = state.wallet.transactions.map(tx => `<div class="v-tx"><span>${escapeHTML(tx.title)}<small>${escapeHTML(tx.note)}</small></span><b>${formatMoney(tx.amount)}</b></div>`).join("");
            };

            const openScreen = (name, html) => {
              const screen = q(`[data-screen="${name}"]`);
              if (!screen) return;
              screen.innerHTML = html;
              screen.classList.add("is-open");
            };

            const closeScreen = (name) => {
              q(`[data-screen="${name}"]`)?.classList.remove("is-open");
            };

            const openLive = (live) => {
              state.liveSession = live;
              const title = live.title || "正在直播";
              const hostName = live.name || live.handle || "主播";
              openScreen("live", `<div class="v-live-screen" style="min-height:100%"><header class="v-subhead"><button data-action="leave-live">×</button><div class="v-meta"><strong>${escapeHTML(hostName)}</strong><div class="v-hint" style="color:#aaa">${formatViewers(live.viewers || 0)} 人正在观看</div></div><button class="v-small-dark" data-action="gift-demo">🎁</button></header><div class="v-live-body"><div class="v-live-stage"><div class="v-live-stage-copy"><span class="v-badge">LIVE</span><h2>${escapeHTML(title)}</h2><p>${escapeHTML(live.category || "直播进行中")}</p></div></div><div class="v-chat-panel"><div class="v-chat-title">实时聊天</div><div data-role="live-chat-lines"></div><div class="v-composer"><input data-role="live-input" placeholder="发送消息…" maxlength="120"><button data-action="gift-demo">🎁</button><button data-action="send-live-chat">➤</button></div><button class="v-continue" data-action="continue-live">↻ 继续观看直播</button></div></div></div>`);
              renderLiveChatLines();
            };

            const renderLiveChatLines = () => {
              const host = q('[data-screen="live"] [data-role="live-chat-lines"]');
              if (!host) return;
              host.innerHTML = state.liveChat.slice(-8).map(line => `<div class="v-chatline"><b>${escapeHTML(line.user)}</b><span>${escapeHTML(line.text)}</span></div>`).join("");
            };

            const getProfileEntity = (ownerType, id) => {
              if (ownerType === "identity") return state.identities.find(x => String(x.id) === String(id)) || null;
              return state.channels.find(x => String(x.id) === String(id)) || null;
            };

            const profileName = (entity, ownerType) => ownerType === "identity"
              ? String(entity?.displayName || "Vela User")
              : String(entity?.name || "频道");

            const renderProfileTab = (ownerType, id, tab = "live") => {
              const entity = getProfileEntity(ownerType, id);
              const host = q('[data-screen="profile"] [data-role="profile-tab-body"]');
              if (!entity || !host) return;
              qa('[data-screen="profile"] [data-profile-tab]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.profileTab === tab));
              if (tab === "live") {
                if (entity.live) {
                  host.innerHTML = `<article class="v-card"><button class="v-stage" data-action="open-live" data-live-id="${escapeHTML(entity.id)}"><div class="v-stage-copy"><span class="v-badge">LIVE</span><div class="v-live-title">${escapeHTML(entity.title || "正在直播")}</div><div class="v-viewers">${formatViewers(entity.viewers || 0)} 人正在观看</div></div></button></article>`;
                } else {
                  host.innerHTML = `<div class="v-profile-empty">当前没有正在直播。<br>以后预约直播也会出现在这里。</div>`;
                }
              } else if (tab === "replays") {
                host.innerHTML = `<article class="v-card"><div class="v-name">周末晚上，随便聊会儿</div><div class="v-sub">8 月 31 日 21:06–23:18 · 2小时12分</div><div class="v-postimg" style="height:135px">▶</div><div class="v-engage"><span>最高 1.6 万人观看</span><span>直播回放</span></div></article>`;
              } else {
                host.innerHTML = `<article class="v-card"><div class="v-name">频道社群</div><p class="v-posttext">这里是频道自己的粉丝社群。后续加入时可以选择用哪个 Vela 身份进入。</p><button class="v-action light" data-action="noop">社群功能稍后接入</button></article>`;
              }
            };

            const openProfile = (ownerType, id) => {
              const entity = getProfileEntity(ownerType, id);
              if (!entity) return;
              const name = profileName(entity, ownerType);
              const handle = normalizeHandle(entity.handle || "") || "@vela";
              const banner = String(entity.banner || "");
              const bannerHTML = isImageURL(banner) ? `<img src="${escapeHTML(banner)}" alt="">` : "";
              openScreen("profile", `<div class="v-profile-shell"><header class="v-subhead"><button data-action="close-screen" data-screen-name="profile">‹</button><div class="v-meta"><strong>${escapeHTML(name)}</strong><div class="v-hint">${ownerType === "identity" ? "我的 Vela 主页" : "角色频道主页"}</div></div><button class="v-head-action" data-action="edit-profile" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">编辑主页</button></header><div class="v-profile-banner">${bannerHTML}</div><div class="v-profile-info"><div class="v-profile-avatar">${avatarHTML(entity.avatar || "", name)}</div><div class="v-profile-main"><div class="v-profile-maincopy"><h2>${escapeHTML(name)}</h2><div class="v-profile-handle">${escapeHTML(handle)}</div></div></div><div class="v-profile-stats"><span><b>${Number(entity.followers || 0).toLocaleString("zh-CN")}</b> 粉丝</span><span><b>${Number(entity.following || 0).toLocaleString("zh-CN")}</b> 关注</span></div>${entity.bio ? `<div class="v-profile-bio">${escapeHTML(entity.bio)}</div>` : ""}${entity.sourceCharacterId ? `<div class="v-linkstatus"><span class="v-dot on"></span>已关联 Roche 角色</div>` : ""}</div><div class="v-profile-tabs"><button class="is-active" data-action="profile-tab" data-profile-tab="live" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">直播</button><button data-action="profile-tab" data-profile-tab="replays" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">回放</button><button data-action="profile-tab" data-profile-tab="community" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">社群</button></div><div class="v-profile-tabbody" data-role="profile-tab-body"></div></div>`);
              renderProfileTab(ownerType, entity.id, "live");
            };

            const openUserProfile = () => openProfile("identity", state.viewerIdentityId);
            const openChannel = (channel) => openProfile("channel", channel.id);

            const openProfileEditor = (ownerType, id) => {
              const entity = getProfileEntity(ownerType, id);
              if (!entity) return;
              const name = profileName(entity, ownerType);
              openScreen("profile-edit", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="profile-edit">‹</button><div class="v-meta"><strong>编辑主页</strong><div class="v-hint">${escapeHTML(name)} · 只影响 Vela 展示</div></div><button class="v-head-action" data-action="save-profile" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">保存</button></header><div class="v-subbody"><div class="v-card"><div class="v-editform"><div class="v-field"><label>主页背景图片 URL</label><input data-edit-field="banner" value="${escapeHTML(entity.banner || "")}" placeholder="https://..."></div><div class="v-field"><label>头像 URL / 文字占位</label><input data-edit-field="avatar" value="${escapeHTML(entity.avatar || "")}" placeholder="https://... 或 NN"></div><div class="v-field"><label>昵称</label><input data-edit-field="name" value="${escapeHTML(name)}" maxlength="40"></div><div class="v-field"><label>账号 @ID</label><input data-edit-field="handle" value="${escapeHTML(entity.handle || "")}" maxlength="40" placeholder="@vela_name"></div><div class="v-fieldpair"><div class="v-field"><label>粉丝数</label><input data-edit-field="followers" type="number" min="0" step="1" value="${Number(entity.followers || 0)}"></div><div class="v-field"><label>关注数</label><input data-edit-field="following" type="number" min="0" step="1" value="${Number(entity.following || 0)}"></div></div><div class="v-field"><label>签名 / 简介</label><textarea data-edit-field="bio" maxlength="300" placeholder="写点主页介绍…">${escapeHTML(entity.bio || "")}</textarea></div></div></div><p class="v-hint">角色主页的这些展示资料属于 Vela 自定义内容，不会反向修改 Roche 原角色资料。</p></div>`);
            };

            const saveProfileEditor = async (ownerType, id) => {
              const entity = getProfileEntity(ownerType, id);
              if (!entity) return;
              const screen = q('[data-screen="profile-edit"]');
              const get = (field) => screen?.querySelector(`[data-edit-field="${field}"]`)?.value ?? "";
              const name = String(get("name") || "").trim() || profileName(entity, ownerType);
              const handle = normalizeHandle(get("handle"));
              const followers = Math.max(0, Math.floor(Number(get("followers") || 0)));
              const following = Math.max(0, Math.floor(Number(get("following") || 0)));
              if (ownerType === "identity") entity.displayName = name;
              else entity.name = name;
              entity.handle = handle;
              entity.avatar = String(get("avatar") || "").trim() || initials(name);
              entity.banner = String(get("banner") || "").trim();
              entity.bio = String(get("bio") || "").trim();
              entity.followers = Number.isFinite(followers) ? followers : 0;
              entity.following = Number.isFinite(following) ? following : 0;
              if (ownerType === "channel") entity.profileCustomized = true;
              await persist();
              mountMarkup(root, state);
              rerender();
              switchPage(state.activePage || "home");
              openProfile(ownerType, id);
              toast("主页已保存");
            };

            const openSettingsNote = (kind) => {
              const map = {
                presets: { title: "生成预设", text: "这里以后放用户可编辑的生成规则：直播内容与主播表现、观众弹幕、推荐直播、私信/商业合作、贴文与社群。平台会内置一套默认预设，用户也可以自己改。" },
                appearance: { title: "外观设置", text: "主页装饰已经归到每个账号/角色自己的“编辑主页”里，所以这里仅保留 Vela 全局外观，例如明暗主题、界面密度、卡片圆角、直播间显示风格。" },
                platform: { title: "平台设置", text: "这里以后放整个平台的运行选项，例如推荐刷新数量、陌生商务私信是否出现、平台活跃度、通知与数据清理。不会放角色个人主页设置。" },
                memory: { title: "记忆互通", text: "这一项按计划最后再接。以后用于读取主聊天记忆、重要直播事件回传，以及是否让主聊天知道 Vela 的近期状态。" }
              };
              const item = map[kind] || map.platform;
              openScreen("settings", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="settings">‹</button><div class="v-meta"><strong>${escapeHTML(item.title)}</strong><div class="v-hint">功能规划</div></div></header><div class="v-subbody"><div class="v-card"><p class="v-settings-note" style="margin:0">${escapeHTML(item.text)}</p></div></div>`);
            };

            const openMessage = (id) => {
              const msg = state.messages.find(x => x.id === id);
              if (!msg) return;
              if (id === "biz-mellow") {
                openScreen("message", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="message">‹</button><div><strong>Mellow Studio</strong><div class="v-hint">合作邀约</div></div></header><div class="v-subbody"><div class="v-card"><p style="margin-top:0">你好，我们想邀请你的频道在 9/12 的直播中展示新品，并挂一个合作链接。</p><div class="v-row"><div><b>合作直播</b><small>9/12 · 20:00</small></div><span class="v-pill" style="background:#111;color:#fff">已排期</span></div><div class="v-row"><div><b>定金</b><small>确认后预付</small></div><b>¥800</b></div><div class="v-row"><div><b>尾款</b><small>完成任务后结算</small></div><b>¥2,400</b></div><button class="v-action" data-action="biz-demo">查看合作任务</button></div></div>`);
              } else {
                openScreen("message", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="message">‹</button><div><strong>${escapeHTML(msg.name)}</strong><div class="v-hint">Vela 私信</div></div></header><div class="v-subbody"><div class="v-card"><p>${escapeHTML(msg.preview)}</p><p class="v-hint">正式版这里会接入角色主动私信、匿名身份试探和账号认知状态。</p></div></div>`);
              }
            };

            const openIdentities = () => {
              const ownerId = String(state.rocheLink?.ownerPersonaId || "");
              const owner = rocheRuntime.personas.find(p => String(p?.id) === ownerId) ||
                (String(rocheRuntime.activePersona?.id || "") === ownerId ? rocheRuntime.activePersona : null);
              const rocheStatus = rocheRuntime.error
                ? `读取失败：${escapeHTML(rocheRuntime.error)}`
                : rocheRuntime.loaded ? "已读取 Roche 用户资料" : "正在读取 Roche";

              const identitiesHTML = state.identities.map(item => {
                const active = state.viewerIdentityId === item.id;
                return `<div class="v-identity-card"><div class="v-author"><div class="v-mini">${avatarHTML(item.avatar || "", item.displayName)}</div><div class="v-meta"><div class="v-name">${escapeHTML(item.displayName || "Vela User")}</div><div class="v-sub">${escapeHTML(item.handle || "@vela")} · ${item.isAnonymous ? "匿名身份" : "公开身份"}</div></div>${active ? '<span class="v-pill" style="background:#111;color:#fff">当前</span>' : ''}</div><div class="v-identity-actions"><button class="v-action light" data-action="open-profile-by-id" data-owner-type="identity" data-owner-id="${escapeHTML(item.id)}">主页</button><button class="v-action light" data-action="edit-profile" data-owner-type="identity" data-owner-id="${escapeHTML(item.id)}">编辑主页</button>${active ? '' : `<button class="v-action" data-action="switch-identity" data-identity-id="${escapeHTML(item.id)}">切换到此身份</button>`}</div></div>`;
              }).join("");

              const personaRows = rocheRuntime.personas.map(p => {
                const id = String(p?.id || "");
                const name = displayProfileName(p);
                const selected = ownerId === id;
                return `<div class="v-roche-persona"><div class="v-mini">${avatarHTML(p?.avatar || "", name)}</div><div class="v-meta"><div class="v-name">${escapeHTML(name)}</div><div class="v-sub">${selected ? "当前后台主体" : "Roche 用户身份"}</div></div><button class="v-action ${selected ? "light" : ""}" data-action="bind-owner-persona" data-persona-id="${escapeHTML(id)}">${selected ? "已关联" : "关联"}</button></div>`;
              }).join("");

              openScreen("identities", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="identities">‹</button><div class="v-meta"><strong>身份与账号</strong><div class="v-hint">先管理你在 Vela 里真正使用的身份</div></div><button class="v-head-action" data-action="refresh-roche">刷新</button></header><div class="v-subbody">
                <div class="v-card"><b>我的 Vela 身份</b><p class="v-hint">当前身份决定你用哪个账号看直播、发弹幕、私信和开播。每个身份都有自己的主页。</p>${identitiesHTML}</div>
                <div class="v-roche-compact"><div class="v-author"><div class="v-meta"><div class="v-name">Roche 后台关联</div><div class="v-sub">${rocheStatus}${owner ? ` · 当前：${escapeHTML(displayProfileName(owner))}` : ""}</div></div></div><p class="v-hint">这里仅决定后台归属，不会自动公开 Roche 用户资料。</p>${personaRows || '<div class="v-hint">没有读取到 Roche 用户身份。</div>'}${owner ? `<button class="v-action light" style="margin-top:10px" data-action="create-identity-from-persona" data-persona-id="${escapeHTML(String(owner.id || ""))}">用当前 Roche 资料新建 Vela 身份</button>` : ""}</div>
              </div>`);
            };

            const openRoles = () => {
              const linkedIds = new Set(safeArray(state.rocheLink?.linkedCharacterIds).map(String));
              const status = rocheRuntime.error
                ? `<div class="v-linkstatus"><span class="v-dot"></span>读取失败：${escapeHTML(rocheRuntime.error)}</div>`
                : `<div class="v-linkstatus"><span class="v-dot ${rocheRuntime.loaded ? "on" : ""}"></span>${rocheRuntime.loaded ? `已读取 ${rocheRuntime.characters.length} 个 Roche 角色` : "正在读取 Roche 角色"}</div>`;

              const rows = rocheRuntime.characters.length ? rocheRuntime.characters.map(char => {
                const id = String(char?.id || "");
                const name = displayProfileName(char);
                const linked = linkedIds.has(id);
                const cfg = state.roleCommerce[id] || { enabled: false, tendency: 35 };
                const channel = state.channels.find(x => String(x.sourceCharacterId || "") === id);
                return `<div class="v-rolecard"><div class="v-author"><div class="v-mini">${avatarHTML(char?.avatar || "", name)}</div><div class="v-meta"><div class="v-name">${escapeHTML(name)}</div><div class="v-sub">${escapeHTML(char?.name || "")}${char?.handle ? ` · ${escapeHTML(normalizeHandle(char.handle))}` : ""}</div></div><button class="v-action ${linked ? "light" : ""}" data-action="${linked ? "unlink-roche-character" : "link-roche-character"}" data-character-id="${escapeHTML(id)}">${linked ? "移除" : "加入 Vela"}</button></div>${linked ? `<div class="v-role-actions"><button class="v-action" data-action="edit-profile" data-owner-type="channel" data-owner-id="${escapeHTML(channel?.id || `roche-char-${id}`)}">编辑主页</button><button class="v-action light" data-action="open-profile-by-id" data-owner-type="channel" data-owner-id="${escapeHTML(channel?.id || `roche-char-${id}`)}">查看主页</button></div><div class="v-row"><div><b>角色自主商业合作</b><small>关闭后这个角色可以纯玩，不会被系统主动塞商业任务。</small></div><button class="v-action ${cfg.enabled ? "" : "light"}" data-action="toggle-role-commerce" data-character-id="${escapeHTML(id)}">${cfg.enabled ? "已开启" : "已关闭"}</button></div><div class="v-row"><div style="width:100%"><b>自主接单倾向 · <span data-role="commerce-value" data-character-id="${escapeHTML(id)}">${Number(cfg.tendency || 0)}%</span></b><small>以后由 AI 结合人设判断，不是硬概率。</small><input data-role="commerce-range" data-character-id="${escapeHTML(id)}" type="range" min="0" max="100" value="${Number(cfg.tendency || 0)}" style="width:100%;margin-top:10px;accent-color:#111"></div></div><div class="v-row"><div><b>第二频道 / 小号</b><small>默认不创建，后续可以手动设计或让 AI 根据人设生成。</small></div><button class="v-action light" data-action="noop">设置</button></div>` : ""}</div>`;
              }).join("") : `<div class="v-empty">没有读取到 Roche 角色。<br>可以先点右上角“刷新”。</div>`;

              openScreen("roles", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="roles">‹</button><div class="v-meta"><strong>角色与频道管理</strong><div class="v-hint">引入 Roche 角色后，在这里管理主页与商业合作</div></div><button class="v-head-action" data-action="refresh-roche-roles">刷新</button></header><div class="v-subbody"><div class="v-card"><p class="v-hint" style="margin-top:0">加入角色后可以直接编辑他的 Vela 主页；主页装饰只保存在 Vela，不会修改 Roche 原人设资料。</p>${status}${rows}</div></div>`);
            };

            const rerender = () => {
              renderChannels();
              renderSchedule();
              renderHome();
              renderRecommended();
              renderMessages();
              renderWallet();
            };

            await refreshRocheData({ announce: false, sync: true });
            rerender();

            root.addEventListener("click", async (event) => {
              const button = event.target.closest("button,[data-action]");
              if (!button || !root.contains(button)) return;

              if (button.dataset.nav) {
                switchPage(button.dataset.nav);
                return;
              }

              const action = button.dataset.action;
              if (!action) return;

              if (action === "open-drawer") {
                q('[data-role="drawer"]')?.classList.add("is-open");
                q('[data-role="mask"]')?.classList.add("is-open");
              } else if (action === "close-drawer") {
                closeDrawer();
              } else if (action === "exit-vela") {
                closeDrawer();
                try {
                  await roche?.ui?.closeApp?.();
                } catch (err) {
                  console.warn("[Vela] closeApp failed", err);
                  toast("退出失败，请从 Roche 返回");
                }
              } else if (action === "open-publish") {
                q('[data-role="publish-sheet"]')?.classList.add("is-open");
              } else if (action === "sheet-bg-close" && event.target === button) {
                q('[data-role="publish-sheet"]')?.classList.remove("is-open");
              } else if (action === "open-channel") {
                const channel = state.channels.find(x => x.id === button.dataset.channelId);
                if (channel) openChannel(channel);
              } else if (action === "open-live") {
                const channel = state.channels.find(x => x.id === button.dataset.liveId);
                if (channel) openLive({ ...channel, category: "角色频道直播" });
              } else if (action === "open-recommended-live") {
                const live = state.recommendedLives.find(x => x.id === button.dataset.recId);
                if (live) openLive(live);
              } else if (action === "follow-rec") {
                const live = state.recommendedLives.find(x => x.id === button.dataset.recId);
                if (live) {
                  live.followed = !live.followed;
                  if (live.followed && !state.channels.some(x => x.id === live.id)) {
                    state.channels.push({ id: live.id, kind: "recommended", name: live.name, handle: live.handle, avatar: live.avatar, live: true, title: live.title, viewers: live.viewers });
                  }
                  renderRecommended(); renderChannels(); await persist();
                }
              } else if (action === "leave-live") {
                closeScreen("live");
                toast("已退出直播间，主播仍可能继续直播");
              } else if (action === "continue-live") {
                const samples = [
                  { user: "Jia", text: "刚才那句话我笑了好久。" },
                  { user: "sleepycat", text: "主播刚刚是不是看到了那条弹幕？" },
                  { user: "익명", text: "今天比平时安静一点。" },
                  { user: "Mika", text: "keep going, this is nice" }
                ];
                state.liveChat.push(samples[Math.floor(Math.random() * samples.length)]);
                renderLiveChatLines(); await persist();
              } else if (action === "send-live-chat") {
                const input = q('[data-screen="live"] [data-role="live-input"]');
                const text = String(input?.value || "").trim();
                if (!text) { toast("先输入一条弹幕，或点「继续观看直播」"); return; }
                const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
                state.liveChat.push({ user: identity?.handle || "@user", text });
                input.value = "";
                state.liveChat.push({ user: "viewer_7", text: "主播会不会看到刚才那条？" });
                renderLiveChatLines(); await persist();
              } else if (action === "gift-demo") {
                toast("礼物面板将在业务版接入钱包余额");
              } else if (action === "open-message") {
                openMessage(button.dataset.messageId);
              } else if (action === "close-screen") {
                closeScreen(button.dataset.screenName);
              } else if (action === "open-user-profile") {
                closeDrawer(); openUserProfile();
              } else if (action === "open-profile-by-id") {
                openProfile(button.dataset.ownerType || "identity", button.dataset.ownerId || "");
              } else if (action === "edit-profile") {
                openProfileEditor(button.dataset.ownerType || "identity", button.dataset.ownerId || "");
              } else if (action === "save-profile") {
                await saveProfileEditor(button.dataset.ownerType || "identity", button.dataset.ownerId || "");
              } else if (action === "profile-tab") {
                renderProfileTab(button.dataset.ownerType || "identity", button.dataset.ownerId || "", button.dataset.profileTab || "live");
              } else if (action === "settings-note") {
                closeDrawer(); openSettingsNote(button.dataset.settingsKind || "platform");
              } else if (action === "open-identities") {
                closeDrawer(); openIdentities();
              } else if (action === "open-roles") {
                closeDrawer(); openRoles();
              } else if (action === "refresh-roche") {
                await refreshRocheData({ announce: true, sync: true });
                openIdentities();
                rerender();
              } else if (action === "refresh-roche-roles") {
                await refreshRocheData({ announce: true, sync: true });
                openRoles();
                rerender();
              } else if (action === "bind-owner-persona") {
                state.rocheLink.ownerPersonaId = String(button.dataset.personaId || "");
                await persist();
                openIdentities();
                toast("已链接 Roche 后台用户主体，不会公开资料");
              } else if (action === "create-identity-from-persona") {
                const personaId = String(button.dataset.personaId || "");
                const persona = rocheRuntime.personas.find(p => String(p?.id) === personaId) ||
                  (String(rocheRuntime.activePersona?.id || "") === personaId ? rocheRuntime.activePersona : null);
                if (!persona) {
                  toast("没有读取到这份 Roche 用户资料");
                } else {
                  const existing = state.identities.find(x => String(x.sourcePersonaId || "") === personaId);
                  if (existing) {
                    state.viewerIdentityId = existing.id;
                    await persist();
                    mountMarkup(root, state); rerender(); switchPage(state.activePage || "home");
                    toast("这个公开身份已经存在，已切换");
                  } else {
                    const name = displayProfileName(persona);
                    const cleanId = personaId.replace(/[^a-zA-Z0-9_-]/g, "").slice(-12) || Math.random().toString(36).slice(2, 8);
                    const handle = normalizeHandle(persona?.handle || "") || `@vela_${cleanId.slice(-6)}`;
                    const item = {
                      id: `persona-${cleanId}`,
                      type: "public",
                      sourcePersonaId: personaId,
                      displayName: name,
                      handle,
                      avatar: String(persona?.avatar || initials(name)),
                      bio: String(persona?.bio || ""),
                      isAnonymous: false
                    };
                    state.identities.push(item);
                    state.viewerIdentityId = item.id;
                    await persist();
                    mountMarkup(root, state); rerender(); switchPage(state.activePage || "home");
                    toast("已用 Roche 资料创建公开 Vela 身份");
                  }
                }
              } else if (action === "link-roche-character") {
                await linkCharacter(button.dataset.characterId);
                openRoles();
              } else if (action === "unlink-roche-character") {
                await unlinkCharacter(button.dataset.characterId);
                openRoles();
              } else if (action === "switch-identity") {
                state.viewerIdentityId = button.dataset.identityId;
                await persist();
                mountMarkup(root, state); rerender(); switchPage(state.activePage || "home"); toast("身份已切换");
              } else if (action === "add-demo-identity") {
                if (!state.identities.some(x => x.id === "public-main")) {
                  state.identities.push({ id: "public-main", type: "public", displayName: "Nini Daily", handle: "@nini_daily", avatar: "ND", bio: "公开频道", banner: "", followers: 0, following: 0, isAnonymous: false });
                  await persist(); openIdentities();
                } else toast("示例公开身份已经存在");
              } else if (action === "toggle-role-commerce") {
                const charId = String(button.dataset.characterId || "");
                const cfg = state.roleCommerce[charId] || (state.roleCommerce[charId] = { enabled: false, tendency: 35 });
                cfg.enabled = !cfg.enabled; await persist(); openRoles();
              } else if (action === "channel-replays") {
                const host = q('[data-screen="channel"] [data-role="channel-tab-body"]');
                if (host) host.innerHTML = `<article class="v-card"><div class="v-name">周末晚上，随便聊会儿</div><div class="v-sub">8 月 31 日 21:06–23:18 · 2小时12分</div><div class="v-postimg" style="height:135px">▶</div><div class="v-engage"><span>最高 1.6 万人观看</span><span>直播回放</span></div></article>`;
              } else if (action === "channel-community") {
                const host = q('[data-screen="channel"] [data-role="channel-tab-body"]');
                if (host) host.innerHTML = `<article class="v-card"><div class="v-name">频道社群</div><p class="v-posttext">默认并未加入。正式版进入时可以选择用哪个 Vela 身份加入，匿名号也可以单独加入。</p><button class="v-action" data-action="noop">加入社群</button></article>`;
              } else if (action === "start-own-live") {
                q('[data-role="publish-sheet"]')?.classList.remove("is-open");
                const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
                openLive({ id: "own-live", name: identity?.displayName || "我的频道", handle: identity?.handle || "@me", title: "我的直播间", category: "主播控制台 Shell", viewers: 357 });
              } else if (action === "wallet-demo" || action === "biz-demo" || action === "noop") {
                toast("这个入口会在下一阶段接真实业务逻辑");
              }
            });

            root.addEventListener("input", async (event) => {
              const input = event.target;
              if (input?.matches?.('[data-role="commerce-range"]')) {
                const value = Math.max(0, Math.min(100, Number(input.value || 0)));
                const charId = String(input.dataset.characterId || "");
                const cfg = state.roleCommerce[charId] || (state.roleCommerce[charId] = { enabled: true, tendency: value });
                cfg.tendency = value;
                const label = qa('[data-screen="roles"] [data-role="commerce-value"]').find(el => String(el.dataset.characterId || "") === charId);
                if (label) label.textContent = `${value}%`;
                await persist();
              }
            });
          },
          async unmount(container) {
            container.replaceChildren();
          }
        }
      ]
    });
  }

  registerApp();
})();
