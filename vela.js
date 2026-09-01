(() => {
  const PLUGIN_ID = "vela-live";
  const APP_ID = "vela-live-home";
  const VERSION = "0.1.11";

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

  const VELA_DEFAULT_PRESET = `Vela 是一个以频道、直播、贴文、社群与私信为核心的虚拟创作者平台。生成内容时优先遵循当前账号设定、角色人设、账号公开程度、直播内容方向、粉丝画像，以及已经发生过的平台事件。

绝对禁止扮演 user。不得替 user 发言、替 user 发送弹幕、替 user 私信、替 user 做选择或决定 user 的心理与行为。只有 user 明确输入或操作过的内容，才视为 user 的行为。

后台知道的真实身份关系不等于角色或平台网友知道。角色与网友只能依据他们实际掌握的公开信息和线索进行判断；匿名或不露脸账号可以被怀疑、猜测或认错，但不能无依据直接识破。

直播应保持连续推进，不要每次生成都像重新开播。user 发弹幕时主播可以看到并回应，也可以自然略过；user 只选择继续观看时，只推进主播行为、话题和观众互动，不强制让主播与 user 对话。

观众弹幕应有差异，参考频道粉丝画像，不要所有网友都像同一个人。频道、角色和平台账号应有自己的活动，不要永远围绕 user 运转。商业邀约、私信与推荐内容要符合频道规模和内容方向，避免高频、重复或无缘由出现。`;

  function createDefaultState() {
    return {
      activePage: "home",
      homeFilter: "all",
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
          accountRole: "alias",
          faceMode: "hidden",
          identityVisibility: "hidden",
          contentStyle: "",
          fanProfile: "",
          scheduledLive: null,
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
          accountRole: "primary",
          faceMode: "mixed",
          identityVisibility: "partial",
          contentStyle: "",
          fanProfile: "",
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
          accountRole: "primary",
          faceMode: "mixed",
          identityVisibility: "partial",
          contentStyle: "",
          fanProfile: "",
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
        visible: false,
        source: "",
        messageId: "",
        dateText: "",
        title: "",
        detail: "",
        type: ""
      },
      businessDeals: {
        "biz-mellow": {
          accepted: false,
          expanded: false,
          brandName: "Mellow Studio",
          brandStyle: "极简生活方式 · 香氛与桌面美学",
          productName: "Cloud Mist 香氛机",
          productDescription: "主打柔和雾化与安静桌面场景的小型香氛机，希望在自然聊天过程中完成一次真实使用展示。",
          dateText: "9/12 · 20:00",
          deliverables: "直播中自然展示产品一次，并挂合作链接",
          deposit: 800,
          balance: 2400
        }
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
          preview: "Mellow Studio · Cloud Mist 香氛机合作邀约",
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
      communityPosts: [],
      postReplies: {
        "home-sample-post": [
          { user: "yoo_n", avatar: "Y", text: "조명 바뀌면 분위기 진짜 달라질 듯", translation: "换了灯光以后氛围应该真的会完全不一样。" },
          { user: "Sato_Aki", avatar: "S", text: "次の配信も楽しみにしてる", translation: "也很期待下一次直播。" },
          { user: "Mika", avatar: "M", text: "the room already looks cozy", translation: "这个房间现在看起来已经很舒服了。" }
        ]
      },
      postOverrides: {},
      liveSession: null,
      liveProgress: {},
      liveStats: {},
      roleCommerce: {
        "char-aster": { enabled: true, tendency: 35 }
      },
      generationPreset: {
        mode: "default",
        customText: ""
      },
      appearance: {
        darkMode: false,
        topbarHeight: 62,
        bottombarHeight: 78
      },
      platformSettings: {
        recommendationCount: 3,
        allowBusinessDM: true,
        activityLevel: 50
      },
      liveChat: [
        { user: "yoo_n", avatar: "Y", text: "목소리 들으니까 진짜 편해진다. 오늘 얼마나 할 거야?", translation: "听到你的声音真的很放松。今晚会播多久？" },
        { user: "Sato_Aki", avatar: "S", text: "今来た。今日はいつもより静かな感じだね", translation: "刚进来。今天感觉比平时安静一点。" },
        { user: "Mika", avatar: "M", text: "What song are you listening to? It sounds nice", translation: "你在听什么歌？听起来很好听。" }
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
.vela-roche{--v-bg:#f6f6f8;--v-card:#fff;--v-text:#111116;--v-muted:#7c7c86;--v-line:#e8e8ed;--v-soft:#efeff3;--v-live:#ff415d;--v-top-h:62px;--v-bottom-h:78px;position:relative;width:100%;height:100%;min-height:0;background:var(--v-bg);color:var(--v-text);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;-webkit-tap-highlight-color:transparent;isolation:isolate}
.vela-roche *{box-sizing:border-box}.vela-roche button,.vela-roche input,.vela-roche textarea{font:inherit}.vela-roche button{cursor:pointer}.vela-roche .v-top{position:absolute;z-index:20;left:0;right:0;top:0;height:var(--v-top-h);padding:0 14px;display:flex;align-items:center;justify-content:space-between;background:rgba(246,246,248,.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(0,0,0,.035)}
.vela-roche .v-brand{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:900}.vela-roche .v-logo{width:28px;height:28px;border-radius:10px;background:#111;color:#fff;display:grid;place-items:center;font-size:13px}.vela-roche .v-plainbtn{width:42px;height:42px;border:0;border-radius:14px;background:#fff;color:#111;font-size:19px;display:grid;place-items:center}.vela-roche .v-top-actions{display:flex;gap:7px}
.vela-roche .v-main{position:absolute;inset:var(--v-top-h) 0 calc(var(--v-bottom-h) + env(safe-area-inset-bottom,0px));overflow:auto;overscroll-behavior:contain;padding:12px 14px 24px;-webkit-overflow-scrolling:touch}.vela-roche .v-page{display:none}.vela-roche .v-page.is-active{display:block}.vela-roche .v-title{display:flex;justify-content:space-between;align-items:flex-end;margin:5px 2px 13px;font-size:22px;font-weight:900}.vela-roche .v-title small{font-size:11px;color:var(--v-muted);font-weight:700}
.vela-roche .v-channels{display:flex;gap:12px;overflow-x:auto;padding:2px 0 11px;scrollbar-width:none}.vela-roche .v-channels::-webkit-scrollbar{display:none}.vela-roche .v-channel{width:64px;flex:0 0 auto;text-align:center;border:0;background:none;color:inherit;padding:0}.vela-roche .v-avatar-wrap{position:relative;width:58px;height:58px;border-radius:50%;padding:2px;background:linear-gradient(135deg,#111,#aaa);margin:auto}.vela-roche .v-avatar{width:100%;height:100%;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#dadbe1,#fff);font-weight:900;font-size:18px;overflow:hidden}.vela-roche .v-live-dot{position:absolute;right:-4px;bottom:-3px;background:var(--v-live);color:#fff;border:3px solid var(--v-bg);border-radius:8px;font-size:8px;font-weight:900;padding:2px 5px}.vela-roche .v-channel-name{font-size:11px;font-weight:750;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vela-roche .v-schedule{background:#111;color:#fff;border-radius:22px;padding:13px 14px;margin:4px 0 13px}.vela-roche .v-schedule-top,.vela-roche .v-schedule-main{display:flex;align-items:center;justify-content:space-between;gap:10px}.vela-roche .v-kicker{font-size:10px;opacity:.62;font-weight:800}.vela-roche .v-schedule-time{font-size:17px;font-weight:900;margin-top:3px}.vela-roche .v-pill{font-size:10px;background:#fff;color:#111;border-radius:9px;padding:5px 8px;font-weight:900}.vela-roche .v-schedule-main{margin-top:10px}.vela-roche .v-schedule-icon{width:38px;height:38px;border-radius:13px;background:#2a2a30;display:grid;place-items:center;font-weight:900}.vela-roche .v-schedule-copy{flex:1;min-width:0}.vela-roche .v-schedule-copy b{display:block;font-size:13px}.vela-roche .v-schedule-copy span{display:block;font-size:11px;opacity:.68;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-small-dark{border:0;background:#2a2a30;color:#fff;border-radius:12px;padding:9px 11px;font-size:11px;font-weight:850;min-height:38px}
.vela-roche .v-home-card{overflow:hidden}.vela-roche .v-home-card-hit{width:100%;border:0;background:none;color:inherit;text-align:left;padding:0}.vela-roche .v-home-post-cover{height:178px;border-radius:19px;margin-top:12px;background:radial-gradient(circle at 72% 24%,rgba(255,255,255,.9),transparent 24%),linear-gradient(135deg,#d8d8df,#f4f4f7);display:grid;place-items:center;font-size:38px}.vela-roche .v-home-post-meta{display:flex;gap:14px;margin-top:10px;color:var(--v-muted);font-size:11px}.vela-roche .v-home-open{font-size:10px;color:var(--v-muted);font-weight:800}.vela-roche .v-task-toggle{width:100%;border:0;background:var(--v-soft);color:var(--v-text);border-radius:15px;padding:12px 13px;display:flex;align-items:center;justify-content:space-between;font-weight:900;margin-top:12px}.vela-roche .v-task-detail{margin-top:8px;border:1px solid var(--v-line);border-radius:16px;padding:0 13px;background:var(--v-card)}.vela-roche .v-brand-card{background:var(--v-card);border-radius:22px;padding:15px;margin-bottom:12px}.vela-roche .v-brand-style{font-size:11px;color:var(--v-muted);margin-top:4px}.vela-roche .v-product-box{margin-top:13px;background:var(--v-soft);border-radius:16px;padding:12px}.vela-roche .v-product-box b{font-size:13px}.vela-roche .v-product-box p{font-size:12px;line-height:1.55;color:var(--v-muted);margin:6px 0 0}.vela-roche .v-scheduled-card{width:100%;border:0;background:#111;color:#fff;border-radius:20px;padding:15px;text-align:left}.vela-roche .v-scheduled-card .v-sub{color:rgba(255,255,255,.68)}.vela-roche .v-profile-actions{display:flex;gap:8px;margin-top:12px}.vela-roche .v-profile-actions button{border:0;border-radius:12px;padding:9px 11px;font-size:11px;font-weight:900}.vela-roche .v-post-detail-cover{height:220px;border-radius:22px;background:radial-gradient(circle at 68% 18%,rgba(255,255,255,.86),transparent 28%),linear-gradient(135deg,#d5d6de,#f5f5f8);display:grid;place-items:center;font-size:52px;margin-top:12px}
.vela-roche .v-filters{display:flex;gap:8px;margin:9px 0 14px}.vela-roche .v-chip{border:0;border-radius:14px;background:#e9e9ee;padding:9px 14px;font-size:12px;font-weight:850;color:#111}.vela-roche .v-chip.is-active{background:#111;color:#fff}.vela-roche .v-card{background:#fff;border-radius:24px;padding:14px;margin-bottom:14px}.vela-roche .v-author{display:flex;align-items:center;gap:10px}.vela-roche .v-mini{width:41px;height:41px;border-radius:14px;background:#ececf1;display:grid;place-items:center;font-weight:900}.vela-roche .v-meta{min-width:0;flex:1}.vela-roche .v-name{font-size:14px;font-weight:900}.vela-roche .v-sub{font-size:11px;color:var(--v-muted);margin-top:2px}.vela-roche .v-stage{display:flex;align-items:flex-end;width:100%;aspect-ratio:16/9;margin-top:12px;padding:14px;border:0;border-radius:20px;background:radial-gradient(circle at 72% 16%,rgba(255,255,255,.34),transparent 29%),linear-gradient(135deg,#1b1b22,#7a7d88);color:#fff;text-align:left;overflow:hidden;position:relative}.vela-roche .v-stage:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 38%,rgba(0,0,0,.48))}.vela-roche .v-stage-copy{position:relative;z-index:1}.vela-roche .v-badge{display:inline-block;background:var(--v-live);padding:5px 8px;border-radius:8px;font-size:9px;font-weight:900;margin-bottom:7px}.vela-roche .v-live-title{font-size:18px;font-weight:900;line-height:1.25}.vela-roche .v-viewers{font-size:11px;opacity:.82;margin-top:4px}.vela-roche .v-engage{display:flex;gap:14px;margin-top:10px;color:#555;font-size:12px}.vela-roche .v-postimg{height:170px;border-radius:19px;margin-top:12px;background:linear-gradient(135deg,#d7d8df,#fafafd);display:grid;place-items:center;font-size:42px}.vela-roche .v-posttext{font-size:14px;line-height:1.55;margin-top:10px}
.vela-roche .v-rec-card{padding:0;overflow:hidden}.vela-roche .v-rec-cover{display:flex;align-items:flex-end;aspect-ratio:16/9;padding:14px;background:radial-gradient(circle at 75% 15%,rgba(255,255,255,.4),transparent 26%),linear-gradient(135deg,#2a2b31,#8c8f99);color:#fff;position:relative}.vela-roche .v-rec-cover:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 42%,rgba(0,0,0,.55))}.vela-roche .v-rec-cover>*{position:relative;z-index:1}.vela-roche .v-rec-body{padding:12px 14px 14px;display:flex;gap:10px;align-items:center}.vela-roche .v-follow{border:0;background:#111;color:#fff;border-radius:12px;padding:9px 12px;font-size:11px;font-weight:900;min-height:38px}.vela-roche .v-follow.is-on{background:#e9e9ee;color:#111}
.vela-roche .v-msg{display:flex;align-items:center;gap:11px;padding:12px 2px;border-bottom:1px solid var(--v-line);border-top:0;border-left:0;border-right:0;background:none;width:100%;text-align:left;color:inherit}.vela-roche .v-msg:last-child{border-bottom:0}.vela-roche .v-preview{font-size:12px;color:var(--v-muted);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-unread{min-width:20px;height:20px;border-radius:10px;background:#111;color:#fff;font-size:10px;display:grid;place-items:center}.vela-roche .v-biz{font-size:9px;padding:3px 6px;border-radius:7px;background:#fff0d4;color:#925e00;margin-left:5px}.vela-roche .v-wallet{background:#111;color:#fff;border-radius:28px;padding:22px;margin:7px 0 16px}.vela-roche .v-balance-label{font-size:12px;opacity:.65}.vela-roche .v-balance{font-size:35px;font-weight:900;margin:7px 0 18px}.vela-roche .v-wallet-actions{display:flex;gap:8px}.vela-roche .v-wallet-actions button{flex:1;border:0;background:#fff;color:#111;border-radius:14px;padding:12px;font-weight:900}.vela-roche .v-tx{display:flex;justify-content:space-between;gap:12px;padding:13px 2px;border-bottom:1px solid var(--v-line);font-size:13px}.vela-roche .v-tx:last-child{border-bottom:0}.vela-roche .v-tx small{display:block;color:var(--v-muted);margin-top:3px}
.vela-roche .v-nav{position:absolute;z-index:30;left:0;right:0;bottom:0;height:calc(var(--v-bottom-h) + env(safe-area-inset-bottom,0px));padding-bottom:env(safe-area-inset-bottom,0px);display:grid;grid-template-columns:repeat(5,1fr);background:rgba(255,255,255,.96);backdrop-filter:blur(18px);border-top:1px solid var(--v-line)}.vela-roche .v-nav button{border:0;background:none;color:#8b8b93;font-size:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-width:0;min-height:52px}.vela-roche .v-nav button b{font-size:20px;font-weight:500}.vela-roche .v-nav button.is-active{color:#111;font-weight:900}.vela-roche .v-nav .v-publish b{width:42px;height:42px;border-radius:15px;background:#111;color:#fff;display:grid;place-items:center;font-size:25px;margin-top:-13px;box-shadow:0 7px 18px rgba(0,0,0,.17)}
.vela-roche .v-mask{position:absolute;z-index:50;inset:0;background:rgba(0,0,0,.28);opacity:0;pointer-events:none;transition:opacity .18s}.vela-roche .v-mask.is-open{opacity:1;pointer-events:auto}.vela-roche .v-drawer{position:absolute;z-index:60;top:0;bottom:0;left:0;width:min(84%,350px);padding:18px 16px calc(16px + env(safe-area-inset-bottom,0px));background:#fff;transform:translateX(-102%);transition:transform .22s ease;overflow:auto;display:flex;flex-direction:column}.vela-roche .v-drawer.is-open{transform:none}.vela-roche .v-drawer-main{flex:1;min-height:0}.vela-roche .v-userhead{width:100%;border:0;background:#f6f6f8;border-radius:22px;padding:13px;display:flex;align-items:center;gap:12px;margin:6px 0 18px;text-align:left;color:inherit}.vela-roche .v-userav{width:58px;height:58px;border-radius:20px;background:linear-gradient(135deg,#111,#777);color:#fff;display:grid;place-items:center;font-weight:900;flex:0 0 auto}.vela-roche .v-avatar img,.vela-roche .v-mini img,.vela-roche .v-userav img{width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block}.vela-roche .v-usercopy{min-width:0;flex:1}.vela-roche .v-userhead b{display:block;font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-userhead span{display:block;color:var(--v-muted);font-size:12px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-identity-chip{display:inline-flex!important;width:auto!important;margin-top:7px!important;padding:4px 7px;border-radius:8px;background:#111;color:#fff!important;font-size:9px!important;font-weight:900}.vela-roche .v-drawer-section{margin-top:14px}.vela-roche .v-drawer-label{padding:0 4px 7px;color:#a0a0a8;font-size:10px;font-weight:900;letter-spacing:.06em}.vela-roche .v-drawer-item{width:100%;padding:13px 4px;border:0;border-bottom:1px solid var(--v-line);background:none;display:flex;align-items:center;justify-content:space-between;gap:10px;text-align:left;color:inherit;font-size:14px;font-weight:800;min-height:48px}.vela-roche .v-drawer-item .v-itemcopy{display:flex;align-items:center;gap:10px;min-width:0}.vela-roche .v-drawer-item .v-itemicon{width:30px;height:30px;border-radius:10px;background:#f2f2f5;display:grid;place-items:center;font-size:14px;flex:0 0 auto}.vela-roche .v-drawer-item .v-itembadge{font-size:10px;color:var(--v-muted);font-weight:800}.vela-roche .v-drawer-foot{padding-top:18px;margin-top:auto}.vela-roche .v-version{font-size:10px;color:#b0b0b7;text-align:center;margin:0 0 9px}.vela-roche .v-exit{width:100%;min-height:48px;border:0;border-radius:15px;background:#f3f3f6;color:#b3261e;font-weight:900;font-size:13px}
.vela-roche .v-sheetmask{position:absolute;z-index:80;inset:0;background:rgba(0,0,0,.28);display:none;align-items:flex-end}.vela-roche .v-sheetmask.is-open{display:flex}.vela-roche .v-sheet{width:100%;max-height:82%;overflow:auto;background:#fff;border-radius:28px 28px 0 0;padding:13px 16px calc(24px + env(safe-area-inset-bottom,0px));overscroll-behavior:contain}.vela-roche .v-handle{width:42px;height:5px;border-radius:3px;background:#d2d2d7;margin:0 auto 15px}.vela-roche .v-create-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.vela-roche .v-create{border:0;border-radius:18px;background:#f1f1f4;padding:17px;text-align:left;font-weight:900;min-height:92px}.vela-roche .v-create b{display:block;font-size:24px;margin-bottom:12px}.vela-roche .v-hint{font-size:11px;line-height:1.5;color:var(--v-muted)}
.vela-roche .v-subscreen{position:absolute;z-index:70;inset:0;background:var(--v-bg);transform:translateX(102%);transition:transform .22s ease;overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}.vela-roche .v-subscreen.is-open{transform:none}.vela-roche .v-subhead{position:sticky;z-index:2;top:0;height:var(--v-top-h);padding:0 14px;display:flex;align-items:center;gap:10px;background:rgba(246,246,248,.96);backdrop-filter:blur(16px);border-bottom:1px solid var(--v-line)}.vela-roche .v-subhead>button:first-child{width:42px;height:42px;border:0;border-radius:14px;background:#fff;font-size:21px;flex:0 0 auto}.vela-roche .v-subhead .v-head-action{width:auto!important;height:34px!important;min-height:34px!important;padding:0 10px!important;border:0;border-radius:11px;background:#fff!important;color:#111!important;font-size:11px!important;font-weight:850!important;white-space:nowrap}.vela-roche .v-subbody{padding:14px 14px 28px}.vela-roche .v-tabs{display:flex;gap:8px;overflow:auto;margin-bottom:13px}.vela-roche .v-tabs button{border:0;border-radius:13px;background:#e9e9ee;padding:9px 12px;font-size:12px;font-weight:850}.vela-roche .v-tabs button.is-active{background:#111;color:#fff}.vela-roche .v-empty{padding:65px 14px;text-align:center;color:var(--v-muted);font-size:13px;line-height:1.6}.vela-roche .v-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid var(--v-line)}.vela-roche .v-row:last-child{border-bottom:0}.vela-roche .v-row b{font-size:13px}.vela-roche .v-row small{display:block;color:var(--v-muted);font-size:11px;margin-top:3px}.vela-roche .v-action{border:0;border-radius:12px;background:#111;color:#fff;padding:9px 12px;font-size:11px;font-weight:900;min-height:38px}.vela-roche .v-action.light{background:#efeff3;color:#111}.vela-roche .v-linkbox{border:1px solid var(--v-line);border-radius:18px;padding:12px;margin:10px 0;background:#fafafd}.vela-roche .v-linkstatus{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--v-muted);margin-top:4px}.vela-roche .v-dot{width:7px;height:7px;border-radius:50%;background:#b9b9c1;flex:0 0 auto}.vela-roche .v-dot.on{background:#38a169}.vela-roche .v-rolecard{border-top:1px solid var(--v-line);padding-top:12px;margin-top:12px}.vela-roche .v-rolecard:first-child{border-top:0;padding-top:0;margin-top:0}
.vela-roche .v-profile-shell{padding-bottom:18px}.vela-roche .v-profile-banner{height:156px;background:linear-gradient(135deg,#d5d6dc,#f5f5f8);overflow:hidden;position:relative}.vela-roche .v-profile-banner img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-profile-info{position:relative;padding:48px 16px 14px;background:var(--v-card)}.vela-roche .v-profile-avatar{width:84px;height:84px;border-radius:50%;border:4px solid var(--v-card);background:linear-gradient(135deg,#222,#888);color:#fff;display:grid;place-items:center;font-weight:900;font-size:18px;overflow:hidden;position:absolute;left:16px;top:-42px;margin:0}.vela-roche .v-profile-avatar img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-profile-main{display:flex;align-items:flex-end;justify-content:space-between;gap:12px}.vela-roche .v-profile-maincopy{min-width:0;flex:1;padding-top:8px}.vela-roche .v-profile-maincopy h2{font-size:22px;line-height:1.2;margin:0 0 4px}.vela-roche .v-profile-handle{font-size:12px;color:var(--v-muted)}.vela-roche .v-profile-stats{display:flex;gap:14px;margin-top:10px;font-size:12px;color:var(--v-muted)}.vela-roche .v-profile-stats b{color:var(--v-text);font-size:13px}.vela-roche .v-profile-bio{font-size:13px;line-height:1.55;margin-top:11px;white-space:pre-wrap}.vela-roche .v-profile-tabs{display:grid;grid-template-columns:repeat(3,1fr);background:var(--v-card);border-top:1px solid var(--v-line);border-bottom:1px solid var(--v-line)}.vela-roche .v-profile-tabs button{border:0;background:var(--v-card);padding:13px 6px;font-size:12px;font-weight:850;color:var(--v-muted);position:relative}.vela-roche .v-profile-tabs button.is-active{color:#111}.vela-roche .v-profile-tabs button.is-active:after{content:"";position:absolute;left:24%;right:24%;bottom:0;height:2px;background:#111;border-radius:2px}.vela-roche .v-profile-tabbody{padding:14px}.vela-roche .v-editform{display:grid;gap:12px}.vela-roche .v-field label{display:block;font-size:11px;font-weight:850;margin-bottom:6px}.vela-roche .v-field input,.vela-roche .v-field textarea,.vela-roche .v-field select{width:100%;border:1px solid var(--v-line);background:var(--v-card);border-radius:13px;padding:11px 12px;font-size:16px;color:var(--v-text);outline:none}.vela-roche .v-field textarea{min-height:88px;resize:vertical}.vela-roche .v-field select{min-height:44px}.vela-roche .v-fieldpair{display:grid;grid-template-columns:1fr 1fr;gap:10px}.vela-roche .v-identity-card{border:1px solid var(--v-line);background:#fff;border-radius:18px;padding:12px;margin-top:10px}.vela-roche .v-identity-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.vela-roche .v-roche-compact{background:#fafafd;border:1px solid var(--v-line);border-radius:18px;padding:12px}.vela-roche .v-roche-persona{display:flex;align-items:center;gap:9px;padding:9px 0;border-top:1px solid var(--v-line)}.vela-roche .v-roche-persona:first-of-type{border-top:0}.vela-roche .v-role-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.vela-roche .v-profile-empty{padding:42px 12px;text-align:center;color:var(--v-muted);font-size:12px;line-height:1.6}.vela-roche .v-settings-note{font-size:12px;line-height:1.65;color:var(--v-muted)}.vela-roche .v-live-screen{background:#0d0d10;color:#fff}.vela-roche .v-live-screen .v-subhead{background:rgba(13,13,16,.95);border-bottom-color:#26262c}.vela-roche .v-live-screen .v-subhead button{background:#24242a;color:#fff}.vela-roche .v-live-body{padding:10px 12px 28px}.vela-roche .v-live-stage{aspect-ratio:16/9;border-radius:20px;background:radial-gradient(circle at 70% 15%,rgba(255,255,255,.25),transparent 27%),linear-gradient(135deg,#1d1e24,#747783);position:relative;overflow:hidden;padding:14px;display:flex;align-items:flex-end}.vela-roche .v-live-stage:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 43%,rgba(0,0,0,.56))}.vela-roche .v-live-stage-copy{position:relative;z-index:1}.vela-roche .v-live-stage h2{font-size:19px;line-height:1.3;margin:7px 0 4px}.vela-roche .v-live-stage p{margin:0;font-size:11px;opacity:.8}.vela-roche .v-chat-panel{margin-top:10px;background:#fff;color:#111;border-radius:22px;padding:13px}.vela-roche .v-chat-title{font-weight:900;margin-bottom:7px}.vela-roche .v-chatline{display:flex;gap:8px;padding:7px 0;font-size:12px;line-height:1.45}.vela-roche .v-chatline b{flex:0 0 auto}.vela-roche .v-composer{display:grid;grid-template-columns:1fr 44px 44px;gap:8px;margin-top:10px}.vela-roche .v-composer input{width:100%;min-width:0;border:0;border-radius:15px;background:#efeff2;padding:11px 12px;font-size:16px}.vela-roche .v-composer button{border:0;border-radius:15px;background:#111;color:#fff;min-height:44px}.vela-roche .v-continue{width:100%;margin-top:8px;border:0;border-radius:15px;background:#24242a;color:#fff;padding:12px;font-weight:900;min-height:44px}.vela-roche .v-toast{position:absolute;z-index:120;left:50%;bottom:calc(92px + env(safe-area-inset-bottom,0px));transform:translate(-50%,12px);background:#111;color:#fff;border-radius:13px;padding:10px 13px;font-size:11px;opacity:0;pointer-events:none;transition:.18s;white-space:nowrap;max-width:86%;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-toast.is-show{opacity:1;transform:translate(-50%,0)}
.vela-roche .v-settings-group{background:var(--v-card);border-radius:20px;padding:14px;margin-bottom:12px}.vela-roche .v-settings-group h3{font-size:14px;margin:0 0 10px}.vela-roche .v-setting-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--v-line)}.vela-roche .v-setting-row:first-of-type{border-top:0}.vela-roche .v-setting-row .v-meta{min-width:0}.vela-roche .v-switch{appearance:none;width:46px;height:28px;border-radius:16px;background:#d8d8de;position:relative;transition:.18s;flex:0 0 auto}.vela-roche .v-switch:after{content:"";position:absolute;width:22px;height:22px;left:3px;top:3px;border-radius:50%;background:#fff;transition:.18s}.vela-roche .v-switch:checked{background:#111}.vela-roche .v-switch:checked:after{transform:translateX(18px)}.vela-roche .v-range{width:100%;accent-color:#111}.vela-roche .v-preset-box{white-space:pre-wrap;font-size:12px;line-height:1.65;color:var(--v-muted);background:var(--v-soft);border-radius:16px;padding:12px}.vela-roche .v-settings-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.vela-roche .v-social-avatar{width:42px;height:42px;border-radius:50%;background:var(--v-soft);display:grid;place-items:center;font-weight:900;overflow:hidden;flex:0 0 auto}.vela-roche .v-social-avatar img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-social-head{display:flex;align-items:center;gap:10px}.vela-roche .v-social-copy{min-width:0;flex:1}.vela-roche .v-social-name{font-size:14px;font-weight:900}.vela-roche .v-social-handle{font-size:11px;color:var(--v-muted);margin-top:2px}.vela-roche .v-social-text{font-size:14px;line-height:1.55;margin-top:10px;white-space:pre-wrap}.vela-roche .v-social-media{width:100%;height:190px;border:0;border-radius:18px;margin-top:10px;background:radial-gradient(circle at 70% 20%,rgba(255,255,255,.9),transparent 28%),linear-gradient(135deg,#d9dae1,#f5f5f8);display:grid;place-items:center;font-size:38px;color:var(--v-text);overflow:hidden}.vela-roche .v-social-media img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-social-actions{display:flex;gap:20px;align-items:center;margin-top:10px}.vela-roche .v-social-actions button{border:0;background:none;color:var(--v-muted);font-size:12px;padding:3px 0}.vela-roche .v-translate-btn{border:0;background:none;color:var(--v-muted);font-size:10px;font-weight:800;padding:3px 0;margin-top:4px}.vela-roche .v-translation{font-size:12px;line-height:1.55;color:var(--v-muted);margin-top:5px;padding-left:9px;border-left:2px solid var(--v-line);white-space:pre-wrap}.vela-roche .v-comment-list{border-top:1px solid var(--v-line);margin-top:14px;padding-top:5px}.vela-roche .v-comment{display:flex;gap:9px;padding:10px 0;border-bottom:1px solid var(--v-line)}.vela-roche .v-comment:last-child{border-bottom:0}.vela-roche .v-comment .v-social-avatar{width:34px;height:34px;font-size:11px}.vela-roche .v-comment-body{min-width:0;flex:1}.vela-roche .v-comment-name{font-size:11px;font-weight:900}.vela-roche .v-comment-text{font-size:12px;line-height:1.5;margin-top:3px}.vela-roche .v-community-compose{width:100%;border:1px dashed var(--v-line);background:var(--v-card);color:var(--v-text);border-radius:17px;padding:13px;text-align:left;font-size:12px;font-weight:850;margin-bottom:12px}
.vela-roche .v-live-screen{background:var(--v-bg)!important;color:var(--v-text)!important}.vela-roche .v-live-screen .v-subhead{background:rgba(255,255,255,.96)!important;border-bottom-color:var(--v-line)!important;color:#111!important}.vela-roche .v-live-screen .v-subhead>button:first-child{background:#f0f0f3!important;color:#111!important}.vela-roche .v-live-screen .v-small-dark{background:#f0f0f3!important;color:#111!important}.vela-roche .v-live-body{padding:10px 12px 28px}.vela-roche .v-live-stage{border-radius:18px;background:radial-gradient(circle at 70% 15%,rgba(255,255,255,.18),transparent 27%),linear-gradient(135deg,#1b1c20,#777a83);padding:12px;align-items:flex-start}.vela-roche .v-live-stage:after{background:linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.28))}.vela-roche .v-live-stage-copy{width:100%;display:flex;justify-content:space-between;align-items:flex-start}.vela-roche .v-live-info{background:var(--v-card);border-radius:18px;padding:13px;margin-top:9px}.vela-roche .v-live-info h2{font-size:17px;line-height:1.35;margin:0}.vela-roche .v-live-info p{font-size:11px;color:var(--v-muted);margin:5px 0 0}.vela-roche .v-chat-panel{margin-top:9px;background:var(--v-card);color:var(--v-text);border:1px solid var(--v-line);border-radius:18px;padding:13px}.vela-roche .v-chatline{display:flex;gap:8px;padding:8px 0}.vela-roche .v-chatline .v-social-avatar{width:31px;height:31px;font-size:10px}.vela-roche .v-chatline-body{min-width:0;flex:1}.vela-roche .v-chatline-head{font-size:10px;font-weight:900}.vela-roche .v-chatline-text{font-size:12px;line-height:1.45;margin-top:2px}.vela-roche .v-composer input{background:var(--v-soft);color:var(--v-text)}.vela-roche .v-composer button{background:#111;color:#fff}.vela-roche .v-continue{background:#111;color:#fff}
.vela-roche.is-dark .v-live-screen .v-subhead{background:rgba(25,26,32,.96)!important;color:#fff!important}.vela-roche.is-dark .v-live-screen .v-subhead>button:first-child,.vela-roche.is-dark .v-live-screen .v-small-dark{background:#292b33!important;color:#fff!important}.vela-roche.is-dark .v-social-media{background:linear-gradient(135deg,#25272f,#343741)}
.vela-roche.is-dark{--v-bg:#101116;--v-card:#191a20;--v-text:#f4f4f6;--v-muted:#a6a7b0;--v-line:#2b2d34;--v-soft:#23252c}.vela-roche.is-dark .v-top,.vela-roche.is-dark .v-nav,.vela-roche.is-dark .v-drawer,.vela-roche.is-dark .v-sheet,.vela-roche.is-dark .v-subhead{background:rgba(16,17,22,.96);color:var(--v-text)}.vela-roche.is-dark .v-card,.vela-roche.is-dark .v-userhead,.vela-roche.is-dark .v-identity-card,.vela-roche.is-dark .v-roche-compact,.vela-roche.is-dark .v-linkbox{background:var(--v-card);color:var(--v-text)}.vela-roche.is-dark .v-plainbtn,.vela-roche.is-dark .v-subhead>button:first-child,.vela-roche.is-dark .v-subhead .v-head-action{background:#24262d!important;color:#f4f4f6!important}.vela-roche.is-dark .v-profile-tabs button.is-active{color:#fff}.vela-roche.is-dark .v-profile-tabs button.is-active:after{background:#fff}.vela-roche.is-dark .v-chip{background:#262830;color:#ddd}.vela-roche.is-dark .v-chip.is-active,.vela-roche.is-dark .v-action{background:#f4f4f6;color:#111}.vela-roche.is-dark .v-action.light,.vela-roche.is-dark .v-follow.is-on{background:#292b33;color:#f4f4f6}.vela-roche.is-dark .v-avatar,.vela-roche.is-dark .v-mini{background:#2a2c33;color:#f4f4f6}.vela-roche.is-dark .v-exit{background:#24262d}.vela-roche.is-dark .v-switch:checked{background:#f4f4f6}.vela-roche.is-dark .v-switch:checked:after{background:#111}

.vela-roche .v-subscreen[data-screen="live"]{overflow:hidden!important}
.vela-roche .v-live-screen{height:100%;min-height:0!important;display:flex;flex-direction:column;overflow:hidden;background:var(--v-bg)!important;color:var(--v-text)!important}
.vela-roche .v-live-body{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden;padding:10px 12px 10px!important}
.vela-roche .v-live-fixed{flex:0 0 auto;min-height:0}
/* 直播本体占视觉中心：完整 16:9，不再保留额外顶栏 */
.vela-roche .v-live-stage{flex:0 0 auto;aspect-ratio:16/9!important;max-height:none!important;min-height:0!important;position:relative;border-radius:20px!important}
.vela-roche .v-live-info{flex:0 0 auto;padding:11px 13px!important}
.vela-roche .v-live-hud{position:absolute;z-index:6;left:14px;right:14px;top:14px;display:flex;align-items:center;gap:8px;pointer-events:none}
.vela-roche .v-live-hud button,.vela-roche .v-live-hud .v-live-host{pointer-events:auto}
.vela-roche .v-live-exit{width:36px;height:36px;border:0;border-radius:50%;background:rgba(18,18,22,.66);backdrop-filter:blur(10px);color:#fff;font-size:20px;display:grid;place-items:center;flex:0 0 auto}
.vela-roche .v-live-host{display:flex;align-items:center;gap:7px;min-width:0;max-width:48%;padding:4px 8px 4px 4px;border-radius:20px;background:rgba(18,18,22,.62);backdrop-filter:blur(10px);color:#fff}
.vela-roche .v-live-host-avatar{width:29px;height:29px;border-radius:50%;background:rgba(255,255,255,.18);overflow:hidden;display:grid;place-items:center;font-size:9px;font-weight:900;flex:0 0 auto}
.vela-roche .v-live-host-avatar img{width:100%;height:100%;object-fit:cover;display:block}
.vela-roche .v-live-host-copy{min-width:0}.vela-roche .v-live-host-name{font-size:10px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-live-viewers{font-size:9px;color:rgba(255,255,255,.76);white-space:nowrap}
.vela-roche .v-gift-rank-trigger{margin-left:auto;min-width:0;max-width:42%;height:38px;border:0;border-radius:19px;padding:0 10px;background:rgba(18,18,22,.66);backdrop-filter:blur(10px);color:#fff;font-size:9px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vela-roche .v-live-stage-copy{position:absolute!important;z-index:5!important;left:14px!important;top:62px!important;right:auto!important;bottom:auto!important}
.vela-roche .v-live-moment{position:absolute;z-index:3;left:14px;right:14px;bottom:14px;margin:0;padding:9px 11px;border:1px solid rgba(255,255,255,.14);border-radius:15px;background:rgba(15,15,18,.74);backdrop-filter:blur(10px);color:#fff;box-shadow:0 8px 26px rgba(0,0,0,.16);max-height:42%;overflow:auto}
.vela-roche .v-live-moment-label{font-size:9px;font-weight:900;color:rgba(255,255,255,.68);margin-bottom:4px}
.vela-roche .v-live-moment-text{font-size:12px;line-height:1.48;color:#fff}
.vela-roche .v-live-moment .v-translate-btn{color:rgba(255,255,255,.72);margin-top:3px}
.vela-roche .v-live-moment .v-translation{color:rgba(255,255,255,.82);border-left-color:rgba(255,255,255,.28)}
/* 只有聊天室区域滚动，上面的直播画面和标题不动 */
.vela-roche .v-chat-panel{flex:1 1 220px;min-height:150px;display:flex;flex-direction:column;overflow:hidden;margin-bottom:0!important;padding:11px 13px!important}
.vela-roche .v-chat-title{flex:0 0 auto;margin-bottom:4px}
.vela-roche .v-chat-scroll{flex:1 1 auto;min-height:64px;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding-right:3px}
.vela-roche .v-composer{flex:0 0 auto;display:grid!important;grid-template-columns:minmax(0,1fr) 38px 38px!important;gap:7px!important;margin-top:7px!important}
.vela-roche .v-composer input{min-height:38px!important;padding:8px 12px!important;border-radius:19px!important}
.vela-roche .v-composer button{width:38px!important;height:38px!important;min-height:38px!important;border-radius:19px!important;padding:0!important;display:grid!important;place-items:center!important;font-size:14px!important}
.vela-roche .v-composer .v-continue-mini{background:#111!important;color:#fff!important;font-size:18px!important;font-weight:900!important}
.vela-roche.is-dark .v-composer .v-continue-mini{background:#f4f4f6!important;color:#111!important}
.vela-roche .v-live-popover{position:absolute;z-index:30;inset:0;display:none;align-items:flex-start;justify-content:flex-end;padding:58px 16px 16px;background:rgba(0,0,0,.12)}
.vela-roche .v-live-popover.is-open{display:flex}.vela-roche .v-live-popover-card{width:min(82%,300px);background:rgba(255,255,255,.98);color:#111;border-radius:18px;padding:12px;box-shadow:0 14px 42px rgba(0,0,0,.2)}
.vela-roche .v-live-popover-title{display:flex;align-items:center;justify-content:space-between;font-size:12px;font-weight:900;margin-bottom:7px}.vela-roche .v-live-popover-title button{border:0;background:none;font-size:17px}
.vela-roche .v-rank-row{display:flex;align-items:center;gap:8px;padding:8px 0;border-top:1px solid #ececf1;font-size:11px}.vela-roche .v-rank-row:first-of-type{border-top:0}.vela-roche .v-rank-no{width:20px;text-align:center;font-weight:900}.vela-roche .v-rank-user{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-rank-amount{font-weight:900}
.vela-roche .v-gift-picker{position:absolute;z-index:31;left:12px;right:12px;bottom:12px;display:none;background:rgba(255,255,255,.98);color:#111;border-radius:20px;padding:12px;box-shadow:0 14px 42px rgba(0,0,0,.2)}.vela-roche .v-gift-picker.is-open{display:block}.vela-roche .v-gift-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:9px}.vela-roche .v-gift-grid button{border:0;background:#f1f1f4;color:#111;border-radius:13px;padding:10px 4px;font-size:11px;font-weight:900}.vela-roche .v-gift-balance{font-size:10px;color:#777}
.vela-roche .v-live-exitmenu{position:absolute;z-index:32;inset:0;display:none;align-items:center;justify-content:center;padding:18px;background:rgba(0,0,0,.28)}.vela-roche .v-live-exitmenu.is-open{display:flex}.vela-roche .v-live-exitcard{width:min(86%,310px);background:#fff;color:#111;border-radius:20px;padding:12px}.vela-roche .v-live-exitcard h3{font-size:14px;margin:2px 2px 10px}.vela-roche .v-live-exitcard button{width:100%;border:0;border-radius:13px;padding:11px;margin-top:7px;font-size:12px;font-weight:900}.vela-roche .v-live-exitcard .v-primary{background:#111;color:#fff}.vela-roche .v-live-exitcard .v-danger{background:#fff0ef;color:#b3261e}.vela-roche .v-live-exitcard .v-cancel{background:#f2f2f5;color:#111}
.vela-roche .v-post-composer{display:grid;grid-template-columns:minmax(0,1fr) 42px 46px;gap:7px;margin-top:12px;padding-top:12px;border-top:1px solid var(--v-line)}
.vela-roche .v-post-composer input{width:100%;min-width:0;border:0;border-radius:15px;background:var(--v-soft);color:var(--v-text);padding:11px 12px;font-size:16px;outline:none}
.vela-roche .v-post-composer button{border:0;border-radius:15px;background:#111;color:#fff;min-height:44px;font-weight:900}
.vela-roche .v-post-composer .v-summon-mini{background:var(--v-soft);color:var(--v-text);font-size:17px}
.vela-roche .v-comment-tools{display:flex;align-items:center;gap:10px;margin-top:5px}
.vela-roche .v-comment-tools button{border:0;background:none;color:var(--v-muted);padding:0;font-size:10px;font-weight:800}.vela-roche .v-comment-tools .v-translate-btn{margin:0!important}
.vela-roche .v-post-footer-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.vela-roche .v-post-footer-actions .v-action{margin-top:0!important}
.vela-roche .v-delete-soft{background:#f3f3f6!important;color:#b3261e!important}
.vela-roche.is-dark .v-post-composer button{background:#f4f4f6;color:#111}
.vela-roche.is-dark .v-delete-soft{background:#24262d!important;color:#ff8f86!important}

@media (max-width:360px){.vela-roche .v-main{padding-left:10px;padding-right:10px}.vela-roche .v-live-title{font-size:16px}.vela-roche .v-balance{font-size:30px}}
</style>`;
  }

  function mountMarkup(root, state) {
    const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
    const topH = Math.max(52, Math.min(86, Number(state.appearance?.topbarHeight || 62)));
    const bottomH = Math.max(64, Math.min(100, Number(state.appearance?.bottombarHeight || 78)));
    root.classList.toggle("is-dark", Boolean(state.appearance?.darkMode));
    root.style.setProperty("--v-top-h", `${topH}px`);
    root.style.setProperty("--v-bottom-h", `${bottomH}px`);
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
          <div class="v-filters"><button class="v-chip" data-action="home-filter" data-home-filter="all">全部</button><button class="v-chip" data-action="home-filter" data-home-filter="live">正在直播</button><button class="v-chip" data-action="home-filter" data-home-filter="post">贴文</button></div>
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
      <section class="v-subscreen" data-screen="post"></section>
      <section class="v-subscreen" data-screen="post-editor"></section>
      <section class="v-subscreen" data-screen="schedule-editor"></section>
      <section class="v-subscreen" data-screen="schedule-detail"></section>
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
                  roleCommerce: { ...state.roleCommerce, ...(saved.roleCommerce || {}) },
                  businessDeals: { ...state.businessDeals, ...(saved.businessDeals || {}) },
                  generationPreset: { ...state.generationPreset, ...(saved.generationPreset || {}) },
                  appearance: { ...state.appearance, ...(saved.appearance || {}) },
                  platformSettings: { ...state.platformSettings, ...(saved.platformSettings || {}) }
                };
              }
            } catch (err) {
              console.warn("[Vela] failed to load shell state", err);
            }

            state.rocheLink = {
              ownerPersonaId: String(state.rocheLink?.ownerPersonaId || ""),
              linkedCharacterIds: safeArray(state.rocheLink?.linkedCharacterIds).map(id => String(id))
            };
            state.identities = safeArray(state.identities).map(item => ({
              accountRole: "alias", faceMode: "hidden", identityVisibility: item?.isAnonymous ? "hidden" : "public",
              contentStyle: "", fanProfile: "", banner: "", followers: 0, following: 0, scheduledLive: null, ...item
            }));
            state.channels = safeArray(state.channels).map(item => ({
              accountRole: "primary", faceMode: "mixed", identityVisibility: "partial",
              contentStyle: "", fanProfile: "", banner: "", followers: 0, following: 0, ...item
            }));
            state.appearance = { darkMode: false, topbarHeight: 62, bottombarHeight: 78, ...(state.appearance || {}) };
            state.platformSettings = { recommendationCount: 3, allowBusinessDM: true, activityLevel: 50, ...(state.platformSettings || {}) };
            state.generationPreset = { mode: "default", customText: "", ...(state.generationPreset || {}) };
            state.communityPosts = safeArray(state.communityPosts);
            state.postReplies = { ...(createDefaultState().postReplies || {}), ...(state.postReplies || {}) };
            state.postOverrides = { ...(state.postOverrides || {}) };
            state.liveProgress = { ...(state.liveProgress || {}) };
            state.liveStats = { ...(state.liveStats || {}) };
            state.liveChat = safeArray(state.liveChat);
            state.homeFilter = ["all","live","post"].includes(state.homeFilter) ? state.homeFilter : "all";
            state.businessDeals = {
              "biz-mellow": {
                accepted: false, expanded: false, brandName: "Mellow Studio",
                brandStyle: "极简生活方式 · 香氛与桌面美学",
                productName: "Cloud Mist 香氛机",
                productDescription: "主打柔和雾化与安静桌面场景的小型香氛机，希望在自然聊天过程中完成一次真实使用展示。",
                dateText: "9/12 · 20:00",
                deliverables: "直播中自然展示产品一次，并挂合作链接",
                deposit: 800, balance: 2400
              },
              ...(state.businessDeals || {})
            };
            state.schedule = {
              visible: false, source: "", messageId: "", dateText: "", title: "", detail: "", type: "",
              ...(state.schedule || {})
            };
            // v0.1.4 以前的 Mellow Studio 日程只是 Shell 占位。升级后默认隐藏，只有真正接受合作才出现。
            if (state.schedule.visible && !state.schedule.source && state.schedule.title === "Mellow Studio 合作直播") {
              state.schedule = { visible: false, source: "", messageId: "", dateText: "", title: "", detail: "", type: "" };
              if (state.businessDeals["biz-mellow"]) state.businessDeals["biz-mellow"].accepted = false;
            }

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
                  businessDeals: state.businessDeals,
                  homeFilter: state.homeFilter,
                  generationPreset: state.generationPreset,
                  appearance: state.appearance,
                  platformSettings: state.platformSettings,
                  communityPosts: state.communityPosts,
                  postReplies: state.postReplies,
                  postOverrides: state.postOverrides,
                  liveProgress: state.liveProgress,
                  liveStats: state.liveStats,
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
                  accountRole: "primary",
                  faceMode: "mixed",
                  identityVisibility: "partial",
                  contentStyle: "",
                  fanProfile: "",
                  profileCustomized: false,
                  live: Boolean(existing?.live),
                  title: String(existing?.title || ""),
                  viewers: Number(existing?.viewers || 0)
                };
                if (existing) {
                  const custom = existing.profileCustomized ? {
                    name: existing.name, handle: existing.handle, avatar: existing.avatar,
                    bio: existing.bio, banner: existing.banner, followers: existing.followers,
                    following: existing.following, accountRole: existing.accountRole, faceMode: existing.faceMode,
                    identityVisibility: existing.identityVisibility, contentStyle: existing.contentStyle,
                    fanProfile: existing.fanProfile, profileCustomized: true
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
                banner: String(existing?.banner || ""),
                followers: Number(existing?.followers || 0),
                following: Number(existing?.following || 0),
                accountRole: String(existing?.accountRole || "primary"),
                faceMode: String(existing?.faceMode || "mixed"),
                identityVisibility: String(existing?.identityVisibility || "partial"),
                contentStyle: String(existing?.contentStyle || ""),
                fanProfile: String(existing?.fanProfile || ""),
                profileCustomized: Boolean(existing?.profileCustomized),
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
              const messageId = String(state.schedule.messageId || "biz-mellow");
              host.innerHTML = `<div class="v-schedule"><div class="v-schedule-top"><div><div class="v-kicker">即将开始 · 已加入日程</div><div class="v-schedule-time">${escapeHTML(state.schedule.dateText)}</div></div><span class="v-pill">${escapeHTML(state.schedule.type || "直播")}</span></div><div class="v-schedule-main"><div class="v-schedule-icon">M</div><div class="v-schedule-copy"><b>${escapeHTML(state.schedule.title)}</b><span>${escapeHTML(state.schedule.detail)}</span></div><button class="v-small-dark" data-action="open-message" data-message-id="${escapeHTML(messageId)}">查看任务</button></div></div>`;
            };

            const getHomeDemoHost = () => {
              const first = state.channels[0];
              if (first) return first;
              return { id: "vela-demo-host", name: "Vela Channel", handle: "@vela_channel", avatar: "V", viewers: 1260 };
            };

            const getHomeSampleLive = () => {
              const host = getHomeDemoHost();
              return {
                id: "home-sample-live",
                name: host.name || "Vela Channel",
                handle: host.handle || "@vela_channel",
                avatar: host.avatar || "V",
                title: "주말 밤, 그냥 같이 있을까",
                titleTranslation: "周末的夜晚，就这样一起待着吗",
                category: "별 주제 없이 정리하면서 이야기하는 밤",
                categoryTranslation: "没有特别主题，边整理东西边聊天的夜晚。",
                viewers: Number(host.viewers || 1260)
              };
            };

            const getHomeSamplePost = () => {
              const host = getHomeDemoHost();
              const base = {
                id: "home-sample-post",
                ownerType: "channel",
                ownerId: host.id || "vela-demo-host",
                name: host.name || "Vela Channel",
                handle: host.handle || "@vela_channel",
                avatar: host.avatar || "V",
                text: "오늘 방송방을 다시 정리했어. 조명이 아직 조금 부족하지만 다음 방송은 더 편할 것 같아.",
                translation: "今天把直播间重新整理了一遍。灯光还差一点，不过下一场直播应该会舒服很多。",
                image: "",
                time: "18 分钟前",
                likes: 913,
                comments: safeArray(state.postReplies?.["home-sample-post"]).length
              };
              return { ...base, ...(state.postOverrides?.[base.id] || {}) };
            };

            const translationHTML = (id, text) => text ? `<button class="v-translate-btn" data-action="toggle-translation" data-translation-target="${escapeHTML(id)}">翻译</button><div class="v-translation" data-translation-id="${escapeHTML(id)}" hidden>${escapeHTML(text)}</div>` : "";

            const renderSocialPostCard = (post, { compact = false } = {}) => {
              post = { ...post, ...(state.postOverrides?.[String(post?.id || "")] || {}) };
              const imageHTML = isImageURL(post.image || "") ? `<img src="${escapeHTML(post.image)}" alt="">` : "✦";
              const trId = `post-card-${String(post.id || "post")}`;
              return `<article class="v-card v-home-card"><div class="v-social-head"><div class="v-social-avatar">${avatarHTML(post.avatar || "", post.name || "V")}</div><div class="v-social-copy"><div class="v-social-name">${escapeHTML(post.name || "Vela Channel")} <span style="font-weight:600;color:var(--v-muted)">${escapeHTML(post.handle || "")}</span></div><div class="v-social-handle">${escapeHTML(post.time || "刚刚")}</div></div></div><div class="v-social-text" data-action="open-post-by-id" data-post-id="${escapeHTML(post.id)}">${escapeHTML(post.text || "")}</div>${translationHTML(trId, post.translation || "")}<button class="v-social-media" data-action="open-post-by-id" data-post-id="${escapeHTML(post.id)}">${imageHTML}</button><div class="v-social-actions"><button data-action="demo-like-post" data-post-id="${escapeHTML(post.id)}">♡ ${Number(post.likes || 0)}</button><button data-action="open-post-by-id" data-post-id="${escapeHTML(post.id)}">◌ ${Number(post.comments || safeArray(state.postReplies?.[post.id]).length || 0)}</button><button data-action="edit-post" data-post-id="${escapeHTML(post.id)}">编辑</button></div></article>`;
            };

            const renderHome = () => {
              const host = q('[data-role="home-feed"]');
              const filter = ["all","live","post"].includes(state.homeFilter) ? state.homeFilter : "all";
              qa('[data-home-filter]').forEach(btn => btn.classList.toggle("is-active", btn.dataset.homeFilter === filter));
              const live = getHomeSampleLive();
              const post = getHomeSamplePost();

              const liveTrId = `home-live-title-${live.id}`;
              const liveCard = `<article class="v-card v-home-card"><button class="v-home-card-hit" data-action="open-home-live"><div class="v-social-head"><div class="v-social-avatar">${avatarHTML(live.avatar, live.name)}</div><div class="v-social-copy"><div class="v-social-name">${escapeHTML(live.name)} <span style="font-weight:600;color:var(--v-muted)">${escapeHTML(live.handle || "")}</span></div><div class="v-social-handle">正在直播 · ${formatViewers(live.viewers)} 人观看</div></div></div><div class="v-stage"><div class="v-stage-copy"><span class="v-badge">LIVE</span><div class="v-live-title">${escapeHTML(live.title)}</div><div class="v-viewers">${escapeHTML(live.category)}</div></div></div></button>${translationHTML(liveTrId, `${live.titleTranslation || ""}${live.categoryTranslation ? `\n${live.categoryTranslation}` : ""}`)}</article>`;
              const postCard = renderSocialPostCard(post);
              host.innerHTML = filter === "live" ? liveCard : filter === "post" ? postCard : liveCard + postCard;
            };

            const renderRecommended = () => {
              const recCount = Math.max(1, Math.min(6, Number(state.platformSettings?.recommendationCount || 3)));
              q('[data-role="recommended"]').innerHTML = state.recommendedLives.slice(0, recCount).map(live => `
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

            const liveMomentPools = {
              ko: [
                { text: "손에 있던 물건을 옆으로 치우고 의자에 기대 앉아, 빠르게 올라가는 채팅을 잠깐 바라본다.", translation: "把手边的东西挪到一旁，重新靠回椅背，短暂看了一眼快速滚动的聊天。" },
                { text: "잠깐 물을 마시고 화면을 확인한 뒤, 아까 하던 이야기를 조금 더 이어간다.", translation: "喝了口水确认了一下画面后，又继续刚才的话题。" },
                { text: "채팅을 천천히 훑어보다가 눈에 들어온 이야기를 골라 자연스럽게 말을 이어간다.", translation: "慢慢扫过聊天区后，挑了一个注意到的话题，自然地继续聊下去。" },
                { text: "조금 더 편한 자세로 바꿔 앉고 잠시 조용해졌다가, 다시 가볍게 이야기를 시작한다.", translation: "换了个更舒服的姿势，安静了一会儿后，又轻松地继续聊起来。" }
              ],
              ja: [
                { text: "手元のものを少し横に寄せ、椅子にもたれながら流れていくコメントを眺めている。", translation: "把手边的东西稍微挪开，靠着椅子看着不断滚动的评论。" },
                { text: "少し水を飲んで画面を確認し、さっきの話題をそのまま続けている。", translation: "喝了口水确认画面后，继续刚才的话题。" },
                { text: "コメントをゆっくり眺め、気になった話題を拾って自然に話し始める。", translation: "慢慢看了看评论，挑起一个感兴趣的话题自然地聊起来。" },
                { text: "座り方を少し変えて静かな間を置き、それからまたゆっくり話を続ける。", translation: "换了个坐姿，安静了一小会儿，然后又慢慢继续聊。" }
              ],
              en: [
                { text: "They move a few things aside, lean back in the chair, and glance at the fast-moving chat.", translation: "把手边的东西挪开，靠回椅背，看了一眼快速滚动的聊天。" },
                { text: "After taking a sip of water and checking the screen, they continue the same story from a moment ago.", translation: "喝了口水确认画面后，又继续刚才的话题。" },
                { text: "They scan the comments for a moment, pick up one interesting topic, and keep talking naturally.", translation: "看了一会儿评论，挑了一个感兴趣的话题，自然地继续聊。" },
                { text: "They shift into a more comfortable position, let the room go quiet for a moment, then start talking again.", translation: "换了个更舒服的姿势，安静了一会儿后，又继续聊起来。" }
              ],
              zh: [
                { text: "主播把手边的东西往旁边挪了挪，重新靠回椅背，顺手看了一眼快速滚动的聊天。", translation: "" },
                { text: "主播喝了口水确认了一下画面，又顺着刚才的话题继续聊下去。", translation: "" },
                { text: "主播慢慢扫过聊天区，挑了一个注意到的话题，自然地接着往下说。", translation: "" },
                { text: "主播换了个更舒服的姿势，房间里安静了一会儿，随后又自然地接着聊。", translation: "" }
              ]
            };

            const detectLiveLanguage = (live) => {
              const explicit = String(live?.language || live?.lang || "").toLowerCase();
              if (explicit.startsWith("ko")) return "ko";
              if (explicit.startsWith("ja")) return "ja";
              if (explicit.startsWith("en")) return "en";
              if (explicit.startsWith("zh")) return "zh";
              const sample = `${live?.title || ""} ${live?.category || ""}`;
              if (/[가-힣]/.test(sample)) return "ko";
              if (/[ぁ-んァ-ン]/.test(sample)) return "ja";
              if (/^[\x00-\x7F\s\p{P}]+$/u.test(sample) && /[A-Za-z]/.test(sample)) return "en";
              return "zh";
            };

            const getLiveProgress = (live) => {
              const id = String(live?.id || "live");
              if (!state.liveProgress[id]) {
                const lang = detectLiveLanguage(live);
                const first = liveMomentPools[lang][0];
                state.liveProgress[id] = {
                  step: 0,
                  text: String(live?.moment || first.text),
                  translation: String(live?.momentTranslation || first.translation || ""),
                  language: lang
                };
              }
              return state.liveProgress[id];
            };

            const isOwnLiveSession = (live) => {
              const id = String(live?.id || "");
              return id === "own-live" || id.startsWith("own-scheduled-") || live?.ownerType === "identity" || live?.isOwn === true;
            };

            const getLiveStats = (live) => {
              const id = String(live?.id || "live");
              if (!state.liveStats[id]) {
                const followers = Math.max(0, Number(live?.followers || 0));
                const activity = Math.max(0, Math.min(100, Number(state.platformSettings?.activityLevel ?? 50)));
                const followerBase = followers > 0 ? Math.max(3, Math.round(followers * (0.025 + activity * 0.00018))) : 0;
                const seedViewers = Math.max(1, Number(live?.viewers || followerBase || 36));
                const baseViewers = followerBase || seedViewers;
                const currentViewers = followers > 0 ? Math.max(1, Math.round((baseViewers + seedViewers) / 2)) : Math.round(seedViewers);
                const scale = Math.max(1, Math.round(currentViewers / 1200));
                state.liveStats[id] = {
                  baseViewers,
                  currentViewers,
                  peakViewers: currentViewers,
                  heat: 50,
                  userGiftTotal: 0,
                  gifts: [
                    { user: "Mika", amount: 180 * scale },
                    { user: "yoo_n", amount: 110 * scale },
                    { user: "Sato_Aki", amount: 70 * scale }
                  ]
                };
              }
              return state.liveStats[id];
            };

            const getGiftRanking = (live) => {
              const stats = getLiveStats(live);
              const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
              const ownHandle = String(identity?.handle || identity?.displayName || "@user");
              const map = new Map();
              safeArray(stats.gifts).forEach(item => map.set(String(item.user), (map.get(String(item.user)) || 0) + Number(item.amount || 0)));
              if (Number(stats.userGiftTotal || 0) > 0) map.set(ownHandle, Number(stats.userGiftTotal || 0));
              return [...map.entries()].map(([user, amount]) => ({ user, amount })).sort((a,b) => b.amount - a.amount);
            };

            const renderLiveHUD = () => {
              const live = state.liveSession;
              if (!live) return;
              const stats = getLiveStats(live);
              const viewers = q('[data-screen="live"] [data-role="live-viewers"]');
              if (viewers) viewers.textContent = `${formatViewers(stats.currentViewers || 0)} 人正在观看`;
              const trigger = q('[data-screen="live"] [data-role="gift-rank-trigger"]');
              const ranking = getGiftRanking(live);
              if (trigger) trigger.textContent = ranking.length ? `👑 ${ranking[0].user} · ¥${Math.round(ranking[0].amount)}` : "🎁 礼物榜";
              const rows = q('[data-screen="live"] [data-role="gift-rank-rows"]');
              if (rows) {
                const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
                const ownHandle = String(identity?.handle || identity?.displayName || "@user");
                rows.innerHTML = ranking.slice(0,8).map((item,index) => `<div class="v-rank-row"><span class="v-rank-no">${index < 3 ? ["👑","2","3"][index] : index + 1}</span><span class="v-rank-user">${escapeHTML(item.user)}${item.user === ownHandle ? " · 你" : ""}</span><span class="v-rank-amount">¥${Math.round(item.amount).toLocaleString("zh-CN")}</span></div>`).join("") || '<div class="v-hint">本场还没有人送礼物。</div>';
              }
              const balance = q('[data-screen="live"] [data-role="gift-balance"]');
              if (balance) balance.textContent = `钱包余额 ¥${Number(state.wallet?.balance || 0).toLocaleString("zh-CN", {maximumFractionDigits:2})}`;
            };

            const advanceViewerCount = (live, { heatBoost = 0 } = {}) => {
              const stats = getLiveStats(live);
              stats.heat = Math.max(0, Math.min(100, Number(stats.heat || 50) + Number(heatBoost || 0) - 1));
              const base = Math.max(1, Number(stats.baseViewers || stats.currentViewers || 1));
              const current = Math.max(1, Number(stats.currentViewers || base));
              const swing = Math.max(1, Math.round(current * 0.055));
              const heatPull = ((stats.heat - 50) / 50) * Math.max(1, Math.round(base * 0.025));
              const delta = Math.round((Math.random() - 0.48) * swing * 2 + heatPull);
              const low = Math.max(1, Math.round(base * 0.58));
              const high = Math.max(low + 1, Math.round(base * 1.85));
              stats.currentViewers = Math.max(low, Math.min(high, current + delta));
              stats.peakViewers = Math.max(Number(stats.peakViewers || 0), stats.currentViewers);
              return stats.currentViewers;
            };

            const renderLiveMoment = () => {
              const live = state.liveSession;
              const host = q('[data-screen="live"] [data-role="live-moment"]');
              if (!live || !host) return;
              const progress = getLiveProgress(live);
              const trId = `live-moment-${String(live.id || "live")}-${Number(progress.step || 0)}`;
              host.innerHTML = `<div class="v-live-moment-label">直播进行中</div><div class="v-live-moment-text">${escapeHTML(progress.text || "")}</div>${translationHTML(trId, progress.translation || "")}`;
            };

            const openLive = (live) => {
              state.liveSession = { ...live };
              const currentLive = state.liveSession;
              const title = currentLive.title || "正在直播";
              const hostName = currentLive.name || currentLive.handle || "主播";
              const liveTrId = `live-title-${String(currentLive.id || "live")}`;
              const liveTranslation = [currentLive.titleTranslation, currentLive.categoryTranslation].filter(Boolean).join("\n");
              getLiveProgress(currentLive);
              getLiveStats(currentLive);
              const own = isOwnLiveSession(currentLive);
              openScreen("live", `<div class="v-live-screen"><div class="v-live-body"><div class="v-live-fixed"><div class="v-live-stage"><div class="v-live-hud"><button class="v-live-exit" data-action="open-live-exit" aria-label="退出">×</button><div class="v-live-host"><div class="v-live-host-avatar">${avatarHTML(currentLive.avatar || "", hostName)}</div><div class="v-live-host-copy"><div class="v-live-host-name">${escapeHTML(hostName)}</div><div class="v-live-viewers" data-role="live-viewers"></div></div></div><button class="v-gift-rank-trigger" data-action="toggle-gift-rank" data-role="gift-rank-trigger">🎁 礼物榜</button></div><div class="v-live-stage-copy"><span class="v-badge">LIVE</span></div><div class="v-live-moment" data-role="live-moment"></div></div><div class="v-live-info"><h2>${escapeHTML(title)}</h2><p>${escapeHTML(currentLive.category || "直播进行中")}</p>${translationHTML(liveTrId, liveTranslation)}</div></div><div class="v-chat-panel"><div class="v-chat-title">聊天室</div><div class="v-chat-scroll" data-role="live-chat-scroll"><div data-role="live-chat-lines"></div></div><div class="v-composer"><input data-role="live-input" placeholder="发送消息…" maxlength="120"><button data-action="gift-demo" aria-label="送礼物" title="送礼物">🎁</button><button data-action="send-live-chat" aria-label="发送或继续直播" title="发送或继续直播">➤</button></div></div></div><div class="v-live-popover" data-role="gift-rank-panel"><div class="v-live-popover-card"><div class="v-live-popover-title"><span>本场礼物榜</span><button data-action="close-gift-rank">×</button></div><div data-role="gift-rank-rows"></div></div></div><div class="v-gift-picker" data-role="gift-picker"><div class="v-live-popover-title"><span>送礼物</span><button data-action="close-gift-picker">×</button></div><div class="v-gift-balance" data-role="gift-balance"></div><div class="v-gift-grid"><button data-action="send-live-gift" data-gift-amount="10">🎁 ¥10</button><button data-action="send-live-gift" data-gift-amount="50">🎁 ¥50</button><button data-action="send-live-gift" data-gift-amount="200">🎁 ¥200</button><button data-action="send-live-gift" data-gift-amount="1000">👑 ¥1000</button></div></div><div class="v-live-exitmenu" data-role="live-exit-menu"><div class="v-live-exitcard"><h3>${own ? "退出或结束直播" : "退出直播间？"}</h3>${own ? '<button class="v-primary" data-action="hang-own-live">退出直播间</button><button class="v-danger" data-action="end-own-live">结束直播</button>' : '<button class="v-primary" data-action="leave-live">退出直播间</button><button class="v-danger" data-action="end-own-live">结束直播</button>'}<button class="v-cancel" data-action="close-live-exit">取消</button></div></div></div>`);
              renderLiveMoment();
              renderLiveChatLines();
              renderLiveHUD();
            };

            const renderLiveChatLines = () => {
              const host = q('[data-screen="live"] [data-role="live-chat-lines"]');
              if (!host) return;
              const rows = state.liveChat.slice(-40);
              host.innerHTML = rows.map((line, index) => {
                const trId = `live-chat-${index}-${String(line.user || "viewer")}`;
                return `<div class="v-chatline"><div class="v-social-avatar">${avatarHTML(line.avatar || initials(line.user || "V"), line.user || "V")}</div><div class="v-chatline-body"><div class="v-chatline-head">${escapeHTML(line.user)}</div><div class="v-chatline-text">${escapeHTML(line.text)}</div>${translationHTML(trId, line.translation || "")}</div></div>`;
              }).join("");
              const scroll = q('[data-screen="live"] [data-role="live-chat-scroll"]');
              if (scroll) requestAnimationFrame(() => { scroll.scrollTop = scroll.scrollHeight; });
            };

            const advanceLive = async ({ fromUser = false, userText = "" } = {}) => {
              const live = state.liveSession;
              if (!live) return;
              const id = String(live.id || "live");
              const progress = getLiveProgress(live);
              const nextStep = Number(progress.step || 0) + 1;
              const lang = progress.language || detectLiveLanguage(live);
              const pool = liveMomentPools[lang] || liveMomentPools.zh;
              const next = pool[(nextStep - 1) % pool.length];
              progress.step = nextStep;
              progress.language = lang;
              if (fromUser) {
                const message = String(userText || "").trim();
                progress.seenUserMessages = safeArray(progress.seenUserMessages);
                if (message) {
                  progress.seenUserMessages.push({ text: message, at: Date.now() });
                  progress.seenUserMessages = progress.seenUserMessages.slice(-12);
                  progress.lastSeenUserMessage = message;
                }
                const channel = state.channels.find(x => String(x.id) === String(live.id)) || null;
                const personaHint = `${live?.contentStyle || ""} ${live?.fanProfile || ""} ${channel?.contentStyle || ""} ${channel?.fanProfile || ""}`;
                let replyTendency = 0.42;
                if (/(高冷|冷淡|寡言|少回复|不爱互动|安静)/.test(personaHint)) replyTendency = 0.18;
                if (/(热情|活泼|爱聊天|宠粉|互动|话多)/.test(personaHint)) replyTendency = 0.72;
                const visiblyResponds = Math.random() < replyTendency;
                if (visiblyResponds) {
                  const reactions = {
                    ko: { text: "방금 올라온 채팅을 보고 잠깐 시선을 멈춘 뒤, 그 말에 자연스럽게 반응하며 이야기를 이어간다.", translation: "看到刚刚出现的弹幕后，视线停了一下，自然地对这句话作出反应并继续聊下去。" },
                    ja: { text: "今流れたコメントに気づいて少し目を止め、その言葉に自然に反応しながら話を続ける。", translation: "注意到刚刚飘过的评论后稍微停了一下，自然地回应这句话并继续直播。" },
                    en: { text: "They catch the new message, pause on it for a moment, and naturally respond before continuing the stream.", translation: "看到新的弹幕后稍微停了一下，自然地回应这句话，然后继续直播。" },
                    zh: { text: "主播看到了刚刚那条弹幕，停了一下，自然地接住这句话后继续直播。", translation: "" }
                  };
                  progress.text = reactions[lang].text;
                  progress.translation = reactions[lang].translation;
                } else {
                  // 角色已经看到了 user 弹幕，但是否读出/回应由人设决定；这一轮不强制回应。
                  progress.text = next.text;
                  progress.translation = next.translation;
                }
              } else {
                progress.text = next.text;
                progress.translation = next.translation;
              }

              const chatPool = [
                { user: "Jia", avatar: "J", text: "아까 그 말 너무 웃겼어", translation: "刚才那句话真的笑死我了。" },
                { user: "sleepycat", avatar: "S", text: "主播刚刚是不是看到了那条弹幕？", translation: "" },
                { user: "익명", avatar: "익", text: "오늘 평소보다 좀 조용하네", translation: "今天比平时安静一点。" },
                { user: "Mika", avatar: "M", text: "keep going, this is nice", translation: "继续播吧，这样很好。" },
                { user: "Sato_Aki", avatar: "S", text: "今の話もう少し聞きたい", translation: "还想再听一点刚才那个话题。" },
                { user: "yoo_n", avatar: "Y", text: "ㅋㅋㅋ 방금 표정 봤어?", translation: "哈哈哈你们刚刚看到那个表情了吗？" }
              ];
              const base = (nextStep * 2) % chatPool.length;
              state.liveChat.push(chatPool[base], chatPool[(base + 1) % chatPool.length]);
              advanceViewerCount(live, { heatBoost: fromUser ? 2 : 0 });
              renderLiveMoment();
              renderLiveChatLines();
              renderLiveHUD();
              await persist();
            };

            const getPostById = (postId) => {
              const id = String(postId || "");
              if (id === "home-sample-post") return getHomeSamplePost();
              const saved = state.communityPosts.find(p => String(p.id) === id);
              if (!saved) return null;
              const entity = getProfileEntity(saved.ownerType || "identity", saved.ownerId || "");
              return {
                ...saved,
                ...(state.postOverrides?.[id] || {}),
                name: profileName(entity, saved.ownerType || "identity"),
                handle: entity?.handle || "@vela",
                avatar: entity?.avatar || "V",
                comments: safeArray(state.postReplies?.[id]).length
              };
            };

            const renderPostComments = (postId) => {
              const id = String(postId || "");
              const host = q('[data-screen="post"] [data-role="post-comments"]');
              if (!host) return;
              const replies = safeArray(state.postReplies?.[id]);
              host.innerHTML = replies.length ? replies.map((reply, index) => {
                const trId = `post-comment-${id}-${index}`;
                const translateTool = reply.translation ? `<button class="v-translate-btn" data-action="toggle-translation" data-translation-target="${escapeHTML(trId)}">翻译</button>` : "";
                const translationBody = reply.translation ? `<div class="v-translation" data-translation-id="${escapeHTML(trId)}" hidden>${escapeHTML(reply.translation)}</div>` : "";
                return `<div class="v-comment"><div class="v-social-avatar">${avatarHTML(reply.avatar || initials(reply.user || "V"), reply.user || "V")}</div><div class="v-comment-body"><div class="v-comment-name">${escapeHTML(reply.user || "viewer")}</div>${reply.replyTo ? `<div class="v-social-handle">回复 ${escapeHTML(reply.replyTo)}</div>` : ""}<div class="v-comment-text">${escapeHTML(reply.text || "")}</div><div class="v-comment-tools">${translateTool}<button data-action="delete-post-comment" data-post-id="${escapeHTML(id)}" data-comment-index="${index}">删除</button></div>${translationBody}</div></div>`;
              }).join("") : `<div class="v-hint" style="padding:12px 0">还没有评论。你可以先自己留言，或者点输入栏旁边的 ✦ 让这一批网友开始互动。</div>`;
              const counter = q('[data-screen="post"] [data-role="post-comment-count"]');
              if (counter) counter.textContent = String(replies.length);
            };

            const openPostDetail = (postId) => {
              const post = getPostById(postId);
              if (!post) return;
              const imageHTML = isImageURL(post.image || "") ? `<img src="${escapeHTML(post.image)}" alt="">` : "✦";
              const trId = `post-detail-${String(post.id)}`;
              const saved = state.communityPosts.find(p => String(p.id) === String(post.id));
              const canDeletePost = Boolean(saved && saved.ownerType === "identity" && String(saved.ownerId || "") === String(state.viewerIdentityId || ""));
              openScreen("post", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="post">‹</button><div class="v-meta"><strong>贴文</strong><div class="v-hint">${escapeHTML(post.name || "Vela Channel")} · ${escapeHTML(post.time || "刚刚")}</div></div></header><div class="v-subbody"><article class="v-card"><div class="v-social-head"><div class="v-social-avatar">${avatarHTML(post.avatar || "", post.name || "V")}</div><div class="v-social-copy"><div class="v-social-name">${escapeHTML(post.name || "Vela Channel")}</div><div class="v-social-handle">${escapeHTML(post.handle || "")}</div></div></div><div class="v-social-text">${escapeHTML(post.text || "")}</div>${translationHTML(trId, post.translation || "")}<div class="v-social-media">${imageHTML}</div><div class="v-social-actions"><button data-action="demo-like-post" data-post-id="${escapeHTML(post.id)}">♡ ${Number(post.likes || 0)}</button><button>◌ <span data-role="post-comment-count">${safeArray(state.postReplies?.[String(post.id)]).length}</span></button><button data-action="edit-post" data-post-id="${escapeHTML(post.id)}">编辑</button></div><div class="v-comment-list" data-role="post-comments"></div><div class="v-post-composer"><input data-role="post-comment-input" placeholder="写下评论…" maxlength="240"><button class="v-summon-mini" data-action="summon-post-replies" data-post-id="${escapeHTML(post.id)}" aria-label="召唤回复" title="召唤回复">✦</button><button data-action="send-post-comment" data-post-id="${escapeHTML(post.id)}">➤</button></div>${canDeletePost ? `<div class="v-post-footer-actions"><button class="v-action v-delete-soft" data-action="delete-community-post" data-post-id="${escapeHTML(post.id)}">删除贴文</button></div>` : ""}</article></div>`);
              renderPostComments(post.id);
            };

            const openEditPostEditor = (postId) => {
              const post = getPostById(postId);
              if (!post) return;
              openScreen("post-editor", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="post-editor">‹</button><div class="v-meta"><strong>编辑贴文</strong><div class="v-hint">${escapeHTML(post.name || "Vela Channel")}</div></div><button class="v-head-action" data-action="save-post-edit" data-post-id="${escapeHTML(post.id)}">保存</button></header><div class="v-subbody"><div class="v-card"><div class="v-field"><label>贴文内容</label><textarea data-post-edit-field="text" maxlength="1000" placeholder="写点什么……">${escapeHTML(post.text || "")}</textarea></div><div class="v-field" style="margin-top:12px"><label>配图 URL（可留空）</label><input data-post-edit-field="image" value="${escapeHTML(post.image || "")}" placeholder="https://..."></div><div class="v-field" style="margin-top:12px"><label>折叠翻译（可留空）</label><textarea data-post-edit-field="translation" maxlength="1000" placeholder="没有翻译可以留空">${escapeHTML(post.translation || "")}</textarea></div><p class="v-hint">编辑只修改这条 Vela 贴文，不会清空原有点赞、评论或发布时间。</p></div></div>`);
            };

            const saveEditedPost = async (postId) => {
              const id = String(postId || "");
              const screen = q('[data-screen="post-editor"]');
              const text = String(screen?.querySelector('[data-post-edit-field="text"]')?.value || "").trim();
              const image = String(screen?.querySelector('[data-post-edit-field="image"]')?.value || "").trim();
              const translation = String(screen?.querySelector('[data-post-edit-field="translation"]')?.value || "").trim();
              if (!text) { toast("贴文内容不能为空"); return; }
              state.postOverrides[id] = { ...(state.postOverrides[id] || {}), text, image, translation };
              await persist();
              closeScreen("post-editor");
              renderHome();
              openPostDetail(id);
              toast("贴文已更新");
            };

            const openHomePost = () => openPostDetail("home-sample-post");

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
                } else if (ownerType === "identity" && entity.scheduledLive) {
                  host.innerHTML = `<article class="v-card"><button class="v-scheduled-card" data-action="open-scheduled-live" data-identity-id="${escapeHTML(entity.id)}"><div class="v-kicker">已预约直播</div><div class="v-live-title" style="margin-top:6px">${escapeHTML(entity.scheduledLive.title || "预约直播")}</div><div class="v-sub" style="margin-top:7px">${escapeHTML(entity.scheduledLive.dateText || "未设置时间")} · 点开查看</div></button></article><div class="v-profile-actions"><button class="v-action light" data-action="create-scheduled-live" data-identity-id="${escapeHTML(entity.id)}">编辑预约</button></div>`;
                } else if (ownerType === "identity") {
                  host.innerHTML = `<div class="v-profile-empty">当前没有正在直播。<br><button class="v-action" style="margin-top:12px" data-action="create-scheduled-live" data-identity-id="${escapeHTML(entity.id)}">＋ 预约直播</button></div>`;
                } else {
                  host.innerHTML = `<div class="v-profile-empty">当前没有正在直播。</div>`;
                }
              } else if (tab === "replays") {
                host.innerHTML = `<article class="v-card"><div class="v-name">周末晚上，随便聊会儿</div><div class="v-sub">8 月 31 日 21:06–23:18 · 2小时12分</div><div class="v-postimg" style="height:135px">▶</div><div class="v-engage"><span>最高 1.6 万人观看</span><span>直播回放</span></div></article>`;
              } else {
                const ownPosts = state.communityPosts.filter(p => String(p.ownerType || "") === String(ownerType) && String(p.ownerId || "") === String(id));
                const sample = ownerType === "channel" ? getHomeSamplePost() : null;
                const cards = [sample, ...ownPosts].filter(Boolean).map(post => renderSocialPostCard({ ...post, comments: safeArray(state.postReplies?.[String(post.id)]).length })).join("");
                const compose = ownerType === "identity" ? `<button class="v-community-compose" data-action="open-community-post-editor" data-owner-type="identity" data-owner-id="${escapeHTML(id)}">＋ 发布一条贴文</button>` : "";
                host.innerHTML = `${compose}${cards || '<div class="v-profile-empty">社群里还没有贴文。</div>'}`;
              }
            };

            const openCommunityPostEditor = (ownerType, ownerId) => {
              const entity = getProfileEntity(ownerType, ownerId);
              if (!entity) return;
              openScreen("post-editor", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="post-editor">‹</button><div class="v-meta"><strong>发布贴文</strong><div class="v-hint">${escapeHTML(profileName(entity, ownerType))}</div></div><button class="v-head-action" data-action="save-community-post" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(ownerId)}">发布</button></header><div class="v-subbody"><div class="v-card"><div class="v-field"><label>贴文内容</label><textarea data-post-field="text" maxlength="1000" placeholder="写点什么……"></textarea></div><div class="v-field" style="margin-top:12px"><label>配图 URL（可留空）</label><input data-post-field="image" placeholder="https://..."></div><p class="v-hint">发布后会出现在这个账号主页的「社群」里，并可以点「召唤回复」生成一批网友反应。</p></div></div>`);
            };

            const saveCommunityPost = async (ownerType, ownerId) => {
              const screen = q('[data-screen="post-editor"]');
              const text = String(screen?.querySelector('[data-post-field="text"]')?.value || "").trim();
              const image = String(screen?.querySelector('[data-post-field="image"]')?.value || "").trim();
              if (!text) { toast("先写一点贴文内容"); return; }
              const id = `post-${Date.now().toString(36)}`;
              state.communityPosts.unshift({ id, ownerType, ownerId, text, image, translation: "", time: "刚刚", likes: 0 });
              state.postReplies[id] = [];
              await persist();
              closeScreen("post-editor");
              openProfile(ownerType, ownerId);
              renderProfileTab(ownerType, ownerId, "community");
              toast("贴文已发布到社群");
            };

            const sendPostComment = async (postId) => {
              const id = String(postId || "");
              const input = q('[data-screen="post"] [data-role="post-comment-input"]');
              const textValue = String(input?.value || "").trim();
              if (!textValue) { toast("先写一点评论"); return; }
              const identity = state.identities.find(x => String(x.id) === String(state.viewerIdentityId)) || state.identities[0];
              const current = safeArray(state.postReplies[id]);
              current.push({
                id: `comment-${Date.now().toString(36)}`,
                user: identity?.handle || identity?.displayName || "@user",
                avatar: identity?.avatar || initials(identity?.displayName || "U"),
                text: textValue,
                translation: "",
                isUser: true,
                identityId: identity?.id || state.viewerIdentityId
              });
              state.postReplies[id] = current;
              if (input) input.value = "";
              await persist();
              renderPostComments(id);
              renderHome();
            };

            const deletePostComment = async (postId, indexValue) => {
              const id = String(postId || "");
              const index = Number(indexValue);
              const current = safeArray(state.postReplies[id]);
              if (!Number.isInteger(index) || index < 0 || index >= current.length) return;
              current.splice(index, 1);
              state.postReplies[id] = current;
              await persist();
              renderPostComments(id);
              renderHome();
              toast("评论已删除");
            };

            const deleteCommunityPost = async (postId) => {
              const id = String(postId || "");
              const index = state.communityPosts.findIndex(p => String(p.id) === id && p.ownerType === "identity" && String(p.ownerId || "") === String(state.viewerIdentityId || ""));
              if (index < 0) return;
              const removed = state.communityPosts.splice(index, 1)[0];
              delete state.postReplies[id];
              delete state.postOverrides[id];
              await persist();
              closeScreen("post");
              openProfile(removed.ownerType || "identity", removed.ownerId || state.viewerIdentityId);
              renderProfileTab(removed.ownerType || "identity", removed.ownerId || state.viewerIdentityId, "community");
              toast("贴文已删除");
            };

            const summonPostReplies = async (postId) => {
              const id = String(postId || "");
              const post = getPostById(id);
              const pool = [
                { user: "luna_08", avatar: "L", text: "와 이 분위기 진짜 좋다", translation: "哇，这个氛围真的很好。" },
                { user: "momo", avatar: "M", text: "次の配信もこの感じでお願い", translation: "下一场直播也请保持这种感觉。" },
                { user: "cloudy", avatar: "C", text: "this feels so cozy honestly", translation: "说真的，这种感觉特别舒服。" },
                { user: "익명", avatar: "익", text: "사진 아래쪽 조명 뭔지 궁금해", translation: "有点好奇照片下面那个灯是什么。" }
              ];
              const current = safeArray(state.postReplies[id]);
              const userComments = current.filter(item => item?.isUser);
              const additions = [];
              if (post?.ownerType === "channel" && userComments.length) {
                const target = userComments[userComments.length - 1];
                additions.push({
                  id: `reply-${Date.now().toString(36)}-host`,
                  user: post.handle || post.name || "主播",
                  avatar: post.avatar || initials(post.name || "V"),
                  text: "刚刚看到这条了，我也正想说这个。",
                  translation: "",
                  replyTo: target.user || "@user",
                  isUser: false
                });
              }
              const offset = current.filter(item => !item?.isUser).length % pool.length;
              additions.push({ ...pool[offset], id: `reply-${Date.now().toString(36)}-1`, isUser: false });
              additions.push({ ...pool[(offset + 1) % pool.length], id: `reply-${Date.now().toString(36)}-2`, isUser: false });
              state.postReplies[id] = [...current, ...additions];
              await persist();
              renderPostComments(id);
              renderHome();
              toast("已生成一批新的回复");
            };

            const openScheduledLiveEditor = (identityId) => {
              const identity = state.identities.find(x => String(x.id) === String(identityId));
              if (!identity) return;
              const item = identity.scheduledLive || {};
              openScreen("schedule-editor", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="schedule-editor">‹</button><div class="v-meta"><strong>预约直播</strong><div class="v-hint">${escapeHTML(identity.displayName || "我的频道")}</div></div><button class="v-head-action" data-action="save-scheduled-live" data-identity-id="${escapeHTML(identity.id)}">保存</button></header><div class="v-subbody"><div class="v-card"><div class="v-editform"><div class="v-field"><label>直播标题</label><input data-schedule-field="title" maxlength="80" value="${escapeHTML(item.title || "")}" placeholder="这场直播准备聊什么？"></div><div class="v-field"><label>直播时间</label><input data-schedule-field="dateText" maxlength="60" value="${escapeHTML(item.dateText || "")}" placeholder="例如：9/12 · 20:00"></div><div class="v-field"><label>封面 URL（可留空）</label><input data-schedule-field="cover" value="${escapeHTML(item.cover || "")}" placeholder="https://..."></div></div></div><p class="v-hint">预约只显示在这个 Vela 身份的主页里；真正开播后会切换为 LIVE 状态。</p></div>`);
            };

            const saveScheduledLive = async (identityId) => {
              const identity = state.identities.find(x => String(x.id) === String(identityId));
              if (!identity) return;
              const screen = q('[data-screen="schedule-editor"]');
              const title = String(screen?.querySelector('[data-schedule-field="title"]')?.value || "").trim();
              const dateText = String(screen?.querySelector('[data-schedule-field="dateText"]')?.value || "").trim();
              const cover = String(screen?.querySelector('[data-schedule-field="cover"]')?.value || "").trim();
              if (!title || !dateText) { toast("先填写直播标题和时间"); return; }
              identity.scheduledLive = { title, dateText, cover };
              await persist();
              closeScreen("schedule-editor");
              openProfile("identity", identity.id);
              renderProfileTab("identity", identity.id, "live");
              toast("直播预约已保存");
            };

            const openScheduledLiveDetail = (identityId) => {
              const identity = state.identities.find(x => String(x.id) === String(identityId));
              const item = identity?.scheduledLive;
              if (!identity || !item) return;
              const coverHTML = isImageURL(item.cover || "") ? `<img src="${escapeHTML(item.cover)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">` : `<div style="font-size:40px">●</div>`;
              openScreen("schedule-detail", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="schedule-detail">‹</button><div class="v-meta"><strong>预约直播</strong><div class="v-hint">${escapeHTML(identity.displayName || "我的频道")}</div></div></header><div class="v-subbody"><article class="v-card"><div class="v-postimg" style="height:150px;overflow:hidden">${coverHTML}</div><div class="v-name" style="margin-top:12px">${escapeHTML(item.title)}</div><div class="v-sub" style="margin-top:5px">${escapeHTML(item.dateText)}</div><div class="v-settings-actions"><button class="v-action" data-action="start-scheduled-live" data-identity-id="${escapeHTML(identity.id)}">开始直播</button><button class="v-action light" data-action="create-scheduled-live" data-identity-id="${escapeHTML(identity.id)}">编辑预约</button><button class="v-action light" data-action="cancel-scheduled-live" data-identity-id="${escapeHTML(identity.id)}">取消预约</button></div></article></div>`);
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
              const accountRole = String(entity.accountRole || (ownerType === "identity" ? "alias" : "primary"));
              const faceMode = String(entity.faceMode || "mixed");
              const visibility = String(entity.identityVisibility || (entity.isAnonymous ? "hidden" : "partial"));
              const opt = (value, current, label) => `<option value="${value}" ${current === value ? "selected" : ""}>${label}</option>`;
              openScreen("profile-edit", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="profile-edit">‹</button><div class="v-meta"><strong>编辑主页</strong><div class="v-hint">${escapeHTML(name)} · 只影响 Vela 展示</div></div><button class="v-head-action" data-action="save-profile" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">保存</button></header><div class="v-subbody">
                <div class="v-card"><div class="v-editform">
                  <div class="v-field"><label>主页背景图片 URL</label><input data-edit-field="banner" value="${escapeHTML(entity.banner || "")}" placeholder="https://..."></div>
                  <div class="v-field"><label>头像 URL / 文字占位</label><input data-edit-field="avatar" value="${escapeHTML(entity.avatar || "")}" placeholder="https://... 或 NN"></div>
                  <div class="v-field"><label>昵称</label><input data-edit-field="name" value="${escapeHTML(name)}" maxlength="40"></div>
                  <div class="v-field"><label>账号 @ID</label><input data-edit-field="handle" value="${escapeHTML(entity.handle || "")}" maxlength="40" placeholder="@vela_name"></div>
                  <div class="v-fieldpair"><div class="v-field"><label>粉丝数</label><input data-edit-field="followers" type="number" min="0" step="1" value="${Number(entity.followers || 0)}"></div><div class="v-field"><label>关注数</label><input data-edit-field="following" type="number" min="0" step="1" value="${Number(entity.following || 0)}"></div></div>
                  <div class="v-field"><label>签名 / 简介</label><textarea data-edit-field="bio" maxlength="300" placeholder="写点主页介绍…">${escapeHTML(entity.bio || "")}</textarea></div>
                </div></div>
                <div class="v-card"><b>账号风格</b><p class="v-hint">这些是账号自己的长期设定。主账号也可以完全不露脸、保持现实身份匿名；小号也不等于一定不露脸。</p><div class="v-editform">
                  <div class="v-field"><label>账号关系</label><select data-edit-field="accountRole">${opt("primary",accountRole,"主账号 / 主要频道")}${opt("alias",accountRole,"关联账号 / 小号")}${opt("shared",accountRole,"共同运营账号")}</select></div>
                  <div class="v-fieldpair"><div class="v-field"><label>露脸方式</label><select data-edit-field="faceMode">${opt("show",faceMode,"露脸")}${opt("hidden",faceMode,"不露脸")}${opt("mixed",faceMode,"偶尔露脸 / 不固定")}</select></div><div class="v-field"><label>现实身份公开程度</label><select data-edit-field="identityVisibility">${opt("public",visibility,"公开")}${opt("partial",visibility,"半公开 / 留有线索")}${opt("hidden",visibility,"完全匿名")}</select></div></div>
                  <div class="v-field"><label>主要直播 / 频道内容</label><textarea data-edit-field="contentStyle" maxlength="800" placeholder="例如：深夜聊天、做饭、游戏、舞蹈、工作室日常……">${escapeHTML(entity.contentStyle || "")}</textarea></div>
                  <div class="v-field"><label>粉丝画像 / 社群氛围</label><textarea data-edit-field="fanProfile" maxlength="800" placeholder="例如：老粉较多、弹幕爱开玩笑、语言混合、对主播很熟……">${escapeHTML(entity.fanProfile || "")}</textarea></div>
                </div></div>
                <p class="v-hint">角色主页的这些展示和账号风格只保存在 Vela，不会反向修改 Roche 原角色资料。</p>
              </div>`);
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
              entity.accountRole = ["primary","alias","shared"].includes(get("accountRole")) ? get("accountRole") : "primary";
              entity.faceMode = ["show","hidden","mixed"].includes(get("faceMode")) ? get("faceMode") : "mixed";
              entity.identityVisibility = ["public","partial","hidden"].includes(get("identityVisibility")) ? get("identityVisibility") : "partial";
              entity.contentStyle = String(get("contentStyle") || "").trim();
              entity.fanProfile = String(get("fanProfile") || "").trim();
              if (ownerType === "identity") entity.isAnonymous = entity.identityVisibility === "hidden";
              if (ownerType === "channel") entity.profileCustomized = true;
              await persist();
              mountMarkup(root, state);
              rerender();
              switchPage(state.activePage || "home");
              openProfile(ownerType, id);
              toast("主页已保存");
            };

            const openSettingsNote = (kind) => {
              if (kind === "presets") {
                const mode = String(state.generationPreset?.mode || "default");
                openScreen("settings", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="settings">‹</button><div class="v-meta"><strong>生成预设</strong><div class="v-hint">先用一套通用内置规则，测试后再继续细分</div></div><button class="v-head-action" data-action="save-generation-settings">保存</button></header><div class="v-subbody">
                  <div class="v-settings-group"><h3>Vela 默认生成规则</h3><div class="v-preset-box">${escapeHTML(VELA_DEFAULT_PRESET)}</div></div>
                  <div class="v-settings-group"><h3>自定义</h3><div class="v-field"><label>使用方式</label><select data-setting-field="presetMode"><option value="default" ${mode === "default" ? "selected" : ""}>只使用 Vela 默认预设</option><option value="custom" ${mode === "custom" ? "selected" : ""}>默认预设 + 我的补充</option></select></div><div class="v-field" style="margin-top:12px"><label>自定义补充（可留空）</label><textarea data-setting-field="customPreset" maxlength="5000" placeholder="例如：希望弹幕更安静、直播节奏更慢……">${escapeHTML(state.generationPreset?.customText || "")}</textarea></div><p class="v-hint">账号自己的风格与角色人设优先。这里不需要一次写得很复杂。</p></div>
                </div>`);
                return;
              }
              if (kind === "appearance") {
                const ap = state.appearance || {};
                openScreen("settings", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="settings">‹</button><div class="v-meta"><strong>外观设置</strong><div class="v-hint">夜间模式与界面上下比例</div></div><button class="v-head-action" data-action="save-appearance-settings">保存</button></header><div class="v-subbody">
                  <div class="v-settings-group"><div class="v-setting-row"><div class="v-meta"><div class="v-name">夜间模式</div><div class="v-sub">切换 Vela 整体明暗主题</div></div><input class="v-switch" data-setting-field="darkMode" type="checkbox" ${ap.darkMode ? "checked" : ""}></div></div>
                  <div class="v-settings-group"><h3>界面比例</h3><div class="v-setting-row"><div class="v-meta"><div class="v-name">顶栏高度 · <span data-role="topbar-value">${Number(ap.topbarHeight || 62)}px</span></div><div class="v-sub">类似 INS 的顶栏高度调整</div></div></div><input class="v-range" data-setting-field="topbarHeight" type="range" min="52" max="86" step="1" value="${Number(ap.topbarHeight || 62)}"><div class="v-setting-row"><div class="v-meta"><div class="v-name">底栏高度 · <span data-role="bottombar-value">${Number(ap.bottombarHeight || 78)}px</span></div><div class="v-sub">调节五栏导航占用的高度</div></div></div><input class="v-range" data-setting-field="bottombarHeight" type="range" min="64" max="100" step="1" value="${Number(ap.bottombarHeight || 78)}"><div class="v-settings-actions"><button class="v-action light" data-action="reset-appearance">恢复默认</button></div></div>
                </div>`);
                return;
              }
              if (kind === "platform") {
                const ps = state.platformSettings || {};
                openScreen("settings", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="settings">‹</button><div class="v-meta"><strong>平台设置</strong><div class="v-hint">控制 Vela 世界整体运行方式</div></div><button class="v-head-action" data-action="save-platform-settings">保存</button></header><div class="v-subbody">
                  <div class="v-settings-group"><div class="v-field"><label>推荐页每批直播数量</label><input data-setting-field="recommendationCount" type="number" min="1" max="6" step="1" value="${Number(ps.recommendationCount || 3)}"></div><div class="v-setting-row"><div class="v-meta"><div class="v-name">允许陌生商务邀约</div><div class="v-sub">关闭后，后续生成不会主动新增品牌合作私信</div></div><input class="v-switch" data-setting-field="allowBusinessDM" type="checkbox" ${ps.allowBusinessDM !== false ? "checked" : ""}></div><div class="v-setting-row"><div class="v-meta"><div class="v-name">平台活跃度 · <span data-role="activity-value">${Number(ps.activityLevel ?? 50)}%</span></div><div class="v-sub">以后影响推荐、陌生私信和网友互动的活跃程度</div></div></div><input class="v-range" data-setting-field="activityLevel" type="range" min="0" max="100" step="5" value="${Number(ps.activityLevel ?? 50)}"></div><p class="v-hint">目前先保留最基础的三项，等首页、推荐和私信实测以后再补。</p></div>
                </div>`);
                return;
              }
              openScreen("settings", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="settings">‹</button><div class="v-meta"><strong>记忆互通</strong><div class="v-hint">最后阶段再接</div></div></header><div class="v-subbody"><div class="v-card"><p class="v-settings-note" style="margin:0">这一项先保留入口，不在当前版本接逻辑。以后用于读取主聊天记忆、重要直播事件回传，以及角色对匿名账号的认知与 Vela 近期事件同步。</p></div></div>`);
            };

            const saveGenerationSettings = async () => {
              const screen = q('[data-screen="settings"]');
              const mode = screen?.querySelector('[data-setting-field="presetMode"]')?.value === "custom" ? "custom" : "default";
              const customText = String(screen?.querySelector('[data-setting-field="customPreset"]')?.value || "").trim();
              state.generationPreset = { mode, customText };
              await persist();
              toast("生成预设已保存");
            };

            const saveAppearanceSettings = async () => {
              const screen = q('[data-screen="settings"]');
              const darkMode = Boolean(screen?.querySelector('[data-setting-field="darkMode"]')?.checked);
              const topbarHeight = Math.max(52, Math.min(86, Number(screen?.querySelector('[data-setting-field="topbarHeight"]')?.value || 62)));
              const bottombarHeight = Math.max(64, Math.min(100, Number(screen?.querySelector('[data-setting-field="bottombarHeight"]')?.value || 78)));
              state.appearance = { darkMode, topbarHeight, bottombarHeight };
              await persist();
              mountMarkup(root, state);
              rerender();
              switchPage(state.activePage || "home");
              openSettingsNote("appearance");
              toast("外观设置已保存");
            };

            const savePlatformSettings = async () => {
              const screen = q('[data-screen="settings"]');
              const recommendationCount = Math.max(1, Math.min(6, Math.floor(Number(screen?.querySelector('[data-setting-field="recommendationCount"]')?.value || 3))));
              const allowBusinessDM = Boolean(screen?.querySelector('[data-setting-field="allowBusinessDM"]')?.checked);
              const activityLevel = Math.max(0, Math.min(100, Number(screen?.querySelector('[data-setting-field="activityLevel"]')?.value ?? 50)));
              state.platformSettings = { recommendationCount, allowBusinessDM, activityLevel };
              await persist();
              renderRecommended();
              toast("平台设置已保存");
            };

            const openMessage = (id) => {
              const msg = state.messages.find(x => x.id === id);
              if (!msg) return;
              if (id === "biz-mellow") {
                const deal = state.businessDeals?.[id] || {};
                const accepted = Boolean(deal.accepted);
                const expanded = Boolean(deal.expanded);
                openScreen("message", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="message">‹</button><div><strong>${escapeHTML(deal.brandName || "Mellow Studio")}</strong><div class="v-hint">品牌合作</div></div></header><div class="v-subbody">
                  <div class="v-brand-card"><div class="v-name" style="font-size:18px">${escapeHTML(deal.brandName || "Mellow Studio")}</div><div class="v-brand-style">${escapeHTML(deal.brandStyle || "生活方式品牌")}</div><div class="v-product-box"><b>${escapeHTML(deal.productName || "合作商品")}</b><p>${escapeHTML(deal.productDescription || "")}</p></div>
                    <button class="v-task-toggle" data-action="toggle-business-task" data-message-id="${escapeHTML(id)}"><span>合作任务</span><span>${expanded ? "收起⌃" : "展开⌄"}</span></button>
                    ${expanded ? `<div class="v-task-detail"><div class="v-row"><div><b>直播时间</b><small>${escapeHTML(deal.dateText || "")}</small></div><span class="v-pill" style="background:${accepted ? "#111" : "var(--v-soft)"};color:${accepted ? "#fff" : "var(--v-text)"}">${accepted ? "已接受" : "待确认"}</span></div><div class="v-row"><div><b>合作要求</b><small>${escapeHTML(deal.deliverables || "")}</small></div></div><div class="v-row"><div><b>定金</b><small>接受合作后进入日程</small></div><b>¥${Number(deal.deposit || 0).toLocaleString("zh-CN")}</b></div><div class="v-row"><div><b>尾款</b><small>完成直播任务后结算</small></div><b>¥${Number(deal.balance || 0).toLocaleString("zh-CN")}</b></div>${accepted ? `<button class="v-action light" style="margin:12px 0" data-action="go-home-from-task">已加入首页日程</button>` : `<button class="v-action" style="margin:12px 0" data-action="accept-business-task" data-message-id="${escapeHTML(id)}">接受合作并加入日程</button>`}</div>` : ""}
                  </div>
                </div>`);
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
              } else if (action === "home-filter") {
                state.homeFilter = ["all","live","post"].includes(button.dataset.homeFilter) ? button.dataset.homeFilter : "all";
                renderHome();
                await persist();
              } else if (action === "open-home-live") {
                openLive(getHomeSampleLive());
              } else if (action === "open-home-post") {
                openHomePost();
              } else if (action === "open-post-by-id") {
                openPostDetail(button.dataset.postId || "home-sample-post");
              } else if (action === "toggle-translation") {
                const target = String(button.dataset.translationTarget || "");
                const el = qa('[data-translation-id]').find(node => String(node.dataset.translationId || "") === target);
                if (el) {
                  const isHidden = el.hasAttribute("hidden");
                  if (isHidden) el.removeAttribute("hidden"); else el.setAttribute("hidden", "");
                  button.textContent = isHidden ? "收起翻译" : "翻译";
                }
              } else if (action === "demo-like-post") {
                const liked = button.dataset.liked === "1";
                button.dataset.liked = liked ? "0" : "1";
                const raw = Number((button.textContent.match(/\d+/) || [0])[0]);
                button.textContent = `${liked ? "♡" : "♥"} ${Math.max(0, raw + (liked ? -1 : 1))}`;
              } else if (action === "summon-post-replies") {
                await summonPostReplies(button.dataset.postId || "");
              } else if (action === "send-post-comment") {
                await sendPostComment(button.dataset.postId || "");
              } else if (action === "delete-post-comment") {
                await deletePostComment(button.dataset.postId || "", button.dataset.commentIndex);
              } else if (action === "delete-community-post") {
                await deleteCommunityPost(button.dataset.postId || "");
              } else if (action === "edit-post") {
                openEditPostEditor(button.dataset.postId || "");
              } else if (action === "save-post-edit") {
                await saveEditedPost(button.dataset.postId || "");
              } else if (action === "open-community-post-editor") {
                openCommunityPostEditor(button.dataset.ownerType || "identity", button.dataset.ownerId || state.viewerIdentityId);
              } else if (action === "save-community-post") {
                await saveCommunityPost(button.dataset.ownerType || "identity", button.dataset.ownerId || state.viewerIdentityId);
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
              } else if (action === "open-live-exit") {
                q('[data-screen="live"] [data-role="live-exit-menu"]')?.classList.add("is-open");
              } else if (action === "close-live-exit") {
                q('[data-screen="live"] [data-role="live-exit-menu"]')?.classList.remove("is-open");
              } else if (action === "leave-live") {
                closeScreen("live");
                state.liveSession = null;
                toast("已退出直播间，主播仍可能继续直播");
              } else if (action === "hang-own-live") {
                closeScreen("live");
                toast("已退出直播间，直播仍在继续");
              } else if (action === "end-own-live") {
                const live = state.liveSession;
                if (live) {
                  const stats = getLiveStats(live);
                  stats.ended = true;
                  stats.endedAt = Date.now();
                  const channel = state.channels.find(x => String(x.id) === String(live.id));
                  if (channel) channel.live = false;
                }
                state.liveSession = null;
                await persist();
                closeScreen("live");
                renderHome();
                renderChannels();
                toast("直播已结束，稍后会进入回放");
              } else if (action === "continue-live") {
                await advanceLive({ fromUser: false });
              } else if (action === "send-live-chat") {
                const input = q('[data-screen="live"] [data-role="live-input"]');
                const text = String(input?.value || "").trim();
                if (!text) {
                  await advanceLive({ fromUser: false });
                } else {
                  const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
                  state.liveChat.push({ user: identity?.handle || "@user", avatar: identity?.avatar || "U", text, translation: "", isUser: true });
                  input.value = "";
                  await advanceLive({ fromUser: true, userText: text });
                }
              } else if (action === "toggle-gift-rank") {
                q('[data-screen="live"] [data-role="gift-rank-panel"]')?.classList.toggle("is-open");
                renderLiveHUD();
              } else if (action === "close-gift-rank") {
                q('[data-screen="live"] [data-role="gift-rank-panel"]')?.classList.remove("is-open");
              } else if (action === "gift-demo") {
                q('[data-screen="live"] [data-role="gift-picker"]')?.classList.add("is-open");
                renderLiveHUD();
              } else if (action === "close-gift-picker") {
                q('[data-screen="live"] [data-role="gift-picker"]')?.classList.remove("is-open");
              } else if (action === "send-live-gift") {
                const amount = Math.max(0, Number(button.dataset.giftAmount || 0));
                const live = state.liveSession;
                if (!live || !amount) return;
                if (Number(state.wallet?.balance || 0) < amount) { toast("钱包余额不足"); return; }
                state.wallet.balance = Number(state.wallet.balance || 0) - amount;
                state.wallet.transactions.unshift({ title: "直播送礼", note: live.handle || live.name || "直播间", amount: -amount });
                const stats = getLiveStats(live);
                stats.userGiftTotal = Number(stats.userGiftTotal || 0) + amount;
                stats.heat = Math.min(100, Number(stats.heat || 50) + Math.min(18, amount / 80));
                advanceViewerCount(live, { heatBoost: Math.min(10, amount / 120) });
                state.liveChat.push({ user: "系统", avatar: "🎁", text: `${state.identities.find(x => x.id === state.viewerIdentityId)?.handle || "@user"} 送出了 ¥${amount} 的礼物`, translation: "" });
                await persist();
                renderLiveChatLines();
                renderLiveHUD();
                q('[data-screen="live"] [data-role="gift-picker"]')?.classList.remove("is-open");
                toast(`已送出 ¥${amount}`);
              } else if (action === "open-message") {
                openMessage(button.dataset.messageId);
              } else if (action === "toggle-business-task") {
                const id = String(button.dataset.messageId || "");
                const deal = state.businessDeals?.[id];
                if (deal) {
                  deal.expanded = !deal.expanded;
                  await persist();
                  openMessage(id);
                }
              } else if (action === "accept-business-task") {
                const id = String(button.dataset.messageId || "");
                const deal = state.businessDeals?.[id];
                if (deal) {
                  deal.accepted = true;
                  deal.expanded = true;
                  state.schedule = {
                    visible: true,
                    source: "business",
                    messageId: id,
                    dateText: String(deal.dateText || ""),
                    title: `${deal.brandName || "品牌"} 合作直播`,
                    detail: `${deal.productName || "合作商品"} · ${deal.deliverables || "合作任务"}`,
                    type: "合作直播"
                  };
                  await persist();
                  renderSchedule();
                  openMessage(id);
                  toast("合作已接受，直播日程已加入首页");
                }
              } else if (action === "go-home-from-task") {
                closeScreen("message");
                switchPage("home");
                const main = q(".v-main"); if (main) main.scrollTop = 0;
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
              } else if (action === "create-scheduled-live") {
                closeScreen("schedule-detail");
                openScheduledLiveEditor(button.dataset.identityId || state.viewerIdentityId);
              } else if (action === "save-scheduled-live") {
                await saveScheduledLive(button.dataset.identityId || state.viewerIdentityId);
              } else if (action === "open-scheduled-live") {
                openScheduledLiveDetail(button.dataset.identityId || state.viewerIdentityId);
              } else if (action === "cancel-scheduled-live") {
                const identity = state.identities.find(x => String(x.id) === String(button.dataset.identityId || ""));
                if (identity) {
                  identity.scheduledLive = null;
                  await persist();
                  closeScreen("schedule-detail");
                  openProfile("identity", identity.id);
                  renderProfileTab("identity", identity.id, "live");
                  toast("已取消预约");
                }
              } else if (action === "start-scheduled-live") {
                const identity = state.identities.find(x => String(x.id) === String(button.dataset.identityId || ""));
                if (identity?.scheduledLive) {
                  const item = identity.scheduledLive;
                  closeScreen("schedule-detail");
                  openLive({ id: `own-scheduled-${identity.id}`, name: identity.displayName || "我的频道", handle: identity.handle || "@me", title: item.title || "我的直播间", category: "我的预约直播", viewers: 0 });
                }
              } else if (action === "settings-note") {
                closeDrawer(); openSettingsNote(button.dataset.settingsKind || "platform");
              } else if (action === "save-generation-settings") {
                await saveGenerationSettings();
              } else if (action === "save-appearance-settings") {
                await saveAppearanceSettings();
              } else if (action === "save-platform-settings") {
                await savePlatformSettings();
              } else if (action === "reset-appearance") {
                state.appearance = { darkMode: false, topbarHeight: 62, bottombarHeight: 78 };
                await persist();
                mountMarkup(root, state); rerender(); switchPage(state.activePage || "home"); openSettingsNote("appearance");
                toast("外观已恢复默认");
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
                      banner: "", followers: 0, following: 0,
                      accountRole: "primary", faceMode: "mixed", identityVisibility: "partial",
                      contentStyle: "", fanProfile: "",
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
                  state.identities.push({ id: "public-main", type: "public", displayName: "Nini Daily", handle: "@nini_daily", avatar: "ND", bio: "公开频道", banner: "", followers: 0, following: 0, accountRole: "primary", faceMode: "mixed", identityVisibility: "partial", contentStyle: "", fanProfile: "", isAnonymous: false });
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

            root.addEventListener("keydown", async (event) => {
              if (event.key !== "Enter" || event.shiftKey) return;
              const target = event.target;
              if (target?.matches?.('[data-role="post-comment-input"]')) {
                event.preventDefault();
                const button = q('[data-screen="post"] [data-action="send-post-comment"]');
                if (button) await sendPostComment(button.dataset.postId || "");
              } else if (target?.matches?.('[data-role="live-input"]')) {
                event.preventDefault();
                const button = q('[data-screen="live"] [data-action="send-live-chat"]');
                button?.click();
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
              } else if (input?.matches?.('[data-setting-field="topbarHeight"]')) {
                const label = q('[data-screen="settings"] [data-role="topbar-value"]');
                if (label) label.textContent = `${Number(input.value || 62)}px`;
              } else if (input?.matches?.('[data-setting-field="bottombarHeight"]')) {
                const label = q('[data-screen="settings"] [data-role="bottombar-value"]');
                if (label) label.textContent = `${Number(input.value || 78)}px`;
              } else if (input?.matches?.('[data-setting-field="activityLevel"]')) {
                const label = q('[data-screen="settings"] [data-role="activity-value"]');
                if (label) label.textContent = `${Number(input.value || 0)}%`;
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
