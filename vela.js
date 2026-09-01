(() => {
  const PLUGIN_ID = "vela-live";
  const APP_ID = "vela-live-home";
  const VERSION = "0.1.20";
  const VELA_ICON = "data:image/png;base64,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";

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
      dmTab: "dm",
      subscriptions: {},
      subscriptionProfiles: {},
      communityChats: {},
      communitySettings: {},
      dmThreads: {},
      pendingOwnLiveInput: null,
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
          liveDurationMode: "irregular",
          liveDurationText: "",
          liveSchedule: "",
          liveAutonomy: "flexible",
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
          liveDurationMode: "irregular",
          liveDurationText: "",
          liveSchedule: "",
          liveAutonomy: "flexible",
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
        cashBalanceCNY: 12680.4,
        coinBalance: 12860,
        linkedAccount: null,
        settlementCurrency: "",
        fxRates: { CNY: 1, USD: 0.149, JPY: 21.9, KRW: 207, HKD: 1.16, EUR: 0.128 },
        fxUpdatedAt: 0,
        subscriptionAccruals: [],
        subscriptionPurchases: {},
        transactions: [
          { id: "tx-demo-business", type: "cash", title: "商务合作", note: "Mellow Studio · 示例历史流水", cashCNY: 800, at: Date.now() - 86400000 * 2 },
          { id: "tx-demo-tip", type: "coin", title: "直播打赏", note: "周末直播 · 示例历史流水", coin: 960, at: Date.now() - 86400000 },
          { id: "tx-demo-gift", type: "coin", title: "直播礼物", note: "Aster 联播 · 示例历史流水", coin: 1280, at: Date.now() - 43200000 }
        ]
      },
      roleEarnings: {},
      messages: [
        {
          id: "biz-mellow",
          avatar: "M",
          name: "Mellow Studio",
          handle: "@mellow_studio",
          badge: "商务联系",
          preview: "你好，我们是 Mellow Studio，主营生活方式与香氛产品。想先和你聊聊一款新品的直播合作，你这边会接广告吗？",
          unread: 1
        },
        {
          id: "aster-dm",
          avatar: "A",
          name: "Aster",
          handle: "@aster_room",
          badge: "",
          relationship: "mutual",
          channelId: "char-aster",
          preview: "今晚要不要一起开一场？我已经把标题想好了。",
          unread: 2
        }
      ],
      communityPosts: [],
      liveReplays: [],
      postReplies: {
        "home-sample-post": [
          { user: "yoo_n", avatar: "Y", text: "조명 바뀌면 분위기 진짜 달라질 듯", translation: "换了灯光以后氛围应该真的会完全不一样。" },
          { user: "Sato_Aki", avatar: "S", text: "次の配信も楽しみにしてる", translation: "也很期待下一次直播。" },
          { user: "Mika", avatar: "M", text: "the room already looks cozy", translation: "这个房间现在看起来已经很舒服了。" }
        ]
      },
      postOverrides: {},
      liveSession: null,
      pendingLiveUserMessage: null,
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
.vela-roche{--v-bg:#f2f2f7;--v-card:#fff;--v-text:#111111;--v-muted:#8e8e93;--v-line:rgba(60,60,67,.16);--v-soft:#f2f2f7;--v-blue:#007aff;--v-blue-soft:#eaf3ff;--v-red:#ff3b30;--v-live:var(--v-red);--v-top-h:62px;--v-bottom-h:78px;position:relative;width:100%;height:100%;min-height:0;background:var(--v-bg);color:var(--v-text);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;-webkit-tap-highlight-color:transparent;isolation:isolate}
.vela-roche *{box-sizing:border-box}.vela-roche button,.vela-roche input,.vela-roche textarea{font:inherit}.vela-roche button{cursor:pointer}.vela-roche .v-top{position:absolute;z-index:20;left:0;right:0;top:0;height:var(--v-top-h);padding:0 14px;display:flex;align-items:center;justify-content:space-between;background:rgba(246,246,248,.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(0,0,0,.035)}
.vela-roche .v-brand{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:900}.vela-roche .v-logo{width:30px;height:30px;border-radius:10px;background:#fff;display:grid;place-items:center;overflow:hidden;border:1px solid var(--v-line)}.vela-roche .v-logo img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-plainbtn{width:42px;height:42px;border:0;border-radius:14px;background:#fff;color:#111;font-size:19px;display:grid;place-items:center}.vela-roche .v-top-actions{display:flex;gap:7px}
.vela-roche .v-main{position:absolute;inset:var(--v-top-h) 0 calc(var(--v-bottom-h) + env(safe-area-inset-bottom,0px));overflow:auto;overscroll-behavior:contain;padding:12px 14px 24px;-webkit-overflow-scrolling:touch}.vela-roche .v-page{display:none}.vela-roche .v-page.is-active{display:block}.vela-roche .v-title{display:flex;justify-content:space-between;align-items:flex-end;margin:5px 2px 13px;font-size:22px;font-weight:900}.vela-roche .v-title small{font-size:11px;color:var(--v-muted);font-weight:700}
.vela-roche .v-channels{display:flex;gap:12px;overflow-x:auto;padding:2px 0 11px;scrollbar-width:none}.vela-roche .v-channels::-webkit-scrollbar{display:none}.vela-roche .v-channel{width:64px;flex:0 0 auto;text-align:center;border:0;background:none;color:inherit;padding:0}.vela-roche .v-avatar-wrap{position:relative;width:58px;height:58px;border-radius:50%;padding:2px;background:linear-gradient(135deg,#111,#aaa);margin:auto}.vela-roche .v-avatar{width:100%;height:100%;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#dadbe1,#fff);font-weight:900;font-size:18px;overflow:hidden}.vela-roche .v-live-dot{position:absolute;right:-4px;bottom:-3px;background:var(--v-live);color:#fff;border:3px solid var(--v-bg);border-radius:8px;font-size:8px;font-weight:900;padding:2px 5px}.vela-roche .v-channel-name{font-size:11px;font-weight:750;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vela-roche .v-schedule{background:linear-gradient(135deg,#0f5fc4,#163d7a);color:#fff;border-radius:22px;padding:13px 14px;margin:4px 0 13px}.vela-roche .v-schedule-top,.vela-roche .v-schedule-main{display:flex;align-items:center;justify-content:space-between;gap:10px}.vela-roche .v-kicker{font-size:10px;opacity:.62;font-weight:800}.vela-roche .v-schedule-time{font-size:17px;font-weight:900;margin-top:3px}.vela-roche .v-pill{font-size:10px;background:#fff;color:#111;border-radius:9px;padding:5px 8px;font-weight:900}.vela-roche .v-schedule-main{margin-top:10px}.vela-roche .v-schedule-icon{width:38px;height:38px;border-radius:13px;background:#2a2a30;display:grid;place-items:center;font-weight:900}.vela-roche .v-schedule-copy{flex:1;min-width:0}.vela-roche .v-schedule-copy b{display:block;font-size:13px}.vela-roche .v-schedule-copy span{display:block;font-size:11px;opacity:.68;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-small-dark{border:0;background:#2a2a30;color:#fff;border-radius:12px;padding:9px 11px;font-size:11px;font-weight:850;min-height:38px}
.vela-roche .v-home-card{overflow:hidden}.vela-roche .v-home-card-hit{width:100%;border:0;background:none;color:inherit;text-align:left;padding:0}.vela-roche .v-home-post-cover{height:178px;border-radius:19px;margin-top:12px;background:radial-gradient(circle at 72% 24%,rgba(255,255,255,.9),transparent 24%),linear-gradient(135deg,#d8d8df,#f4f4f7);display:grid;place-items:center;font-size:38px}.vela-roche .v-home-post-meta{display:flex;gap:14px;margin-top:10px;color:var(--v-muted);font-size:11px}.vela-roche .v-home-open{font-size:10px;color:var(--v-muted);font-weight:800}.vela-roche .v-task-toggle{width:100%;border:0;background:var(--v-soft);color:var(--v-text);border-radius:15px;padding:12px 13px;display:flex;align-items:center;justify-content:space-between;font-weight:900;margin-top:12px}.vela-roche .v-task-detail{margin-top:8px;border:1px solid var(--v-line);border-radius:16px;padding:0 13px;background:var(--v-card)}.vela-roche .v-brand-card{background:var(--v-card);border-radius:22px;padding:15px;margin-bottom:12px}.vela-roche .v-brand-style{font-size:11px;color:var(--v-muted);margin-top:4px}.vela-roche .v-product-box{margin-top:13px;background:var(--v-soft);border-radius:16px;padding:12px}.vela-roche .v-product-box b{font-size:13px}.vela-roche .v-product-box p{font-size:12px;line-height:1.55;color:var(--v-muted);margin:6px 0 0}.vela-roche .v-scheduled-card{width:100%;border:0;background:#111;color:#fff;border-radius:20px;padding:15px;text-align:left}.vela-roche .v-scheduled-card .v-sub{color:rgba(255,255,255,.68)}.vela-roche .v-profile-actions{display:flex;gap:8px;margin-top:12px}.vela-roche .v-profile-actions button{border:0;border-radius:12px;padding:9px 11px;font-size:11px;font-weight:900}.vela-roche .v-post-detail-cover{height:220px;border-radius:22px;background:radial-gradient(circle at 68% 18%,rgba(255,255,255,.86),transparent 28%),linear-gradient(135deg,#d5d6de,#f5f5f8);display:grid;place-items:center;font-size:52px;margin-top:12px}
.vela-roche .v-filters{display:flex;gap:8px;margin:9px 0 14px}.vela-roche .v-chip{border:0;border-radius:14px;background:#e9e9ee;padding:9px 14px;font-size:12px;font-weight:850;color:#111}.vela-roche .v-chip.is-active{background:var(--v-blue);color:#fff}.vela-roche .v-card{background:#fff;border-radius:24px;padding:14px;margin-bottom:14px}.vela-roche .v-author{display:flex;align-items:center;gap:10px}.vela-roche .v-mini{width:41px;height:41px;border-radius:14px;background:#ececf1;display:grid;place-items:center;font-weight:900}.vela-roche .v-meta{min-width:0;flex:1}.vela-roche .v-name{font-size:14px;font-weight:900}.vela-roche .v-sub{font-size:11px;color:var(--v-muted);margin-top:2px}.vela-roche .v-stage{display:flex;align-items:flex-end;width:100%;aspect-ratio:16/9;margin-top:12px;padding:14px;border:0;border-radius:20px;background:radial-gradient(circle at 72% 16%,rgba(255,255,255,.34),transparent 29%),linear-gradient(135deg,#1b1b22,#7a7d88);color:#fff;text-align:left;overflow:hidden;position:relative}.vela-roche .v-stage:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 38%,rgba(0,0,0,.48))}.vela-roche .v-stage-copy{position:relative;z-index:1}.vela-roche .v-badge{display:inline-block;background:var(--v-live);padding:5px 8px;border-radius:8px;font-size:9px;font-weight:900;margin-bottom:7px}.vela-roche .v-live-title{font-size:18px;font-weight:900;line-height:1.25}.vela-roche .v-viewers{font-size:11px;opacity:.82;margin-top:4px}.vela-roche .v-engage{display:flex;gap:14px;margin-top:10px;color:#555;font-size:12px}.vela-roche .v-postimg{height:170px;border-radius:19px;margin-top:12px;background:linear-gradient(135deg,#d7d8df,#fafafd);display:grid;place-items:center;font-size:42px}.vela-roche .v-posttext{font-size:14px;line-height:1.55;margin-top:10px}
.vela-roche .v-rec-card{padding:0;overflow:hidden}.vela-roche .v-rec-cover{display:flex;align-items:flex-end;aspect-ratio:16/9;padding:14px;background:radial-gradient(circle at 75% 15%,rgba(255,255,255,.4),transparent 26%),linear-gradient(135deg,#2a2b31,#8c8f99);color:#fff;position:relative}.vela-roche .v-rec-cover:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 42%,rgba(0,0,0,.55))}.vela-roche .v-rec-cover>*{position:relative;z-index:1}.vela-roche .v-rec-body{padding:12px 14px 14px;display:flex;gap:10px;align-items:center}.vela-roche .v-follow{border:0;background:var(--v-blue);color:#fff;border-radius:12px;padding:9px 12px;font-size:11px;font-weight:900;min-height:38px}.vela-roche .v-follow.is-on{background:#e9e9ee;color:#111}
.vela-roche .v-msg{display:flex;align-items:center;gap:11px;padding:12px 2px;border-bottom:1px solid var(--v-line);border-top:0;border-left:0;border-right:0;background:none;width:100%;text-align:left;color:inherit}.vela-roche .v-msg:last-child{border-bottom:0}.vela-roche .v-preview{font-size:12px;color:var(--v-muted);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-unread{min-width:20px;height:20px;border-radius:10px;background:#111;color:#fff;font-size:10px;display:grid;place-items:center}.vela-roche .v-biz{font-size:9px;padding:3px 6px;border-radius:7px;background:#fff0d4;color:#925e00;margin-left:5px}.vela-roche .v-wallet{background:linear-gradient(135deg,#0d4f9e,#173864);color:#fff;border-radius:28px;padding:22px;margin:7px 0 16px}.vela-roche .v-balance-label{font-size:12px;opacity:.65}.vela-roche .v-balance{font-size:35px;font-weight:900;margin:7px 0 18px}.vela-roche .v-wallet-actions{display:flex;gap:8px}.vela-roche .v-wallet-actions button{flex:1;border:0;background:#fff;color:#111;border-radius:14px;padding:12px;font-weight:900}.vela-roche .v-tx{display:flex;justify-content:space-between;gap:12px;padding:13px 2px;border-bottom:1px solid var(--v-line);font-size:13px}.vela-roche .v-tx:last-child{border-bottom:0}.vela-roche .v-tx small{display:block;color:var(--v-muted);margin-top:3px}
.vela-roche .v-nav{position:absolute;z-index:30;left:0;right:0;bottom:0;height:calc(var(--v-bottom-h) + env(safe-area-inset-bottom,0px));padding-bottom:env(safe-area-inset-bottom,0px);display:grid;grid-template-columns:repeat(5,1fr);background:rgba(255,255,255,.96);backdrop-filter:blur(18px);border-top:1px solid var(--v-line)}.vela-roche .v-nav button{border:0;background:none;color:#8b8b93;font-size:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-width:0;min-height:52px}.vela-roche .v-nav button b{font-size:20px;font-weight:500}.vela-roche .v-nav button.is-active{color:var(--v-blue);font-weight:900}.vela-roche .v-nav .v-publish b{width:42px;height:42px;border-radius:15px;background:#111;color:#fff;display:grid;place-items:center;font-size:25px;margin-top:-5px;box-shadow:0 7px 18px rgba(0,0,0,.17)}
.vela-roche .v-mask{position:absolute;z-index:50;inset:0;background:rgba(0,0,0,.28);opacity:0;pointer-events:none;transition:opacity .18s}.vela-roche .v-mask.is-open{opacity:1;pointer-events:auto}.vela-roche .v-drawer{position:absolute;z-index:60;top:0;bottom:0;left:0;width:min(84%,350px);padding:18px 16px calc(16px + env(safe-area-inset-bottom,0px));background:#fff;transform:translateX(-102%);transition:transform .22s ease;overflow:auto;display:flex;flex-direction:column}.vela-roche .v-drawer.is-open{transform:none}.vela-roche .v-drawer-main{flex:1;min-height:0}.vela-roche .v-userhead{width:100%;border:0;background:#f6f6f8;border-radius:22px;padding:13px;display:flex;align-items:center;gap:12px;margin:6px 0 18px;text-align:left;color:inherit}.vela-roche .v-userav{width:58px;height:58px;border-radius:20px;background:linear-gradient(135deg,#111,#777);color:#fff;display:grid;place-items:center;font-weight:900;flex:0 0 auto}.vela-roche .v-avatar img,.vela-roche .v-mini img,.vela-roche .v-userav img{width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block}.vela-roche .v-usercopy{min-width:0;flex:1}.vela-roche .v-userhead b{display:block;font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-userhead span{display:block;color:var(--v-muted);font-size:12px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-identity-chip{display:inline-flex!important;width:auto!important;margin-top:7px!important;padding:4px 7px;border-radius:8px;background:#111;color:#fff!important;font-size:9px!important;font-weight:900}.vela-roche .v-drawer-section{margin-top:14px}.vela-roche .v-drawer-label{padding:0 4px 7px;color:#a0a0a8;font-size:10px;font-weight:900;letter-spacing:.06em}.vela-roche .v-drawer-item{width:100%;padding:13px 4px;border:0;border-bottom:1px solid var(--v-line);background:none;display:flex;align-items:center;justify-content:space-between;gap:10px;text-align:left;color:inherit;font-size:14px;font-weight:800;min-height:48px}.vela-roche .v-drawer-item .v-itemcopy{display:flex;align-items:center;gap:10px;min-width:0}.vela-roche .v-drawer-item .v-itemicon{width:30px;height:30px;border-radius:10px;background:#f2f2f5;display:grid;place-items:center;font-size:14px;flex:0 0 auto}.vela-roche .v-drawer-item .v-itembadge{font-size:10px;color:var(--v-muted);font-weight:800}.vela-roche .v-drawer-foot{padding-top:18px;margin-top:auto}.vela-roche .v-version{font-size:10px;color:#b0b0b7;text-align:center;margin:0 0 9px}.vela-roche .v-exit{width:100%;min-height:48px;border:0;border-radius:15px;background:#f3f3f6;color:#b3261e;font-weight:900;font-size:13px}
.vela-roche .v-sheetmask{position:absolute;z-index:80;inset:0;background:rgba(0,0,0,.28);display:none;align-items:flex-end}.vela-roche .v-sheetmask.is-open{display:flex}.vela-roche .v-sheet{width:100%;max-height:82%;overflow:auto;background:#fff;border-radius:28px 28px 0 0;padding:13px 16px calc(24px + env(safe-area-inset-bottom,0px));overscroll-behavior:contain}.vela-roche .v-handle{width:42px;height:5px;border-radius:3px;background:#d2d2d7;margin:0 auto 15px}.vela-roche .v-create-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.vela-roche .v-create{border:0;border-radius:18px;background:#f1f1f4;padding:17px;text-align:left;font-weight:900;min-height:92px}.vela-roche .v-create b{display:block;font-size:24px;margin-bottom:12px}.vela-roche .v-hint{font-size:11px;line-height:1.5;color:var(--v-muted)}
.vela-roche .v-subscreen{position:absolute;z-index:70;inset:0;background:var(--v-bg);transform:translateX(102%);transition:transform .22s ease;overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}.vela-roche .v-subscreen.is-open{transform:none}.vela-roche .v-subhead{position:sticky;z-index:2;top:0;height:var(--v-top-h);padding:0 14px;display:flex;align-items:center;gap:10px;background:rgba(246,246,248,.96);backdrop-filter:blur(16px);border-bottom:1px solid var(--v-line)}.vela-roche .v-subhead>button:first-child{width:42px;height:42px;border:0;border-radius:14px;background:#fff;font-size:21px;flex:0 0 auto}.vela-roche .v-subhead .v-head-action{width:auto!important;height:34px!important;min-height:34px!important;padding:0 10px!important;border:0;border-radius:11px;background:#fff!important;color:#111!important;font-size:11px!important;font-weight:850!important;white-space:nowrap}.vela-roche .v-subbody{padding:14px 14px 28px}.vela-roche .v-tabs{display:flex;gap:8px;overflow:auto;margin-bottom:13px}.vela-roche .v-tabs button{border:0;border-radius:13px;background:#e9e9ee;padding:9px 12px;font-size:12px;font-weight:850}.vela-roche .v-tabs button.is-active{background:#111;color:#fff}.vela-roche .v-empty{padding:65px 14px;text-align:center;color:var(--v-muted);font-size:13px;line-height:1.6}.vela-roche .v-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid var(--v-line)}.vela-roche .v-row:last-child{border-bottom:0}.vela-roche .v-row b{font-size:13px}.vela-roche .v-row small{display:block;color:var(--v-muted);font-size:11px;margin-top:3px}.vela-roche .v-action{border:0;border-radius:12px;background:var(--v-blue);color:#fff;padding:9px 12px;font-size:11px;font-weight:900;min-height:38px}.vela-roche .v-action.light{background:#efeff3;color:#111}.vela-roche .v-linkbox{border:1px solid var(--v-line);border-radius:18px;padding:12px;margin:10px 0;background:#fafafd}.vela-roche .v-linkstatus{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--v-muted);margin-top:4px}.vela-roche .v-dot{width:7px;height:7px;border-radius:50%;background:#b9b9c1;flex:0 0 auto}.vela-roche .v-dot.on{background:#38a169}.vela-roche .v-rolecard{border-top:1px solid var(--v-line);padding-top:12px;margin-top:12px}.vela-roche .v-rolecard:first-child{border-top:0;padding-top:0;margin-top:0}
.vela-roche .v-profile-shell{padding-bottom:18px}.vela-roche .v-profile-banner{height:156px;background:linear-gradient(135deg,#d5d6dc,#f5f5f8);overflow:hidden;position:relative}.vela-roche .v-profile-banner img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-profile-info{position:relative;padding:48px 16px 14px;background:var(--v-card)}.vela-roche .v-profile-avatar{width:84px;height:84px;border-radius:50%;border:4px solid var(--v-card);background:linear-gradient(135deg,#222,#888);color:#fff;display:grid;place-items:center;font-weight:900;font-size:18px;overflow:hidden;position:absolute;left:16px;top:-42px;margin:0}.vela-roche .v-profile-avatar img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-profile-main{display:flex;align-items:flex-end;justify-content:space-between;gap:12px}.vela-roche .v-profile-maincopy{min-width:0;flex:1;padding-top:8px}.vela-roche .v-profile-maincopy h2{font-size:22px;line-height:1.2;margin:0 0 4px}.vela-roche .v-profile-handle{font-size:12px;color:var(--v-muted)}.vela-roche .v-profile-stats{display:flex;gap:14px;margin-top:10px;font-size:12px;color:var(--v-muted)}.vela-roche .v-profile-stats b{color:var(--v-text);font-size:13px}.vela-roche .v-profile-bio{font-size:13px;line-height:1.55;margin-top:11px;white-space:pre-wrap}.vela-roche .v-profile-tabs{display:grid;grid-template-columns:repeat(3,1fr);background:var(--v-card);border-top:1px solid var(--v-line);border-bottom:1px solid var(--v-line)}.vela-roche .v-profile-tabs button{border:0;background:var(--v-card);padding:13px 6px;font-size:12px;font-weight:850;color:var(--v-muted);position:relative}.vela-roche .v-profile-tabs button.is-active{color:#111}.vela-roche .v-profile-tabs button.is-active:after{content:"";position:absolute;left:24%;right:24%;bottom:0;height:2px;background:#111;border-radius:2px}.vela-roche .v-profile-tabbody{padding:14px}.vela-roche .v-editform{display:grid;gap:12px}.vela-roche .v-field label{display:block;font-size:11px;font-weight:850;margin-bottom:6px}.vela-roche .v-field input,.vela-roche .v-field textarea,.vela-roche .v-field select{width:100%;border:1px solid var(--v-line);background:var(--v-card);border-radius:13px;padding:11px 12px;font-size:16px;color:var(--v-text);outline:none}.vela-roche .v-field textarea{min-height:88px;resize:vertical}.vela-roche .v-field select{min-height:44px}.vela-roche .v-fieldpair{display:grid;grid-template-columns:1fr 1fr;gap:10px}.vela-roche .v-identity-card{border:1px solid var(--v-line);background:#fff;border-radius:18px;padding:12px;margin-top:10px}.vela-roche .v-identity-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.vela-roche .v-roche-compact{background:#fafafd;border:1px solid var(--v-line);border-radius:18px;padding:12px}.vela-roche .v-roche-persona{display:flex;align-items:center;gap:9px;padding:9px 0;border-top:1px solid var(--v-line)}.vela-roche .v-roche-persona:first-of-type{border-top:0}.vela-roche .v-role-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.vela-roche .v-profile-empty{padding:42px 12px;text-align:center;color:var(--v-muted);font-size:12px;line-height:1.6}.vela-roche .v-settings-note{font-size:12px;line-height:1.65;color:var(--v-muted)}.vela-roche .v-live-screen{background:#0d0d10;color:#fff}.vela-roche .v-live-screen .v-subhead{background:rgba(13,13,16,.95);border-bottom-color:#26262c}.vela-roche .v-live-screen .v-subhead button{background:#24242a;color:#fff}.vela-roche .v-live-body{padding:10px 12px 28px}.vela-roche .v-live-stage{aspect-ratio:16/9;border-radius:20px;background:radial-gradient(circle at 70% 15%,rgba(255,255,255,.25),transparent 27%),linear-gradient(135deg,#1d1e24,#747783);position:relative;overflow:hidden;padding:14px;display:flex;align-items:flex-end}.vela-roche .v-live-stage:after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 43%,rgba(0,0,0,.56))}.vela-roche .v-live-stage-copy{position:relative;z-index:1}.vela-roche .v-live-stage h2{font-size:19px;line-height:1.3;margin:7px 0 4px}.vela-roche .v-live-stage p{margin:0;font-size:11px;opacity:.8}.vela-roche .v-chat-panel{margin-top:10px;background:#fff;color:#111;border-radius:22px;padding:13px}.vela-roche .v-chat-title{font-weight:900;margin-bottom:7px}.vela-roche .v-chatline{display:flex;gap:8px;padding:7px 0;font-size:12px;line-height:1.45}.vela-roche .v-chatline b{flex:0 0 auto}.vela-roche .v-composer{display:grid;grid-template-columns:1fr 44px 44px;gap:8px;margin-top:10px}.vela-roche .v-composer input{width:100%;min-width:0;border:0;border-radius:15px;background:#efeff2;padding:11px 12px;font-size:16px}.vela-roche .v-composer button{border:0;border-radius:15px;background:#111;color:#fff;min-height:44px}.vela-roche .v-continue{width:100%;margin-top:8px;border:0;border-radius:15px;background:#24242a;color:#fff;padding:12px;font-weight:900;min-height:44px}.vela-roche .v-toast{position:absolute;z-index:120;left:50%;bottom:calc(92px + env(safe-area-inset-bottom,0px));transform:translate(-50%,12px);background:#111;color:#fff;border-radius:13px;padding:10px 13px;font-size:11px;opacity:0;pointer-events:none;transition:.18s;white-space:nowrap;max-width:86%;overflow:hidden;text-overflow:ellipsis}.vela-roche .v-toast.is-show{opacity:1;transform:translate(-50%,0)}
.vela-roche .v-settings-group{background:var(--v-card);border-radius:20px;padding:14px;margin-bottom:12px}.vela-roche .v-settings-group h3{font-size:14px;margin:0 0 10px}.vela-roche .v-setting-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--v-line)}.vela-roche .v-setting-row:first-of-type{border-top:0}.vela-roche .v-setting-row .v-meta{min-width:0}.vela-roche .v-switch{appearance:none;width:46px;height:28px;border-radius:16px;background:#d8d8de;position:relative;transition:.18s;flex:0 0 auto}.vela-roche .v-switch:after{content:"";position:absolute;width:22px;height:22px;left:3px;top:3px;border-radius:50%;background:#fff;transition:.18s}.vela-roche .v-switch:checked{background:#111}.vela-roche .v-switch:checked:after{transform:translateX(18px)}.vela-roche .v-range{width:100%;accent-color:var(--v-blue)}.vela-roche .v-preset-box{white-space:pre-wrap;font-size:12px;line-height:1.65;color:var(--v-muted);background:var(--v-soft);border-radius:16px;padding:12px}.vela-roche .v-settings-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.vela-roche .v-social-avatar{width:42px;height:42px;border-radius:50%;background:var(--v-soft);display:grid;place-items:center;font-weight:900;overflow:hidden;flex:0 0 auto}.vela-roche .v-social-avatar img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-social-head{display:flex;align-items:center;gap:10px}.vela-roche .v-social-copy{min-width:0;flex:1}.vela-roche .v-social-name{font-size:14px;font-weight:900}.vela-roche .v-social-handle{font-size:11px;color:var(--v-muted);margin-top:2px}.vela-roche .v-social-text{font-size:14px;line-height:1.55;margin-top:10px;white-space:pre-wrap}.vela-roche .v-social-media{width:100%;height:190px;border:0;border-radius:18px;margin-top:10px;background:radial-gradient(circle at 70% 20%,rgba(255,255,255,.9),transparent 28%),linear-gradient(135deg,#d9dae1,#f5f5f8);display:grid;place-items:center;font-size:38px;color:var(--v-text);overflow:hidden}.vela-roche .v-social-media img{width:100%;height:100%;object-fit:cover;display:block}.vela-roche .v-social-actions{display:flex;gap:20px;align-items:center;margin-top:10px}.vela-roche .v-social-actions button{border:0;background:none;color:var(--v-muted);font-size:12px;padding:3px 0}.vela-roche .v-translate-btn{border:0;background:none;color:var(--v-muted);font-size:10px;font-weight:800;padding:3px 0;margin-top:4px}.vela-roche .v-translation{font-size:12px;line-height:1.55;color:var(--v-muted);margin-top:5px;padding-left:9px;border-left:2px solid var(--v-line);white-space:pre-wrap}.vela-roche .v-comment-list{border-top:1px solid var(--v-line);margin-top:14px;padding-top:5px}.vela-roche .v-comment{display:flex;gap:9px;padding:10px 0;border-bottom:1px solid var(--v-line)}.vela-roche .v-comment:last-child{border-bottom:0}.vela-roche .v-comment .v-social-avatar{width:34px;height:34px;font-size:11px}.vela-roche .v-comment-body{min-width:0;flex:1}.vela-roche .v-comment-name{font-size:11px;font-weight:900}.vela-roche .v-comment-text{font-size:12px;line-height:1.5;margin-top:3px}.vela-roche .v-community-compose{width:100%;border:1px dashed var(--v-line);background:var(--v-card);color:var(--v-text);border-radius:17px;padding:13px;text-align:left;font-size:12px;font-weight:850;margin-bottom:12px}
.vela-roche .v-live-screen{background:var(--v-bg)!important;color:var(--v-text)!important}.vela-roche .v-live-screen .v-subhead{background:rgba(255,255,255,.96)!important;border-bottom-color:var(--v-line)!important;color:#111!important}.vela-roche .v-live-screen .v-subhead>button:first-child{background:#f0f0f3!important;color:#111!important}.vela-roche .v-live-screen .v-small-dark{background:#f0f0f3!important;color:#111!important}.vela-roche .v-live-body{padding:10px 12px 28px}.vela-roche .v-live-stage{border-radius:18px;background:radial-gradient(circle at 70% 15%,rgba(255,255,255,.18),transparent 27%),linear-gradient(135deg,#1b1c20,#777a83);padding:12px;align-items:flex-start}.vela-roche .v-live-stage:after{background:linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.28))}.vela-roche .v-live-stage-copy{width:100%;display:flex;justify-content:space-between;align-items:flex-start}.vela-roche .v-live-info{background:var(--v-card);border-radius:18px;padding:13px;margin-top:9px}.vela-roche .v-live-info h2{font-size:17px;line-height:1.35;margin:0}.vela-roche .v-live-info p{font-size:11px;color:var(--v-muted);margin:5px 0 0}.vela-roche .v-chat-panel{margin-top:9px;background:var(--v-card);color:var(--v-text);border:1px solid var(--v-line);border-radius:18px;padding:13px}.vela-roche .v-chatline{display:flex;gap:8px;padding:8px 0}.vela-roche .v-chatline .v-social-avatar{width:31px;height:31px;font-size:10px}.vela-roche .v-chatline-body{min-width:0;flex:1}.vela-roche .v-chatline-head{font-size:10px;font-weight:900}.vela-roche .v-chatline-text{font-size:12px;line-height:1.45;margin-top:2px}.vela-roche .v-composer input{background:var(--v-soft);color:var(--v-text)}.vela-roche .v-composer button{background:#111;color:#fff}.vela-roche .v-continue{background:#111;color:#fff}

.vela-roche.is-dark .v-sheet{background:#101116!important}
.vela-roche.is-dark .v-ios-group,.vela-roche.is-dark .v-ios-media-card,.vela-roche.is-dark .v-replay-card,.vela-roche.is-dark .v-replay-summary,.vela-roche.is-dark .v-replay-event,.vela-roche.is-dark .v-replay-chat{background:var(--v-card)}
.vela-roche.is-dark .v-ios-media-preview{background:linear-gradient(145deg,#20242b,#2c313b)}
.vela-roche.is-dark .v-publish-sheet-actions{background:linear-gradient(transparent,#101116 28%)}

.vela-roche.is-dark .v-live-screen .v-subhead{background:rgba(25,26,32,.96)!important;color:#fff!important}.vela-roche.is-dark .v-live-screen .v-subhead>button:first-child,.vela-roche.is-dark .v-live-screen .v-small-dark{background:#292b33!important;color:#fff!important}.vela-roche.is-dark .v-social-media{background:linear-gradient(135deg,#25272f,#343741)}

/* v0.1.15 · iOS-like surface polish */
.vela-roche .v-sheet{background:#f2f2f7!important;border-radius:28px 28px 0 0!important;padding-left:14px!important;padding-right:14px!important}
.vela-roche .v-sheet .v-handle{background:#c7c7cc!important;width:36px!important;height:5px!important}
.vela-roche .v-publish-sheet-title{min-height:42px;margin-bottom:10px!important}
.vela-roche .v-publish-sheet-title h3{font-size:17px!important;font-weight:800!important;letter-spacing:-.01em}
.vela-roche .v-publish-sheet-title button{width:34px;height:34px;border-radius:17px!important;background:rgba(118,118,128,.12)!important;color:var(--v-text)!important;display:grid;place-items:center}
.vela-roche .v-ios-publish{display:grid;gap:12px}
.vela-roche .v-ios-group{background:var(--v-card);border-radius:20px;overflow:hidden;border:0;box-shadow:0 .5px 0 rgba(60,60,67,.08)}
.vela-roche .v-ios-group .v-field{padding:11px 13px;border-top:1px solid var(--v-line)}
.vela-roche .v-ios-group .v-field:first-child{border-top:0}
.vela-roche .v-ios-group .v-field label{font-size:11px;color:var(--v-muted);margin-bottom:6px}
.vela-roche .v-ios-group .v-field input,.vela-roche .v-ios-group .v-field textarea,.vela-roche .v-ios-group .v-field select{border:0!important;background:transparent!important;border-radius:0!important;padding:2px 0!important;min-height:30px!important;font-size:16px!important}
.vela-roche .v-ios-group .v-field textarea{min-height:72px!important}
.vela-roche .v-ios-media-card{background:var(--v-card);border-radius:20px;padding:12px}
.vela-roche .v-ios-media-preview{height:168px;border-radius:16px;background:linear-gradient(145deg,#edf4ff,#f8f9fc);display:grid;place-items:center;overflow:hidden;position:relative;color:var(--v-blue)}
.vela-roche .v-ios-media-preview img{width:100%;height:100%;object-fit:cover;display:block}
.vela-roche .v-ios-media-placeholder{display:grid;place-items:center;gap:6px;color:var(--v-muted);font-size:11px}
.vela-roche .v-ios-media-placeholder b{width:38px;height:38px;border-radius:19px;background:var(--v-blue);color:#fff;display:grid;place-items:center;font-size:24px;font-weight:500}
.vela-roche .v-ios-media-actions{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:10px}
.vela-roche .v-ios-media-picker{position:relative;min-height:42px;border-radius:13px;background:var(--v-blue-soft);color:var(--v-blue);display:flex;align-items:center;justify-content:center;gap:7px;font-size:12px;font-weight:800;overflow:hidden}
.vela-roche .v-ios-media-picker input[type=file]{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;opacity:0!important;cursor:pointer!important;pointer-events:auto!important}
.vela-roche .v-ios-media-remove{min-width:72px;border:0;border-radius:13px;background:rgba(118,118,128,.12);color:var(--v-muted);font-size:11px;font-weight:800;padding:0 12px}
.vela-roche .v-ios-url{margin-top:9px;background:rgba(118,118,128,.08);border-radius:13px;padding:9px 11px}
.vela-roche .v-ios-url label{display:block;font-size:10px;color:var(--v-muted);margin-bottom:5px}
.vela-roche .v-ios-url input{width:100%;border:0;background:transparent;color:var(--v-text);font-size:15px;outline:none}
.vela-roche .v-publish-sheet-actions{position:sticky;bottom:0;padding:8px 0 calc(3px + env(safe-area-inset-bottom,0px));background:linear-gradient(transparent,#f2f2f7 28%)}
.vela-roche .v-publish-sheet-actions .v-action{border-radius:14px!important;min-height:46px!important}
.vela-roche .v-primary-red{background:var(--v-blue)!important;color:#fff!important}
.vela-roche .v-live-info{padding:8px 11px!important;border-radius:15px!important;margin-top:7px!important}
.vela-roche .v-live-info-head{margin-bottom:4px!important;gap:5px!important}
.vela-roche .v-live-info-head .v-badge{padding:4px 6px!important;border-radius:7px!important;font-size:8px!important}
.vela-roche .v-live-info-head .v-cohost-pill{padding:4px 7px!important;border-radius:8px!important;font-size:9px!important}
.vela-roche .v-live-info h2{font-size:15px!important;line-height:1.28!important;margin:0!important}
.vela-roche .v-live-info p{font-size:10px!important;line-height:1.35!important;margin:3px 0 0!important;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.vela-roche .v-live-info .v-translate-btn{margin-top:2px!important}
.vela-roche .v-remote-grid{position:absolute;z-index:2;inset:0;display:grid!important;gap:1px;background:rgba(255,255,255,.13);pointer-events:none}
.vela-roche .v-remote-grid[data-count="2"]{grid-template-columns:1fr 1fr}
.vela-roche .v-remote-grid[data-count="3"]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}
.vela-roche .v-remote-grid[data-count="3"] .v-remote-pane:first-child{grid-row:1 / span 2}
.vela-roche .v-remote-grid[data-count="4"]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}
.vela-roche .v-remote-pane{position:relative!important;min-width:0;background:linear-gradient(150deg,#252a33,#4c5668)!important;padding:58px 9px 10px!important;display:flex!important;align-items:flex-end!important}
.vela-roche .v-remote-pane:nth-child(2n){background:linear-gradient(150deg,#313743,#5d687b)!important}
.vela-roche .v-remote-pane-label{position:absolute!important;left:9px!important;top:58px!important;z-index:4;max-width:calc(100% - 18px);background:rgba(15,15,18,.58);backdrop-filter:blur(8px);border-radius:15px;padding:4px 7px 4px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vela-roche .v-remote-pane-event{position:relative;z-index:4;width:100%;max-height:42%;overflow:auto;border-radius:13px;background:rgba(15,15,18,.72);backdrop-filter:blur(10px);padding:8px 9px;color:#fff}
.vela-roche .v-remote-event-label{font-size:8px;font-weight:900;color:rgba(255,255,255,.66);margin-bottom:3px}
.vela-roche .v-remote-event-text{font-size:10.5px;line-height:1.42}
.vela-roche .v-remote-event-empty{font-size:9px;color:rgba(255,255,255,.58)}
.vela-roche .v-live-stage.is-remote .v-live-moment{display:none!important}
.vela-roche .v-live-stage.is-remote:after{z-index:1}
.vela-roche .v-replay-card{width:100%;border:0;background:var(--v-card);color:var(--v-text);text-align:left;border-radius:20px;padding:12px;margin-bottom:10px}
.vela-roche .v-replay-cover{height:130px;border-radius:15px;background:linear-gradient(145deg,#e8eef8,#f8f8fa);overflow:hidden;display:grid;place-items:center;font-size:34px;margin-top:9px}
.vela-roche .v-replay-cover img{width:100%;height:100%;object-fit:cover}
.vela-roche .v-replay-actions{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:9px}
.vela-roche .v-replay-actions span{font-size:10px;color:var(--v-muted)}
.vela-roche .v-replay-actions button{border:0;background:rgba(255,59,48,.10);color:var(--v-red);border-radius:10px;padding:6px 8px;font-size:9px;font-weight:800}
.vela-roche .v-replay-summary{background:var(--v-card);border-radius:18px;padding:12px;margin-bottom:10px}
.vela-roche .v-replay-timeline{display:grid;gap:8px}
.vela-roche .v-replay-event{background:var(--v-card);border-radius:16px;padding:10px 11px}
.vela-roche .v-replay-event-head{font-size:9px;color:var(--v-muted);font-weight:800;margin-bottom:4px}
.vela-roche .v-replay-event-text{font-size:12px;line-height:1.5;white-space:pre-wrap}
.vela-roche .v-replay-chat{background:var(--v-card);border-radius:18px;padding:10px 12px;margin-top:12px}
.vela-roche .v-replay-chat .v-chatline{border-bottom:1px solid var(--v-line)}
.vela-roche .v-replay-chat .v-chatline:last-child{border-bottom:0}


/* v0.1.16 · unified live timeline */
.vela-roche .v-remote-grid{display:none!important}
.vela-roche .v-live-stage.is-remote .v-live-moment{display:block!important}
.vela-roche .v-live-stage.is-remote:after{z-index:auto}
.vela-roche .v-live-moment{left:14px!important;right:14px!important;bottom:14px!important;max-height:46%!important;padding:9px 10px!important;overflow:auto!important;scrollbar-width:none}
.vela-roche .v-live-moment::-webkit-scrollbar{display:none}
.vela-roche .v-live-timeline{display:grid;gap:8px}
.vela-roche .v-live-timeline-empty{font-size:10px;line-height:1.45;color:rgba(255,255,255,.58);padding:2px 1px}
.vela-roche .v-live-time-entry{padding:0 0 8px;border-bottom:1px solid rgba(255,255,255,.12)}
.vela-roche .v-live-time-entry:last-child{border-bottom:0;padding-bottom:0}
.vela-roche .v-live-time-head{display:flex;align-items:center;gap:7px;min-width:0;margin-bottom:4px}
.vela-roche .v-live-time-pill{flex:0 0 auto;padding:3px 6px;border-radius:7px;background:rgba(142,142,147,.72);color:#fff;font-size:8px;font-weight:850;font-variant-numeric:tabular-nums}
.vela-roche .v-live-time-actor{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff;font-size:10px;font-weight:900}
.vela-roche .v-live-time-action{font-size:10.5px;line-height:1.45;color:rgba(255,255,255,.62);font-style:italic;margin:2px 0}
.vela-roche .v-live-time-speech{font-size:12px;line-height:1.48;color:#fff;margin:2px 0}
.vela-roche .v-live-time-entry .v-translate-btn{color:rgba(255,255,255,.68)!important;margin-top:2px!important}
.vela-roche .v-live-time-entry .v-translation{color:rgba(255,255,255,.82)!important;border-left-color:rgba(255,255,255,.26)!important}


/* v0.1.17 · profile activity / subscriptions / DM relationships */
.vela-roche .v-profile-message{border:0;border-radius:12px;background:var(--v-soft);color:var(--v-text);padding:8px 11px;font-size:10px;font-weight:900;white-space:nowrap}
.vela-roche .v-activity-stack{display:grid;gap:10px}
.vela-roche .v-activity-pin{background:var(--v-card);border:1px solid var(--v-line);border-radius:18px;padding:11px}
.vela-roche .v-activity-pin .v-kicker{display:flex;align-items:center;gap:6px;font-size:9px;font-weight:900;color:var(--v-muted);margin-bottom:7px}
.vela-roche .v-activity-pin.is-scheduled .v-kicker:before{content:"";width:7px;height:7px;border-radius:50%;background:#8e8e93}
.vela-roche .v-activity-pin.is-live .v-kicker{color:var(--v-red)}
.vela-roche .v-activity-pin.is-live .v-kicker:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--v-red);box-shadow:0 0 0 4px rgba(255,59,48,.10)}
.vela-roche .v-activity-pin button{width:100%;border:0;background:none;padding:0;text-align:left;color:inherit}
.vela-roche .v-activity-compose{margin:3px 0 2px}
.vela-roche .v-activity-posts{display:grid;gap:10px;margin-top:2px}
.vela-roche .v-subscription-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
.vela-roche .v-subscription-head h3{font-size:16px;margin:0}.vela-roche .v-subscription-head p{font-size:10px;color:var(--v-muted);margin:3px 0 0}
.vela-roche .v-subscription-head button{border:0;border-radius:11px;background:var(--v-soft);color:var(--v-text);padding:8px 9px;font-size:10px;font-weight:900}
.vela-roche .v-membership-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-items:stretch}
.vela-roche .v-membership-card{min-width:0;background:var(--v-card);border:1px solid var(--v-line);border-radius:20px;overflow:hidden;display:flex;flex-direction:column}
.vela-roche .v-membership-card.is-paid{border-color:rgba(255,59,48,.36)}
.vela-roche .v-membership-cover{height:88px;background:linear-gradient(145deg,#e9edf3,#f8f8fa);display:grid;place-items:center;font-size:30px;overflow:hidden}
.vela-roche .v-membership-cover img{width:100%;height:100%;object-fit:cover;display:block}
.vela-roche .v-membership-body{padding:11px;display:flex;flex:1;flex-direction:column}
.vela-roche .v-membership-title{font-size:15px;font-weight:950;line-height:1.2;word-break:break-word}
.vela-roche .v-membership-price{font-size:22px;font-weight:950;margin-top:5px;letter-spacing:-.03em}.vela-roche .v-membership-price small{font-size:10px;font-weight:700;margin-left:2px}
.vela-roche .v-membership-button{width:100%;border:0;border-radius:12px;background:var(--v-blue);color:#fff;padding:9px 8px;font-size:10px;font-weight:900;margin:10px 0}
.vela-roche .v-membership-card.is-paid .v-membership-button{background:var(--v-red)}
.vela-roche .v-membership-button.is-current{background:var(--v-soft)!important;color:var(--v-muted)!important}
.vela-roche .v-membership-intro{font-size:10px;line-height:1.45;color:var(--v-text);font-weight:750;white-space:pre-wrap}
.vela-roche .v-membership-benefits{display:grid;gap:4px;margin-top:8px;font-size:9px;line-height:1.4;color:var(--v-muted)}
.vela-roche .v-membership-benefits div:before{content:"•";margin-right:5px;color:var(--v-text)}
.vela-roche .v-membership-community{margin-top:auto;padding-top:9px;border-top:1px solid var(--v-line);font-size:9px;line-height:1.4;color:var(--v-muted)}
.vela-roche .v-membership-community b{display:block;color:var(--v-text);font-size:10px;margin-top:2px}
.vela-roche .v-your-membership{margin-top:12px;background:var(--v-card);border-radius:18px;border:1px solid var(--v-line);padding:12px}
.vela-roche .v-your-membership-label{font-size:10px;color:var(--v-muted);font-weight:900}.vela-roche .v-your-membership-value{font-size:14px;font-weight:950;margin-top:5px}
.vela-roche .v-your-membership-note{font-size:10px;color:var(--v-muted);margin-top:4px;line-height:1.45}
.vela-roche .v-relation{display:inline-flex;align-items:center;gap:3px;margin-left:5px;padding:3px 6px;border-radius:8px;font-size:8px;font-weight:900;vertical-align:1px}
.vela-roche .v-relation.is-stranger{background:#eeeeF2;color:#74747c}.vela-roche .v-relation.is-free{background:#e8f2ff;color:#007aff}.vela-roche .v-relation.is-paid{background:#fff0f1;color:#ff3b30}.vela-roche .v-relation.is-mutual{background:#ffe9f4;color:#d63384}.vela-roche .v-relation.is-business{background:#fff1d8;color:#946100}
.vela-roche .v-community-section-title{font-size:10px;color:var(--v-muted);font-weight:900;margin:5px 2px 7px}
.vela-roche .v-community-list{background:var(--v-card);border-radius:18px;overflow:hidden;border:1px solid var(--v-line);margin-bottom:12px}
.vela-roche .v-community-entry{width:100%;border:0;border-top:1px solid var(--v-line);background:none;color:inherit;display:flex;align-items:center;gap:10px;padding:11px;text-align:left}.vela-roche .v-community-entry:first-child{border-top:0}
.vela-roche .v-community-entry .v-social-avatar{width:40px;height:40px}.vela-roche .v-community-entry .v-meta{min-width:0;flex:1}.vela-roche .v-community-owner{font-size:9px;color:var(--v-muted);margin-top:3px}.vela-roche .v-community-tier-dot{font-size:8px;font-weight:900;border-radius:8px;padding:4px 6px}.vela-roche .v-community-tier-dot.is-free{background:#e8f2ff;color:#007aff}.vela-roche .v-community-tier-dot.is-paid{background:#fff0f1;color:#ff3b30}
.vela-roche .v-group-chat{display:flex;flex-direction:column;min-height:calc(100vh - var(--v-top-h) - 28px)}
.vela-roche .v-group-lines{flex:1;display:grid;align-content:start;gap:8px}.vela-roche .v-group-line{display:flex;gap:8px;align-items:flex-start}.vela-roche .v-group-line .v-social-avatar{width:30px;height:30px;font-size:10px}.vela-roche .v-group-bubble{max-width:78%;background:var(--v-card);border:1px solid var(--v-line);border-radius:15px;padding:8px 10px}.vela-roche .v-group-bubble b{font-size:9px}.vela-roche .v-group-bubble div{font-size:11px;line-height:1.45;margin-top:2px;white-space:pre-wrap}.vela-roche .v-group-empty{padding:44px 10px;text-align:center;color:var(--v-muted);font-size:11px;line-height:1.55}
.vela-roche .v-group-composer,.vela-roche .v-dm-composer{position:sticky;bottom:0;display:grid;grid-template-columns:1fr 44px;gap:8px;background:var(--v-bg);padding-top:10px}.vela-roche .v-group-composer input,.vela-roche .v-dm-composer input{min-width:0;border:1px solid var(--v-line);background:var(--v-card);color:var(--v-text);border-radius:14px;padding:10px 11px;font-size:16px}.vela-roche .v-group-composer button,.vela-roche .v-dm-composer button{border:0;border-radius:14px;background:#111;color:#fff;font-weight:900}
.vela-roche .v-subscription-editor-grid{display:grid;gap:12px}.vela-roche .v-subscription-editor-tier{background:var(--v-card);border-radius:20px;padding:13px;border:1px solid var(--v-line)}.vela-roche .v-subscription-editor-tier h3{font-size:14px;margin:0 0 11px}.vela-roche .v-subscription-editor-tier.is-paid h3{color:var(--v-red)}
@media (max-width:390px){.vela-roche .v-membership-grid{grid-template-columns:1fr}}


/* v0.1.18 · activity is display-only; own subscription list */
.vela-roche .v-inline-manage{display:flex;align-items:center;justify-content:flex-end;gap:7px;margin-top:9px;padding-top:9px;border-top:1px solid var(--v-line)}
.vela-roche .v-inline-manage button{border:0;border-radius:10px;background:var(--v-soft);color:var(--v-text);padding:7px 9px;font-size:9px;font-weight:900}
.vela-roche .v-inline-manage button.is-danger{background:rgba(255,59,48,.09);color:var(--v-red)}
.vela-roche .v-my-subscriptions{display:grid;gap:10px}
.vela-roche .v-my-sub-card{background:var(--v-card);border:1px solid var(--v-line);border-radius:18px;padding:12px}
.vela-roche .v-my-sub-head{display:flex;align-items:center;gap:10px}
.vela-roche .v-my-sub-head .v-social-avatar{width:44px;height:44px}
.vela-roche .v-my-sub-head .v-meta{min-width:0;flex:1}
.vela-roche .v-my-sub-title{font-size:13px;font-weight:950}
.vela-roche .v-my-sub-handle{font-size:10px;color:var(--v-muted);margin-top:2px}
.vela-roche .v-my-sub-tier{display:inline-flex;align-items:center;gap:4px;border-radius:9px;padding:4px 7px;font-size:8px;font-weight:950;white-space:nowrap}
.vela-roche .v-my-sub-tier.is-free{background:#e8f2ff;color:#007aff}
.vela-roche .v-my-sub-tier.is-paid{background:#fff0f1;color:#ff3b30}
.vela-roche .v-my-sub-detail{margin-top:10px;padding-top:9px;border-top:1px solid var(--v-line);display:grid;gap:4px;font-size:10px;line-height:1.45;color:var(--v-muted)}
.vela-roche .v-my-sub-detail b{color:var(--v-text);font-size:10px}
.vela-roche .v-my-sub-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
.vela-roche .v-my-sub-actions button{border:0;border-radius:12px;min-height:38px;font-size:10px;font-weight:900}
.vela-roche .v-my-sub-actions .v-continue-sub{background:var(--v-blue-soft);color:var(--v-blue)}
.vela-roche .v-my-sub-actions .v-cancel-sub{background:rgba(255,59,48,.09);color:var(--v-red)}
.vela-roche .v-own-subscription-tools{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:11px}
.vela-roche .v-own-subscription-tools h3{font-size:16px;margin:0}.vela-roche .v-own-subscription-tools p{font-size:10px;color:var(--v-muted);margin:3px 0 0}
.vela-roche .v-own-subscription-tools button{border:0;border-radius:11px;background:var(--v-soft);color:var(--v-text);padding:8px 9px;font-size:9px;font-weight:900;white-space:nowrap}


/* v0.1.19 · unified DM / community chat */
.vela-roche .v-chat-screen{height:100%;min-height:0;display:flex;flex-direction:column;background:var(--v-bg)}
.vela-roche .v-chat-head{position:sticky;top:0;z-index:5;height:var(--v-top-h);padding:0 11px;display:grid;grid-template-columns:40px minmax(0,1fr) auto;align-items:center;gap:8px;background:rgba(242,242,247,.94);backdrop-filter:blur(18px);border-bottom:1px solid var(--v-line)}
.vela-roche .v-chat-back,.vela-roche .v-chat-headicon{width:36px;height:36px;border:0;border-radius:12px;background:var(--v-card);color:var(--v-text);display:grid;place-items:center;font-size:19px}
.vela-roche .v-chat-headcopy{min-width:0;text-align:center}
.vela-roche .v-chat-headcopy strong{display:block;font-size:13px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vela-roche .v-chat-headcopy small{display:block;margin-top:3px;font-size:9px;font-weight:650;color:var(--v-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vela-roche .v-chat-headactions{display:flex;align-items:center;gap:5px}
.vela-roche .v-chat-headicon{font-size:14px;background:transparent}
.vela-roche .v-chat-headicon.is-edit{font-size:13px;font-weight:900}
.vela-roche .v-chat-topmenu{position:absolute;z-index:10;right:10px;top:calc(var(--v-top-h) - 6px);min-width:142px;padding:6px;background:rgba(255,255,255,.96);backdrop-filter:blur(18px);border:1px solid var(--v-line);border-radius:14px;box-shadow:0 12px 35px rgba(0,0,0,.14);display:none}
.vela-roche .v-chat-topmenu.is-open{display:block}
.vela-roche .v-chat-topmenu button{width:100%;border:0;background:none;border-radius:10px;padding:9px 10px;text-align:left;color:var(--v-red);font-size:10px;font-weight:900}
.vela-roche .v-chat-body{flex:1;min-height:0;overflow:auto;padding:11px 12px 88px;-webkit-overflow-scrolling:touch}
.vela-roche .v-chat-timestamp{text-align:center;color:var(--v-muted);font-size:8.5px;font-weight:750;margin:10px 0 9px}
.vela-roche .v-chat-row{display:flex;align-items:flex-end;gap:7px;margin:7px 0}
.vela-roche .v-chat-row.is-me{justify-content:flex-end}
.vela-roche .v-chat-row .v-social-avatar{width:28px;height:28px;font-size:9px}
.vela-roche .v-chat-stack{max-width:min(78%,430px);min-width:0}
.vela-roche .v-chat-sender{font-size:8px;color:var(--v-muted);font-weight:850;margin:0 0 3px 4px}
.vela-roche .v-chat-row.is-me .v-chat-sender{text-align:right;margin:0 4px 3px 0}
.vela-roche .v-chat-bubble{background:var(--v-card);color:var(--v-text);border:1px solid var(--v-line);border-radius:17px 17px 17px 6px;padding:9px 11px;font-size:12px;line-height:1.5;white-space:pre-wrap;word-break:break-word}
.vela-roche .v-chat-row.is-me .v-chat-bubble{background:#111;color:#fff;border-color:#111;border-radius:17px 17px 6px 17px}
.vela-roche .v-chat-bubble .v-translate-btn{display:block;margin-top:5px;color:var(--v-muted)}
.vela-roche .v-chat-row.is-me .v-chat-bubble .v-translate-btn{color:rgba(255,255,255,.65)}
.vela-roche .v-chat-bubble .v-translation{margin-top:5px;font-size:10px}
.vela-roche .v-chat-row.is-me .v-chat-bubble .v-translation{color:rgba(255,255,255,.78);border-left-color:rgba(255,255,255,.28)}
.vela-roche .v-chat-card{width:min(86%,450px);margin:9px auto;background:var(--v-card);border:1px solid var(--v-line);border-radius:18px;padding:12px;box-shadow:0 4px 16px rgba(0,0,0,.04)}
.vela-roche .v-chat-card-head{display:flex;align-items:center;justify-content:space-between;gap:10px}
.vela-roche .v-chat-card-type{font-size:9px;font-weight:950;color:var(--v-muted)}
.vela-roche .v-chat-card-status{font-size:8px;font-weight:900;border-radius:8px;padding:4px 6px;background:var(--v-soft);color:var(--v-muted)}
.vela-roche .v-chat-card-status.is-ok{background:#e8f7ee;color:#21834a}.vela-roche .v-chat-card-status.is-no{background:#fff0f1;color:var(--v-red)}
.vela-roche .v-chat-card-title{font-size:14px;font-weight:950;line-height:1.3;margin-top:8px}
.vela-roche .v-chat-card-meta{display:grid;gap:4px;margin-top:8px;font-size:10px;line-height:1.45;color:var(--v-muted)}
.vela-roche .v-chat-card-meta b{color:var(--v-text);font-weight:850}
.vela-roche .v-chat-card-actions{display:flex;gap:7px;margin-top:10px}
.vela-roche .v-chat-card-actions button{flex:1;border:0;border-radius:11px;min-height:36px;font-size:9px;font-weight:900;background:var(--v-blue);color:#fff}
.vela-roche .v-chat-card-actions button.is-light{background:var(--v-soft);color:var(--v-text)}
.vela-roche .v-chat-card-actions button.is-danger{background:rgba(255,59,48,.10);color:var(--v-red)}
.vela-roche .v-chat-composer-wrap{position:absolute;z-index:8;left:10px;right:10px;bottom:calc(9px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;gap:6px;padding:6px;background:rgba(255,255,255,.92);backdrop-filter:blur(18px);border:1px solid var(--v-line);border-radius:22px;box-shadow:0 9px 28px rgba(0,0,0,.11)}
.vela-roche .v-chat-composer-wrap input{flex:1;min-width:0;border:0;background:transparent;color:var(--v-text);font-size:16px;padding:7px 8px;outline:none}
.vela-roche .v-chat-composer-wrap button{width:38px;height:38px;border:0;border-radius:16px;display:grid;place-items:center;font-weight:950}
.vela-roche .v-chat-plus{background:var(--v-soft);color:var(--v-text);font-size:20px}.vela-roche .v-chat-summon{background:#111;color:#fff;font-size:17px}
.vela-roche .v-chat-summon.is-loading{opacity:.5;pointer-events:none}
.vela-roche .v-chat-tool-grid{display:grid;gap:8px}
.vela-roche .v-chat-tool-grid button{width:100%;border:0;border-radius:16px;background:var(--v-card);color:var(--v-text);padding:13px;text-align:left;font-size:12px;font-weight:900;border:1px solid var(--v-line)}
.vela-roche .v-chat-tool-grid button small{display:block;color:var(--v-muted);font-size:9px;font-weight:650;margin-top:3px}
.vela-roche .v-tool-form{display:grid;gap:11px}
.vela-roche .v-tool-note{font-size:9px;line-height:1.5;color:var(--v-muted)}
.vela-roche .v-community-announcement{width:min(92%,500px);margin:5px auto 10px;padding:8px 10px;border-radius:13px;background:var(--v-soft);font-size:9px;line-height:1.45;color:var(--v-muted)}
.vela-roche .v-community-card-msg{width:min(88%,460px);margin:9px auto;border-radius:18px;background:var(--v-card);border:1px solid var(--v-line);padding:12px}
.vela-roche .v-community-card-msg .v-kicker{font-size:8px;color:var(--v-muted);font-weight:950}
.vela-roche .v-community-card-msg h4{font-size:13px;margin:7px 0 5px}.vela-roche .v-community-card-msg p{font-size:10px;line-height:1.45;color:var(--v-muted);margin:0}
.vela-roche .v-poll-options{display:grid;gap:6px;margin-top:9px}.vela-roche .v-poll-options button{border:0;border-radius:11px;background:var(--v-soft);color:var(--v-text);min-height:36px;padding:7px 9px;text-align:left;font-size:10px;font-weight:800;display:flex;justify-content:space-between;gap:8px}
.vela-roche .v-poll-options button.is-voted{background:var(--v-blue-soft);color:var(--v-blue)}
.vela-roche .v-lottery-action{margin-top:9px;width:100%;border:0;border-radius:11px;background:var(--v-blue);color:#fff;min-height:37px;font-size:10px;font-weight:900}
.vela-roche .v-community-edit-grid{display:grid;gap:12px}
.vela-roche .v-community-preview{display:flex;align-items:center;gap:10px;padding:11px;background:var(--v-card);border:1px solid var(--v-line);border-radius:18px}
.vela-roche .v-community-preview .v-social-avatar{width:54px;height:54px}
.vela-roche .v-community-botchecks{display:grid;gap:7px}.vela-roche .v-community-check{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:10px;padding:8px 0;border-top:1px solid var(--v-line)}.vela-roche .v-community-check:first-child{border-top:0}
.vela-roche .v-appointment-card{margin:18px;background:var(--v-card);border-radius:22px;padding:16px;border:1px solid var(--v-line)}
.vela-roche .v-appointment-card h3{font-size:18px;margin:0 0 7px}.vela-roche .v-appointment-card p{font-size:11px;line-height:1.55;color:var(--v-muted)}
.vela-roche .v-appointment-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:13px}.vela-roche .v-appointment-actions button{border:0;border-radius:13px;min-height:42px;font-size:10px;font-weight:900}.vela-roche .v-appointment-actions .v-go{background:var(--v-blue);color:#fff}.vela-roche .v-appointment-actions .v-later{background:var(--v-soft);color:var(--v-text)}
.vela-roche.is-dark .v-chat-head{background:rgba(16,17,22,.94)}.vela-roche.is-dark .v-chat-topmenu,.vela-roche.is-dark .v-chat-composer-wrap{background:rgba(25,26,32,.94)}


/* v0.1.20 · DM polish / Vela Coin wallet / live economy */
.vela-roche .v-msg .v-mini{border-radius:50%!important}
.vela-roche .v-chat-head{grid-template-columns:40px minmax(0,1fr) auto!important}
.vela-roche .v-chat-headcopy{text-align:left!important}
.vela-roche .v-chat-headcopy strong{font-size:13px!important}
.vela-roche .v-chat-headcopy small{font-size:9px!important}
.vela-roche .v-chat-row .v-social-avatar{border-radius:50%!important}
.vela-roche .v-chat-bubble{position:relative;border-radius:20px 20px 20px 7px!important;padding:9px 12px!important}
.vela-roche .v-chat-row:not(.is-me) .v-chat-bubble:after{content:"";position:absolute;left:-5px;bottom:2px;width:11px;height:12px;background:var(--v-card);clip-path:polygon(100% 0,100% 100%,0 100%);border-bottom-left-radius:8px}
.vela-roche .v-chat-row.is-me .v-chat-bubble{border-radius:20px 20px 7px 20px!important}
.vela-roche .v-chat-row.is-me .v-chat-bubble:after{content:"";position:absolute;right:-5px;bottom:2px;width:11px;height:12px;background:#111;clip-path:polygon(0 0,100% 100%,0 100%);border-bottom-right-radius:8px}
.vela-roche .v-chat-bubble .v-translation{margin-top:7px!important;padding:7px 0 0 0!important;border-left:0!important;border-top:1px solid var(--v-line);font-size:10px!important}
.vela-roche .v-chat-row.is-me .v-chat-bubble .v-translation{border-top-color:rgba(255,255,255,.2)!important}
.vela-roche .v-chat-bubble .v-translate-btn{font-size:9px!important;font-weight:850!important}
.vela-roche .v-role-title{display:inline-flex;align-items:center;padding:2px 5px;border-radius:6px;margin-right:4px;font-size:7px;font-weight:950;vertical-align:1px}
.vela-roche .v-role-title.is-owner{background:#111;color:#fff}.vela-roche .v-role-title.is-bot{background:#e8f2ff;color:#007aff}
.vela-roche .v-chat-card{border-radius:20px!important;box-shadow:none!important}
.vela-roche .v-chat-card.is-business{border-color:rgba(0,122,255,.18)}
.vela-roche .v-chat-card-edit{margin-top:8px;border:0;background:none;color:var(--v-blue);font-size:9px;font-weight:900;padding:2px 0}
.vela-roche .v-chat-card-actions{display:grid;grid-template-columns:1fr 1fr}
.vela-roche .v-chat-card-actions button:first-child:last-child{grid-column:1/-1}
.vela-roche .v-community-bot-options[hidden]{display:none!important}
.vela-roche .v-community-bot-profile{display:grid;grid-template-columns:72px 1fr;gap:10px;align-items:center;margin-top:10px}
.vela-roche .v-community-bot-avatar{width:64px;height:64px;border-radius:50%;background:var(--v-soft);overflow:hidden;display:grid;place-items:center;font-weight:950}
.vela-roche .v-community-bot-avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%}

.vela-roche .v-wallet-assets{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
.vela-roche .v-wallet-asset{border-radius:22px;padding:16px;min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.vela-roche .v-wallet-asset.is-coin{background:linear-gradient(145deg,#0f62ff,#69a8ff);color:#fff}
.vela-roche .v-wallet-asset.is-cash{background:linear-gradient(145deg,#16171c,#4d5059);color:#fff}
.vela-roche .v-wallet-asset-label{font-size:10px;font-weight:850;opacity:.72}
.vela-roche .v-wallet-asset-value{font-size:25px;font-weight:950;letter-spacing:-.03em;margin-top:6px}
.vela-roche .v-wallet-asset-sub{font-size:8px;opacity:.68;margin-top:5px;line-height:1.4}
.vela-roche .v-wallet-asset-actions{display:flex;gap:6px;margin-top:12px}
.vela-roche .v-wallet-asset-actions button{flex:1;border:0;border-radius:11px;min-height:34px;background:rgba(255,255,255,.92);color:#111;font-size:9px;font-weight:900}
.vela-roche .v-wallet-account{background:var(--v-card);border:1px solid var(--v-line);border-radius:19px;padding:13px;margin-bottom:12px}
.vela-roche .v-wallet-account-head{display:flex;align-items:center;justify-content:space-between;gap:10px}
.vela-roche .v-wallet-account-head button{border:0;background:var(--v-soft);color:var(--v-text);border-radius:10px;padding:7px 9px;font-size:9px;font-weight:900}
.vela-roche .v-wallet-card-no{font-size:15px;font-weight:900;letter-spacing:.06em;margin-top:7px}
.vela-roche .v-wallet-ledger-head{display:flex;align-items:flex-end;justify-content:space-between;gap:10px}.vela-roche .v-wallet-ledger-head small{font-size:8px;color:var(--v-muted);text-align:right}
.vela-roche .v-tx{align-items:center}.vela-roche .v-tx-amount{font-weight:950;white-space:nowrap}.vela-roche .v-tx-amount.is-coin{color:var(--v-blue)}
.vela-roche .v-wallet-flow-card{background:var(--v-card);border:1px solid var(--v-line);border-radius:22px;padding:14px}
.vela-roche .v-wallet-convert-preview{padding:10px 12px;background:var(--v-soft);border-radius:13px;font-size:10px;color:var(--v-muted);line-height:1.5}

.vela-roche .v-live-quicktools{margin-left:auto;display:flex;align-items:center;gap:6px;pointer-events:auto}
.vela-roche .v-live-quicktool{height:34px;min-width:34px;border:0;border-radius:17px;padding:0 9px;color:#fff;font-size:9px;font-weight:950;backdrop-filter:blur(10px)}
.vela-roche .v-live-quicktool.is-lottery{background:rgba(52,199,89,.86)}
.vela-roche .v-live-quicktool.is-ad{background:rgba(255,59,48,.86)}
.vela-roche .v-gift-rank-trigger{margin-left:0!important;max-width:36%!important}
.vela-roche .v-live-ad-strip{display:flex;align-items:center;gap:7px;margin-top:8px;padding:8px 10px;border-radius:13px;background:#fff2f1;color:#a92720;font-size:9px;line-height:1.35}
.vela-roche .v-live-ad-strip b{white-space:nowrap}.vela-roche .v-live-ad-strip a{color:inherit;text-decoration:none;font-weight:850;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.vela-roche .v-chat-tip{display:inline-flex;margin-left:5px;padding:2px 5px;border-radius:7px;background:#e8f2ff;color:#007aff;font-size:8px;font-weight:950}
.vela-roche .v-live-economy-panel{position:absolute;z-index:35;inset:0;background:rgba(0,0,0,.28);display:none;align-items:center;justify-content:center;padding:18px}.vela-roche .v-live-economy-panel.is-open{display:flex}
.vela-roche .v-live-economy-card{width:min(92%,430px);max-height:78%;overflow:auto;background:var(--v-card);color:var(--v-text);border-radius:23px;padding:14px;box-shadow:0 18px 50px rgba(0,0,0,.2)}
.vela-roche .v-live-tool-title{display:flex;align-items:center;justify-content:space-between;gap:10px}.vela-roche .v-live-tool-title h3{margin:0;font-size:15px}.vela-roche .v-live-tool-title button{width:34px;height:34px;border:0;border-radius:12px;background:var(--v-soft);color:var(--v-text)}
.vela-roche .v-prize-row{display:grid;grid-template-columns:78px 64px 1fr 74px;gap:6px;margin-top:8px}.vela-roche .v-prize-row input{min-width:0;border:1px solid var(--v-line);background:var(--v-card);color:var(--v-text);border-radius:10px;padding:8px;font-size:11px}
.vela-roche .v-prize-remove{width:100%;border:0;border-radius:10px;background:rgba(255,59,48,.08);color:var(--v-red);padding:7px;font-size:9px;font-weight:900;margin-top:6px}
.vela-roche .v-live-tool-actions{display:flex;gap:8px;margin-top:11px}.vela-roche .v-live-tool-actions button{flex:1;border:0;border-radius:12px;min-height:39px;font-size:10px;font-weight:900}.vela-roche .v-live-tool-actions .is-primary{background:#111;color:#fff}.vela-roche .v-live-tool-actions .is-light{background:var(--v-soft);color:var(--v-text)}
.vela-roche .v-live-summary-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:12px}.vela-roche .v-live-summary-box{background:var(--v-soft);border-radius:15px;padding:11px}.vela-roche .v-live-summary-box small{display:block;color:var(--v-muted);font-size:8px}.vela-roche .v-live-summary-box b{display:block;margin-top:4px;font-size:15px}
@media(max-width:390px){.vela-roche .v-wallet-assets{grid-template-columns:1fr}.vela-roche .v-prize-row{grid-template-columns:1fr 58px}.vela-roche .v-prize-row input:nth-child(3),.vela-roche .v-prize-row input:nth-child(4){grid-column:auto}}

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
.vela-roche .v-live-stage-copy{display:none!important}
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


.vela-roche .v-avatar-wrap.is-live{background:transparent;padding:3px;box-shadow:0 0 0 2px rgba(23,105,210,.9),0 0 0 6px rgba(23,105,210,.14);animation:vLiveBreath 1.8s ease-in-out infinite}
.vela-roche .v-profile-avatar.is-live-profile{box-shadow:0 0 0 3px #fff,0 0 0 6px rgba(23,105,210,.85);animation:vLiveBreathProfile 1.8s ease-in-out infinite}
@keyframes vLiveBreathProfile{0%,100%{box-shadow:0 0 0 3px #fff,0 0 0 6px rgba(23,105,210,.70)}50%{box-shadow:0 0 0 3px #fff,0 0 0 10px rgba(23,105,210,.20)}}
@keyframes vLiveBreath{0%,100%{box-shadow:0 0 0 2px rgba(23,105,210,.82),0 0 0 5px rgba(23,105,210,.10)}50%{box-shadow:0 0 0 2px rgba(23,105,210,1),0 0 0 9px rgba(23,105,210,.22)}}
.vela-roche .v-avatar-wrap.is-live .v-avatar{border:2px solid #fff}
.vela-roche .v-live-cover-bg{position:absolute;z-index:0;inset:0;width:100%;height:100%;object-fit:cover}
.vela-roche .v-live-stage.has-cover:after{z-index:1;background:linear-gradient(rgba(7,20,40,.14),rgba(7,20,40,.46))}
.vela-roche .v-live-stage>.v-live-hud,.vela-roche .v-live-stage>.v-live-stage-copy,.vela-roche .v-live-stage>.v-live-moment{z-index:6}
.vela-roche .v-live-host-controls{display:flex;gap:7px;align-items:center;margin-top:8px;flex-wrap:wrap}
.vela-roche .v-live-host-controls button{border:0;border-radius:10px;background:var(--v-blue-soft);color:var(--v-blue);padding:7px 9px;font-size:10px;font-weight:900}
.vela-roche .v-cohost-pill{display:inline-flex;align-items:center;gap:5px;border-radius:10px;background:var(--v-blue-soft);color:var(--v-blue);padding:6px 8px;font-size:10px;font-weight:850}
.vela-roche .v-live-chat-tools{display:flex;gap:8px;align-items:center;margin-top:3px}
.vela-roche .v-live-chat-tools button{border:0;background:none;color:var(--v-muted);padding:0;font-size:10px;font-weight:800}
.vela-roche .v-publish-banner{height:190px;border-radius:22px;background:linear-gradient(135deg,#dceaff,#fff);overflow:hidden;display:grid;place-items:center;color:var(--v-blue);font-size:38px;position:relative}
.vela-roche .v-publish-banner img{width:100%;height:100%;object-fit:cover;display:block}
.vela-roche .v-access-badge{display:inline-flex;align-items:center;border-radius:9px;background:#fff0f2;color:#bd2539;padding:4px 7px;font-size:9px;font-weight:900;margin-top:7px}
.vela-roche .v-publish-note{background:var(--v-blue-soft);color:#31577f;border-radius:14px;padding:10px 11px;font-size:11px;line-height:1.55}
.vela-roche .v-primary-red{background:var(--v-red)!important;color:#fff!important}
.vela-roche .v-live-info-head{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:7px}
.vela-roche .v-live-info-head .v-badge{margin:0!important;flex:0 0 auto}
.vela-roche .v-live-info-head .v-cohost-pill{margin:0!important}
.vela-roche .v-upload-row{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center}
.vela-roche .v-upload-row input[type="file"]{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}
.vela-roche .v-upload-btn{border:0;border-radius:12px;background:var(--v-blue-soft);color:var(--v-blue);padding:10px 12px;font-size:11px;font-weight:900;white-space:nowrap}
.vela-roche .v-media-preview-actions{display:flex;gap:8px;margin-top:7px}
.vela-roche .v-media-preview-actions button{border:0;border-radius:10px;background:var(--v-soft);color:var(--v-muted);padding:7px 9px;font-size:10px;font-weight:850}
.vela-roche .v-remote-pane{align-items:flex-start!important;padding-top:58px!important}
.vela-roche .v-remote-pane-label{position:relative;z-index:4;background:rgba(15,15,18,.62);backdrop-filter:blur(8px);border-radius:16px;padding:5px 8px 5px 5px}
.vela-roche .v-live-host.is-multi{max-width:62%}
.vela-roche .v-live-host.is-multi .v-live-host-name{max-width:150px}
.vela-roche .v-live-habit-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}


.vela-roche .v-userhead-static{cursor:default!important}
.vela-roche .v-userhead-static:active{transform:none!important}
.vela-roche .v-dm-tabs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:9px 0 14px}
.vela-roche .v-dm-tabs button{border:0;border-radius:14px;background:#e9eef7;color:#56708e;padding:10px 12px;font-size:12px;font-weight:900}
.vela-roche .v-dm-tabs button.is-active{background:var(--v-blue);color:#fff}
.vela-roche .v-community-hub{display:grid;gap:10px}
.vela-roche .v-community-card{background:var(--v-card);border:1px solid var(--v-line);border-radius:18px;padding:12px}
.vela-roche .v-community-card-head{display:flex;align-items:center;gap:9px}.vela-roche .v-community-card-head .v-meta{flex:1}
.vela-roche .v-community-tier{display:flex;align-items:center;justify-content:space-between;gap:10px;border-top:1px solid var(--v-line);padding:10px 0 0;margin-top:10px;font-size:11px}
.vela-roche .v-community-tier button{border:0;border-radius:11px;background:var(--v-blue-soft);color:var(--v-blue);padding:7px 9px;font-size:10px;font-weight:900}
.vela-roche .v-community-tier button.is-paid{background:#fff0f2;color:var(--v-red)}
.vela-roche .v-publish-sheet-title{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}
.vela-roche .v-publish-sheet-title h3{margin:0;font-size:16px}.vela-roche .v-publish-sheet-title button{border:0;background:none;font-size:18px}
.vela-roche .v-publish-sheet-form{display:grid;gap:11px}
.vela-roche .v-publish-sheet-actions{display:flex;gap:8px;margin-top:12px}.vela-roche .v-publish-sheet-actions button{flex:1}
.vela-roche .v-access-row{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.vela-roche .v-host-console{flex:0 0 auto;border-top:1px solid var(--v-line);padding-top:9px;margin-top:7px}
.vela-roche .v-host-console-top{display:flex;align-items:center;gap:7px;margin-bottom:7px}
.vela-roche .v-host-mode{border:0;border-radius:11px;background:var(--v-soft);color:var(--v-muted);padding:7px 9px;font-size:10px;font-weight:900}
.vela-roche .v-host-mode.is-active{background:var(--v-blue);color:#fff}
.vela-roche .v-host-console-row{display:grid;grid-template-columns:minmax(0,1fr) 42px 42px;gap:7px}
.vela-roche .v-host-console-row input{width:100%;min-width:0;border:0;border-radius:16px;background:var(--v-soft);color:var(--v-text);padding:10px 12px;font-size:16px}
.vela-roche .v-host-console-row button{border:0;border-radius:14px;min-height:42px;background:#111;color:#fff;font-weight:900}
.vela-roche .v-host-console-row .v-summon-host{background:var(--v-blue);color:#fff}
.vela-roche .v-host-console-foot{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:7px;font-size:10px;color:var(--v-muted)}
.vela-roche .v-host-console-foot button{border:0;background:none;color:var(--v-blue);font-size:10px;font-weight:900;padding:0}
.vela-roche .v-own-stage-event{margin-bottom:7px;padding-bottom:7px;border-bottom:1px solid rgba(255,255,255,.16)}
.vela-roche .v-own-stage-event-label{font-size:9px;color:rgba(255,255,255,.7);font-weight:900;margin-bottom:3px}
.vela-roche .v-own-stage-event-text{font-size:12px;line-height:1.45;color:#fff}
.vela-roche .v-remote-grid{position:absolute;z-index:2;inset:0;display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.12);pointer-events:none}
.vela-roche .v-remote-pane{position:relative;background:linear-gradient(145deg,rgba(30,34,43,.92),rgba(85,94,112,.7));display:flex;align-items:flex-end;padding:14px;color:#fff}
.vela-roche .v-remote-pane:nth-child(2){background:linear-gradient(145deg,rgba(52,58,72,.9),rgba(105,115,135,.65))}
.vela-roche .v-remote-pane-label{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:900}
.vela-roche .v-remote-pane-label .v-social-avatar{width:28px;height:28px;border:1px solid rgba(255,255,255,.5)}
.vela-roche .v-live-hud.is-same-room .v-live-host{max-width:68%}
.vela-roche .v-live-participants{display:flex;align-items:center;gap:4px}.vela-roche .v-live-participants .v-live-host-avatar{margin-right:-5px;border:1px solid rgba(255,255,255,.55)}
.vela-roche .v-home-self-label{font-size:9px;color:var(--v-blue);font-weight:900;margin-top:2px}
.vela-roche .v-subscribe-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:11px}
.vela-roche .v-subscribe-row button{border:0;border-radius:12px;padding:8px 10px;font-size:10px;font-weight:900}
.vela-roche .v-sub-free{background:var(--v-blue-soft);color:var(--v-blue)}
.vela-roche .v-sub-paid{background:#fff0f2;color:var(--v-red)}
.vela-roche .v-access-badge.is-free{background:var(--v-blue-soft);color:var(--v-blue)}
.vela-roche .v-access-badge.is-paid{background:#fff0f2;color:var(--v-red)}
.vela-roche .v-access-badge.is-age{box-shadow:inset 0 0 0 1px rgba(189,37,57,.18)}

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
        <div class="v-brand"><button class="v-plainbtn" data-action="open-drawer">☰</button><span class="v-logo"><img src="${VELA_ICON}" alt=""></span>Vela</div>
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
          <div class="v-title">DM <small>私信与订阅社群</small></div>
          <div class="v-dm-tabs"><button data-action="dm-tab" data-dm-tab="dm">DM</button><button data-action="dm-tab" data-dm-tab="community">社群</button></div>
          <div data-role="messages"></div>
        </section>
        <section class="v-page" data-page="wallet">
          <div class="v-title">钱包 <small>Vela Coin 与结算</small></div>
          <div data-role="wallet-assets"></div>
          <div data-role="wallet-account"></div>
          <div class="v-card v-wallet-ledger"><div class="v-wallet-ledger-head"><b>最近流水</b><small>🔷 为 Vela Coin，现金按当前结算币种显示</small></div><div data-role="transactions"></div></div>
        </section>
      </main>
      <nav class="v-nav">
        <button class="is-active" data-nav="home"><b>⌂</b>首页</button>
        <button data-nav="discover"><b>✦</b>推荐</button>
        <button class="v-publish" data-action="open-publish"><b>＋</b>发布</button>
        <button data-nav="messages"><b>✉</b>DM</button>
        <button data-nav="wallet"><b>🔷</b>钱包</button>
      </nav>
      <div class="v-mask" data-role="mask" data-action="close-drawer"></div>
      <aside class="v-drawer" data-role="drawer">
        <div class="v-drawer-main">
          <div class="v-userhead v-userhead-static">
            <div class="v-userav">${avatarHTML(identity?.avatar || "", identity?.displayName || "U")}</div>
            <div class="v-usercopy">
              <b>${escapeHTML(identity?.displayName || "Vela User")}</b>
              <span>${escapeHTML(identity?.handle || "@vela")}</span>
              <span class="v-identity-chip">${identity?.isAnonymous ? "匿名身份" : "公开身份"}</span>
            </div>
          </div>

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
        <div class="v-sheet"><div class="v-handle"></div><div data-role="publish-sheet-content"></div></div>
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
      <section class="v-subscreen" data-screen="publish-live"></section>
      <section class="v-subscreen" data-screen="restricted-editor"></section>
      <section class="v-subscreen" data-screen="invite-guest"></section>
      <section class="v-subscreen" data-screen="replay"></section>
      <section class="v-subscreen" data-screen="subscription-settings"></section>
      <section class="v-subscreen" data-screen="community-settings"></section>
      <section class="v-subscreen" data-screen="appointment-reminder"></section>
      <section class="v-subscreen" data-screen="wallet-flow"></section>
      <section class="v-subscreen" data-screen="live-summary"></section>
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
          iconImage: VELA_ICON,
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
                  wallet: { ...state.wallet, ...(saved.wallet || {}), cashBalanceCNY: Number(saved.wallet?.cashBalanceCNY ?? saved.wallet?.balance ?? state.wallet.cashBalanceCNY ?? 0) },
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
              contentStyle: "", fanProfile: "", banner: "", followers: 0, following: 0, scheduledLive: null, activeLive: null, live: false, ...item
            }));
            state.channels = safeArray(state.channels).map(item => ({
              accountRole: "primary", faceMode: "mixed", identityVisibility: "partial",
              contentStyle: "", fanProfile: "", banner: "", followers: 0, following: 0, ...item
            }));
            state.appearance = { darkMode: false, topbarHeight: 62, bottombarHeight: 78, ...(state.appearance || {}) };
            state.wallet = {
              cashBalanceCNY: Number(state.wallet?.cashBalanceCNY ?? state.wallet?.balance ?? 0),
              coinBalance: Number(state.wallet?.coinBalance ?? 0),
              linkedAccount: state.wallet?.linkedAccount && typeof state.wallet.linkedAccount === "object" ? state.wallet.linkedAccount : null,
              settlementCurrency: String(state.wallet?.settlementCurrency || ""),
              fxRates: { CNY: 1, ...(state.wallet?.fxRates || {}) },
              fxUpdatedAt: Number(state.wallet?.fxUpdatedAt || 0),
              subscriptionAccruals: safeArray(state.wallet?.subscriptionAccruals),
              subscriptionPurchases: { ...(state.wallet?.subscriptionPurchases || {}) },
              transactions: safeArray(state.wallet?.transactions).map((tx, index) => {
                if (tx?.cashCNY != null || tx?.coin != null) return { ...tx };
                return { id: tx?.id || `legacy-${index}`, type: "cash", title: tx?.title || "历史流水", note: tx?.note || "", cashCNY: Number(tx?.amount || 0), at: tx?.at || Date.now() };
              })
            };
            state.roleEarnings = { ...(state.roleEarnings || {}) };
            state.platformSettings = { recommendationCount: 3, allowBusinessDM: true, activityLevel: 50, ...(state.platformSettings || {}) };
            state.generationPreset = { mode: "default", customText: "", ...(state.generationPreset || {}) };
            state.communityPosts = safeArray(state.communityPosts);
            state.liveReplays = safeArray(state.liveReplays);
            state.pendingLiveUserMessage = state.pendingLiveUserMessage && typeof state.pendingLiveUserMessage === "object" ? state.pendingLiveUserMessage : null;
            state.postReplies = { ...(createDefaultState().postReplies || {}), ...(state.postReplies || {}) };
            state.postOverrides = { ...(state.postOverrides || {}) };
            state.liveProgress = { ...(state.liveProgress || {}) };
            state.liveStats = { ...(state.liveStats || {}) };
            state.liveChat = safeArray(state.liveChat);
            state.homeFilter = ["all","live","post"].includes(state.homeFilter) ? state.homeFilter : "all";
            state.dmTab = ["dm","community"].includes(state.dmTab) ? state.dmTab : "dm";
            state.subscriptions = { ...(state.subscriptions || {}) };
            state.subscriptionProfiles = { ...(state.subscriptionProfiles || {}) };
            state.communityChats = { ...(state.communityChats || {}) };
            state.communitySettings = { ...(state.communitySettings || {}) };
            state.dmThreads = { ...(state.dmThreads || {}) };
            state.messages = safeArray(state.messages);
            state.messages.forEach(msg => {
              if (String(msg?.id) === "biz-mellow") {
                if (String(msg.preview || "").includes("Cloud Mist 香氛机合作邀约")) msg.preview = "你好，我们是 Mellow Studio，主营生活方式与香氛产品。想先和你聊聊一款新品的直播合作，你这边会接广告吗？";
                if (String(msg.badge || "") === "合作邀约") msg.badge = "商务联系";
              }
            });
            const oldMellowThread = safeArray(state.dmThreads?.["biz-mellow"]);
            oldMellowThread.forEach(item => {
              if (String(item?.id || "").startsWith("seed-biz-mellow") && String(item.text || "").includes("Cloud Mist 香氛机合作邀约")) {
                item.text = "你好，我们是 Mellow Studio，主营生活方式与香氛产品。想先和你聊聊一款新品的直播合作，你这边会接广告吗？";
              }
            });
            if (oldMellowThread.length) state.dmThreads["biz-mellow"] = oldMellowThread;
            state.pendingOwnLiveInput = state.pendingOwnLiveInput && typeof state.pendingOwnLiveInput === "object" ? state.pendingOwnLiveInput : null;
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
                  roleEarnings: state.roleEarnings,
                  roleCommerce: state.roleCommerce,
                  businessDeals: state.businessDeals,
                  homeFilter: state.homeFilter,
                  dmTab: state.dmTab,
                  subscriptions: state.subscriptions,
                  subscriptionProfiles: state.subscriptionProfiles,
                  communityChats: state.communityChats,
                  communitySettings: state.communitySettings,
                  dmThreads: state.dmThreads,
                  messages: state.messages,
                  pendingOwnLiveInput: state.pendingOwnLiveInput,
                  generationPreset: state.generationPreset,
                  appearance: state.appearance,
                  platformSettings: state.platformSettings,
                  communityPosts: state.communityPosts,
                  liveReplays: state.liveReplays,
                  pendingLiveUserMessage: state.pendingLiveUserMessage,
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
                  liveDurationMode: String(existing?.liveDurationMode || "irregular"),
                  liveDurationText: String(existing?.liveDurationText || ""),
                  liveSchedule: String(existing?.liveSchedule || ""),
                  liveAutonomy: String(existing?.liveAutonomy || "flexible"),
                  profileCustomized: false,
                  scheduledLive: existing?.scheduledLive || null,
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
                    fanProfile: existing.fanProfile, liveDurationMode: existing.liveDurationMode,
                    liveDurationText: existing.liveDurationText, liveSchedule: existing.liveSchedule,
                    liveAutonomy: existing.liveAutonomy, profileCustomized: true
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
                liveDurationMode: String(existing?.liveDurationMode || "irregular"),
                liveDurationText: String(existing?.liveDurationText || ""),
                liveSchedule: String(existing?.liveSchedule || ""),
                liveAutonomy: String(existing?.liveAutonomy || "flexible"),
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
              if (page === "wallet") {
                renderWallet();
                settleWeeklySubscriptions().then(() => renderWallet());
                if (!state.wallet.linkedAccount) setTimeout(() => {
                  if (state.activePage === "wallet" && !state.wallet.linkedAccount) openWalletBind();
                }, 120);
              }
            };

            const renderChannels = () => {
              const host = q('[data-role="channel-strip"]');
              const identity = state.identities.find(x => String(x.id) === String(state.viewerIdentityId)) || state.identities[0];
              const selfLive = Boolean(identity?.activeLive || identity?.live);
              const self = identity ? `
                <button class="v-channel" data-action="open-user-profile">
                  <div class="v-avatar-wrap ${selfLive ? "is-live" : ""}"><div class="v-avatar">${avatarHTML(identity.avatar || "", identity.displayName || "U")}</div>${selfLive ? '<span class="v-live-dot">LIVE</span>' : ''}</div>
                  <div class="v-channel-name">${escapeHTML(identity.displayName || "我")}</div>
                </button>` : "";
              const chars = state.channels.map(ch => `
                <button class="v-channel" data-action="open-channel" data-channel-id="${escapeHTML(ch.id)}">
                  <div class="v-avatar-wrap ${ch.live ? "is-live" : ""}"><div class="v-avatar">${avatarHTML(ch.avatar, ch.name)}</div>${ch.live ? '<span class="v-live-dot">LIVE</span>' : ''}</div>
                  <div class="v-channel-name">${escapeHTML(ch.name)}</div>
                </button>`).join("");
              host.innerHTML = self + chars + `
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

            const renderSocialPostCard = (post, { compact = false, canDelete = false } = {}) => {
              post = { ...post, ...(state.postOverrides?.[String(post?.id || "")] || {}) };
              const imageHTML = isImageURL(post.image || "") ? `<img src="${escapeHTML(post.image)}" alt="">` : "✦";
              const trId = `post-card-${String(post.id || "post")}`;
              const mode = String(post.accessMode || "public");
              const age = String(post.ageRequirement || "none");
              const accessLabel = mode === "free" ? `免费订阅${age === "18+" ? " · 18+" : ""}` : mode === "paid" ? `付费订阅${age === "18+" ? " · 18+" : ""}` : (age === "18+" ? "公开 · 18+" : "");
              const accessClass = mode === "free" ? " is-free" : mode === "paid" ? " is-paid" : (age === "18+" ? " is-age" : "");
              return `<article class="v-card v-home-card"><div class="v-social-head"><div class="v-social-avatar">${avatarHTML(post.avatar || "", post.name || "V")}</div><div class="v-social-copy"><div class="v-social-name">${escapeHTML(post.name || "Vela Channel")} <span style="font-weight:600;color:var(--v-muted)">${escapeHTML(post.handle || "")}</span></div><div class="v-social-handle">${escapeHTML(post.time || "刚刚")}</div>${accessLabel ? `<span class="v-access-badge${accessClass}">${escapeHTML(accessLabel)}</span>` : ""}</div></div><div class="v-social-text" data-action="open-post-by-id" data-post-id="${escapeHTML(post.id)}">${escapeHTML(post.text || "")}</div>${translationHTML(trId, post.translation || "")}<button class="v-social-media" data-action="open-post-by-id" data-post-id="${escapeHTML(post.id)}">${imageHTML}</button><div class="v-social-actions"><button data-action="demo-like-post" data-post-id="${escapeHTML(post.id)}">♡ ${Number(post.likes || 0)}</button><button data-action="open-post-by-id" data-post-id="${escapeHTML(post.id)}">◌ ${Number(post.comments || safeArray(state.postReplies?.[post.id]).length || 0)}</button><button data-action="edit-post" data-post-id="${escapeHTML(post.id)}">编辑</button>${canDelete ? `<button data-action="delete-community-post" data-post-id="${escapeHTML(post.id)}" style="color:var(--v-red)">删除</button>` : ""}</div></article>`;
            };

            const renderHome = () => {
              const host = q('[data-role="home-feed"]');
              const filter = ["all","live","post"].includes(state.homeFilter) ? state.homeFilter : "all";
              qa('[data-home-filter]').forEach(btn => btn.classList.toggle("is-active", btn.dataset.homeFilter === filter));
              const identity = state.identities.find(x => String(x.id) === String(state.viewerIdentityId)) || state.identities[0];
              const cards = [];

              if (identity?.activeLive) {
                const live = identity.activeLive;
                const stats = getLiveStats(live);
                const trId = `home-own-live-${String(live.id || "own")}`;
                cards.push({ type: "live", html: `<article class="v-card v-home-card"><button class="v-home-card-hit" data-action="open-own-profile-live" data-identity-id="${escapeHTML(identity.id)}"><div class="v-social-head"><div class="v-social-avatar">${avatarHTML(identity.avatar || "", identity.displayName || "U")}</div><div class="v-social-copy"><div class="v-social-name">${escapeHTML(identity.displayName || "我的频道")} <span style="font-weight:600;color:var(--v-muted)">${escapeHTML(identity.handle || "")}</span></div><div class="v-home-self-label">我的直播 · ${formatViewers(stats.currentViewers || 0)} 人观看</div></div></div><div class="v-stage"><div class="v-stage-copy"><span class="v-badge">LIVE</span><div class="v-live-title">${escapeHTML(live.title || "正在直播")}</div><div class="v-viewers">${escapeHTML(live.category || "直播进行中")}</div></div></div></button>${translationHTML(trId, live.titleTranslation || "")}</article>` });
              }

              const sampleLive = getHomeSampleLive();
              const liveTrId = `home-live-title-${sampleLive.id}`;
              cards.push({ type: "live", html: `<article class="v-card v-home-card"><button class="v-home-card-hit" data-action="open-home-live"><div class="v-social-head"><div class="v-social-avatar">${avatarHTML(sampleLive.avatar, sampleLive.name)}</div><div class="v-social-copy"><div class="v-social-name">${escapeHTML(sampleLive.name)} <span style="font-weight:600;color:var(--v-muted)">${escapeHTML(sampleLive.handle || "")}</span></div><div class="v-social-handle">正在直播 · ${formatViewers(sampleLive.viewers)} 人观看</div></div></div><div class="v-stage"><div class="v-stage-copy"><span class="v-badge">LIVE</span><div class="v-live-title">${escapeHTML(sampleLive.title)}</div><div class="v-viewers">${escapeHTML(sampleLive.category)}</div></div></div></button>${translationHTML(liveTrId, `${sampleLive.titleTranslation || ""}${sampleLive.categoryTranslation ? `\n${sampleLive.categoryTranslation}` : ""}`)}</article>` });

              const ownPosts = state.communityPosts
                .filter(p => String(p.ownerType || "") === "identity" && String(p.ownerId || "") === String(state.viewerIdentityId || ""))
                .map(p => getPostById(p.id))
                .filter(Boolean);
              ownPosts.forEach(post => cards.push({ type: "post", html: renderSocialPostCard(post) }));
              cards.push({ type: "post", html: renderSocialPostCard(getHomeSamplePost()) });

              const visible = filter === "all" ? cards : cards.filter(item => item.type === filter);
              host.innerHTML = visible.map(item => item.html).join("") || `<div class="v-profile-empty">这里暂时没有内容。</div>`;
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

            const getOwnSubscriptionProfile = () => getSubscriptionProfile("identity", state.viewerIdentityId);

            const getDMRelationshipBadge = (msg) => {
              if (/合作|商务/.test(String(msg?.badge || ""))) return { text: String(msg.badge || "商务联系"), cls: "is-business" };
              if (msg?.fanTier === "paid") return { text: `${getOwnSubscriptionProfile().paid.emoji || "◆"} 粉丝`, cls: "is-paid" };
              if (msg?.fanTier === "free") return { text: `${getOwnSubscriptionProfile().free.emoji || "◇"} 粉丝`, cls: "is-free" };
              if (msg?.relationship === "mutual") return { text: "互关", cls: "is-mutual" };
              if (msg?.outboundToChannel && msg?.channelId) {
                const tier = state.subscriptions?.[String(msg.channelId)] || "none";
                if (tier === "paid") return { text: "你的关注", cls: "is-paid" };
                if (tier === "free") return { text: "你的关注", cls: "is-free" };
              }
              return { text: "陌生人", cls: "is-stranger" };
            };

            const communityChatKey = (ownerType, ownerId, tier) => `${String(ownerType)}:${String(ownerId)}:${tier === "paid" ? "paid" : "free"}`;

            const isOwnCommunity = (ownerType, ownerId) => {
              if (ownerType === "identity") return String(ownerId) === String(state.viewerIdentityId);
              const channel = state.channels.find(ch => String(ch.id) === String(ownerId));
              return Boolean(channel?.sourceCharacterId && safeArray(state.rocheLink?.linkedCharacterIds).map(String).includes(String(channel.sourceCharacterId)));
            };

            const getCommunitySettings = (ownerType, ownerId, tier) => {
              const key = communityChatKey(ownerType, ownerId, tier);
              const entity = getProfileEntity(ownerType, ownerId);
              const subCfg = getSubscriptionProfile(ownerType, ownerId)[tier === "paid" ? "paid" : "free"];
              const current = state.communitySettings[key] || {};
              const normalized = {
                avatar: String(current.avatar || entity?.avatar || ""),
                name: String(current.name || subCfg.communityName || `${profileName(entity, ownerType)}社群`),
                announcement: String(current.announcement || ""),
                fanName: String(current.fanName || (tier === "paid" ? "会员" : "粉丝")),
                botEnabled: Boolean(current.botEnabled),
                botName: String(current.botName || "Vela 小助手"),
                botAvatar: String(current.botAvatar || ""),
                botLeadHours: Math.max(1, Math.min(24, Number(current.botLeadHours || 3))),
                botScheduled: current.botScheduled !== false,
                botLive: current.botLive !== false,
                botLottery: current.botLottery !== false,
                fanProfile: String(current.fanProfile || entity?.fanProfile || "喜欢主播日常、直播讨论与轻松聊天。"),
                chatStyle: String(current.chatStyle || "自然闲聊、直播讨论、偶尔接梗，不要求每个人都围着主播。")
              };
              state.communitySettings[key] = normalized;
              return normalized;
            };

            const stableHash = (value) => {
              let h = 2166136261;
              const text = String(value || "");
              for (let i = 0; i < text.length; i += 1) {
                h ^= text.charCodeAt(i);
                h = Math.imul(h, 16777619);
              }
              return Math.abs(h >>> 0);
            };

            const getCommunityStats = (ownerType, ownerId, tier) => {
              const entity = getProfileEntity(ownerType, ownerId);
              const followers = Math.max(24, Number(entity?.followers || 0));
              const seed = stableHash(communityChatKey(ownerType, ownerId, tier));
              const ratio = (tier === "paid" ? 0.055 : 0.18) + (seed % 14) / 100;
              const members = Math.max(tier === "paid" ? 8 : 16, Math.round(followers * ratio));
              const activity = Math.max(4, Math.min(98, Number(state.platformSettings?.activityLevel || 50)));
              const timeSeed = Math.floor(Date.now() / 60000);
              const activeRatio = 0.018 + (activity / 100) * 0.06;
              const active = Math.max(1, Math.min(members, Math.round(members * activeRatio + ((seed + timeSeed) % 7))));
              return { members, active };
            };

            const renderMessages = () => {
              syncIncomingFanSubscriptions?.();
              const host = q('[data-role="messages"]');
              qa('[data-dm-tab]').forEach(btn => btn.classList.toggle("is-active", btn.dataset.dmTab === state.dmTab));

              if (state.dmTab === "community") {
                const ownGroups = [];
                const identity = state.identities.find(item => String(item.id) === String(state.viewerIdentityId));
                if (identity) {
                  ["free","paid"].forEach(tier => ownGroups.push({ ownerType: "identity", ownerId: identity.id, tier, entity: identity }));
                }
                state.channels.filter(ch => isOwnCommunity("channel", ch.id)).forEach(ch => {
                  ["free","paid"].forEach(tier => ownGroups.push({ ownerType: "channel", ownerId: ch.id, tier, entity: ch }));
                });

                const ownKeys = new Set(ownGroups.map(g => communityChatKey(g.ownerType, g.ownerId, g.tier)));
                const joinedGroups = [];
                Object.entries(state.subscriptions || {}).forEach(([channelId, sub]) => {
                  const ch = state.channels.find(item => String(item.id) === String(channelId));
                  if (!ch || isOwnCommunity("channel", ch.id)) return;
                  const tiers = sub === "paid" ? ["free","paid"] : sub === "free" ? ["free"] : [];
                  tiers.forEach(tier => {
                    const key = communityChatKey("channel", ch.id, tier);
                    if (!ownKeys.has(key)) joinedGroups.push({ ownerType: "channel", ownerId: ch.id, tier, entity: ch });
                  });
                });

                const rowHTML = group => {
                  const cfg = getCommunitySettings(group.ownerType, group.ownerId, group.tier);
                  const stats = getCommunityStats(group.ownerType, group.ownerId, group.tier);
                  return `<button class="v-community-entry" data-action="open-community-chat" data-owner-type="${escapeHTML(group.ownerType)}" data-owner-id="${escapeHTML(group.ownerId)}" data-tier="${escapeHTML(group.tier)}"><div class="v-social-avatar">${avatarHTML(cfg.avatar || group.entity?.avatar || "", cfg.name || "V")}</div><div class="v-meta"><div class="v-name">${escapeHTML(cfg.name)}</div><div class="v-community-owner">${stats.members.toLocaleString("zh-CN")} 人 · ${stats.active.toLocaleString("zh-CN")} 人正在聊天</div></div><span class="v-community-tier-dot ${group.tier === "paid" ? "is-paid" : "is-free"}">${group.tier === "paid" ? "付费" : "免费"}</span></button>`;
                };

                host.innerHTML = `<div class="v-community-section-title">我的社群</div><div class="v-community-list">${ownGroups.map(rowHTML).join("") || '<div class="v-profile-empty">还没有自己的社群。</div>'}</div><div class="v-community-section-title">我加入的社群</div>${joinedGroups.length ? `<div class="v-community-list">${joinedGroups.map(rowHTML).join("")}</div>` : `<div class="v-profile-empty">还没有加入其他主播的社群。<br>订阅入口只在对应主播主页。</div>`}`;
                return;
              }

              host.innerHTML = `<div class="v-card">${state.messages.map(msg => {
                const rel = getDMRelationshipBadge(msg);
                return `<button class="v-msg" data-action="open-message" data-message-id="${escapeHTML(msg.id)}" data-longpress="delete-dm-conversation"><div class="v-mini">${avatarHTML(msg.avatar, msg.name)}</div><div class="v-meta"><div class="v-name">${escapeHTML(msg.name)}<span class="v-relation ${rel.cls}">${escapeHTML(rel.text)}</span></div><div class="v-preview">${escapeHTML(msg.preview || "暂无消息")}</div></div>${msg.unread ? `<span class="v-unread">${msg.unread}</span>` : ""}</button>`;
              }).join("")}</div>`;
            };

            const COIN_CNY_RATE = 0.1; // 🔷100 = ¥10

            const detectSettlementCurrency = () => {
              const configured = String(state.wallet?.settlementCurrency || "").toUpperCase();
              if (["CNY","USD","JPY","KRW","HKD","EUR"].includes(configured)) return configured;
              const locale = String(navigator?.language || "zh-CN").toLowerCase();
              if (locale.includes("ja")) return "JPY";
              if (locale.includes("ko")) return "KRW";
              if (locale.includes("hk")) return "HKD";
              if (locale.includes("us") || locale.startsWith("en")) return "USD";
              if (locale.includes("de") || locale.includes("fr") || locale.includes("it") || locale.includes("es") || locale.includes("nl")) return "EUR";
              return "CNY";
            };

            const currencySymbol = code => ({ CNY:"¥", USD:"$", JPY:"¥", KRW:"₩", HKD:"HK$", EUR:"€" }[String(code)] || String(code));

            const walletCurrency = () => {
              const currency = detectSettlementCurrency();
              state.wallet.settlementCurrency = currency;
              return currency;
            };

            const cnyToCurrency = (cny, currency = walletCurrency()) => {
              const rate = Number(state.wallet?.fxRates?.[currency] || (currency === "CNY" ? 1 : 0));
              return currency === "CNY" ? Number(cny || 0) : Number(cny || 0) * (rate || 1);
            };

            const currencyToCNY = (value, currency = walletCurrency()) => {
              const rate = Number(state.wallet?.fxRates?.[currency] || (currency === "CNY" ? 1 : 0));
              return currency === "CNY" ? Number(value || 0) : Number(value || 0) / (rate || 1);
            };

            const formatCash = (cny, { signed = false } = {}) => {
              const currency = walletCurrency();
              const converted = cnyToCurrency(cny, currency);
              const digits = ["JPY","KRW"].includes(currency) ? 0 : 2;
              const sign = signed ? (converted > 0 ? "+" : converted < 0 ? "-" : "") : (converted < 0 ? "-" : "");
              const abs = Math.abs(converted);
              return `${sign}${currencySymbol(currency)}${abs.toLocaleString("zh-CN", { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
            };

            const formatCoin = (value, { signed = false } = {}) => {
              const n = Number(value || 0);
              const sign = signed ? (n > 0 ? "+" : n < 0 ? "-" : "") : (n < 0 ? "-" : "");
              return `${sign}🔷 ${Math.abs(Math.round(n)).toLocaleString("zh-CN")}`;
            };

            let fxLoading = false;
            const loadWalletFxRates = async ({ force = false } = {}) => {
              const stale = Date.now() - Number(state.wallet?.fxUpdatedAt || 0) > 6 * 60 * 60 * 1000;
              if (fxLoading || (!force && !stale)) return;
              fxLoading = true;
              try {
                const res = await fetch("https://api.frankfurter.app/latest?from=CNY");
                if (!res.ok) throw new Error(`FX ${res.status}`);
                const data = await res.json();
                const rates = { CNY: 1 };
                ["USD","JPY","KRW","HKD","EUR"].forEach(code => {
                  if (Number(data?.rates?.[code]) > 0) rates[code] = Number(data.rates[code]);
                });
                state.wallet.fxRates = { ...(state.wallet.fxRates || {}), ...rates };
                state.wallet.fxUpdatedAt = Date.now();
                await persist();
                if (state.activePage === "wallet") renderWallet();
              } catch (err) {
                // Offline fallback only; live values will refresh again when the endpoint is reachable.
                state.wallet.fxRates = {
                  CNY: 1,
                  USD: Number(state.wallet.fxRates?.USD || 0.149),
                  JPY: Number(state.wallet.fxRates?.JPY || 21.9),
                  KRW: Number(state.wallet.fxRates?.KRW || 207),
                  HKD: Number(state.wallet.fxRates?.HKD || 1.16),
                  EUR: Number(state.wallet.fxRates?.EUR || 0.128)
                };
              } finally {
                fxLoading = false;
              }
            };

            const walletTxHTML = tx => {
              const cash = tx.cashCNY != null ? Number(tx.cashCNY || 0) : null;
              const coin = tx.coin != null ? Number(tx.coin || 0) : null;
              const amount = coin != null ? formatCoin(coin, { signed: true }) : formatCash(cash || 0, { signed: true });
              const cls = coin != null ? " is-coin" : "";
              const dateText = tx.at ? new Date(Number(tx.at)).toLocaleDateString("zh-CN", { month:"numeric", day:"numeric" }) : "";
              return `<div class="v-tx"><span>${escapeHTML(tx.title || "流水")}<small>${escapeHTML(tx.note || "")}${dateText ? ` · ${escapeHTML(dateText)}` : ""}</small></span><b class="v-tx-amount${cls}">${escapeHTML(amount)}</b></div>`;
            };

            const renderWallet = () => {
              const assetHost = q('[data-role="wallet-assets"]');
              const accountHost = q('[data-role="wallet-account"]');
              const txHost = q('[data-role="transactions"]');
              if (!assetHost || !accountHost || !txHost) return;
              const currency = walletCurrency();
              const cashCNY = Number(state.wallet.cashBalanceCNY || 0);
              const coin = Math.max(0, Number(state.wallet.coinBalance || 0));
              assetHost.innerHTML = `<div class="v-wallet-assets"><section class="v-wallet-asset is-coin"><div><div class="v-wallet-asset-label">Vela Coin</div><div class="v-wallet-asset-value">🔷 ${Math.round(coin).toLocaleString("zh-CN")}</div><div class="v-wallet-asset-sub">打赏、礼物、订阅都使用 Vela Coin</div></div><div class="v-wallet-asset-actions"><button data-action="wallet-recharge-coin">充值 Coin</button><button data-action="wallet-cashout-coin">兑换提现</button></div></section><section class="v-wallet-asset is-cash"><div><div class="v-wallet-asset-label">可提现余额 · ${escapeHTML(currency)}</div><div class="v-wallet-asset-value">${escapeHTML(formatCash(cashCNY))}</div><div class="v-wallet-asset-sub">商务直接入账；订阅每周一自动结算</div></div><div class="v-wallet-asset-actions"><button data-action="wallet-withdraw">提现</button><button data-action="wallet-refresh-fx">更新汇率</button></div></section></div>`;

              const account = state.wallet.linkedAccount;
              accountHost.innerHTML = account
                ? `<div class="v-wallet-account"><div class="v-wallet-account-head"><div><div class="v-wallet-asset-label">提现账户</div><div class="v-name">${escapeHTML(account.bankName || "Vela Bank")}</div></div><button data-action="wallet-edit-account">管理</button></div><div class="v-wallet-card-no">${escapeHTML(account.first4 || "0000")} ·••• ·••• ${escapeHTML(account.last4 || "0000")}</div><div class="v-hint" style="margin-top:6px">交易 PIN 已设置 · 仅用于 Vela 模拟结算</div></div>`
                : `<button class="v-wallet-account" style="width:100%;text-align:left;color:inherit" data-action="wallet-bind-account"><div class="v-wallet-account-head"><div><div class="v-wallet-asset-label">提现账户</div><div class="v-name">绑定后才能提现 / 使用账户充值</div></div><b>＋</b></div><div class="v-hint" style="margin-top:7px">Vela 模拟账户，请勿填写真实银行卡号或真实银行密码。</div></button>`;

              txHost.innerHTML = safeArray(state.wallet.transactions).slice(0, 80).map(walletTxHTML).join("") || '<div class="v-profile-empty">还没有流水。</div>';
              loadWalletFxRates();
            };

            const hashWalletPin = async pin => {
              const value = String(pin || "");
              try {
                if (crypto?.subtle && typeof TextEncoder !== "undefined") {
                  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`vela-wallet:${value}`));
                  return [...new Uint8Array(bytes)].map(b => b.toString(16).padStart(2, "0")).join("");
                }
              } catch (_) {}
              let h = 2166136261;
              for (let i = 0; i < value.length; i += 1) { h ^= value.charCodeAt(i); h = Math.imul(h, 16777619); }
              return `fallback-${Math.abs(h >>> 0)}`;
            };

            const openWalletBind = () => {
              const account = state.wallet.linkedAccount || {};
              openScreen("wallet-flow", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="wallet-flow">‹</button><div class="v-meta"><strong>${state.wallet.linkedAccount ? "管理提现账户" : "绑定提现账户"}</strong><div class="v-hint">Vela 模拟结算账户</div></div><button class="v-head-action" data-action="save-wallet-account">保存</button></header><div class="v-subbody"><div class="v-wallet-flow-card"><div class="v-editform"><div class="v-field"><label>银行名称</label><input data-wallet-field="bankName" maxlength="40" value="${escapeHTML(account.bankName || "")}" placeholder="例如 Vela Bank"></div><div class="v-fieldpair"><div class="v-field"><label>账号前四位</label><input data-wallet-field="first4" inputmode="numeric" maxlength="4" value="${escapeHTML(account.first4 || "")}" placeholder="1234"></div><div class="v-field"><label>账号后四位</label><input data-wallet-field="last4" inputmode="numeric" maxlength="4" value="${escapeHTML(account.last4 || "")}" placeholder="5678"></div></div><div class="v-field"><label>Vela 交易 PIN · 6 位</label><input data-wallet-field="pin" type="password" inputmode="numeric" maxlength="6" placeholder="${state.wallet.linkedAccount ? "不修改可留空" : "仅用于 Vela 模拟验证"}"></div></div><div class="v-publish-note" style="margin-top:12px">不要输入真实银行卡完整号码或真实银行密码。这里只保存银行名称、前四位、后四位以及不可逆的 Vela PIN 摘要。</div></div></div>`);
            };

            const saveWalletAccount = async () => {
              const screen = q('[data-screen="wallet-flow"]');
              if (!screen) return;
              const read = name => String(screen.querySelector(`[data-wallet-field="${name}"]`)?.value || "").trim();
              const bankName = read("bankName");
              const first4 = read("first4").replace(/\D/g, "").slice(0, 4);
              const last4 = read("last4").replace(/\D/g, "").slice(0, 4);
              const pin = read("pin").replace(/\D/g, "").slice(0, 6);
              if (!bankName || first4.length !== 4 || last4.length !== 4) { toast("请填写银行名称和账号前 / 后四位"); return; }
              if (!state.wallet.linkedAccount && pin.length !== 6) { toast("请设置 6 位 Vela 交易 PIN"); return; }
              if (pin && pin.length !== 6) { toast("Vela 交易 PIN 必须是 6 位"); return; }
              const old = state.wallet.linkedAccount || {};
              state.wallet.linkedAccount = { bankName, first4, last4, pinHash: pin ? await hashWalletPin(pin) : old.pinHash || "" };
              await persist();
              closeScreen("wallet-flow");
              renderWallet();
              toast("提现账户已保存");
            };

            const verifyWalletPin = async pin => {
              const account = state.wallet.linkedAccount;
              if (!account?.pinHash) return false;
              return (await hashWalletPin(String(pin || "").replace(/\D/g, "").slice(0, 6))) === account.pinHash;
            };

            const coinCNYValue = coin => Number(coin || 0) * COIN_CNY_RATE;

            const openWalletCoinRecharge = () => {
              if (!state.wallet.linkedAccount) { openWalletBind(); return; }
              openScreen("wallet-flow", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="wallet-flow">‹</button><div class="v-meta"><strong>充值 Vela Coin</strong><div class="v-hint">🔷100 = ¥10 基准价值</div></div></header><div class="v-subbody"><div class="v-wallet-flow-card"><div class="v-editform"><div class="v-field"><label>充值数量</label><input data-wallet-recharge-field="coin" type="number" min="10" step="10" value="100"></div><div class="v-field"><label>付款方式</label><select data-wallet-recharge-field="source"><option value="cash">使用可提现余额</option><option value="account">使用已绑定模拟账户</option></select></div><div class="v-field"><label>Vela 交易 PIN</label><input data-wallet-recharge-field="pin" type="password" inputmode="numeric" maxlength="6" placeholder="6 位 PIN"></div></div><div class="v-wallet-convert-preview" style="margin-top:10px">Coin 充值只发生在 Vela 模拟钱包中，不会发起真实银行卡交易。</div><button class="v-action" style="margin-top:12px;width:100%" data-action="confirm-wallet-coin-recharge">确认充值</button></div></div>`);
            };

            const confirmWalletCoinRecharge = async () => {
              const screen = q('[data-screen="wallet-flow"]');
              const coin = Math.max(0, Math.round(Number(screen?.querySelector('[data-wallet-recharge-field="coin"]')?.value || 0)));
              const source = String(screen?.querySelector('[data-wallet-recharge-field="source"]')?.value || "cash");
              const pin = String(screen?.querySelector('[data-wallet-recharge-field="pin"]')?.value || "");
              if (coin < 10) { toast("至少充值 🔷10"); return; }
              if (!(await verifyWalletPin(pin))) { toast("Vela 交易 PIN 不正确"); return; }
              const costCNY = coinCNYValue(coin);
              if (source === "cash") {
                if (Number(state.wallet.cashBalanceCNY || 0) < costCNY) { toast("可提现余额不足"); return; }
                state.wallet.cashBalanceCNY -= costCNY;
                state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-cash2coin`, type:"cash", title:"余额购买 Coin", note:`兑换 ${formatCoin(coin)}`, cashCNY:-costCNY, at:Date.now() });
              } else {
                state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-account2coin`, type:"coin", title:"模拟账户充值", note:`${state.wallet.linkedAccount.bankName} · ${state.wallet.linkedAccount.first4}••••${state.wallet.linkedAccount.last4}`, coin, at:Date.now() });
              }
              state.wallet.coinBalance = Number(state.wallet.coinBalance || 0) + coin;
              if (source === "cash") state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-coinin`, type:"coin", title:"Coin 充值", note:"由可提现余额兑换", coin, at:Date.now() });
              await persist();
              closeScreen("wallet-flow");
              renderWallet();
            };

            const openWalletCoinCashout = () => {
              if (!state.wallet.linkedAccount) { openWalletBind(); return; }
              openScreen("wallet-flow", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="wallet-flow">‹</button><div class="v-meta"><strong>Coin 兑换</strong><div class="v-hint">转入可提现余额</div></div></header><div class="v-subbody"><div class="v-wallet-flow-card"><div class="v-editform"><div class="v-field"><label>兑换 Coin</label><input data-wallet-cashout-field="coin" type="number" min="10" step="10" value="100"></div><div class="v-field"><label>Vela 交易 PIN</label><input data-wallet-cashout-field="pin" type="password" inputmode="numeric" maxlength="6" placeholder="6 位 PIN"></div></div><div class="v-wallet-convert-preview" style="margin-top:10px">🔷100 = ¥10 CNY 基准；钱包会按当前汇率显示你的结算币种。</div><button class="v-action" style="margin-top:12px;width:100%" data-action="confirm-wallet-coin-cashout">兑换到余额</button></div></div>`);
            };

            const confirmWalletCoinCashout = async () => {
              const screen = q('[data-screen="wallet-flow"]');
              const coin = Math.max(0, Math.round(Number(screen?.querySelector('[data-wallet-cashout-field="coin"]')?.value || 0)));
              const pin = String(screen?.querySelector('[data-wallet-cashout-field="pin"]')?.value || "");
              if (coin < 10 || Number(state.wallet.coinBalance || 0) < coin) { toast("Coin 余额不足"); return; }
              if (!(await verifyWalletPin(pin))) { toast("Vela 交易 PIN 不正确"); return; }
              const cashCNY = coinCNYValue(coin);
              state.wallet.coinBalance -= coin;
              state.wallet.cashBalanceCNY = Number(state.wallet.cashBalanceCNY || 0) + cashCNY;
              state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-coinout`, type:"coin", title:"Coin 兑换", note:`转入 ${formatCash(cashCNY)}`, coin:-coin, at:Date.now() });
              state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-cashin`, type:"cash", title:"Coin 兑换入账", note:`来自 ${formatCoin(coin)}`, cashCNY, at:Date.now() });
              await persist();
              closeScreen("wallet-flow");
              renderWallet();
            };

            const openWalletWithdraw = () => {
              if (!state.wallet.linkedAccount) { openWalletBind(); return; }
              openScreen("wallet-flow", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="wallet-flow">‹</button><div class="v-meta"><strong>提现</strong><div class="v-hint">${escapeHTML(state.wallet.linkedAccount.bankName || "提现账户")}</div></div></header><div class="v-subbody"><div class="v-wallet-flow-card"><div class="v-editform"><div class="v-field"><label>提现金额 · ${escapeHTML(walletCurrency())}</label><input data-wallet-withdraw-field="amount" type="number" min="0.01" step="0.01" placeholder="${escapeHTML(formatCash(state.wallet.cashBalanceCNY || 0))}"></div><div class="v-field"><label>Vela 交易 PIN</label><input data-wallet-withdraw-field="pin" type="password" inputmode="numeric" maxlength="6"></div></div><div class="v-publish-note" style="margin-top:10px">这是 Vela 模拟提现，不会产生真实银行转账。</div><button class="v-action" style="margin-top:12px;width:100%" data-action="confirm-wallet-withdraw">确认提现</button></div></div>`);
            };

            const confirmWalletWithdraw = async () => {
              const screen = q('[data-screen="wallet-flow"]');
              const amountLocal = Math.max(0, Number(screen?.querySelector('[data-wallet-withdraw-field="amount"]')?.value || 0));
              const pin = String(screen?.querySelector('[data-wallet-withdraw-field="pin"]')?.value || "");
              const cny = currencyToCNY(amountLocal);
              if (!amountLocal || cny > Number(state.wallet.cashBalanceCNY || 0)) { toast("可提现余额不足"); return; }
              if (!(await verifyWalletPin(pin))) { toast("Vela 交易 PIN 不正确"); return; }
              state.wallet.cashBalanceCNY -= cny;
              state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-withdraw`, type:"cash", title:"提现", note:`${state.wallet.linkedAccount.bankName} · ${state.wallet.linkedAccount.first4}••••${state.wallet.linkedAccount.last4}`, cashCNY:-cny, at:Date.now() });
              await persist();
              closeScreen("wallet-flow");
              renderWallet();
              toast("Vela 模拟提现已完成");
            };

            const recordSubscriptionAccrual = (ownerType, ownerId, coinAmount, note = "") => {
              const amount = Math.max(0, Math.round(Number(coinAmount || 0)));
              if (!amount) return;
              if (ownerType === "identity" && String(ownerId) === String(state.viewerIdentityId)) {
                state.wallet.subscriptionAccruals.push({ id:`subacc-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`, ownerType, ownerId, coinAmount:amount, note, at:Date.now(), settled:false });
              } else if (ownerType === "channel") {
                const earning = state.roleEarnings[ownerId] || (state.roleEarnings[ownerId] = { coin:0, cashCNY:0, subscriptionCoin:0, liveHistory:[] });
                earning.subscriptionCoin = Number(earning.subscriptionCoin || 0) + amount;
              }
            };

            const syncIncomingFanSubscriptions = () => {
              const identity = state.identities.find(item => String(item.id) === String(state.viewerIdentityId));
              if (!identity) return;
              const coinPrice = Math.max(1, Math.round(Number(getSubscriptionProfile("identity", identity.id).paid.coinPrice || 0)));
              let changed = false;
              state.messages.forEach(msg => {
                if (msg?.fanTier !== "paid" || msg.subscriptionAccrued) return;
                msg.subscriptionAccrued = true;
                msg.subscriptionCoinSnapshot = coinPrice;
                state.wallet.subscriptionAccruals.push({
                  id:`subacc-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,
                  ownerType:"identity",
                  ownerId:identity.id,
                  subscriberId:String(msg.id || ""),
                  coinAmount:coinPrice,
                  note:`${msg.name || "付费粉丝"} · 订阅价快照 🔷${coinPrice}`,
                  at:Number(msg.subscriptionStartedAt || Date.now()),
                  settled:false
                });
                changed = true;
              });
              if (changed) persist();
            };

            const mondayStart = dateValue => {
              const date = new Date(dateValue);
              date.setHours(0,0,0,0);
              const day = date.getDay();
              const diff = day === 0 ? -6 : 1 - day;
              date.setDate(date.getDate() + diff);
              return date.getTime();
            };

            const settleWeeklySubscriptions = async () => {
              const cutoff = mondayStart(Date.now());
              const pending = safeArray(state.wallet.subscriptionAccruals).filter(item => !item.settled && Number(item.at || 0) < cutoff);
              if (!pending.length) return;
              const coin = pending.reduce((sum, item) => sum + Number(item.coinAmount || 0), 0);
              const cashCNY = coinCNYValue(coin);
              pending.forEach(item => { item.settled = true; item.settledAt = Date.now(); });
              state.wallet.cashBalanceCNY = Number(state.wallet.cashBalanceCNY || 0) + cashCNY;
              state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-weeklysub`, type:"cash", title:"订阅周结算", note:`本周订阅收入 ${formatCoin(coin)} · 无平台抽成`, cashCNY, at:Date.now() });
              await persist();
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
                  language: lang,
                  timeline: [],
                  participantEvents: {}
                };
              }
              const progress = state.liveProgress[id];
              progress.timeline = safeArray(progress.timeline);
              progress.participantEvents = { ...(progress.participantEvents || {}) };
              return progress;
            };

            const isOwnLiveSession = (live) => {
              const id = String(live?.id || "");
              return id === "own-live" || id.startsWith("own-scheduled-") || live?.ownerType === "identity" || live?.isOwn === true;
            };

            const getLiveGuests = (live) => {
              const direct = safeArray(live?.participants).map(item => ({
                id: String(item?.id || ""),
                name: String(item?.name || item?.handle || "嘉宾"),
                handle: String(item?.handle || ""),
                avatar: String(item?.avatar || initials(item?.name || "嘉宾"))
              })).filter(item => item.id);
              if (direct.length) return direct.slice(0, 3);
              if (live?.cohostId) {
                const ch = state.channels.find(item => String(item.id) === String(live.cohostId));
                return [{ id: String(live.cohostId), name: String(ch?.name || live.cohostName || "嘉宾"), handle: String(ch?.handle || live.cohostHandle || ""), avatar: String(ch?.avatar || live.cohostAvatar || initials(ch?.name || live.cohostName || "嘉宾")) }];
              }
              return [];
            };

            const getLiveParticipants = (live) => {
              const host = { id: `host:${String(live?.ownerId || live?.id || "host")}`, name: String(live?.name || live?.handle || "主播"), handle: String(live?.handle || ""), avatar: String(live?.avatar || initials(live?.name || "主播")), isUser: Boolean(isOwnLiveSession(live)) };
              return [host, ...getLiveGuests(live)].slice(0, 4);
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
                const seededGifts = isOwnLiveSession(live) ? [] : [
                  { user: "Mika", amount: 180 * scale },
                  { user: "yoo_n", amount: 110 * scale },
                  { user: "Sato_Aki", amount: 70 * scale }
                ];
                state.liveStats[id] = {
                  baseViewers,
                  currentViewers,
                  peakViewers: currentViewers,
                  heat: 50,
                  userGiftTotal: 0,
                  tipReceivedCoin: 0,
                  giftReceivedCoin: seededGifts.reduce((sum, item) => sum + Number(item.amount || 0), 0),
                  gifts: seededGifts,
                  lottery: null,
                  ad: live?.business ? { ...live.business } : null
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
              if (trigger) trigger.textContent = ranking.length ? `👑 ${ranking[0].user} · 🔷${Math.round(ranking[0].amount)}` : "🎁 礼物榜";
              const rows = q('[data-screen="live"] [data-role="gift-rank-rows"]');
              if (rows) {
                const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
                const ownHandle = String(identity?.handle || identity?.displayName || "@user");
                rows.innerHTML = ranking.slice(0,8).map((item,index) => `<div class="v-rank-row"><span class="v-rank-no">${index < 3 ? ["👑","2","3"][index] : index + 1}</span><span class="v-rank-user">${escapeHTML(item.user)}${item.user === ownHandle ? " · 你" : ""}</span><span class="v-rank-amount">🔷${Math.round(item.amount).toLocaleString("zh-CN")}</span></div>`).join("") || '<div class="v-hint">本场还没有人送礼物。</div>';
              }
              const balance = q('[data-screen="live"] [data-role="gift-balance"]');
              if (balance) balance.textContent = `Vela Coin 余额 🔷${Math.round(Number(state.wallet?.coinBalance || 0)).toLocaleString("zh-CN")}`;
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

            const formatLiveElapsed = (at, live) => {
              const start = Number(live?.startedAt || 0) || Math.max(0, Number(at || Date.now()) - 1000);
              const total = Math.max(0, Math.floor((Number(at || Date.now()) - start) / 1000));
              const hours = Math.floor(total / 3600);
              const minutes = Math.floor((total % 3600) / 60);
              const seconds = total % 60;
              return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            };

            const normalizeLiveTimelineEvent = (event) => {
              const mode = String(event?.mode || "");
              const text = String(event?.text || "");
              return {
                ...event,
                action: String(event?.action || (mode === "action" ? text : "")),
                speech: String(event?.speech || (mode !== "action" ? text : "")),
                translation: String(event?.translation || ""),
                at: Number(event?.at || Date.now())
              };
            };

            const pushLiveTimelineEvent = (progress, event) => {
              progress.timeline = safeArray(progress.timeline);
              const next = normalizeLiveTimelineEvent(event);
              const lastIndex = progress.timeline.length - 1;
              const last = lastIndex >= 0 ? normalizeLiveTimelineEvent(progress.timeline[lastIndex]) : null;
              const sameActor = last && String(last.actorId || "") === String(next.actorId || "");
              const closeInTime = last && Math.abs(Number(next.at || 0) - Number(last.at || 0)) <= 15000;
              const complementary = last && ((next.action && !last.action) || (next.speech && !last.speech));
              if (sameActor && closeInTime && complementary) {
                progress.timeline[lastIndex] = {
                  ...last,
                  action: last.action || next.action,
                  speech: last.speech || next.speech,
                  translation: last.translation || next.translation,
                  at: last.at || next.at
                };
              } else {
                progress.timeline.push(next);
              }
              progress.timeline = progress.timeline.slice(-120);
            };

            const renderLiveMoment = () => {
              const live = state.liveSession;
              const host = q('[data-screen="live"] [data-role="live-moment"]');
              if (!live || !host) return;
              const progress = getLiveProgress(live);
              let rows = safeArray(progress.timeline).map(normalizeLiveTimelineEvent).slice(-12);

              if (!rows.length && !isOwnLiveSession(live) && progress.text) {
                rows = [{
                  actorType: "character",
                  actorId: String(live.id || "character"),
                  actorName: String(live.name || live.handle || "主播"),
                  action: "",
                  speech: String(progress.text || ""),
                  translation: String(progress.translation || ""),
                  at: Number(live.startedAt || Date.now())
                }];
              }

              host.innerHTML = `<div class="v-live-timeline">${rows.length ? rows.map((event, index) => {
                const trId = `live-timeline-${String(live.id || "live")}-${Number(event.at || 0)}-${index}`;
                const actor = String(event.actorName || (event.actorType === "user" ? live.name || "user" : "主播"));
                return `<div class="v-live-time-entry"><div class="v-live-time-head"><span class="v-live-time-pill">${escapeHTML(formatLiveElapsed(event.at, live))}</span><span class="v-live-time-actor">${escapeHTML(actor)}</span></div>${event.action ? `<div class="v-live-time-action">${escapeHTML(event.action)}</div>` : ""}${event.speech ? `<div class="v-live-time-speech">${escapeHTML(event.speech)}</div>${translationHTML(trId, event.translation || "")}` : ""}</div>`;
              }).join("") : `<div class="v-live-timeline-empty">直播内容会按时间记录在这里。</div>`}</div>`;
              requestAnimationFrame(() => { host.scrollTop = host.scrollHeight; });
            };

            let liveLotteryTimer = null;

            const acceptedBusinessCards = () => {
              const rows = [];
              Object.entries(state.dmThreads || {}).forEach(([messageId, thread]) => {
                safeArray(thread).forEach(item => {
                  if (item?.kind === "business" && item?.status === "accepted") rows.push({ messageId, card:item });
                });
              });
              return rows;
            };

            const livePrizeRowHTML = (item = {}, index = 0) => `<div class="v-prize-row" data-prize-row><input data-prize-field="name" maxlength="20" value="${escapeHTML(item.name || `${["一","二","三","四","五"][index] || index + 1}等奖`)}" placeholder="奖项"><input data-prize-field="count" type="number" min="1" max="100" value="${Math.max(1, Number(item.count || 1))}" placeholder="人数"><input data-prize-field="content" maxlength="100" value="${escapeHTML(item.content || "")}" placeholder="奖品内容"><input data-prize-field="value" type="number" min="0" value="${Math.max(0, Number(item.value || 0))}" placeholder="估值"><button class="v-prize-remove" data-action="remove-live-prize-row">删除这一档</button></div>`;

            const closeLiveEconomyPanel = () => q('[data-screen="live"] [data-role="live-economy-panel"]')?.classList.remove("is-open");

            const openLiveLotteryPanel = () => {
              const live = state.liveSession;
              if (!live || !isOwnLiveSession(live)) return;
              const stats = getLiveStats(live);
              const lottery = stats.lottery;
              const panel = q('[data-screen="live"] [data-role="live-economy-panel"]');
              if (!panel) return;
              if (lottery?.status === "active") {
                const left = Math.max(0, Number(lottery.endsAt || 0) - Date.now());
                panel.innerHTML = `<div class="v-live-economy-card"><div class="v-live-tool-title"><h3>本场抽奖 · 进行中</h3><button data-action="close-live-economy">×</button></div><div class="v-wallet-convert-preview" style="margin-top:10px">剩余约 ${Math.max(0, Math.ceil(left/60000))} 分钟 · ${safeArray(lottery.prizes).length} 档奖项</div>${safeArray(lottery.prizes).map(item => `<div class="v-row"><div><b>${escapeHTML(item.name)}</b><small>${escapeHTML(item.content || "奖品")} · ${Number(item.count || 1)} 人</small></div><span>${item.value ? `¥${Number(item.value).toLocaleString("zh-CN")}` : ""}</span></div>`).join("")}<div class="v-live-tool-actions"><button class="is-light" data-action="resolve-live-lottery">立即开奖</button><button class="is-primary" data-action="close-live-economy">返回直播</button></div></div>`;
              } else if (lottery?.status === "ended") {
                panel.innerHTML = `<div class="v-live-economy-card"><div class="v-live-tool-title"><h3>本场抽奖 · 已开奖</h3><button data-action="close-live-economy">×</button></div>${safeArray(lottery.results).map(item => `<div class="v-row"><div><b>${escapeHTML(item.prizeName)}</b><small>${escapeHTML(item.winners.join("、") || "暂无参与者")}</small></div></div>`).join("")}<div class="v-live-tool-actions"><button class="is-primary" data-action="new-live-lottery">再开一轮</button></div></div>`;
              } else {
                panel.innerHTML = `<div class="v-live-economy-card"><div class="v-live-tool-title"><h3>设置本场抽奖</h3><button data-action="close-live-economy">×</button></div><div class="v-field" style="margin-top:10px"><label>开奖倒计时 · 分钟</label><input data-live-lottery-minutes type="number" min="1" max="120" value="5"></div><div data-role="live-prize-rows">${livePrizeRowHTML({name:"一等奖"},0)}${livePrizeRowHTML({name:"二等奖"},1)}</div><button class="v-action light" style="width:100%;margin-top:8px" data-action="add-live-prize-row">＋ 添加奖项</button><div class="v-live-tool-actions"><button class="is-primary" data-action="save-live-lottery">开始倒计时</button></div></div>`;
              }
              panel.classList.add("is-open");
            };

            const saveLiveLottery = async () => {
              const live = state.liveSession;
              const panel = q('[data-screen="live"] [data-role="live-economy-panel"]');
              if (!live || !panel || !isOwnLiveSession(live)) return;
              const minutes = Math.max(1, Math.min(120, Number(panel.querySelector('[data-live-lottery-minutes]')?.value || 5)));
              const prizes = [...panel.querySelectorAll('[data-prize-row]')].map(row => ({
                name:String(row.querySelector('[data-prize-field="name"]')?.value || "奖项").trim(),
                count:Math.max(1, Math.min(100, Number(row.querySelector('[data-prize-field="count"]')?.value || 1))),
                content:String(row.querySelector('[data-prize-field="content"]')?.value || "").trim(),
                value:Math.max(0, Number(row.querySelector('[data-prize-field="value"]')?.value || 0))
              })).filter(item => item.name);
              if (!prizes.length) { toast("至少保留一个奖项"); return; }
              const stats = getLiveStats(live);
              stats.lottery = { id:`lottery-${Date.now().toString(36)}`, status:"active", startedAt:Date.now(), endsAt:Date.now()+minutes*60000, prizes, results:[] };
              await persist();
              if (liveLotteryTimer) clearTimeout(liveLotteryTimer);
              liveLotteryTimer = setTimeout(() => resolveLiveLottery(), minutes*60000);
              openLiveLotteryPanel();
              toast(`抽奖已开始 · ${minutes} 分钟后开奖`);
            };

            const resolveLiveLottery = async () => {
              const live = state.liveSession;
              if (!live) return;
              const stats = getLiveStats(live);
              const lottery = stats.lottery;
              if (!lottery || lottery.status !== "active") return;
              const pool = [...new Set(state.liveChat.map(line => String(line.user || "")).filter(name => name && name !== "系统" && name !== (state.identities.find(x => x.id === state.viewerIdentityId)?.handle || "")))];
              let cursor = 0;
              lottery.results = safeArray(lottery.prizes).map(prize => {
                const winners = [];
                for (let i = 0; i < Number(prize.count || 1) && pool.length; i += 1) {
                  winners.push(pool[(cursor + i) % pool.length]);
                }
                cursor += Number(prize.count || 1);
                return { prizeName:prize.name, content:prize.content, winners };
              });
              lottery.status = "ended";
              lottery.endedAt = Date.now();
              const summary = lottery.results.map(item => `${item.prizeName}：${item.winners.join("、") || "暂无参与者"}`).join("；");
              state.liveChat.push({ user:"系统", avatar:"🎉", text:`本场抽奖结果：${summary}`, translation:"", at:Date.now() });
              const ownerType = live.ownerType || (isOwnLiveSession(live) ? "identity" : "channel");
              const ownerId = live.ownerId || live.id;
              pushCommunityBotEvent(ownerType, ownerId, "lottery_result", { title:"本场抽奖结果", text:summary });
              await persist();
              renderLiveChatLines();
              openLiveLotteryPanel();
            };

            const openLiveAdPanel = () => {
              const live = state.liveSession;
              if (!live || !isOwnLiveSession(live)) return;
              const stats = getLiveStats(live);
              const panel = q('[data-screen="live"] [data-role="live-economy-panel"]');
              if (!panel) return;
              const current = stats.ad || {};
              const accepted = acceptedBusinessCards();
              const currentSource = current.sourceMessageId && current.sourceCardId ? `${current.sourceMessageId}::${current.sourceCardId}` : "";
              const options = accepted.map(({messageId, card}) => {
                const value = `${messageId}::${card.id}`;
                return `<option value="${escapeHTML(value)}" ${value === currentSource ? "selected" : ""}>${escapeHTML(`${card.brandName || "品牌"} · ${card.productName || card.title || "合作"}`)}</option>`;
              }).join("");
              panel.innerHTML = `<div class="v-live-economy-card"><div class="v-live-tool-title"><h3>本场关联广告</h3><button data-action="close-live-economy">×</button></div><div class="v-field" style="margin-top:10px"><label>关联已接受的商务合作</label><select data-live-ad-field="source"><option value="">不关联卡片 / 手动填写</option>${options}</select></div><div class="v-field"><label>品牌 / 产品</label><input data-live-ad-field="label" maxlength="100" value="${escapeHTML(current.label || current.productName || current.brandName || "")}" placeholder="品牌或产品名称"></div><div class="v-field"><label>广告词</label><textarea data-live-ad-field="copy" maxlength="600">${escapeHTML(current.adCopy || "")}</textarea></div><div class="v-field"><label>广告链接</label><input data-live-ad-field="link" value="${escapeHTML(current.adLink || "")}" placeholder="https://..."></div><div class="v-live-tool-actions"><button class="is-light" data-action="clear-live-ad">清除关联</button><button class="is-primary" data-action="save-live-ad">挂到本场直播</button></div></div>`;
              panel.classList.add("is-open");
            };

            const saveLiveAd = async () => {
              const live = state.liveSession;
              const panel = q('[data-screen="live"] [data-role="live-economy-panel"]');
              if (!live || !panel) return;
              const read = name => String(panel.querySelector(`[data-live-ad-field="${name}"]`)?.value || "").trim();
              const existing = getLiveStats(live).ad || {};
              let ad = { ...existing, label:read("label"), adCopy:read("copy"), adLink:read("link"), cashAmountCNY:Number(existing.cashAmountCNY || 0) };
              const source = read("source");
              if (source) {
                const [messageId, cardId] = source.split("::");
                const card = findDMCard(messageId, cardId);
                if (card?.kind === "business" && card.status === "accepted") {
                  ad = { ...ad, brandName:card.brandName || "", productName:card.productName || "", label:ad.label || card.productName || card.brandName || "合作广告", adCopy:ad.adCopy || card.adCopy || "", adLink:ad.adLink || card.adLink || "", cashAmountCNY:Number(card.cashAmountCNY || 0), sourceMessageId:messageId, sourceCardId:cardId };
                }
              }
              getLiveStats(live).ad = ad;
              state.liveSession.ad = { ...ad };
              await persist();
              closeLiveEconomyPanel();
              openLive({ ...state.liveSession });
            };

            const clearLiveAd = async () => {
              const live = state.liveSession;
              if (!live) return;
              getLiveStats(live).ad = null;
              state.liveSession.ad = null;
              await persist();
              closeLiveEconomyPanel();
              openLive({ ...state.liveSession });
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
              const liveStats = getLiveStats(currentLive);
              if (!liveStats.ad && currentLive.business) liveStats.ad = { ...currentLive.business };
              const guests = getLiveGuests(currentLive);
              const mode = currentLive.mode || (guests.length ? (currentLive.cohostMode === "inperson" ? "same-room" : "remote") : "solo");
              currentLive.mode = mode;
              currentLive.participants = guests;
              const participants = getLiveParticipants(currentLive);
              const coverHTML = isImageURL(currentLive.cover || "") ? `<img class="v-live-cover-bg" src="${escapeHTML(currentLive.cover)}" alt="">` : "";
              const multiHost = participants.length > 1;
              const participantAvatars = participants.map(p => `<div class="v-live-host-avatar">${avatarHTML(p.avatar || "", p.name || "V")}</div>`).join("");
              const participantNames = participants.map(p => p.name || "参与者").join(" + ");
              const participantsHUD = multiHost
                ? `<div class="v-live-participants">${participantAvatars}</div><div class="v-live-host-copy"><div class="v-live-host-name">${escapeHTML(participantNames)}</div><div class="v-live-viewers" data-role="live-viewers"></div></div>`
                : `<div class="v-live-host-avatar">${avatarHTML(currentLive.avatar || "", hostName)}</div><div class="v-live-host-copy"><div class="v-live-host-name">${escapeHTML(hostName)}</div><div class="v-live-viewers" data-role="live-viewers"></div></div>`;
              const accessLabel = currentLive.accessMode === "free" ? "免费订阅" : currentLive.accessMode === "paid" ? "付费订阅" : "公开直播";
              const ageLabel = currentLive.ageRequirement === "18+" ? " · 18+" : "";
              const modeLabel = guests.length ? ` · ${mode === "same-room" ? "线下同镜" : "线上联播"}` : "";
              const viewerComposer = `<div class="v-composer"><input data-role="live-input" placeholder="回车发送弹幕…" maxlength="120"><button data-action="gift-demo" aria-label="送礼物" title="送礼物">🎁</button><button data-action="summon-live" aria-label="召唤 / 继续直播" title="召唤 / 继续直播">➤</button></div>`;
              const quickTools = own ? `<div class="v-live-quicktools"><button class="v-live-quicktool is-lottery" data-action="open-live-lottery">抽奖</button><button class="v-live-quicktool is-ad" data-action="open-live-ad">AD</button></div>` : "";
              const activeAd = liveStats.ad || currentLive.ad || currentLive.business || null;
              const adStrip = activeAd && (activeAd.adCopy || activeAd.adLink || activeAd.label || activeAd.productName || activeAd.brandName) ? `<div class="v-live-ad-strip"><b>AD</b><span>${escapeHTML(activeAd.adCopy || activeAd.label || activeAd.productName || activeAd.brandName || "本场合作")}</span>${activeAd.adLink ? `<a href="${escapeHTML(activeAd.adLink)}" target="_blank" rel="noopener">查看链接 ↗</a>` : ""}</div>` : "";
              const hostConsole = `<div class="v-host-console"><div class="v-host-console-top"><button class="v-host-mode is-active" data-action="set-host-input-mode" data-host-input-mode="speech">说话</button><button class="v-host-mode" data-action="set-host-input-mode" data-host-input-mode="action">动作</button></div><div class="v-host-console-row"><input data-role="host-live-input" placeholder="输入你在直播里说的话… · Enter发送" maxlength="500"><button data-action="send-host-stage-input" aria-label="发送到直播画面">↑</button><button class="v-summon-host" data-action="summon-host-live" aria-label="召唤 / 继续">➤</button></div><div class="v-host-console-foot"><span>发送只记录 user 的说话 / 动作，不自动召唤。</span><button data-action="open-invite-guest">＋ 邀请嘉宾${guests.length ? ` · ${participants.length}/4` : ""}</button></div></div>`;

              openScreen("live", `<div class="v-live-screen"><div class="v-live-body"><div class="v-live-fixed"><div class="v-live-stage ${coverHTML ? "has-cover" : ""}">${coverHTML}<div class="v-live-hud ${mode === "same-room" ? "is-same-room" : ""}"><button class="v-live-exit" data-action="open-live-exit" aria-label="退出">×</button><div class="v-live-host ${multiHost ? "is-multi" : ""}">${participantsHUD}</div>${quickTools}<button class="v-gift-rank-trigger" data-action="toggle-gift-rank" data-role="gift-rank-trigger">🎁 礼物榜</button></div><div class="v-live-moment" data-role="live-moment"></div></div><div class="v-live-info"><div class="v-live-info-head"><span class="v-badge">LIVE</span><span class="v-cohost-pill">${escapeHTML(accessLabel + ageLabel + modeLabel)}</span></div><h2>${escapeHTML(title)}</h2><p>${escapeHTML(currentLive.category || "直播进行中")}</p>${translationHTML(liveTrId, liveTranslation)}${adStrip}</div></div><div class="v-chat-panel"><div class="v-chat-title">聊天室</div><div class="v-chat-scroll" data-role="live-chat-scroll"><div data-role="live-chat-lines"></div></div>${own ? hostConsole : viewerComposer}</div></div><div class="v-live-popover" data-role="gift-rank-panel"><div class="v-live-popover-card"><div class="v-live-popover-title"><span>本场礼物榜</span><button data-action="close-gift-rank">×</button></div><div data-role="gift-rank-rows"></div></div></div><div class="v-gift-picker" data-role="gift-picker"><div class="v-live-popover-title"><span>送礼物</span><button data-action="close-gift-picker">×</button></div><div class="v-gift-balance" data-role="gift-balance"></div><div class="v-gift-grid"><button data-action="send-live-gift" data-gift-amount="10">🎁 🔷10</button><button data-action="send-live-gift" data-gift-amount="50">🎁 🔷50</button><button data-action="send-live-gift" data-gift-amount="200">🎁 🔷200</button><button data-action="send-live-gift" data-gift-amount="1000">👑 🔷1000</button></div></div><div class="v-live-economy-panel" data-role="live-economy-panel"></div><div class="v-live-exitmenu" data-role="live-exit-menu"><div class="v-live-exitcard"><h3>${own ? "退出或结束直播" : "退出直播间？"}</h3>${own ? '<button class="v-primary" data-action="hang-own-live">退出直播间</button><button class="v-danger" data-action="end-current-live">结束直播</button>' : '<button class="v-primary" data-action="leave-live">退出直播间</button><button class="v-danger" data-action="end-current-live">结束直播</button>'}<button class="v-cancel" data-action="close-live-exit">取消</button></div></div></div>`);
              renderLiveMoment();
              renderLiveChatLines();
              renderLiveHUD();
            };

            const renderLiveChatLines = () => {
              const host = q('[data-screen="live"] [data-role="live-chat-lines"]');
              if (!host) return;
              const rows = state.liveChat.slice(-40);
              const offset = Math.max(0, state.liveChat.length - rows.length);
              host.innerHTML = rows.map((line, index) => {
                const absoluteIndex = offset + index;
                const trId = `live-chat-${absoluteIndex}-${String(line.user || "viewer")}`;
                const translateTool = line.translation ? `<button class="v-translate-btn" data-action="toggle-translation" data-translation-target="${escapeHTML(trId)}">翻译</button>` : "";
                const translationBody = line.translation ? `<div class="v-translation" data-translation-id="${escapeHTML(trId)}" hidden>${escapeHTML(line.translation)}</div>` : "";
                return `<div class="v-chatline"><div class="v-social-avatar">${avatarHTML(line.avatar || initials(line.user || "V"), line.user || "V")}</div><div class="v-chatline-body"><div class="v-chatline-head">${escapeHTML(line.user)}${Number(line.tipCoin || 0) > 0 ? `<span class="v-chat-tip">打赏 🔷${Number(line.tipCoin).toLocaleString("zh-CN")}</span>` : ""}</div><div class="v-chatline-text">${escapeHTML(line.text)}</div><div class="v-live-chat-tools">${translateTool}<button data-action="delete-live-chat" data-chat-index="${absoluteIndex}">删除</button></div>${translationBody}</div></div>`;
              }).join("");
              const scroll = q('[data-screen="live"] [data-role="live-chat-scroll"]');
              if (scroll) requestAnimationFrame(() => { scroll.scrollTop = scroll.scrollHeight; });
            };

            const sendLiveChatOnly = async (textValue = "") => {
              const live = state.liveSession;
              if (!live) return "";
              const input = q('[data-screen="live"] [data-role="live-input"]');
              const textValueClean = String(textValue || input?.value || "").trim();
              if (!textValueClean) return "";
              const identity = state.identities.find(x => x.id === state.viewerIdentityId) || state.identities[0];
              state.liveChat.push({ user: identity?.handle || "@user", avatar: identity?.avatar || "U", text: textValueClean, translation: "", isUser: true });
              state.pendingLiveUserMessage = { liveId: String(live.id || "live"), text: textValueClean, at: Date.now() };
              if (input) input.value = "";
              await persist();
              renderLiveChatLines();
              return textValueClean;
            };

            const summonLive = async () => {
              const live = state.liveSession;
              if (!live) return;
              const input = q('[data-screen="live"] [data-role="live-input"]');
              const typed = String(input?.value || "").trim();
              let userText = "";
              if (typed) userText = await sendLiveChatOnly(typed);
              if (!userText && state.pendingLiveUserMessage && String(state.pendingLiveUserMessage.liveId || "") === String(live.id || "")) {
                userText = String(state.pendingLiveUserMessage.text || "");
              }
              state.pendingLiveUserMessage = null;
              await advanceLive({ fromUser: Boolean(userText), userText });
            };

            const deleteLiveChat = async (indexValue) => {
              const index = Number(indexValue);
              if (!Number.isInteger(index) || index < 0 || index >= state.liveChat.length) return;
              state.liveChat.splice(index, 1);
              await persist();
              renderLiveChatLines();
              toast("聊天室消息已删除");
            };

            const setHostInputMode = (mode) => {
              const screen = q('[data-screen="live"]');
              const normalized = mode === "action" ? "action" : "speech";
              screen?.querySelectorAll('[data-host-input-mode]').forEach(btn => btn.classList.toggle("is-active", btn.dataset.hostInputMode === normalized));
              const input = screen?.querySelector('[data-role="host-live-input"]');
              if (input) {
                input.dataset.mode = normalized;
                input.placeholder = normalized === "action" ? "输入你在镜头里的动作…" : "输入你在直播里说的话…";
              }
            };

            const sendHostStageInput = async () => {
              const live = state.liveSession;
              if (!live || !isOwnLiveSession(live)) return;
              const input = q('[data-screen="live"] [data-role="host-live-input"]');
              const text = String(input?.value || "").trim();
              if (!text) { toast("先输入说话或动作"); return; }
              const mode = String(input?.dataset.mode || "speech") === "action" ? "action" : "speech";
              const progress = getLiveProgress(live);
              const at = Date.now();
              progress.userStageEvent = { text, mode, at };
              pushLiveTimelineEvent(progress, {
                actorType: "user",
                actorId: String(live.ownerId || state.viewerIdentityId || "user"),
                actorName: String(live.name || "user"),
                action: mode === "action" ? text : "",
                speech: mode === "speech" ? text : "",
                translation: "",
                at
              });
              state.pendingOwnLiveInput = { liveId: String(live.id || "live"), text, mode, at };
              if (input) input.value = "";
              await persist();
              renderLiveMoment();
            };

            const summonHostLive = async () => {
              const live = state.liveSession;
              if (!live || !isOwnLiveSession(live)) return;
              const pending = state.pendingOwnLiveInput && String(state.pendingOwnLiveInput.liveId || "") === String(live.id || "") ? state.pendingOwnLiveInput : null;
              const text = pending ? String(pending.text || "") : "";
              state.pendingOwnLiveInput = null;
              await advanceLive({ fromUser: Boolean(text), userText: text });
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
              if (isOwnLiveSession(live)) {
                const message = String(userText || "").trim();
                if (fromUser && message) {
                  progress.seenUserStageEvents = safeArray(progress.seenUserStageEvents);
                  progress.seenUserStageEvents.push({ text: message, at: Date.now() });
                  progress.seenUserStageEvents = progress.seenUserStageEvents.slice(-12);
                  progress.lastSeenUserStageEvent = message;
                }
                const guests = getLiveGuests(live);
                if (guests.length) {
                  progress.participantEvents = { ...(progress.participantEvents || {}) };
                  const start = nextStep % guests.length;
                  const responderCount = guests.length >= 3 && nextStep % 3 === 0 ? 2 : 1;
                  for (let offset = 0; offset < responderCount; offset += 1) {
                    const guest = guests[(start + offset) % guests.length];
                    if (!guest) continue;
                    const action = live.mode === "same-room"
                      ? "在同一个镜头里注意到现场变化，稍微调整了姿势。"
                      : "看了一眼不断滚动的聊天室，又把注意力转回镜头。";
                    const event = {
                      actorType: "character",
                      actorId: String(guest.id),
                      actorName: String(guest.name || "嘉宾"),
                      action,
                      speech: String(next.text || ""),
                      translation: String(next.translation || ""),
                      at: Date.now()
                    };
                    progress.participantEvents[String(guest.id)] = event;
                    pushLiveTimelineEvent(progress, event);
                  }
                  progress.text = next.text;
                  progress.translation = next.translation;
                } else {
                  progress.text = next.text;
                  progress.translation = next.translation;
                }
              } else if (fromUser) {
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

              if (!isOwnLiveSession(live)) {
                pushLiveTimelineEvent(progress, {
                  actorType: "character",
                  actorId: String(live.id || "character"),
                  actorName: String(live.name || live.handle || "主播"),
                  action: "看了眼镜头和滚动的聊天室，顺手调整了一下手边的东西。",
                  speech: String(progress.text || ""),
                  translation: String(progress.translation || ""),
                  at: Date.now()
                });
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
              const tipCycle = [0, 20, 0, 50, 10, 0, 100, 0];
              const first = { ...chatPool[base], tipCoin: tipCycle[nextStep % tipCycle.length] || 0, at:Date.now() };
              const second = { ...chatPool[(base + 1) % chatPool.length], tipCoin: tipCycle[(nextStep + 3) % tipCycle.length] || 0, at:Date.now()+1 };
              state.liveChat.push(first, second);
              const stats = getLiveStats(live);
              stats.tipReceivedCoin = Number(stats.tipReceivedCoin || 0) + Number(first.tipCoin || 0) + Number(second.tipCoin || 0);
              if (nextStep % 3 === 0) {
                const giftSender = first.user || "viewer";
                const giftCoin = [30, 60, 120][nextStep % 3] || 30;
                stats.gifts.push({ user:giftSender, amount:giftCoin });
                stats.giftReceivedCoin = Number(stats.giftReceivedCoin || 0) + giftCoin;
                state.liveChat.push({ user:"系统", avatar:"🎁", text:`${giftSender} 送出礼物 · 🔷${giftCoin}`, translation:"", at:Date.now()+2 });
              }
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
              const mode = String(post.accessMode || "public");
              const age = String(post.ageRequirement || "none");
              const accessLabel = mode === "free" ? `免费订阅${age === "18+" ? " · 18+" : ""}` : mode === "paid" ? `付费订阅${age === "18+" ? " · 18+" : ""}` : (age === "18+" ? "公开 · 18+" : "");
              const accessClass = mode === "free" ? " is-free" : mode === "paid" ? " is-paid" : (age === "18+" ? " is-age" : "");
              openScreen("post", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="post">‹</button><div class="v-meta"><strong>${post.kind === "restricted" ? "限定内容" : "贴文"}</strong><div class="v-hint">${escapeHTML(post.name || "Vela Channel")} · ${escapeHTML(post.time || "刚刚")}</div></div></header><div class="v-subbody"><article class="v-card"><div class="v-social-head"><div class="v-social-avatar">${avatarHTML(post.avatar || "", post.name || "V")}</div><div class="v-social-copy"><div class="v-social-name">${escapeHTML(post.name || "Vela Channel")}</div><div class="v-social-handle">${escapeHTML(post.handle || "")}</div>${accessLabel ? `<span class="v-access-badge${accessClass}">${escapeHTML(accessLabel)}</span>` : ""}</div></div><div class="v-social-text">${escapeHTML(post.text || "")}</div>${translationHTML(trId, post.translation || "")}<div class="v-social-media">${imageHTML}</div><div class="v-social-actions"><button data-action="demo-like-post" data-post-id="${escapeHTML(post.id)}">♡ ${Number(post.likes || 0)}</button><button>◌ <span data-role="post-comment-count">${safeArray(state.postReplies?.[String(post.id)]).length}</span></button><button data-action="edit-post" data-post-id="${escapeHTML(post.id)}">编辑</button></div><div class="v-comment-list" data-role="post-comments"></div><div class="v-post-composer"><input data-role="post-comment-input" placeholder="写下评论…" maxlength="240"><button class="v-summon-mini" data-action="summon-post-replies" data-post-id="${escapeHTML(post.id)}" aria-label="召唤回复" title="召唤回复">✦</button><button data-action="send-post-comment" data-post-id="${escapeHTML(post.id)}">➤</button></div>${canDeletePost ? `<div class="v-post-footer-actions"><button class="v-action v-delete-soft" data-action="delete-community-post" data-post-id="${escapeHTML(post.id)}">删除贴文</button></div>` : ""}</article></div>`);
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

            const subscriptionProfileKey = (ownerType, id) => `${String(ownerType)}:${String(id)}`;

            const getSubscriptionProfile = (ownerType, id) => {
              const key = subscriptionProfileKey(ownerType, id);
              const entity = getProfileEntity(ownerType, id);
              const name = profileName(entity, ownerType);
              const current = state.subscriptionProfiles?.[key] || {};
              const normalized = {
                free: {
                  emoji: "🌊",
                  name: "支持者",
                  price: 0,
                  cover: "",
                  intro: "关注频道动态，也可以进入免费订阅社群。",
                  benefits: ["免费订阅社群", "订阅身份标识"],
                  communityName: `${name} · 免费社群`,
                  ...(current.free || {})
                },
                paid: {
                  emoji: "💎",
                  name: "会员",
                  coinPrice: 500,
                  cover: "",
                  intro: "支持喜欢的主播，并解锁付费订阅内容与社群。",
                  benefits: ["付费订阅社群", "付费订阅内容"],
                  communityName: `${name} · 会员社群`,
                  ...(current.paid || {})
                }
              };
              if (normalized.paid.coinPrice == null) {
                normalized.paid.coinPrice = current.paid?.price != null ? Math.max(1, Math.round(Number(current.paid.price || 0) * 10)) : 500;
              }
              normalized.paid.coinPrice = Math.max(1, Math.round(Number(normalized.paid.coinPrice || 500)));
              delete normalized.paid.price;
              state.subscriptionProfiles[key] = normalized;
              return normalized;
            };

            const renderMembershipCard = (ownerType, entity, tier, cfg, currentTier) => {
              const paid = tier === "paid";
              const cover = isImageURL(cfg.cover || "") ? `<img src="${escapeHTML(cfg.cover)}" alt="">` : escapeHTML(cfg.emoji || (paid ? "💎" : "🌊"));
              const benefits = safeArray(cfg.benefits).filter(Boolean).map(item => `<div>${escapeHTML(item)}</div>`).join("");
              let button = "";
              if (ownerType === "channel") {
                const isCurrent = paid ? currentTier === "paid" : (currentTier === "free" || currentTier === "paid");
                const label = paid ? (currentTier === "paid" ? "当前订阅" : currentTier === "free" ? "升级付费" : "付费订阅") : (isCurrent ? "已解锁" : "免费订阅");
                button = `<button class="v-membership-button ${isCurrent ? "is-current" : ""}" data-action="subscribe-channel" data-channel-id="${escapeHTML(entity.id)}" data-tier="${tier}">${label}</button>`;
              }
              return `<article class="v-membership-card ${paid ? "is-paid" : ""}"><div class="v-membership-cover">${cover}</div><div class="v-membership-body"><div class="v-membership-title">${escapeHTML(cfg.name || (paid ? "会员" : "支持者"))}</div><div class="v-membership-price">${paid ? `🔷${Number(cfg.coinPrice || 0).toLocaleString("zh-CN")}` : "免费"}${paid ? "<small>/月</small>" : ""}</div>${button}<div class="v-membership-intro">${escapeHTML(cfg.intro || "")}</div>${benefits ? `<div class="v-membership-benefits">${benefits}</div>` : ""}<div class="v-membership-community">对应群聊<b>${escapeHTML(cfg.communityName || "订阅社群")}</b></div></div></article>`;
            };

            const renderProfileTab = (ownerType, id, tab = "activity") => {
              const entity = getProfileEntity(ownerType, id);
              const host = q('[data-screen="profile"] [data-role="profile-tab-body"]');
              if (!entity || !host) return;
              if (tab === "live" || tab === "posts") tab = "activity";
              qa('[data-screen="profile"] [data-profile-tab]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.profileTab === tab));

              if (tab === "activity") {
                const blocks = [];

                if (entity.scheduledLive) {
                  const scheduledInner = `<div class="v-kicker">置顶 · 预约直播</div><div class="v-live-title">${escapeHTML(entity.scheduledLive.title || "预约直播")}</div><div class="v-sub" style="margin-top:6px">${escapeHTML(entity.scheduledLive.dateText || "未设置时间")}${entity.scheduledLive.sourceType ? ` · 来自${entity.scheduledLive.sourceType === "business" ? "商务合作" : "直播邀约"}` : ""}</div>`;
                  const manage = ownerType === "identity"
                    ? `<div class="v-inline-manage"><button data-action="create-scheduled-live" data-identity-id="${escapeHTML(entity.id)}">编辑</button><button class="is-danger" data-action="cancel-scheduled-live" data-identity-id="${escapeHTML(entity.id)}">删除</button></div>`
                    : "";
                  blocks.push(`<article class="v-activity-pin is-scheduled">${ownerType === "identity" ? `<button data-action="open-scheduled-live" data-identity-id="${escapeHTML(entity.id)}">${scheduledInner}</button>` : scheduledInner}${manage}</article>`);
                }

                if (ownerType === "identity" && entity.activeLive) {
                  const active = entity.activeLive;
                  const stats = getLiveStats(active);
                  blocks.push(`<article class="v-activity-pin is-live"><button data-action="open-own-profile-live" data-identity-id="${escapeHTML(entity.id)}"><div class="v-kicker">正在直播</div><div class="v-live-title">${escapeHTML(active.title || "正在直播")}</div><div class="v-sub" style="margin-top:6px">${formatViewers(stats.currentViewers || 0)} 人正在观看 · ${escapeHTML(active.category || "公开直播")}</div></button><div class="v-inline-manage"><button data-action="open-own-profile-live" data-identity-id="${escapeHTML(entity.id)}">进入直播</button></div></article>`);
                } else if (entity.live) {
                  blocks.push(`<article class="v-activity-pin is-live"><button data-action="open-live" data-live-id="${escapeHTML(entity.id)}"><div class="v-kicker">正在直播</div><div class="v-live-title">${escapeHTML(entity.title || "正在直播")}</div><div class="v-sub" style="margin-top:6px">${formatViewers(entity.viewers || 0)} 人正在观看</div></button></article>`);
                }

                const ownPosts = state.communityPosts.filter(p => String(p.ownerType || "") === String(ownerType) && String(p.ownerId || "") === String(id));
                const sample = ownerType === "channel" ? getHomeSamplePost() : null;
                const postItems = [sample, ...ownPosts].filter(Boolean);
                if (postItems.length) {
                  const cards = postItems.map(post => {
                    const isOwnedUserPost = ownerType === "identity"
                      && String(post.ownerType || "identity") === "identity"
                      && String(post.ownerId || id) === String(state.viewerIdentityId || "");
                    return renderSocialPostCard(
                      { ...post, comments: safeArray(state.postReplies?.[String(post.id)]).length },
                      { canDelete: isOwnedUserPost }
                    );
                  }).join("");
                  blocks.push(`<div class="v-activity-posts">${cards}</div>`);
                }

                host.innerHTML = blocks.length
                  ? `<div class="v-activity-stack">${blocks.join("")}</div>`
                  : `<div class="v-profile-empty">这里还没有发布过动态。</div>`;
                return;
              }

              if (tab === "replays") {
                const replayItems = state.liveReplays.filter(item => String(item.ownerType || "") === String(ownerType) && String(item.ownerId || "") === String(id));
                host.innerHTML = replayItems.length ? replayItems.map(item => `<article class="v-replay-card"><button style="all:unset;display:block;width:100%;cursor:pointer" data-action="open-replay" data-replay-id="${escapeHTML(item.id)}"><div class="v-name">${escapeHTML(item.title || "直播回放")}</div><div class="v-sub">${escapeHTML(item.endedText || "刚刚结束")} · ${escapeHTML(item.topic || "直播")}</div><div class="v-replay-cover">${isImageURL(item.cover || "") ? `<img src="${escapeHTML(item.cover)}" alt="">` : "▶"}</div></button><div class="v-replay-actions"><span>最高 ${formatViewers(item.peakViewers || 0)} 人观看 · ${safeArray(item.participants).length + 1} 人出镜</span><button data-action="delete-replay" data-replay-id="${escapeHTML(item.id)}">删除回放</button></div></article>`).join("") : `<div class="v-profile-empty">还没有直播回放。</div>`;
                return;
              }

              if (ownerType === "identity") {
                const subscribed = Object.entries(state.subscriptions || {})
                  .filter(([, tier]) => tier === "free" || tier === "paid")
                  .map(([channelId, tier]) => {
                    const channel = state.channels.find(ch => String(ch.id) === String(channelId));
                    return channel ? { channel, tier } : null;
                  })
                  .filter(Boolean);

                const cards = subscribed.map(({ channel, tier }) => {
                  const cfg = getSubscriptionProfile("channel", channel.id);
                  const tierCfg = cfg[tier];
                  const paid = tier === "paid";
                  const label = paid
                    ? `${escapeHTML(tierCfg.emoji || "💎")} ${escapeHTML(tierCfg.name || "付费订阅")}`
                    : `${escapeHTML(tierCfg.emoji || "🌊")} ${escapeHTML(tierCfg.name || "免费订阅")}`;
                  return `<article class="v-my-sub-card"><div class="v-my-sub-head"><div class="v-social-avatar">${avatarHTML(channel.avatar || "", channel.name || "V")}</div><div class="v-meta"><div class="v-my-sub-title">${escapeHTML(channel.name || channel.handle || "频道")}</div><div class="v-my-sub-handle">${escapeHTML(channel.handle || "")}</div></div><span class="v-my-sub-tier ${paid ? "is-paid" : "is-free"}">${label}</span></div><div class="v-my-sub-detail"><div>当前方案 <b>${escapeHTML(tierCfg.name || (paid ? "付费订阅" : "免费订阅"))}${paid ? ` · 🔷${Number(tierCfg.coinPrice || 0).toLocaleString("zh-CN")}/月` : ""}</b></div><div>对应社群 <b>${escapeHTML(tierCfg.communityName || "订阅社群")}</b></div></div><div class="v-my-sub-actions"><button class="v-continue-sub" data-action="continue-subscription" data-channel-id="${escapeHTML(channel.id)}">继续订阅</button><button class="v-cancel-sub" data-action="cancel-subscription" data-channel-id="${escapeHTML(channel.id)}">取消订阅</button></div></article>`;
                }).join("");

                host.innerHTML = `<div class="v-own-subscription-tools"><div><h3>我的订阅</h3><p>这里显示你已经订阅的主播。</p></div><button data-action="open-subscription-settings" data-owner-type="identity" data-owner-id="${escapeHTML(id)}">我的频道方案</button></div>${cards ? `<div class="v-my-subscriptions">${cards}</div>` : `<div class="v-profile-empty">还没有订阅任何主播。<br>去喜欢的主播主页「订阅」里选择方案。</div>`}`;
                return;
              }

              const cfg = getSubscriptionProfile(ownerType, id);
              const currentTier = state.subscriptions?.[String(id)] || "none";
              const canEdit = Boolean(entity.sourceCharacterId);
              let currentText = "暂未订阅";
              let currentNote = "选择上面的免费或付费方案后，对应社群会自动出现在 DM → 社群。";
              if (currentTier === "paid") {
                currentText = `${cfg.paid.emoji || "💎"} ${cfg.paid.name || "付费订阅"}`;
                currentNote = `你已加入 ${cfg.paid.communityName || "付费订阅社群"}，同时也可以进入免费社群。`;
              } else if (currentTier === "free") {
                currentText = `${cfg.free.emoji || "🌊"} ${cfg.free.name || "免费订阅"}`;
                currentNote = `你已加入 ${cfg.free.communityName || "免费订阅社群"}。`;
              }
              host.innerHTML = `<div class="v-subscription-head"><div><h3>订阅</h3><p>选择这个主播的订阅方案。</p></div>${canEdit ? `<button data-action="open-subscription-settings" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(id)}">编辑方案</button>` : ""}</div><div class="v-membership-grid">${renderMembershipCard(ownerType, entity, "free", cfg.free, currentTier)}${renderMembershipCard(ownerType, entity, "paid", cfg.paid, currentTier)}</div><div class="v-your-membership"><div class="v-your-membership-label">你的订阅</div><div class="v-your-membership-value">${escapeHTML(currentText)}</div><div class="v-your-membership-note">${escapeHTML(currentNote)}</div></div>`;
            };

            const openCommunityPostEditor = (ownerType, ownerId) => {
              const entity = getProfileEntity(ownerType, ownerId);
              if (!entity) return;
              const sheet = q('[data-role="publish-sheet"]');
              const host = q('[data-role="publish-sheet-content"]');
              if (!sheet || !host) return;
              host.innerHTML = `<div class="v-publish-sheet-title"><h3>发布贴文</h3><button data-action="render-publish-menu">‹</button></div><div class="v-ios-publish"><div class="v-ios-media-card"><div class="v-ios-media-preview" data-role="post-image-preview"><div class="v-ios-media-placeholder"><b>＋</b><span>可选配图</span></div></div><div class="v-ios-media-actions"><label class="v-ios-media-picker">▣ 选择照片<input type="file" accept="image/*" data-post-image-file></label><button class="v-ios-media-remove" data-action="clear-post-image">移除</button></div><input type="hidden" data-post-field="image" value=""><div class="v-ios-url"><label>图片 URL（备用）</label><input data-post-image-url placeholder="https://..."></div></div><div class="v-ios-group"><div class="v-field"><label>贴文内容</label><textarea data-post-field="text" maxlength="1000" placeholder="写点什么……"></textarea></div><div class="v-access-row"><div class="v-field"><label>可见范围</label><select data-post-field="accessMode"><option value="public">公开</option><option value="free">免费订阅</option><option value="paid">付费订阅</option></select></div><div class="v-field"><label>年龄限制</label><select data-post-field="ageRequirement"><option value="none">无限制</option><option value="18+">18+</option></select></div></div></div><div class="v-publish-note">发布后会同步到当前主页「贴文」和首页内容流。</div></div><div class="v-publish-sheet-actions"><button class="v-action light" data-action="render-publish-menu">返回</button><button class="v-action" data-action="save-community-post" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(ownerId)}">发布</button></div>`;
              sheet.classList.add("is-open");
            };

            const saveCommunityPost = async (ownerType, ownerId) => {
              const screen = q('[data-role="publish-sheet"]');
              const text = String(screen?.querySelector('[data-post-field="text"]')?.value || "").trim();
              const image = String(screen?.querySelector('[data-post-field="image"]')?.value || "").trim();
              const accessModeRaw = String(screen?.querySelector('[data-post-field="accessMode"]')?.value || "public");
              const accessMode = ["public","free","paid"].includes(accessModeRaw) ? accessModeRaw : "public";
              const ageRequirement = String(screen?.querySelector('[data-post-field="ageRequirement"]')?.value || "none") === "18+" ? "18+" : "none";
              if (!text) { toast("先写一点贴文内容"); return; }
              const id = `post-${Date.now().toString(36)}`;
              state.communityPosts.unshift({ id, ownerType, ownerId, kind: "post", accessMode, ageRequirement, text, image, translation: "", time: "刚刚", likes: 0 });
              state.postReplies[id] = [];
              await persist();
              q('[data-role="publish-sheet"]')?.classList.remove("is-open");
              openProfile(ownerType, ownerId);
              renderProfileTab(ownerType, ownerId, "activity");
              toast("贴文已发布，并关联到当前主页");
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
              renderProfileTab(removed.ownerType || "identity", removed.ownerId || state.viewerIdentityId, "activity");
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


            const readLocalImage = (file) => new Promise((resolve, reject) => {
              if (!file) return resolve("");
              if (!String(file.type || "").startsWith("image/")) return reject(new Error("请选择图片文件"));
              if (Number(file.size || 0) > 8 * 1024 * 1024) return reject(new Error("图片太大，请选择 8MB 以内的图片"));
              const reader = new FileReader();
              reader.onload = () => resolve(String(reader.result || ""));
              reader.onerror = () => reject(new Error("读取图片失败"));
              reader.readAsDataURL(file);
            });

            const setPublishImagePreview = (kind, value) => {
              const selector = kind === "live" ? '[data-role="live-cover-preview"]' : '[data-role="post-image-preview"]';
              const preview = q(`[data-role="publish-sheet"] ${selector}`);
              if (!preview) return;
              preview.innerHTML = isImageURL(value) ? `<img src="${escapeHTML(value)}" alt="">` : `<div class="v-ios-media-placeholder"><b>＋</b><span>${kind === "live" ? "直播封面" : "可选配图"}</span></div>`;
            };

            const renderPublishMenu = () => {
              const host = q('[data-role="publish-sheet-content"]');
              if (!host) return;
              host.innerHTML = `<div class="v-publish-sheet-title"><h3>发布</h3><button data-action="close-publish-sheet">×</button></div><div class="v-create-grid"><button class="v-create" data-action="open-live-publisher"><b>●</b>开始直播</button><button class="v-create" data-action="open-publish-post"><b>▣</b>发布贴文</button></div><p class="v-hint">限定不再是单独内容类型。直播和贴文都可以设置为公开、免费订阅或付费订阅，并单独设置年龄限制。</p>`;
            };

            const openLivePublisher = () => {
              const sheet = q('[data-role="publish-sheet"]');
              const host = q('[data-role="publish-sheet-content"]');
              const identity = state.identities.find(x => String(x.id) === String(state.viewerIdentityId)) || state.identities[0];
              if (!identity || !host) return;
              const roles = state.channels.filter(ch => ch.kind === "character" || ch.sourceCharacterId).map(ch => `<option value="${escapeHTML(ch.id)}">${escapeHTML(ch.name || ch.handle || "角色")}</option>`).join("");
              host.innerHTML = `<div class="v-publish-sheet-title"><h3>开始直播</h3><button data-action="render-publish-menu">‹</button></div><div class="v-ios-publish"><div class="v-ios-media-card"><div class="v-ios-media-preview" data-role="live-cover-preview"><div class="v-ios-media-placeholder"><b>＋</b><span>直播封面</span></div></div><div class="v-ios-media-actions"><label class="v-ios-media-picker">▣ 选择照片<input type="file" accept="image/*" data-live-cover-file></label><button class="v-ios-media-remove" data-action="clear-live-cover">移除</button></div><input type="hidden" data-live-publish-field="cover" value=""><div class="v-ios-url"><label>封面 URL（备用）</label><input data-live-cover-url placeholder="https://..."></div></div><div class="v-ios-group"><div class="v-field"><label>直播标题</label><input data-live-publish-field="title" maxlength="90" placeholder="给这场直播起个标题"></div><div class="v-field"><label>直播主题</label><textarea data-live-publish-field="topic" maxlength="500" placeholder="今天准备播什么、聊什么"></textarea></div><div class="v-field"><label>首位联动嘉宾</label><select data-live-publish-field="cohostId"><option value="">无 · 单人直播</option>${roles}</select></div><div class="v-field"><label>联动方式</label><select data-live-publish-field="cohostMode"><option value="online">线上联播 · 分屏</option><option value="inperson">线下同镜 · 同一画面</option></select></div><div class="v-access-row"><div class="v-field"><label>观看权限</label><select data-live-publish-field="accessMode"><option value="public">公开</option><option value="free">免费订阅</option><option value="paid">付费订阅</option></select></div><div class="v-field"><label>年龄限制</label><select data-live-publish-field="ageRequirement"><option value="none">无限制</option><option value="18+">18+</option></select></div></div></div><div class="v-publish-note">开播后仍可继续邀请嘉宾；同时出镜最多 4 人（含 user）。</div></div><div class="v-publish-sheet-actions"><button class="v-action light" data-action="render-publish-menu">返回</button><button class="v-action primary-red" data-action="start-prepared-live">开始直播</button></div>`;
              sheet?.classList.add("is-open");
            };

            const startPreparedLive = async () => {
              const identity = state.identities.find(x => String(x.id) === String(state.viewerIdentityId)) || state.identities[0];
              if (!identity) return;
              const screen = q('[data-role="publish-sheet"]');
              const get = (name) => String(screen?.querySelector(`[data-live-publish-field="${name}"]`)?.value || "").trim();
              const title = get("title");
              const topic = get("topic");
              const cover = get("cover");
              const cohostId = get("cohostId");
              const cohostMode = get("cohostMode") === "inperson" ? "inperson" : "online";
              const accessMode = ["public","free","paid"].includes(get("accessMode")) ? get("accessMode") : "public";
              const ageRequirement = get("ageRequirement") === "18+" ? "18+" : "none";
              if (!title || !topic) { toast("先填写直播标题和主题"); return; }
              const cohost = state.channels.find(ch => String(ch.id) === cohostId) || null;
              const live = {
                id: `own-live-${identity.id}-${Date.now().toString(36)}`,
                ownerType: "identity",
                ownerId: identity.id,
                isOwn: true,
                name: identity.displayName || "我的频道",
                handle: identity.handle || "@me",
                avatar: identity.avatar || "U",
                followers: Number(identity.followers || 0),
                title,
                category: topic,
                cover,
                viewers: 0,
                cohostId: cohost?.id || "",
                cohostName: cohost?.name || "",
                cohostHandle: cohost?.handle || "",
                cohostAvatar: cohost?.avatar || "",
                cohostMode: cohost ? cohostMode : "",
                mode: cohost ? (cohostMode === "inperson" ? "same-room" : "remote") : "solo",
                participants: cohost ? [{ id: cohost.id, name: cohost.name || cohost.handle || "嘉宾", handle: cohost.handle || "", avatar: cohost.avatar || initials(cohost.name || "嘉宾") }] : [],
                accessMode,
                ageRequirement,
                startedAt: Date.now()
              };
              identity.live = true;
              identity.title = title;
              identity.activeLive = { ...live };
              identity.scheduledLive = null;
              pushCommunityBotEvent("identity", identity.id, "live", { title: live.title, text: "直播已经开始。" });
              state.liveProgress[live.id] = undefined;
              state.liveStats[live.id] = undefined;
              state.liveChat = [];
              state.pendingLiveUserMessage = null;
              state.pendingOwnLiveInput = null;
              await persist();
              q('[data-role="publish-sheet"]')?.classList.remove("is-open");
              renderHome();
              renderChannels();
              openLive(live);
            };

            const openInviteGuest = () => {
              const live = state.liveSession;
              if (!live || !isOwnLiveSession(live)) return;
              const guests = getLiveGuests(live);
              if (guests.length >= 3) { toast("这场直播已经有 4 人同时出镜"); return; }
              const used = new Set(guests.map(g => String(g.id)));
              const roles = state.channels.filter(ch => (ch.kind === "character" || ch.sourceCharacterId) && !used.has(String(ch.id)));
              const rows = roles.map(ch => `<option value="${escapeHTML(ch.id)}">${escapeHTML(ch.name || ch.handle || "角色")}</option>`).join("");
              const fixedMode = guests.length ? (live.mode === "same-room" ? "inperson" : "online") : "";
              openScreen("invite-guest", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="invite-guest">‹</button><div class="v-meta"><strong>邀请嘉宾</strong><div class="v-hint">当前 ${guests.length + 1}/4 人</div></div><button class="v-head-action" data-action="confirm-invite-guest">邀请</button></header><div class="v-subbody"><div class="v-card"><div class="v-editform"><div class="v-field"><label>选择角色</label><select data-invite-field="cohostId"><option value="">请选择</option>${rows}</select></div><div class="v-field"><label>联动方式</label><select data-invite-field="cohostMode" ${fixedMode ? "disabled" : ""}><option value="online" ${fixedMode === "online" ? "selected" : ""}>线上连麦</option><option value="inperson" ${fixedMode === "inperson" ? "selected" : ""}>同镜直播 / 一起线下播</option></select></div></div><p class="v-hint">${fixedMode ? "已有嘉宾后，本场联播方式保持不变。" : "首位嘉宾会决定这场直播是线上分屏还是线下同镜。"} 同时出镜最多 4 人。</p></div></div>`);
            };

            const confirmInviteGuest = async () => {
              const live = state.liveSession;
              if (!live || !isOwnLiveSession(live)) return;
              const screen = q('[data-screen="invite-guest"]');
              const cohostId = String(screen?.querySelector('[data-invite-field="cohostId"]')?.value || "");
              const selectedMode = String(screen?.querySelector('[data-invite-field="cohostMode"]')?.value || "online");
              const cohost = state.channels.find(ch => String(ch.id) === cohostId);
              if (!cohost) { toast("先选择一个角色"); return; }
              const guests = getLiveGuests(live);
              if (guests.some(g => String(g.id) === String(cohost.id))) { toast("这个角色已经在直播里"); return; }
              if (guests.length >= 3) { toast("同时出镜最多 4 人"); return; }
              const nextMode = guests.length ? live.mode : (selectedMode === "inperson" ? "same-room" : "remote");
              const nextGuest = { id: cohost.id, name: cohost.name || cohost.handle || "嘉宾", handle: cohost.handle || "", avatar: cohost.avatar || initials(cohost.name || "嘉宾") };
              live.participants = [...guests, nextGuest].slice(0, 3);
              live.mode = nextMode;
              live.cohostMode = nextMode === "same-room" ? "inperson" : "online";
              const first = live.participants[0];
              live.cohostId = first?.id || "";
              live.cohostName = first?.name || "";
              live.cohostHandle = first?.handle || "";
              live.cohostAvatar = first?.avatar || "";
              const identity = state.identities.find(x => String(x.id) === String(live.ownerId || state.viewerIdentityId));
              if (identity?.activeLive) identity.activeLive = { ...identity.activeLive, participants: live.participants.map(item => ({ ...item })), cohostId: live.cohostId, cohostName: live.cohostName, cohostHandle: live.cohostHandle, cohostAvatar: live.cohostAvatar, cohostMode: live.cohostMode, mode: live.mode };
              await persist();
              closeScreen("invite-guest");
              openLive(live);
              toast(`嘉宾已加入 · 当前 ${live.participants.length + 1}/4 人`);
            };

            const openRestrictedPublisher = () => {
              q('[data-role="publish-sheet"]')?.classList.remove("is-open");
              const identity = state.identities.find(x => String(x.id) === String(state.viewerIdentityId)) || state.identities[0];
              if (!identity) return;
              openScreen("restricted-editor", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="restricted-editor">‹</button><div class="v-meta"><strong>限定内容</strong><div class="v-hint">${escapeHTML(identity.displayName || "我的频道")}</div></div><button class="v-head-action" data-action="save-restricted-content">发布</button></header><div class="v-subbody"><div class="v-card"><div class="v-editform"><div class="v-field"><label>标题</label><input data-restricted-field="title" maxlength="90" placeholder="限定内容标题"></div><div class="v-field"><label>正文</label><textarea data-restricted-field="text" maxlength="1500" placeholder="写下这条限定内容……"></textarea></div><div class="v-field"><label>配图 URL（可留空）</label><input data-restricted-field="image" placeholder="https://..."></div><div class="v-field"><label>查看条件</label><select data-restricted-field="accessMode"><option value="subscribers">订阅可见</option><option value="subscribers-age">订阅 + 年龄限制</option></select></div></div><div class="v-publish-note" style="margin-top:12px">这里先只做查看条件和主页展示，不限定具体内容类型。</div></div></div>`);
            };

            const saveRestrictedContent = async () => {
              const identity = state.identities.find(x => String(x.id) === String(state.viewerIdentityId)) || state.identities[0];
              if (!identity) return;
              const screen = q('[data-screen="restricted-editor"]');
              const title = String(screen?.querySelector('[data-restricted-field="title"]')?.value || "").trim();
              const body = String(screen?.querySelector('[data-restricted-field="text"]')?.value || "").trim();
              const image = String(screen?.querySelector('[data-restricted-field="image"]')?.value || "").trim();
              const accessMode = String(screen?.querySelector('[data-restricted-field="accessMode"]')?.value || "subscribers");
              if (!title || !body) { toast("先填写标题和正文"); return; }
              const id = `restricted-${Date.now().toString(36)}`;
              state.communityPosts.unshift({
                id, ownerType: "identity", ownerId: identity.id, kind: "restricted",
                accessMode: accessMode === "subscribers-age" ? "subscribers-age" : "subscribers",
                text: `${title}\n${body}`, restrictedTitle: title, image, translation: "", time: "刚刚", likes: 0
              });
              state.postReplies[id] = [];
              await persist();
              closeScreen("restricted-editor");
              openProfile("identity", identity.id);
              renderProfileTab("identity", identity.id, "activity");
              toast("限定内容已发布到主页");
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
              renderProfileTab("identity", identity.id, "activity");
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
              const messageButton = ownerType === "channel" ? `<button class="v-profile-message" data-action="message-channel" data-channel-id="${escapeHTML(entity.id)}">私信</button>` : "";
              openScreen("profile", `<div class="v-profile-shell"><header class="v-subhead"><button data-action="close-screen" data-screen-name="profile">‹</button><div class="v-meta"><strong>${escapeHTML(name)}</strong><div class="v-hint">${ownerType === "identity" ? "我的 Vela 主页" : "角色频道主页"}</div></div><button class="v-head-action" data-action="edit-profile" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">编辑主页</button></header><div class="v-profile-banner">${bannerHTML}</div><div class="v-profile-info"><div class="v-profile-avatar ${entity.live || entity.activeLive ? "is-live-profile" : ""}">${avatarHTML(entity.avatar || "", name)}</div><div class="v-profile-main"><div class="v-profile-maincopy"><h2>${escapeHTML(name)}</h2><div class="v-profile-handle">${escapeHTML(handle)}</div></div>${messageButton}</div><div class="v-profile-stats"><span><b>${Number(entity.followers || 0).toLocaleString("zh-CN")}</b> 粉丝</span><span><b>${Number(entity.following || 0).toLocaleString("zh-CN")}</b> 关注</span></div>${entity.bio ? `<div class="v-profile-bio">${escapeHTML(entity.bio)}</div>` : ""}${entity.sourceCharacterId ? `<div class="v-linkstatus"><span class="v-dot on"></span>已关联 Roche 角色</div>` : ""}</div><div class="v-profile-tabs"><button class="is-active" data-action="profile-tab" data-profile-tab="activity" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">动态</button><button data-action="profile-tab" data-profile-tab="replays" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">回放</button><button data-action="profile-tab" data-profile-tab="subscriptions" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(entity.id)}">订阅</button></div><div class="v-profile-tabbody" data-role="profile-tab-body"></div></div>`);
              renderProfileTab(ownerType, entity.id, "activity");
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
                ${ownerType === "channel" ? `<div class="v-card"><b>直播习惯</b><p class="v-hint">这是角色频道的直播习惯提示。后面 AI 决定什么时候开播、播多久、何时自然结束时会参考这里。</p><div class="v-editform"><div class="v-live-habit-grid"><div class="v-field"><label>通常直播时长</label><select data-edit-field="liveDurationMode">${opt("irregular",String(entity.liveDurationMode || "irregular"),"不定时")}${opt("30m",String(entity.liveDurationMode || "irregular"),"通常约 30 分钟")}${opt("60m",String(entity.liveDurationMode || "irregular"),"通常约 1 小时")}${opt("120m",String(entity.liveDurationMode || "irregular"),"通常约 2 小时")}${opt("custom",String(entity.liveDurationMode || "irregular"),"自定义")}</select></div><div class="v-field"><label>角色自主程度</label><select data-edit-field="liveAutonomy">${opt("character",String(entity.liveAutonomy || "flexible"),"主要由角色自己决定")}${opt("flexible",String(entity.liveAutonomy || "flexible"),"参考习惯但灵活")}${opt("user",String(entity.liveAutonomy || "flexible"),"主要由 user 控制")}</select></div></div><div class="v-field"><label>自定义时长 / 补充</label><input data-edit-field="liveDurationText" value="${escapeHTML(entity.liveDurationText || "")}" placeholder="例如：通常 1～2 小时，聊得开心会延长"></div><div class="v-field"><label>习惯直播时间</label><textarea data-edit-field="liveSchedule" maxlength="500" placeholder="例如：周五、周六 22:00–01:00；工作日深夜偶尔播">${escapeHTML(entity.liveSchedule || "")}</textarea></div></div></div>` : ""}
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
              if (ownerType === "channel") {
                entity.liveDurationMode = ["irregular","30m","60m","120m","custom"].includes(get("liveDurationMode")) ? get("liveDurationMode") : "irregular";
                entity.liveDurationText = String(get("liveDurationText") || "").trim();
                entity.liveSchedule = String(get("liveSchedule") || "").trim();
                entity.liveAutonomy = ["character","flexible","user"].includes(get("liveAutonomy")) ? get("liveAutonomy") : "flexible";
              }
              if (ownerType === "identity") entity.isAnonymous = entity.identityVisibility === "hidden";
              if (ownerType === "channel") entity.profileCustomized = true;
              await persist();
              mountMarkup(root, state);
              rerender();
              switchPage(state.activePage || "home");
              openProfile(ownerType, id);
              toast("主页已保存");
            };

            const openReplayDetail = (replayId) => {
              const replay = state.liveReplays.find(item => String(item.id) === String(replayId));
              if (!replay) return;
              const timeline = safeArray(replay.timeline);
              const chat = safeArray(replay.chat);
              const participants = safeArray(replay.participants);
              const modeLabel = replay.mode === "remote" ? "线上联播" : replay.mode === "same-room" ? "线下同镜" : "单人直播";
              const eventHTML = timeline.length ? timeline.map((rawEvent, index) => {
                const event = normalizeLiveTimelineEvent(rawEvent);
                const trId = `replay-event-${String(replay.id)}-${index}`;
                const actor = String(event.actorName || (event.actorType === "user" ? "user" : "角色"));
                return `<div class="v-replay-event"><div class="v-live-time-head"><span class="v-live-time-pill">${escapeHTML(formatLiveElapsed(event.at, replay))}</span><span class="v-live-time-actor" style="color:var(--v-text)">${escapeHTML(actor)}</span></div>${event.action ? `<div class="v-live-time-action" style="color:var(--v-muted)">${escapeHTML(event.action)}</div>` : ""}${event.speech ? `<div class="v-live-time-speech" style="color:var(--v-text)">${escapeHTML(event.speech)}</div>${translationHTML(trId, event.translation || "")}` : ""}</div>`;
              }).join("") : `<div class="v-profile-empty">这场回放还没有保存逐轮内容。</div>`;
              const chatHTML = chat.length ? chat.map((line, index) => {
                const trId = `replay-chat-${String(replay.id)}-${index}`;
                return `<div class="v-chatline"><div class="v-social-avatar">${avatarHTML(line.avatar || initials(line.user || "V"), line.user || "V")}</div><div class="v-chatline-body"><div class="v-chatline-head">${escapeHTML(line.user || "viewer")}</div><div class="v-chatline-text">${escapeHTML(line.text || "")}</div>${translationHTML(trId, line.translation || "")}</div></div>`;
              }).join("") : `<div class="v-profile-empty">这场回放没有保存聊天室内容。</div>`;
              openScreen("replay", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="replay">‹</button><div class="v-meta"><strong>直播回放</strong><div class="v-hint">${escapeHTML(replay.endedText || "已结束")}</div></div><button class="v-head-action" style="color:var(--v-red)!important" data-action="delete-replay" data-replay-id="${escapeHTML(replay.id)}">删除</button></header><div class="v-subbody"><div class="v-replay-summary"><div class="v-name">${escapeHTML(replay.title || "直播回放")}</div><div class="v-sub" style="margin-top:4px">${escapeHTML(replay.topic || "直播")} · ${escapeHTML(modeLabel)} · 最高 ${formatViewers(replay.peakViewers || 0)} 人观看</div>${participants.length ? `<div class="v-sub" style="margin-top:5px">参与：${escapeHTML(participants.map(p => p.name || "嘉宾").join("、"))}</div>` : ""}</div><div class="v-title" style="font-size:15px;margin-top:4px">直播内容</div><div class="v-replay-timeline">${eventHTML}</div><div class="v-title" style="font-size:15px;margin-top:14px">聊天室</div><div class="v-replay-chat">${chatHTML}</div></div>`);
            };

            const deleteReplay = async (replayId) => {
              const index = state.liveReplays.findIndex(item => String(item.id) === String(replayId));
              if (index < 0) return;
              if (typeof window.confirm === "function" && !window.confirm("删除这条直播回放？")) return;
              const removed = state.liveReplays.splice(index, 1)[0];
              await persist();
              if (q('[data-screen="replay"]')?.classList.contains("is-open")) closeScreen("replay");
              const profile = q('[data-screen="profile"]');
              if (profile?.classList.contains("is-open")) renderProfileTab(removed.ownerType || "identity", removed.ownerId || state.viewerIdentityId, "replays");
              toast("回放已删除");
            };

            const endCurrentLive = async () => {
              const live = state.liveSession;
              if (!live) return;
              const stats = getLiveStats(live);
              stats.ended = true;
              stats.endedAt = Date.now();
              let replayOwnerType = "";
              let replayOwnerId = "";
              const own = isOwnLiveSession(live);
              const userEligible = own || Boolean(live.userParticipant);
              const guests = getLiveGuests(live);
              const collab = Boolean(guests.length || live.userParticipant);
              const userShare = userEligible ? (collab ? 0.5 : 1) : 0;

              if (own) {
                const identity = state.identities.find(x => String(x.id) === String(live.ownerId || state.viewerIdentityId));
                if (identity) {
                  identity.live = false;
                  identity.activeLive = null;
                  replayOwnerType = "identity";
                  replayOwnerId = identity.id;
                }
              } else {
                const channel = state.channels.find(x => String(x.id) === String(live.id) || String(x.id) === String(live.ownerId || ""));
                if (channel) {
                  channel.live = false;
                  channel.viewers = 0;
                  replayOwnerType = "channel";
                  replayOwnerId = channel.id;
                }
                const rec = state.recommendedLives.find(x => String(x.id) === String(live.id));
                if (rec) rec.live = false;
              }

              const tipCoin = Math.max(0, Math.round(Number(stats.tipReceivedCoin || 0)));
              const giftCoin = Math.max(0, Math.round(Number(stats.giftReceivedCoin || safeArray(stats.gifts).reduce((sum,item) => sum + Number(item.amount || 0), 0))));
              const totalCoin = tipCoin + giftCoin;
              const ad = stats.ad || live.ad || live.business || null;
              const businessCashCNY = Math.max(0, Number(ad?.cashAmountCNY || 0));
              const userCoin = Math.round(totalCoin * userShare);
              const userCashCNY = businessCashCNY * userShare;

              if (userEligible && userCoin > 0) {
                state.wallet.coinBalance = Number(state.wallet.coinBalance || 0) + userCoin;
                const tipShare = Math.round(tipCoin * userShare);
                const giftShare = Math.max(0, userCoin - tipShare);
                if (tipShare) state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-tips`, type:"coin", title:"直播打赏", note:`${live.title || "本场直播"}${collab ? " · 联播分成 50%" : ""}`, coin:tipShare, at:Date.now() });
                if (giftShare) state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-gifts`, type:"coin", title:"直播礼物", note:`${live.title || "本场直播"}${collab ? " · 联播分成 50%" : ""}`, coin:giftShare, at:Date.now() });
              }
              if (userEligible && userCashCNY > 0) {
                state.wallet.cashBalanceCNY = Number(state.wallet.cashBalanceCNY || 0) + userCashCNY;
                state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-biz`, type:"cash", title:"商务合作", note:`${ad?.brandName || ad?.label || "本场关联广告"}${collab ? " · 联播分成 50%" : ""}`, cashCNY:userCashCNY, at:Date.now() });
              }

              const charIds = new Set();
              if (replayOwnerType === "channel" && replayOwnerId) charIds.add(String(replayOwnerId));
              guests.forEach(g => { if (state.channels.some(ch => String(ch.id) === String(g.id))) charIds.add(String(g.id)); });
              const charPoolCoin = userEligible && collab ? Math.max(0, totalCoin - userCoin) : (userEligible ? 0 : totalCoin);
              const charPoolCash = userEligible && collab ? Math.max(0, businessCashCNY - userCashCNY) : (userEligible ? 0 : businessCashCNY);
              const charCount = Math.max(1, charIds.size);
              charIds.forEach(charId => {
                const earning = state.roleEarnings[charId] || (state.roleEarnings[charId] = { coin:0, cashCNY:0, subscriptionCoin:0, liveHistory:[] });
                const coinPart = Math.round(charPoolCoin / charCount);
                const cashPart = charPoolCash / charCount;
                earning.coin = Number(earning.coin || 0) + coinPart;
                earning.cashCNY = Number(earning.cashCNY || 0) + cashPart;
                earning.liveHistory = safeArray(earning.liveHistory);
                earning.liveHistory.unshift({ liveId:live.id, title:live.title || "直播", coin:coinPart, cashCNY:cashPart, at:Date.now(), collab });
                earning.liveHistory = earning.liveHistory.slice(0, 50);
              });

              if (replayOwnerType && replayOwnerId) {
                const progress = getLiveProgress(live);
                state.liveReplays.unshift({
                  id: `replay-${Date.now().toString(36)}`,
                  ownerType: replayOwnerType,
                  ownerId: replayOwnerId,
                  title: live.title || "直播回放",
                  topic: live.category || "直播",
                  cover: live.cover || "",
                  mode: live.mode || "solo",
                  participants: guests.map(item => ({ ...item })),
                  accessMode: live.accessMode || "public",
                  ageRequirement: live.ageRequirement || "none",
                  startedAt: Number(live.startedAt || Date.now()),
                  peakViewers: Number(stats.peakViewers || stats.currentViewers || 0),
                  gifts: safeArray(stats.gifts).map(item => ({ ...item })),
                  tipCoin,
                  giftCoin,
                  businessCashCNY,
                  ad: ad ? { ...ad } : null,
                  lottery: stats.lottery ? JSON.parse(JSON.stringify(stats.lottery)) : null,
                  timeline: safeArray(progress.timeline).map(item => ({ ...item })),
                  chat: safeArray(state.liveChat).map(item => ({ ...item })),
                  endedAt: Date.now(),
                  endedText: "刚刚结束"
                });
              }

              state.liveSession = null;
              state.pendingLiveUserMessage = null;
              state.pendingOwnLiveInput = null;
              await persist();
              closeScreen("live");
              renderHome();
              renderChannels();
              renderWallet();

              if (userEligible) {
                openScreen("live-summary", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="live-summary">‹</button><div class="v-meta"><strong>本场直播已结束</strong><div class="v-hint">${escapeHTML(live.title || "直播")}</div></div></header><div class="v-subbody"><div class="v-wallet-flow-card"><div class="v-live-summary-grid"><div class="v-live-summary-box"><small>本场打赏</small><b>🔷${tipCoin.toLocaleString("zh-CN")}</b></div><div class="v-live-summary-box"><small>本场礼物</small><b>🔷${giftCoin.toLocaleString("zh-CN")}</b></div><div class="v-live-summary-box"><small>商务合作</small><b>${escapeHTML(formatCash(businessCashCNY))}</b></div><div class="v-live-summary-box"><small>${collab ? "你的 50% 分成" : "你的结算"}</small><b>${escapeHTML(formatCoin(userCoin))}${userCashCNY ? ` · ${escapeHTML(formatCash(userCashCNY))}` : ""}</b></div></div><div class="v-publish-note" style="margin-top:12px">打赏和礼物进入 Vela Coin 余额；商务收入直接进入可提现余额。角色的分成只写入角色后台收益记录。</div></div></div>`);
              } else {
                toast("直播已结束，角色收益已记录到后台");
              }
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

            const openSubscriptionSettings = (ownerType, ownerId) => {
              const entity = getProfileEntity(ownerType, ownerId);
              if (!entity) return;
              const cfg = getSubscriptionProfile(ownerType, ownerId);
              const benefitsText = tier => safeArray(cfg[tier].benefits).join("\n");
              openScreen("subscription-settings", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="subscription-settings">‹</button><div class="v-meta"><strong>订阅设置</strong><div class="v-hint">${escapeHTML(profileName(entity, ownerType))}</div></div><button class="v-head-action" data-action="save-subscription-settings" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(ownerId)}">保存</button></header><div class="v-subbody"><div class="v-subscription-editor-grid"><section class="v-subscription-editor-tier"><h3>免费订阅</h3><div class="v-editform"><div class="v-fieldpair"><div class="v-field"><label>粉丝 Emoji</label><input data-sub-field="freeEmoji" maxlength="4" value="${escapeHTML(cfg.free.emoji || "🌊")}"></div><div class="v-field"><label>方案名称</label><input data-sub-field="freeName" maxlength="24" value="${escapeHTML(cfg.free.name || "支持者")}"></div></div><div class="v-field"><label>卡片封面 URL（可空）</label><input data-sub-field="freeCover" value="${escapeHTML(cfg.free.cover || "")}" placeholder="https://..."></div><div class="v-field"><label>方案简介</label><textarea data-sub-field="freeIntro" maxlength="260">${escapeHTML(cfg.free.intro || "")}</textarea></div><div class="v-field"><label>权益（每行一条）</label><textarea data-sub-field="freeBenefits" maxlength="400">${escapeHTML(benefitsText("free"))}</textarea></div><div class="v-field"><label>对应群聊名称</label><input data-sub-field="freeCommunity" maxlength="40" value="${escapeHTML(cfg.free.communityName || "")}"></div></div></section><section class="v-subscription-editor-tier is-paid"><h3>付费订阅</h3><div class="v-editform"><div class="v-fieldpair"><div class="v-field"><label>粉丝 Emoji</label><input data-sub-field="paidEmoji" maxlength="4" value="${escapeHTML(cfg.paid.emoji || "💎")}"></div><div class="v-field"><label>方案名称</label><input data-sub-field="paidName" maxlength="24" value="${escapeHTML(cfg.paid.name || "会员")}"></div></div><div class="v-fieldpair"><div class="v-field"><label>月费 · Vela Coin</label><input data-sub-field="paidCoinPrice" type="number" min="1" max="999999" step="1" value="${Number(cfg.paid.coinPrice || 500)}"></div><div class="v-field"><label>卡片封面 URL（可空）</label><input data-sub-field="paidCover" value="${escapeHTML(cfg.paid.cover || "")}" placeholder="https://..."></div></div><div class="v-field"><label>方案简介</label><textarea data-sub-field="paidIntro" maxlength="260">${escapeHTML(cfg.paid.intro || "")}</textarea></div><div class="v-field"><label>权益（每行一条）</label><textarea data-sub-field="paidBenefits" maxlength="400">${escapeHTML(benefitsText("paid"))}</textarea></div><div class="v-field"><label>对应群聊名称</label><input data-sub-field="paidCommunity" maxlength="40" value="${escapeHTML(cfg.paid.communityName || "")}"></div></div></section></div></div>`);
            };

            const saveSubscriptionSettings = async (ownerType, ownerId) => {
              const entity = getProfileEntity(ownerType, ownerId);
              const screen = q('[data-screen="subscription-settings"]');
              if (!entity || !screen) return;
              const read = name => String(screen.querySelector(`[data-sub-field="${name}"]`)?.value || "").trim();
              const current = getSubscriptionProfile(ownerType, ownerId);
              const splitBenefits = value => value.split(/\n+/).map(item => item.trim()).filter(Boolean).slice(0, 8);
              state.subscriptionProfiles[subscriptionProfileKey(ownerType, ownerId)] = {
                free: { ...current.free, emoji: read("freeEmoji") || "🌊", name: read("freeName") || "支持者", cover: read("freeCover"), intro: read("freeIntro"), benefits: splitBenefits(read("freeBenefits")), communityName: read("freeCommunity") || `${profileName(entity, ownerType)} · 免费社群` },
                paid: { ...current.paid, emoji: read("paidEmoji") || "💎", name: read("paidName") || "会员", coinPrice: Math.max(1, Math.min(999999, Math.round(Number(read("paidCoinPrice") || 500)))), cover: read("paidCover"), intro: read("paidIntro"), benefits: splitBenefits(read("paidBenefits")), communityName: read("paidCommunity") || `${profileName(entity, ownerType)} · 会员社群` }
              };
              await persist();
              closeScreen("subscription-settings");
              openProfile(ownerType, ownerId);
              renderProfileTab(ownerType, ownerId, "subscriptions");
              renderMessages();
              toast("订阅方案已保存");
            };

            const formatChatTimestamp = (value) => {
              const date = new Date(Number(value || Date.now()));
              const now = new Date();
              const sameDay = date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
              const time = date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
              return sameDay ? `今天 ${time}` : `${date.getMonth() + 1}月${date.getDate()}日 ${time}`;
            };

            const threadTimeHTML = (rows, index) => {
              const current = Number(rows[index]?.at || Date.now());
              const prev = index > 0 ? Number(rows[index - 1]?.at || 0) : 0;
              return index === 0 || current - prev > 10 * 60 * 1000
                ? `<div class="v-chat-timestamp">${escapeHTML(formatChatTimestamp(current))}</div>`
                : "";
            };

            const renderChatBubble = (item, { group = false, threadKey = "", threadType = "dm" } = {}) => {
              const mine = item.sender === "user" || item.isUser;
              const trId = `chat-${String(item.id || item.at || Math.random())}`;
              const role = item.role === "owner" || item.sender === "owner" ? `<span class="v-role-title is-owner">博主</span>` : item.role === "bot" || item.sender === "bot" ? `<span class="v-role-title is-bot">机器人</span>` : "";
              const title = group || item.name ? `<div class="v-chat-sender">${role}${escapeHTML(item.name || (mine ? "你" : "成员"))}</div>` : "";
              const longpress = item.id && threadKey ? ` data-longpress="delete-chat-item" data-thread-type="${escapeHTML(threadType)}" data-thread-key="${escapeHTML(threadKey)}" data-item-id="${escapeHTML(item.id)}"` : "";
              return `<div class="v-chat-row ${mine ? "is-me" : ""}"${longpress}>${mine ? "" : `<div class="v-social-avatar">${avatarHTML(item.avatar || "", item.name || "V")}</div>`}<div class="v-chat-stack">${title}<div class="v-chat-bubble">${escapeHTML(item.text || "")}${item.translation ? translationHTML(trId, item.translation) : ""}</div></div></div>`;
            };

            const statusLabel = status => status === "accepted" ? "已接受" : status === "declined" ? "已婉拒" : status === "cancelled" ? "已取消" : status === "filled" ? "已填写" : status === "revising" ? "修改确认中" : "待确认";

            const renderDMToolCard = (item, messageId) => {
              const incoming = item.direction === "incoming";
              const status = String(item.status || "pending");
              if (item.kind === "live_invite") {
                return `<div class="v-chat-card" data-longpress="delete-chat-item" data-thread-type="dm" data-thread-key="${escapeHTML(messageId)}" data-item-id="${escapeHTML(item.id)}"><div class="v-chat-card-head"><span class="v-chat-card-type">直播邀约</span><span class="v-chat-card-status ${status === "accepted" ? "is-ok" : status === "declined" ? "is-no" : ""}">${statusLabel(status)}</span></div><div class="v-chat-card-title">${escapeHTML(item.title || "一起直播")}</div><div class="v-chat-card-meta"><div>时间 <b>${escapeHTML(item.dateText || "待定")}</b></div><div>内容 <b>${escapeHTML(item.content || "一起聊聊")}</b></div><div>方式 <b>${item.mode === "same-room" ? "线下同镜" : "线上联播"}</b></div><div>主场 <b>${escapeHTML(item.hostLabel || "待确认")}</b></div></div>${status === "pending" && incoming ? `<div class="v-chat-card-actions"><button data-action="accept-dm-card" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(item.id)}">接受</button><button class="is-light" data-action="decline-dm-card" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(item.id)}">婉拒</button></div>` : status === "pending" ? `<div class="v-chat-card-actions"><button class="is-light" data-action="cancel-dm-card" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(item.id)}">取消邀约</button></div>` : ""}</div>`;
              }
              if (item.kind === "business") {
                const money = Number(item.cashAmountCNY || 0) > 0 ? formatCash(Number(item.cashAmountCNY || 0)) : "金额待确认";
                const longpress = ` data-longpress="delete-chat-item" data-thread-type="dm" data-thread-key="${escapeHTML(messageId)}" data-item-id="${escapeHTML(item.id)}"`;
                return `<div class="v-chat-card is-business"${longpress}><div class="v-chat-card-head"><span class="v-chat-card-type">商务合作 · ${escapeHTML(item.brandName || "品牌")}</span><span class="v-chat-card-status ${status === "accepted" ? "is-ok" : status === "declined" ? "is-no" : ""}">${statusLabel(status)}</span></div><div class="v-chat-card-title">${escapeHTML(item.title || item.productName || "直播合作方案")}</div><div class="v-chat-card-meta"><div>产品 / 项目 <b>${escapeHTML(item.productName || item.title || "合作项目")}</b></div><div>合作内容 <b>${escapeHTML(item.content || "")}</b></div><div>直播时间 <b>${escapeHTML(item.dateText || "待定")}</b></div><div>直播主场 <b>${escapeHTML(item.hostLabel || "待确认")}</b></div><div>合作费用 <b>${escapeHTML(money)}</b></div>${item.adCopy ? `<div>广告词 <b>${escapeHTML(item.adCopy)}</b></div>` : ""}${item.adLink ? `<div>广告链接 <b>${escapeHTML(item.adLink)}</b></div>` : ""}</div>${status === "pending" && incoming ? `<button class="v-chat-card-edit" data-action="edit-business-card" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(item.id)}">需要改动？编辑后回传给对方确认</button><div class="v-chat-card-actions"><button data-action="accept-dm-card" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(item.id)}">接受并预定直播</button><button class="is-light" data-action="decline-dm-card" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(item.id)}">婉拒直播</button></div>` : ""}</div>`;
              }
              if (item.kind === "business_revision") {
                const longpress = ` data-longpress="delete-chat-item" data-thread-type="dm" data-thread-key="${escapeHTML(messageId)}" data-item-id="${escapeHTML(item.id)}"`;
                return `<div class="v-chat-card"${longpress}><div class="v-chat-card-head"><span class="v-chat-card-type">你回传的合作修改</span><span class="v-chat-card-status">${status === "accepted" ? "对方已确认" : "等待对方确认"}</span></div><div class="v-chat-card-title">${escapeHTML(item.title || "合作修改")}</div><div class="v-chat-card-meta"><div>直播时间 <b>${escapeHTML(item.dateText || "待定")}</b></div><div>合作内容 <b>${escapeHTML(item.content || "")}</b></div><div>合作费用 <b>${escapeHTML(Number(item.cashAmountCNY || 0) > 0 ? formatCash(item.cashAmountCNY) : "待确认")}</b></div></div></div>`;
              }
              if (item.kind === "winner_form") {
                return `<div class="v-chat-card" data-longpress="delete-chat-item" data-thread-type="dm" data-thread-key="${escapeHTML(messageId)}" data-item-id="${escapeHTML(item.id)}"><div class="v-chat-card-head"><span class="v-chat-card-type">中奖信息填写</span><span class="v-chat-card-status ${status === "filled" ? "is-ok" : ""}">${statusLabel(status)}</span></div><div class="v-chat-card-title">${escapeHTML(item.prize || "中奖礼物")}</div><div class="v-chat-card-meta"><div>${escapeHTML(item.note || "请填写领奖所需的信息。")}</div>${item.reply ? `<div>已提交 <b>${escapeHTML(item.reply)}</b></div>` : ""}</div>${status === "pending" && incoming ? `<div class="v-chat-card-actions"><button data-action="fill-winner-card" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(item.id)}">填写信息</button></div>` : ""}</div>`;
              }
              return "";
            };

            const renderDirectThread = (messageId) => {
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              if (!msg) return;
              state.dmThreads[messageId] = safeArray(state.dmThreads[messageId]);
              const rows = state.dmThreads[messageId];
              const channel = state.channels.find(ch => String(ch.id) === String(msg.channelId || ""));
              const handle = String(channel?.handle || msg.handle || (msg.name ? `@${String(msg.name).toLowerCase().replace(/\s+/g, "_")}` : "@vela"));
              const rowHTML = rows.map((item, index) => `${threadTimeHTML(rows, index)}${item.kind && item.kind !== "text" ? renderDMToolCard(item, messageId) : renderChatBubble(item, { threadKey: messageId, threadType: "dm" })}`).join("");
              openScreen("message", `<div class="v-chat-screen"><header class="v-chat-head"><button class="v-chat-back" data-action="close-screen" data-screen-name="message">‹</button><div class="v-chat-headcopy"><strong>${escapeHTML(msg.name || "Vela ID")}</strong><small>${escapeHTML(handle)}</small></div><div class="v-chat-headactions"><button class="v-chat-headicon" data-action="toggle-chat-topmenu" aria-label="清除聊天">🗑︎</button></div><div class="v-chat-topmenu" data-role="chat-topmenu"><button data-action="clear-direct-chat" data-message-id="${escapeHTML(messageId)}">清除聊天记录</button></div></header><div class="v-chat-body" data-role="chat-body">${rowHTML || '<div class="v-group-empty">还没有消息。<br>Enter 只发送你的消息，小飞机才召唤对方。</div>'}</div><div class="v-chat-composer-wrap"><input data-role="dm-input" data-message-id="${escapeHTML(messageId)}" placeholder="发消息… · Enter发送" maxlength="600"><button class="v-chat-plus" data-action="open-dm-plus" data-message-id="${escapeHTML(messageId)}">＋</button><button class="v-chat-summon" data-action="summon-direct-message" data-message-id="${escapeHTML(messageId)}">➤</button></div></div>`);
              requestAnimationFrame(() => {
                const body = q('[data-screen="message"] [data-role="chat-body"]');
                if (body) body.scrollTop = body.scrollHeight;
              });
            };

            const ensureDMThreadSeed = (msg) => {
              state.dmThreads[msg.id] = safeArray(state.dmThreads[msg.id]);
              if (!state.dmThreads[msg.id].length && msg.preview && !msg.outboundToChannel) {
                state.dmThreads[msg.id].push({
                  id: `seed-${msg.id}`,
                  kind: "text",
                  sender: "other",
                  name: msg.name || "对方",
                  avatar: msg.avatar || "",
                  text: msg.preview,
                  translation: "",
                  at: Date.now() - 2 * 60 * 1000
                });
              }
            };

            const openMessage = (id) => {
              const msg = state.messages.find(x => String(x.id) === String(id));
              if (!msg) return;
              ensureDMThreadSeed(msg);
              msg.unread = 0;
              renderDirectThread(msg.id);
              persist();
            };

            const messageChannel = async (channelId) => {
              const channel = state.channels.find(ch => String(ch.id) === String(channelId));
              if (!channel) return;
              let msg = state.messages.find(item => String(item.channelId || "") === String(channel.id) && item.outboundToChannel);
              if (!msg) {
                msg = { id: `channel-dm-${String(channel.id)}`, avatar: channel.avatar || "", name: channel.name || channel.handle || "频道", handle: channel.handle || "", badge: "", channelId: channel.id, outboundToChannel: true, preview: "", unread: 0 };
                state.messages.unshift(msg);
              }
              state.dmThreads[msg.id] = safeArray(state.dmThreads[msg.id]);
              await persist();
              renderMessages();
              renderDirectThread(msg.id);
            };

            const sendDirectMessage = async (messageId) => {
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              const input = q('[data-screen="message"] [data-role="dm-input"]');
              const text = String(input?.value || "").trim();
              if (!msg || !text) return;
              const identity = state.identities.find(item => String(item.id) === String(state.viewerIdentityId)) || state.identities[0];
              state.dmThreads[messageId] = safeArray(state.dmThreads[messageId]);
              state.dmThreads[messageId].push({ id: `dm-${Date.now().toString(36)}`, kind: "text", sender: "user", name: identity?.displayName || identity?.handle || "user", avatar: identity?.avatar || "", text, translation: "", at: Date.now(), isUser: true });
              state.dmThreads[messageId] = state.dmThreads[messageId].slice(-240);
              msg.preview = text;
              if (input) input.value = "";
              await persist();
              renderMessages();
              renderDirectThread(messageId);
            };

            const extractJSON = (text) => {
              const raw = String(text || "").trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
              try { return JSON.parse(raw); } catch (_) {}
              const first = raw.indexOf("{"), last = raw.lastIndexOf("}");
              if (first >= 0 && last > first) {
                try { return JSON.parse(raw.slice(first, last + 1)); } catch (_) {}
              }
              const a = raw.indexOf("["), b = raw.lastIndexOf("]");
              if (a >= 0 && b > a) {
                try { return JSON.parse(raw.slice(a, b + 1)); } catch (_) {}
              }
              return null;
            };

            const runVelaAI = async (messages) => {
              try {
                const result = await roche?.ai?.chat?.({ messages, temperature: 0.85 });
                return String(result?.text || result?.content || "");
              } catch (err) {
                console.warn("[Vela] AI summon failed", err);
                return "";
              }
            };

            const getChannelPersonaText = (channel) => {
              if (!channel?.sourceCharacterId) return "";
              const char = rocheRuntime.characters.find(item => String(item?.id) === String(channel.sourceCharacterId));
              return String(char?.persona || char?.prompt || char?.description || char?.bio || "");
            };

            const fallbackDirectReply = (msg) => {
              const channel = state.channels.find(ch => String(ch.id) === String(msg.channelId || ""));
              if (channel?.sourceCharacterId || msg.name === "Aster") {
                return { text: "응, 나도 방금 그 얘기 계속 생각하고 있었어. 조금 더 얘기해도 될 것 같아.", translation: "嗯，我刚刚也一直在想那件事。感觉还可以再聊一会儿。" };
              }
              if (String(msg.badge || "") === "合作邀约") {
                return { text: "我们可以先把合作方向聊清楚，确认合适以后再发正式合作卡。", translation: "" };
              }
              return { text: "我刚刚还在想这个，没事的话可以继续聊。", translation: "" };
            };

            const createScheduleFromCard = async (messageId, card) => {
              if (!(card.kind === "live_invite" || (card.kind === "business" && card.includesLive))) return;
              const host = getProfileEntity(card.hostOwnerType, card.hostOwnerId);
              if (!host) return;
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              const peerChannel = state.channels.find(ch => String(ch.id) === String(msg?.channelId || ""));
              const viewer = state.identities.find(item => String(item.id) === String(state.viewerIdentityId));
              const participants = [
                viewer ? { ownerType: "identity", id: viewer.id, name: viewer.displayName || viewer.handle || "user" } : null,
                peerChannel ? { ownerType: "channel", id: peerChannel.id, name: peerChannel.name || peerChannel.handle || "频道" } : null
              ].filter(Boolean);
              host.scheduledLive = {
                title: String(card.title || (card.kind === "business" ? "商务合作直播" : "联播预约")),
                dateText: String(card.dateText || "时间待定"),
                scheduledAt: Number(card.scheduledAt || 0),
                cover: String(card.cover || ""),
                content: String(card.content || ""),
                mode: String(card.mode || "online"),
                sourceMessageId: String(messageId),
                sourceCardId: String(card.id),
                sourceType: String(card.kind),
                hostOwnerType: String(card.hostOwnerType),
                hostOwnerId: String(card.hostOwnerId),
                participantIds: participants.map(p => p.id),
                participants,
                business: card.kind === "business" ? {
                  brandName:String(card.brandName || ""),
                  productName:String(card.productName || ""),
                  cashAmountCNY:Number(card.cashAmountCNY || 0),
                  adCopy:String(card.adCopy || ""),
                  adLink:String(card.adLink || ""),
                  sourceMessageId:String(messageId),
                  sourceCardId:String(card.id || "")
                } : null
              };
              await persist();
              armAppointmentTimer();
              armCommunityBotTimers?.();
            };

            const findDMCard = (messageId, cardId) => {
              const rows = safeArray(state.dmThreads?.[String(messageId)]);
              return rows.find(item => String(item.id) === String(cardId));
            };

            const acceptDMCard = async (messageId, cardId) => {
              const card = findDMCard(messageId, cardId);
              if (!card || card.status === "accepted") return;
              card.status = "accepted";
              card.acceptedAt = Date.now();
              await createScheduleFromCard(messageId, card);
              await persist();
              renderDirectThread(messageId);
              toast(card.kind === "live_invite" ? "已接受直播邀约，预约已关联到主场主页" : "合作已接受");
            };

            const declineDMCard = async (messageId, cardId) => {
              const card = findDMCard(messageId, cardId);
              if (!card) return;
              card.status = "declined";
              await persist();
              renderDirectThread(messageId);
            };

            const cancelDMCard = async (messageId, cardId) => {
              const card = findDMCard(messageId, cardId);
              if (!card) return;
              card.status = "cancelled";
              await persist();
              renderDirectThread(messageId);
            };

            const summonDirectMessage = async (messageId) => {
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              if (!msg) return;
              const button = q(`[data-screen="message"] [data-action="summon-direct-message"][data-message-id="${String(messageId).replace(/"/g, '\\"')}"]`);
              button?.classList.add("is-loading");
              const thread = safeArray(state.dmThreads[messageId]);
              const channel = state.channels.find(ch => String(ch.id) === String(msg.channelId || ""));
              const persona = getChannelPersonaText(channel);
              const history = thread.slice(-18).map(item => {
                if (item.kind && item.kind !== "text") {
                  if (item.kind === "business" || item.kind === "business_revision") return `[${item.kind}] brand=${item.brandName || ""}; product=${item.productName || ""}; title=${item.title || ""}; content=${item.content || ""}; date=${item.dateText || ""}; cashCNY=${Number(item.cashAmountCNY || 0)}; host=${item.hostLabel || ""}; adCopy=${item.adCopy || ""}; adLink=${item.adLink || ""}; status=${item.status || "pending"}`;
                  if (item.kind === "live_invite") return `[live_invite] title=${item.title || ""}; content=${item.content || ""}; date=${item.dateText || ""}; mode=${item.mode || ""}; host=${item.hostLabel || ""}; status=${item.status || "pending"}`;
                  return `[${item.kind}] ${item.title || item.content || item.prize || ""} / status=${item.status || "pending"}`;
                }
                return `${item.sender === "user" ? "USER" : "OTHER"}: ${item.text || ""}`;
              }).join("\n");
              const pendingOutgoing = thread.filter(item => item.direction === "outgoing" && item.status === "pending" && item.kind === "live_invite").slice(-1)[0];
              const system = `你正在模拟 Vela 私信中 USER 之外的对方。绝对禁止替 USER 发言、行动、做决定。Enter 只发送 USER 自己写的内容，小飞机召唤时即使 USER 没有新消息，对方也可以自然继续说自己的事，不需要强行围着 USER。对方身份：${msg.name || "对方"} ${channel?.handle || msg.handle || ""}。${persona ? `角色设定：${persona}` : ""}

请返回严格 JSON。普通消息：
{"type":"message","text":"对方实际发出的消息","translation":"若 text 不是中文则给中文翻译，否则空字符串","acceptCardId":""}
只有在非常自然、符合身份和上下文时，才可以主动发直播邀约。商务合作只能由“对方 / 品牌方”主动提出，USER 不能自己生成正式商务卡。
直播邀约：
{"type":"live_invite","title":"标题","content":"直播内容","dateText":"时间文字","scheduledAt":"YYYY-MM-DDTHH:mm","mode":"online|same-room","host":"counterpart|user","text":"可选附言","translation":""}
如果你是品牌 / 商务联系人：先像真实工作人员一样正常聊天，说明公司主营、品牌和产品，询问 USER 是否接广告；只有时间、直播要求、费用等基本聊清楚后，才发正式商务卡：
{"type":"business","brandName":"公司或品牌","productName":"产品","title":"合作标题","content":"直播要求","cashAmountCNY":800,"dateText":"时间文字","scheduledAt":"YYYY-MM-DDTHH:mm","host":"user|counterpart","adCopy":"广告词","adLink":"链接","text":"可选附言","translation":""}
如果最近出现 [business_revision]，你可以继续讨论；若同意 USER 的修改，必须重新发一张新的 business 卡，内容采用双方最后确认的版本。
如果对方自然同意 USER 已经发出的待确认卡，可以在普通 message JSON 里把 acceptCardId 写成卡片 ID：${pendingOutgoing?.id || "无待确认卡"}。不要自动替 USER 接受任何东西。`;
              const aiText = await runVelaAI([{ role: "system", content: system }, { role: "user", content: `最近私信：\n${history || "目前还没有聊天。请对方自然开启或继续话题。"}` }]);
              let data = extractJSON(aiText);
              if (!data || typeof data !== "object" || Array.isArray(data)) {
                const fallback = fallbackDirectReply(msg);
                data = { type: "message", ...fallback };
              }

              if (data.acceptCardId && pendingOutgoing && String(data.acceptCardId) === String(pendingOutgoing.id)) {
                pendingOutgoing.status = "accepted";
                await createScheduleFromCard(messageId, pendingOutgoing);
              }

              if (data.type === "live_invite" || data.type === "business") {
                const incoming = {
                  id: `dmcard-${Date.now().toString(36)}`,
                  kind: data.type === "business" ? "business" : "live_invite",
                  direction: "incoming",
                  status: "pending",
                  sender: "other",
                  name: msg.name || "对方",
                  avatar: msg.avatar || "",
                  brandName: String(data.brandName || (data.type === "business" ? msg.name || "品牌" : "")),
                  productName: String(data.productName || ""),
                  title: String(data.title || (data.type === "business" ? "合作方案" : "一起直播")),
                  content: String(data.content || ""),
                  cashAmountCNY: data.type === "business" ? Math.max(0, Number(data.cashAmountCNY || 0)) : 0,
                  adCopy: String(data.adCopy || ""),
                  adLink: String(data.adLink || ""),
                  mode: data.mode === "same-room" ? "same-room" : "online",
                  includesLive: data.type === "business" ? true : true,
                  dateText: String(data.dateText || (data.scheduledAt ? formatDateTextFromInput(data.scheduledAt) : "时间待定")),
                  scheduledAt: data.scheduledAt && !Number.isNaN(new Date(data.scheduledAt).getTime()) ? new Date(data.scheduledAt).getTime() : 0,
                  at: Date.now()
                };
                if (String(data.host) === "counterpart" && channel) {
                  incoming.hostOwnerType = "channel";
                  incoming.hostOwnerId = channel.id;
                  incoming.hostLabel = `${channel.name || "对方"}的直播间`;
                } else {
                  incoming.hostOwnerType = "identity";
                  incoming.hostOwnerId = state.viewerIdentityId;
                  incoming.hostLabel = "你的直播间";
                }
                state.dmThreads[messageId].push(incoming);
                if (data.text) {
                  state.dmThreads[messageId].push({ id: `dm-${Date.now().toString(36)}-after`, kind: "text", sender: "other", name: msg.name || "对方", avatar: msg.avatar || "", text: String(data.text), translation: String(data.translation || ""), at: Date.now() + 1 });
                }
              } else {
                state.dmThreads[messageId].push({ id: `dm-${Date.now().toString(36)}`, kind: "text", sender: "other", name: msg.name || "对方", avatar: msg.avatar || "", text: String(data.text || fallbackDirectReply(msg).text), translation: String(data.translation || ""), at: Date.now() });
              }
              state.dmThreads[messageId] = state.dmThreads[messageId].slice(-240);
              msg.preview = String(data.text || data.title || msg.preview || "");
              await persist();
              renderMessages();
              renderDirectThread(messageId);
            };

            const openDMPlus = (messageId) => {
              const sheet = q('[data-role="publish-sheet"]');
              const host = q('[data-role="publish-sheet-content"]');
              if (!sheet || !host) return;
              host.innerHTML = `<div class="v-publish-sheet-title"><h3>发送到私信</h3><button data-action="close-publish-sheet">×</button></div><div class="v-chat-tool-grid"><button data-action="open-dm-tool-form" data-message-id="${escapeHTML(messageId)}" data-tool-type="live_invite">直播邀约<small>你和对方都可以发直播邀约</small></button><button data-action="open-dm-tool-form" data-message-id="${escapeHTML(messageId)}" data-tool-type="winner_form">中奖信息填写<small>直播抽奖后让中奖粉丝填写领奖信息</small></button></div>`;
              sheet.classList.add("is-open");
            };

            const dateInputDefault = () => {
              const date = new Date(Date.now() + 60 * 60 * 1000);
              const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
              return local.toISOString().slice(0, 16);
            };

            const formatDateTextFromInput = value => {
              if (!value) return "时间待定";
              const date = new Date(value);
              if (Number.isNaN(date.getTime())) return String(value);
              return `${date.getMonth() + 1}/${date.getDate()} · ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
            };

            const openDMToolForm = (messageId, toolType) => {
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              if (!msg) return;
              const sheet = q('[data-role="publish-sheet"]');
              const host = q('[data-role="publish-sheet-content"]');
              const channel = state.channels.find(ch => String(ch.id) === String(msg.channelId || ""));
              if (!sheet || !host) return;
              const hostOptions = `<option value="user">我的直播间</option>${channel ? `<option value="counterpart">${escapeHTML(channel.name || "对方")}的直播间</option>` : ""}`;

              if (toolType === "live_invite") {
                host.innerHTML = `<div class="v-publish-sheet-title"><h3>直播邀约</h3><button data-action="open-dm-plus" data-message-id="${escapeHTML(messageId)}">‹</button></div><div class="v-tool-form"><div class="v-field"><label>直播时间</label><input type="datetime-local" data-dm-tool-field="scheduledAt" value="${dateInputDefault()}"></div><div class="v-field"><label>直播标题</label><input data-dm-tool-field="title" maxlength="90" placeholder="一起播什么？"></div><div class="v-field"><label>直播内容</label><textarea data-dm-tool-field="content" maxlength="500" placeholder="大概聊什么、做什么"></textarea></div><div class="v-fieldpair"><div class="v-field"><label>联播方式</label><select data-dm-tool-field="mode"><option value="online">线上联播</option><option value="same-room">线下同镜</option></select></div><div class="v-field"><label>主场频道</label><select data-dm-tool-field="host">${hostOptions}</select></div></div><div class="v-tool-note">接受后才会生成预约直播，并自动挂到主场主播的主页。</div><button class="v-action" data-action="send-dm-tool-card" data-message-id="${escapeHTML(messageId)}" data-tool-type="live_invite">发送邀约</button></div>`;
              } else if (toolType === "business") {
                toast("商务合作由品牌 / 对方发起");
                openDMPlus(messageId);
                return;
              } else {
                host.innerHTML = `<div class="v-publish-sheet-title"><h3>中奖信息填写</h3><button data-action="open-dm-plus" data-message-id="${escapeHTML(messageId)}">‹</button></div><div class="v-tool-form"><div class="v-field"><label>奖品</label><input data-dm-tool-field="prize" maxlength="90" placeholder="中奖礼物"></div><div class="v-field"><label>填写说明</label><textarea data-dm-tool-field="note" maxlength="350" placeholder="例如：请填写领奖联系方式和收件备注"></textarea></div><button class="v-action" data-action="send-dm-tool-card" data-message-id="${escapeHTML(messageId)}" data-tool-type="winner_form">发送填写卡</button></div>`;
              }
              sheet.classList.add("is-open");
            };

            const sendDMToolCard = async (messageId, toolType) => {
              if (toolType === "business") { toast("商务合作只能由品牌 / 对方发起"); return; }
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              const sheet = q('[data-role="publish-sheet"]');
              if (!msg || !sheet) return;
              const read = name => String(sheet.querySelector(`[data-dm-tool-field="${name}"]`)?.value || "").trim();
              const channel = state.channels.find(ch => String(ch.id) === String(msg.channelId || ""));
              const card = {
                id: `dmcard-${Date.now().toString(36)}`,
                kind: toolType,
                direction: "outgoing",
                status: "pending",
                sender: "user",
                name: state.identities.find(i => String(i.id) === String(state.viewerIdentityId))?.displayName || "user",
                avatar: state.identities.find(i => String(i.id) === String(state.viewerIdentityId))?.avatar || "",
                at: Date.now()
              };
              if (toolType === "live_invite" || toolType === "business") {
                const title = read("title"), content = read("content");
                if (!title || !content) { toast("先把标题和内容填完整"); return; }
                card.title = title;
                card.content = content;
                card.includesLive = toolType === "live_invite" ? true : read("includesLive") !== "no";
                card.mode = read("mode") === "same-room" ? "same-room" : "online";
                const dateValue = read("scheduledAt");
                card.scheduledAt = dateValue ? new Date(dateValue).getTime() : 0;
                card.dateText = formatDateTextFromInput(dateValue);
                const hostChoice = read("host");
                if (hostChoice === "counterpart" && channel) {
                  card.hostOwnerType = "channel";
                  card.hostOwnerId = channel.id;
                  card.hostLabel = `${channel.name || "对方"}的直播间`;
                } else {
                  card.hostOwnerType = "identity";
                  card.hostOwnerId = state.viewerIdentityId;
                  card.hostLabel = "你的直播间";
                }
              } else {
                card.prize = read("prize") || "中奖礼物";
                card.note = read("note") || "请填写领奖所需的信息。";
              }
              state.dmThreads[messageId] = safeArray(state.dmThreads[messageId]);
              state.dmThreads[messageId].push(card);
              msg.preview = toolType === "live_invite" ? "[直播邀约]" : toolType === "business" ? "[商务合作]" : "[中奖信息填写]";
              sheet.classList.remove("is-open");
              await persist();
              renderMessages();
              renderDirectThread(messageId);
            };

            const openBusinessCardEditor = (messageId, cardId) => {
              const card = findDMCard(messageId, cardId);
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              if (!card || card.kind !== "business" || !msg) return;
              const sheet = q('[data-role="publish-sheet"]');
              const host = q('[data-role="publish-sheet-content"]');
              const channel = state.channels.find(ch => String(ch.id) === String(msg.channelId || ""));
              if (!sheet || !host) return;
              const hostCurrent = card.hostOwnerType === "channel" ? "counterpart" : "user";
              host.innerHTML = `<div class="v-publish-sheet-title"><h3>修改合作卡</h3><button data-action="close-publish-sheet">×</button></div><div class="v-tool-form"><div class="v-field"><label>品牌 / 公司</label><input data-business-edit="brandName" value="${escapeHTML(card.brandName || msg.name || "")}" maxlength="60"></div><div class="v-field"><label>产品 / 项目</label><input data-business-edit="productName" value="${escapeHTML(card.productName || "")}" maxlength="90"></div><div class="v-field"><label>合作标题</label><input data-business-edit="title" value="${escapeHTML(card.title || "")}" maxlength="100"></div><div class="v-field"><label>直播要求 / 内容</label><textarea data-business-edit="content" maxlength="800">${escapeHTML(card.content || "")}</textarea></div><div class="v-field"><label>直播时间</label><input type="datetime-local" data-business-edit="scheduledAt" value="${card.scheduledAt ? new Date(Number(card.scheduledAt) - new Date().getTimezoneOffset()*60000).toISOString().slice(0,16) : dateInputDefault()}"></div><div class="v-fieldpair"><div class="v-field"><label>合作费用 · CNY 基准</label><input type="number" min="0" step="1" data-business-edit="cashAmountCNY" value="${Number(card.cashAmountCNY || 0)}"></div><div class="v-field"><label>直播主场</label><select data-business-edit="host"><option value="user" ${hostCurrent === "user" ? "selected" : ""}>我的直播间</option>${channel ? `<option value="counterpart" ${hostCurrent === "counterpart" ? "selected" : ""}>${escapeHTML(channel.name || "对方")}的直播间</option>` : ""}</select></div></div><div class="v-field"><label>广告词</label><textarea data-business-edit="adCopy" maxlength="500">${escapeHTML(card.adCopy || "")}</textarea></div><div class="v-field"><label>广告链接</label><input data-business-edit="adLink" value="${escapeHTML(card.adLink || "")}" placeholder="https://..."></div><div class="v-tool-note">修改后不是直接生效，而是把修改卡回传给对方。对方同意后会重新发最终合作卡。</div><button class="v-action" data-action="send-business-revision" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(cardId)}">把修改发给对方确认</button></div>`;
              sheet.classList.add("is-open");
            };

            const sendBusinessRevision = async (messageId, cardId) => {
              const original = findDMCard(messageId, cardId);
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              const sheet = q('[data-role="publish-sheet"]');
              if (!original || original.kind !== "business" || !msg || !sheet) return;
              const read = name => String(sheet.querySelector(`[data-business-edit="${name}"]`)?.value || "").trim();
              const channel = state.channels.find(ch => String(ch.id) === String(msg.channelId || ""));
              const scheduledValue = read("scheduledAt");
              const hostChoice = read("host");
              original.status = "revising";
              const revision = {
                id:`bizrev-${Date.now().toString(36)}`,
                kind:"business_revision",
                direction:"outgoing",
                status:"pending",
                sender:"user",
                name:state.identities.find(i => String(i.id) === String(state.viewerIdentityId))?.displayName || "user",
                brandName:read("brandName"),
                productName:read("productName"),
                title:read("title") || original.title || "合作修改",
                content:read("content"),
                cashAmountCNY:Math.max(0, Number(read("cashAmountCNY") || 0)),
                adCopy:read("adCopy"),
                adLink:read("adLink"),
                scheduledAt: scheduledValue ? new Date(scheduledValue).getTime() : 0,
                dateText:formatDateTextFromInput(scheduledValue),
                hostOwnerType: hostChoice === "counterpart" && channel ? "channel" : "identity",
                hostOwnerId: hostChoice === "counterpart" && channel ? channel.id : state.viewerIdentityId,
                hostLabel: hostChoice === "counterpart" && channel ? `${channel.name || "对方"}的直播间` : "你的直播间",
                at:Date.now()
              };
              state.dmThreads[messageId] = safeArray(state.dmThreads[messageId]);
              state.dmThreads[messageId].push(revision);
              msg.preview = "[合作修改已回传]";
              sheet.classList.remove("is-open");
              await persist();
              renderMessages();
              renderDirectThread(messageId);
            };

            const fillWinnerCard = (messageId, cardId) => {
              const card = findDMCard(messageId, cardId);
              if (!card) return;
              const sheet = q('[data-role="publish-sheet"]');
              const host = q('[data-role="publish-sheet-content"]');
              if (!sheet || !host) return;
              host.innerHTML = `<div class="v-publish-sheet-title"><h3>填写中奖信息</h3><button data-action="close-publish-sheet">×</button></div><div class="v-tool-form"><div class="v-field"><label>领奖联系方式 / 备注</label><textarea data-winner-reply maxlength="500" placeholder="填写虚拟领奖信息或备注"></textarea></div><button class="v-action" data-action="save-winner-reply" data-message-id="${escapeHTML(messageId)}" data-card-id="${escapeHTML(cardId)}">提交</button></div>`;
              sheet.classList.add("is-open");
            };

            const saveWinnerReply = async (messageId, cardId) => {
              const card = findDMCard(messageId, cardId);
              const input = q('[data-role="publish-sheet"] [data-winner-reply]');
              const value = String(input?.value || "").trim();
              if (!card || !value) { toast("先填写信息"); return; }
              card.reply = value;
              card.status = "filled";
              q('[data-role="publish-sheet"]')?.classList.remove("is-open");
              await persist();
              renderDirectThread(messageId);
            };

            const clearDirectChat = async (messageId) => {
              if (typeof window.confirm === "function" && !window.confirm("清除这段私信的全部聊天记录？")) return;
              state.dmThreads[messageId] = [];
              const msg = state.messages.find(item => String(item.id) === String(messageId));
              if (msg) msg.preview = "";
              await persist();
              renderMessages();
              renderDirectThread(messageId);
            };

            const openCommunityChat = (ownerType, ownerId, tier) => {
              const entity = getProfileEntity(ownerType, ownerId);
              if (!entity) return;
              const key = communityChatKey(ownerType, ownerId, tier);
              const own = isOwnCommunity(ownerType, ownerId);
              const cfg = getCommunitySettings(ownerType, ownerId, tier);
              const stats = getCommunityStats(ownerType, ownerId, tier);
              state.communityChats[key] = safeArray(state.communityChats[key]);
              const rows = state.communityChats[key];
              const rowHTML = rows.map((item, index) => `${threadTimeHTML(rows, index)}${renderCommunityItem(item, key, own)}`).join("");
              openScreen("message", `<div class="v-chat-screen"><header class="v-chat-head"><button class="v-chat-back" data-action="close-screen" data-screen-name="message">‹</button><div class="v-chat-headcopy"><strong>${escapeHTML(cfg.name)} · ${stats.members.toLocaleString("zh-CN")}人</strong><small>${stats.active.toLocaleString("zh-CN")}人正在聊天</small></div><div class="v-chat-headactions">${own ? `<button class="v-chat-headicon is-edit" data-action="edit-community" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(ownerId)}" data-tier="${escapeHTML(tier)}">编辑</button>` : ""}<button class="v-chat-headicon" data-action="toggle-chat-topmenu" aria-label="清除聊天">🗑︎</button></div><div class="v-chat-topmenu" data-role="chat-topmenu"><button data-action="clear-community-chat" data-community-key="${escapeHTML(key)}" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(ownerId)}" data-tier="${escapeHTML(tier)}">${own ? "清空全部聊天记录" : "清空本地聊天记录"}</button></div></header><div class="v-chat-body" data-role="chat-body">${cfg.announcement ? `<div class="v-community-announcement">公告 · ${escapeHTML(cfg.announcement)}</div>` : ""}${rowHTML || '<div class="v-group-empty">群聊已经建立。<br>Enter 只发送你的消息，小飞机会让群成员自己交流。</div>'}</div><div class="v-chat-composer-wrap"><input data-role="community-message-input" data-community-key="${escapeHTML(key)}" placeholder="发消息… · Enter发送" maxlength="600">${own ? `<button class="v-chat-plus" data-action="open-community-plus" data-community-key="${escapeHTML(key)}">＋</button>` : ""}<button class="v-chat-summon" data-action="summon-community-chat" data-community-key="${escapeHTML(key)}">➤</button></div></div>`);
              requestAnimationFrame(() => {
                const body = q('[data-screen="message"] [data-role="chat-body"]');
                if (body) body.scrollTop = body.scrollHeight;
              });
            };

            const renderCommunityItem = (item, key, own) => {
              if (item.kind === "poll") {
                const total = safeArray(item.votes).reduce((sum, n) => sum + Number(n || 0), 0);
                return `<div class="v-community-card-msg" data-longpress="delete-chat-item" data-thread-type="community" data-thread-key="${escapeHTML(key)}" data-item-id="${escapeHTML(item.id)}"><div class="v-kicker">群内投票</div><h4>${escapeHTML(item.question || "投票")}</h4><p>${escapeHTML(item.note || "")}</p><div class="v-poll-options">${safeArray(item.options).map((opt, index) => {
                  const count = Number(item.votes?.[index] || 0);
                  const voted = safeArray(item.myVotes).includes(index);
                  return `<button class="${voted ? "is-voted" : ""}" data-action="vote-community-poll" data-community-key="${escapeHTML(key)}" data-card-id="${escapeHTML(item.id)}" data-option-index="${index}" ${own ? "disabled" : ""}><span>${escapeHTML(opt)}</span><span>${count}${total ? ` · ${Math.round(count / total * 100)}%` : ""}</span></button>`;
                }).join("")}</div></div>`;
              }
              if (item.kind === "lottery") {
                const ended = item.status === "ended";
                return `<div class="v-community-card-msg" data-longpress="delete-chat-item" data-thread-type="community" data-thread-key="${escapeHTML(key)}" data-item-id="${escapeHTML(item.id)}"><div class="v-kicker">${item.botPosted ? "🤖 机器人 · 群内抽奖" : "群内抽奖"}</div><h4>${escapeHTML(item.prize || "抽奖")}</h4><p>${escapeHTML(item.note || "")}<br>${Number(item.winners || 1)} 人中奖 · ${Number(item.joinedCount || 0)} 人已参与${ended ? `<br>中奖：${escapeHTML(safeArray(item.results).join("、") || "暂无")}` : ""}</p>${own ? (ended ? `<button class="v-lottery-action" disabled>已开奖</button>` : `<button class="v-lottery-action" data-action="resolve-community-lottery" data-community-key="${escapeHTML(key)}" data-card-id="${escapeHTML(item.id)}">开奖并公布结果</button>`) : `<button class="v-lottery-action" data-action="join-community-lottery" data-community-key="${escapeHTML(key)}" data-card-id="${escapeHTML(item.id)}" ${ended ? "disabled" : ""}>${ended ? "已开奖" : item.joined ? "已参与" : "参与抽奖"}</button>`}</div>`;
              }
              if (item.kind === "bot_card") {
                const label = item.eventType === "scheduled" ? "📅 预约直播" : item.eventType === "live" ? "🔴 已开播" : item.eventType === "lottery_result" ? "🎉 抽奖结果" : "🤖 社群助手";
                return `<div class="v-community-card-msg" data-longpress="delete-chat-item" data-thread-type="community" data-thread-key="${escapeHTML(key)}" data-item-id="${escapeHTML(item.id)}"><div class="v-social-head" style="margin-bottom:8px"><div class="v-social-avatar">${avatarHTML(item.botAvatar || "", item.botName || "BOT")}</div><div class="v-meta"><div class="v-name"><span class="v-role-title is-bot">机器人</span>${escapeHTML(item.botName || "Vela 小助手")}</div><div class="v-sub">${escapeHTML(label)}</div></div></div><h4>${escapeHTML(item.title || "频道通知")}</h4><p>${escapeHTML(item.text || item.dateText || "")}</p></div>`;
              }
              return renderChatBubble(item, { group: true, threadKey: key, threadType: "community" });
            };

            const sendCommunityMessage = async (key) => {
              const input = q('[data-screen="message"] [data-role="community-message-input"]');
              const text = String(input?.value || "").trim();
              if (!text) return;
              const identity = state.identities.find(item => String(item.id) === String(state.viewerIdentityId)) || state.identities[0];
              state.communityChats[key] = safeArray(state.communityChats[key]);
              state.communityChats[key].push({ id: `group-${Date.now().toString(36)}`, kind: "text", sender: "user", role: (String(key).split(":")[0] === "identity" && String(key).split(":")[1] === String(state.viewerIdentityId)) ? "owner" : "member", name: identity?.displayName || identity?.handle || "user", avatar: identity?.avatar || "", text, translation: "", at: Date.now(), isUser: true });
              state.communityChats[key] = state.communityChats[key].slice(-300);
              if (input) input.value = "";
              await persist();
              const [ownerType, ownerId, tier] = String(key).split(":");
              openCommunityChat(ownerType, ownerId, tier);
            };

            const fallbackGroupReplies = (cfg) => [
              { name: `${cfg.fanName || "粉丝"}_01`, text: "我刚刚也在想这个哈哈，群里今天好热闹。", translation: "" },
              { name: `${cfg.fanName || "粉丝"}_02`, text: "다음 방송도 이런 분위기면 좋겠다", translation: "下次直播也是这种氛围就好了。" }
            ];

            const summonCommunityChat = async (key) => {
              const [ownerType, ownerId, tier] = String(key).split(":");
              const entity = getProfileEntity(ownerType, ownerId);
              if (!entity) return;
              const cfg = getCommunitySettings(ownerType, ownerId, tier);
              const rows = safeArray(state.communityChats[key]);
              const history = rows.slice(-22).map(item => item.kind === "text" ? `${item.sender === "user" ? "USER" : item.name || "成员"}: ${item.text || ""}` : `[${item.kind}] ${item.question || item.prize || item.title || ""}`).join("\n");
              const system = `你正在模拟 Vela 订阅社群中除 USER 之外的群成员。绝对禁止替 USER 发言、行动、投票或决定。小飞机表示“继续群聊”，即使 USER 没有新消息，也让群成员彼此自然交流，不必围着 USER。
群主：${profileName(entity, ownerType)}
粉丝称呼：${cfg.fanName}
粉丝画像：${cfg.fanProfile}
聊天内容倾向：${cfg.chatStyle}
返回严格 JSON 数组，1~3 条，例如：
[{"role":"member","name":"成员昵称","text":"消息","translation":"如果不是中文则给中文翻译，否则空字符串"}]
如果群主自然想参与，可以偶尔输出 {"role":"owner","text":"群主消息","translation":""}；不要每轮都让群主出现。成员风格要有差异，不要每轮所有人都说话。`;
              const aiText = await runVelaAI([{ role: "system", content: system }, { role: "user", content: `最近群聊：\n${history || "群里暂时安静，让成员自然开启一个话题。"}` }]);
              let data = extractJSON(aiText);
              if (!Array.isArray(data)) data = fallbackGroupReplies(cfg);
              data.slice(0, 3).forEach((item, index) => {
                const ownerReply = item?.role === "owner";
                state.communityChats[key].push({
                  id: `group-ai-${Date.now().toString(36)}-${index}`,
                  kind: "text",
                  sender: ownerReply ? "owner" : "other",
                  role: ownerReply ? "owner" : "member",
                  name: ownerReply ? profileName(entity, ownerType) : String(item?.name || `${cfg.fanName || "粉丝"}_${index + 1}`),
                  avatar: ownerReply ? String(entity.avatar || "") : initials(item?.name || cfg.fanName || "F"),
                  text: String(item?.text || "群里继续聊了起来。"),
                  translation: String(item?.translation || ""),
                  at: Date.now() + index
                });
              });
              state.communityChats[key] = state.communityChats[key].slice(-300);
              await persist();
              openCommunityChat(ownerType, ownerId, tier);
            };

            const openCommunityPlus = (key) => {
              const [ownerType, ownerId, tier] = String(key).split(":");
              if (!isOwnCommunity(ownerType, ownerId)) return;
              const sheet = q('[data-role="publish-sheet"]');
              const host = q('[data-role="publish-sheet-content"]');
              if (!sheet || !host) return;
              host.innerHTML = `<div class="v-publish-sheet-title"><h3>群内工具</h3><button data-action="close-publish-sheet">×</button></div><div class="v-chat-tool-grid"><button data-action="open-community-tool-form" data-community-key="${escapeHTML(key)}" data-tool-type="lottery">群内抽奖<small>发布奖品、人数和参与说明</small></button><button data-action="open-community-tool-form" data-community-key="${escapeHTML(key)}" data-tool-type="poll">群内投票<small>让大家帮你决定下次播什么</small></button></div>`;
              sheet.classList.add("is-open");
            };

            const openCommunityToolForm = (key, toolType) => {
              const sheet = q('[data-role="publish-sheet"]');
              const host = q('[data-role="publish-sheet-content"]');
              if (!sheet || !host) return;
              if (toolType === "lottery") {
                host.innerHTML = `<div class="v-publish-sheet-title"><h3>群内抽奖</h3><button data-action="open-community-plus" data-community-key="${escapeHTML(key)}">‹</button></div><div class="v-tool-form"><div class="v-field"><label>奖品</label><input data-community-tool-field="prize" maxlength="90" placeholder="奖品名称"></div><div class="v-field"><label>中奖人数</label><input data-community-tool-field="winners" type="number" min="1" max="100" value="1"></div><div class="v-field"><label>参与说明</label><textarea data-community-tool-field="note" maxlength="400" placeholder="参与截止、规则、备注"></textarea></div><button class="v-action" data-action="publish-community-tool" data-community-key="${escapeHTML(key)}" data-tool-type="lottery">发布抽奖</button></div>`;
              } else {
                host.innerHTML = `<div class="v-publish-sheet-title"><h3>群内投票</h3><button data-action="open-community-plus" data-community-key="${escapeHTML(key)}">‹</button></div><div class="v-tool-form"><div class="v-field"><label>投票问题</label><input data-community-tool-field="question" maxlength="120" placeholder="下次播什么？"></div><div class="v-field"><label>选项（每行一个，2~6项）</label><textarea data-community-tool-field="options" maxlength="420" placeholder="夜间杂谈&#10;游戏直播&#10;一起看电影"></textarea></div><div class="v-field"><label>投票说明</label><textarea data-community-tool-field="note" maxlength="260" placeholder="可留空"></textarea></div><button class="v-action" data-action="publish-community-tool" data-community-key="${escapeHTML(key)}" data-tool-type="poll">发布投票</button></div>`;
              }
              sheet.classList.add("is-open");
            };

            const publishCommunityTool = async (key, toolType) => {
              const sheet = q('[data-role="publish-sheet"]');
              if (!sheet) return;
              const read = name => String(sheet.querySelector(`[data-community-tool-field="${name}"]`)?.value || "").trim();
              state.communityChats[key] = safeArray(state.communityChats[key]);
              if (toolType === "lottery") {
                const prize = read("prize");
                if (!prize) { toast("先填写奖品"); return; }
                state.communityChats[key].push({ id: `lottery-${Date.now().toString(36)}`, kind: "lottery", sender: "owner", botPosted: false, prize, winners: Math.max(1, Math.min(100, Number(read("winners") || 1))), note: read("note"), joinedCount: 0, joined: false, status:"active", at: Date.now() });
              } else {
                const question = read("question");
                const options = read("options").split(/\n+/).map(x => x.trim()).filter(Boolean).slice(0, 6);
                if (!question || options.length < 2) { toast("至少填写两个投票选项"); return; }
                state.communityChats[key].push({ id: `poll-${Date.now().toString(36)}`, kind: "poll", sender: "owner", question, options, votes: options.map(() => 0), myVotes: [], note: read("note"), at: Date.now() });
              }
              q('[data-role="publish-sheet"]')?.classList.remove("is-open");
              await persist();
              const [ownerType, ownerId, tier] = String(key).split(":");
              openCommunityChat(ownerType, ownerId, tier);
            };

            const voteCommunityPoll = async (key, cardId, optionIndex) => {
              const card = safeArray(state.communityChats[key]).find(item => String(item.id) === String(cardId));
              const index = Number(optionIndex);
              if (!card || card.kind !== "poll" || !Number.isInteger(index) || index < 0 || index >= safeArray(card.options).length) return;
              card.votes = safeArray(card.votes).length === card.options.length ? card.votes : card.options.map((_, i) => Number(card.votes?.[i] || 0));
              card.myVotes = safeArray(card.myVotes);
              if (card.myVotes.includes(index)) return;
              card.myVotes = [index];
              card.votes[index] = Number(card.votes[index] || 0) + 1;
              await persist();
              const [ownerType, ownerId, tier] = String(key).split(":");
              openCommunityChat(ownerType, ownerId, tier);
            };

            const joinCommunityLottery = async (key, cardId) => {
              const card = safeArray(state.communityChats[key]).find(item => String(item.id) === String(cardId));
              if (!card || card.kind !== "lottery" || card.joined) return;
              card.joined = true;
              card.joinedCount = Number(card.joinedCount || 0) + 1;
              await persist();
              const [ownerType, ownerId, tier] = String(key).split(":");
              openCommunityChat(ownerType, ownerId, tier);
            };

            const resolveCommunityLottery = async (key, cardId) => {
              const [ownerType, ownerId] = String(key).split(":");
              if (!isOwnCommunity(ownerType, ownerId)) return;
              const card = safeArray(state.communityChats[key]).find(item => String(item.id) === String(cardId));
              if (!card || card.kind !== "lottery" || card.status === "ended") return;
              const cfg = getCommunitySettings(ownerType, ownerId, String(key).split(":")[2] || "free");
              const count = Math.max(1, Number(card.winners || 1));
              const synthetic = Array.from({length:Math.max(count, Math.min(12, Number(card.joinedCount || 0) || count + 3))}, (_,i) => `${cfg.fanName || "粉丝"}_${String(i+1).padStart(2,"0")}`);
              card.results = synthetic.slice(0, count);
              card.status = "ended";
              card.endedAt = Date.now();
              const text = `${card.prize || "群内抽奖"}：${card.results.join("、")}`;
              const tier = String(key).split(":")[2] || "free";
              pushCommunityBotEvent(ownerType, ownerId, "lottery_result", { title:"群内抽奖结果", text }, tier);
              await persist();
              openCommunityChat(ownerType, ownerId, tier);
            };

            const clearCommunityChat = async (key, ownerType, ownerId, tier) => {
              const own = isOwnCommunity(ownerType, ownerId);
              const wording = own ? "清空这个社群的全部聊天记录？" : "清空你本地看到的这段社群聊天记录？";
              if (typeof window.confirm === "function" && !window.confirm(wording)) return;
              state.communityChats[key] = [];
              await persist();
              openCommunityChat(ownerType, ownerId, tier);
            };

            const openCommunitySettings = (ownerType, ownerId, tier) => {
              if (!isOwnCommunity(ownerType, ownerId)) return;
              const entity = getProfileEntity(ownerType, ownerId);
              const cfg = getCommunitySettings(ownerType, ownerId, tier);
              if (!entity) return;
              openScreen("community-settings", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="community-settings">‹</button><div class="v-meta"><strong>编辑社群</strong><div class="v-hint">${tier === "paid" ? "付费订阅社群" : "免费订阅社群"}</div></div><button class="v-head-action" data-action="save-community-settings" data-owner-type="${escapeHTML(ownerType)}" data-owner-id="${escapeHTML(ownerId)}" data-tier="${escapeHTML(tier)}">保存</button></header><div class="v-subbody"><div class="v-community-edit-grid"><div class="v-community-preview"><div class="v-social-avatar" data-role="community-avatar-preview">${avatarHTML(cfg.avatar || entity.avatar || "", cfg.name)}</div><div class="v-meta"><div class="v-name">${escapeHTML(cfg.name)}</div><div class="v-sub">${escapeHTML(cfg.fanName)} · 社群设置</div></div></div><div class="v-card"><div class="v-editform"><div class="v-field"><label>群头像</label><input type="file" accept="image/*" data-community-avatar-file><input type="hidden" data-community-field="avatar" value="${escapeHTML(cfg.avatar || "")}"></div><div class="v-field"><label>群名</label><input data-community-field="name" maxlength="48" value="${escapeHTML(cfg.name)}"></div><div class="v-field"><label>群公告</label><textarea data-community-field="announcement" maxlength="600">${escapeHTML(cfg.announcement)}</textarea></div><div class="v-field"><label>粉丝名</label><input data-community-field="fanName" maxlength="24" value="${escapeHTML(cfg.fanName)}"></div><div class="v-field"><label>粉丝画像</label><textarea data-community-field="fanProfile" maxlength="800">${escapeHTML(cfg.fanProfile)}</textarea></div><div class="v-field"><label>聊天内容 / 氛围</label><textarea data-community-field="chatStyle" maxlength="800">${escapeHTML(cfg.chatStyle)}</textarea></div></div></div><div class="v-card"><div class="v-name">机器人助手</div><div class="v-community-botchecks"><label class="v-community-check"><span>启用机器人助手</span><input class="v-switch" type="checkbox" data-community-field="botEnabled" ${cfg.botEnabled ? "checked" : ""}></label></div><div class="v-community-bot-options" data-role="community-bot-options" ${cfg.botEnabled ? "" : "hidden"}><div class="v-community-bot-profile"><div class="v-community-bot-avatar" data-role="community-bot-avatar-preview">${avatarHTML(cfg.botAvatar || "", cfg.botName)}</div><div class="v-editform"><div class="v-field"><label>机器人名字</label><input data-community-field="botName" maxlength="28" value="${escapeHTML(cfg.botName)}"></div><div class="v-field"><label>机器人头像</label><input type="file" accept="image/*" data-community-bot-avatar-file><input type="hidden" data-community-field="botAvatar" value="${escapeHTML(cfg.botAvatar || "")}"></div></div></div><div class="v-field" style="margin-top:10px"><label>预约直播提前提醒 · 小时</label><input data-community-field="botLeadHours" type="number" min="1" max="24" value="${Number(cfg.botLeadHours || 3)}"></div><div class="v-community-botchecks"><label class="v-community-check"><span>推送预约直播提醒</span><input class="v-switch" type="checkbox" data-community-field="botScheduled" ${cfg.botScheduled ? "checked" : ""}></label><label class="v-community-check"><span>推送普通开播消息</span><input class="v-switch" type="checkbox" data-community-field="botLive" ${cfg.botLive ? "checked" : ""}></label><label class="v-community-check"><span>推送群内抽奖结果</span><input class="v-switch" type="checkbox" data-community-field="botLottery" ${cfg.botLottery ? "checked" : ""}></label></div></div></div></div></div>`);
            };

            const saveCommunitySettings = async (ownerType, ownerId, tier) => {
              const screen = q('[data-screen="community-settings"]');
              if (!screen || !isOwnCommunity(ownerType, ownerId)) return;
              const key = communityChatKey(ownerType, ownerId, tier);
              const read = name => String(screen.querySelector(`[data-community-field="${name}"]`)?.value || "").trim();
              const checked = name => Boolean(screen.querySelector(`[data-community-field="${name}"]`)?.checked);
              const current = getCommunitySettings(ownerType, ownerId, tier);
              state.communitySettings[key] = {
                ...current,
                avatar: read("avatar"),
                name: read("name") || current.name,
                announcement: read("announcement"),
                fanName: read("fanName") || current.fanName,
                fanProfile: read("fanProfile"),
                chatStyle: read("chatStyle"),
                botEnabled: checked("botEnabled"),
                botName: read("botName") || current.botName || "Vela 小助手",
                botAvatar: read("botAvatar"),
                botLeadHours: Math.max(1, Math.min(24, Number(read("botLeadHours") || current.botLeadHours || 3))),
                botScheduled: checked("botScheduled"),
                botLive: checked("botLive"),
                botLottery: checked("botLottery")
              };
              await persist();
              closeScreen("community-settings");
              openCommunityChat(ownerType, ownerId, tier);
              renderMessages();
              armCommunityBotTimers?.();
            };

            const pushCommunityBotEvent = (ownerType, ownerId, eventType, payload = {}, onlyTier = "") => {
              ["free","paid"].forEach(tier => {
                if (onlyTier && tier !== onlyTier) return;
                const key = communityChatKey(ownerType, ownerId, tier);
                const cfg = getCommunitySettings(ownerType, ownerId, tier);
                if (!cfg.botEnabled) return;
                if (eventType === "scheduled" && !cfg.botScheduled) return;
                if (eventType === "live" && !cfg.botLive) return;
                if (eventType === "lottery_result" && !cfg.botLottery) return;
                state.communityChats[key] = safeArray(state.communityChats[key]);
                state.communityChats[key].push({
                  id: `bot-${eventType}-${Date.now().toString(36)}-${tier}`,
                  kind: "bot_card",
                  sender: "bot",
                  role: "bot",
                  botName: cfg.botName || "Vela 小助手",
                  botAvatar: cfg.botAvatar || "",
                  eventType,
                  title: String(payload.title || (eventType === "live" ? "开播啦" : eventType === "lottery_result" ? "抽奖结果" : "今天有预约直播")),
                  text: String(payload.text || payload.dateText || ""),
                  dateText: String(payload.dateText || ""),
                  at: Date.now()
                });
                state.communityChats[key] = state.communityChats[key].slice(-300);
              });
            };

            const continueSubscription = (channelId) => {
              const channel = state.channels.find(ch => String(ch.id) === String(channelId));
              if (!channel) return;
              openProfile("channel", channel.id);
              renderProfileTab("channel", channel.id, "subscriptions");
            };

            const cancelSubscription = async (channelId) => {
              const channel = state.channels.find(ch => String(ch.id) === String(channelId));
              if (!channel || !state.subscriptions?.[String(channelId)]) return;
              if (typeof window.confirm === "function" && !window.confirm(`取消订阅 ${channel.name || channel.handle || "这个主播"}？`)) return;
              delete state.subscriptions[String(channelId)];
              delete state.wallet.subscriptionPurchases[String(channelId)];
              await persist();
              renderMessages();
              renderProfileTab("identity", state.viewerIdentityId, "subscriptions");
              toast("已取消订阅");
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
                return `<div class="v-rolecard"><div class="v-author"><div class="v-mini">${avatarHTML(char?.avatar || "", name)}</div><div class="v-meta"><div class="v-name">${escapeHTML(name)}</div><div class="v-sub">${escapeHTML(char?.name || "")}${char?.handle ? ` · ${escapeHTML(normalizeHandle(char.handle))}` : ""}</div></div><button class="v-action ${linked ? "light" : ""}" data-action="${linked ? "unlink-roche-character" : "link-roche-character"}" data-character-id="${escapeHTML(id)}">${linked ? "移除" : "加入 Vela"}</button></div>${linked ? `<div class="v-role-actions"><button class="v-action" data-action="edit-profile" data-owner-type="channel" data-owner-id="${escapeHTML(channel?.id || `roche-char-${id}`)}">编辑主页</button><button class="v-action light" data-action="open-profile-by-id" data-owner-type="channel" data-owner-id="${escapeHTML(channel?.id || `roche-char-${id}`)}">查看主页</button></div><div class="v-row"><div><b>角色自主商业合作</b><small>关闭后这个角色可以纯玩，不会被系统主动塞商业任务。</small></div><button class="v-action ${cfg.enabled ? "" : "light"}" data-action="toggle-role-commerce" data-character-id="${escapeHTML(id)}">${cfg.enabled ? "已开启" : "已关闭"}</button></div><div class="v-row"><div style="width:100%"><b>自主接单倾向 · <span data-role="commerce-value" data-character-id="${escapeHTML(id)}">${Number(cfg.tendency || 0)}%</span></b><small>以后由 AI 结合人设判断，不是硬概率。</small><input data-role="commerce-range" data-character-id="${escapeHTML(id)}" type="range" min="0" max="100" value="${Number(cfg.tendency || 0)}" style="width:100%;margin-top:10px;accent-color:var(--v-blue)"></div></div><div class="v-row"><div><b>第二频道 / 小号</b><small>默认不创建，后续可以手动设计或让 AI 根据人设生成。</small></div><button class="v-action light" data-action="noop">设置</button></div>` : ""}</div>`;
              }).join("") : `<div class="v-empty">没有读取到 Roche 角色。<br>可以先点右上角“刷新”。</div>`;

              openScreen("roles", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="roles">‹</button><div class="v-meta"><strong>角色与频道管理</strong><div class="v-hint">引入 Roche 角色后，在这里管理主页与商业合作</div></div><button class="v-head-action" data-action="refresh-roche-roles">刷新</button></header><div class="v-subbody"><div class="v-card"><p class="v-hint" style="margin-top:0">加入角色后可以直接编辑他的 Vela 主页；主页装饰只保存在 Vela，不会修改 Roche 原人设资料。</p>${status}${rows}</div></div>`);
            };

            const deleteDMConversation = async messageId => {
              const index = state.messages.findIndex(item => String(item.id) === String(messageId));
              if (index < 0) return;
              const msg = state.messages[index];
              if (typeof window.confirm === "function" && !window.confirm(`删除与 ${msg.name || "这个账号"} 的私信？聊天记录也会一起删除。`)) return;
              state.messages.splice(index, 1);
              delete state.dmThreads[String(messageId)];
              await persist();
              if (q('[data-screen="message"]')?.classList.contains("is-open")) closeScreen("message");
              renderMessages();
              toast("私信已删除");
            };

            const deleteChatItem = async (threadType, threadKey, itemId) => {
              const store = threadType === "community" ? state.communityChats : state.dmThreads;
              const rows = safeArray(store?.[String(threadKey)]);
              const index = rows.findIndex(item => String(item.id) === String(itemId));
              if (index < 0) return;
              if (typeof window.confirm === "function" && !window.confirm("删除这条消息？")) return;
              rows.splice(index, 1);
              store[String(threadKey)] = rows;
              await persist();
              if (threadType === "community") {
                const [ownerType, ownerId, tier] = String(threadKey).split(":");
                openCommunityChat(ownerType, ownerId, tier);
              } else {
                const msg = state.messages.find(item => String(item.id) === String(threadKey));
                if (msg) {
                  const last = [...rows].reverse().find(item => item.kind === "text");
                  msg.preview = last?.text || "";
                }
                renderMessages();
                renderDirectThread(threadKey);
              }
            };

            let appointmentTimer = null;
            let communityBotTimer = null;
            let appointmentReminderShown = false;

            const viewerAppointments = () => {
              const viewerId = String(state.viewerIdentityId || "");
              const rows = [];
              state.identities.forEach(entity => {
                const item = entity.scheduledLive;
                if (!item) return;
                const participants = safeArray(item.participantIds);
                if (String(entity.id) === viewerId || participants.includes(viewerId)) rows.push({ ownerType: "identity", ownerId: entity.id, entity, item });
              });
              state.channels.forEach(entity => {
                const item = entity.scheduledLive;
                if (!item) return;
                if (safeArray(item.participantIds).includes(viewerId)) rows.push({ ownerType: "channel", ownerId: entity.id, entity, item });
              });
              return rows.sort((a, b) => {
                const av = Number(a.item.scheduledAt || Number.MAX_SAFE_INTEGER);
                const bv = Number(b.item.scheduledAt || Number.MAX_SAFE_INTEGER);
                return av - bv;
              });
            };

            const openAppointmentReminder = (entry, due = false) => {
              if (!entry?.item) return;
              const item = entry.item;
              const hostName = profileName(entry.entity, entry.ownerType);
              openScreen("appointment-reminder", `<header class="v-subhead"><button data-action="close-screen" data-screen-name="appointment-reminder">‹</button><div class="v-meta"><strong>${due ? "直播时间到了" : "预约提醒"}</strong><div class="v-hint">${escapeHTML(item.dateText || "时间待定")}</div></div></header><div class="v-appointment-card"><h3>${escapeHTML(item.title || "预约直播")}</h3><p>主场：${escapeHTML(hostName)}<br>${escapeHTML(item.content || "")}${item.mode ? `<br>${item.mode === "same-room" ? "线下同镜" : "线上联播"}` : ""}</p><div class="v-appointment-actions"><button class="v-go" data-action="${due ? "go-appointment-live" : "view-appointment-host"}" data-owner-type="${escapeHTML(entry.ownerType)}" data-owner-id="${escapeHTML(entry.ownerId)}">${due ? "进入直播间" : "查看预约"}</button><button class="v-later" data-action="close-screen" data-screen-name="appointment-reminder">稍后</button></div></div>`);
            };

            const checkAppointmentReminder = ({ entry = false } = {}) => {
              const rows = viewerAppointments();
              if (!rows.length) return;
              const now = Date.now();
              const due = rows.find(x => Number(x.item.scheduledAt || 0) > 0 && Number(x.item.scheduledAt) <= now + 60 * 1000);
              if (due) {
                openAppointmentReminder(due, true);
                return;
              }
              if (entry && !appointmentReminderShown) {
                appointmentReminderShown = true;
                openAppointmentReminder(rows[0], false);
              }
            };

            const armAppointmentTimer = () => {
              if (appointmentTimer) clearTimeout(appointmentTimer);
              const rows = viewerAppointments().filter(x => Number(x.item.scheduledAt || 0) > Date.now());
              if (!rows.length) return;
              const delay = Math.max(0, Math.min(2147480000, Number(rows[0].item.scheduledAt) - Date.now()));
              appointmentTimer = setTimeout(() => checkAppointmentReminder({ entry: false }), delay);
            };

            const allHostAppointments = () => {
              const rows = [];
              state.identities.forEach(entity => { if (entity?.scheduledLive) rows.push({ ownerType:"identity", ownerId:entity.id, entity, item:entity.scheduledLive }); });
              state.channels.forEach(entity => { if (entity?.scheduledLive) rows.push({ ownerType:"channel", ownerId:entity.id, entity, item:entity.scheduledLive }); });
              return rows;
            };

            const processCommunityBotReminders = async () => {
              if (communityBotTimer) { clearTimeout(communityBotTimer); communityBotTimer = null; }
              const now = Date.now();
              let nextDue = Number.MAX_SAFE_INTEGER;
              let changed = false;
              for (const entry of allHostAppointments()) {
                const scheduledAt = Number(entry.item?.scheduledAt || 0);
                if (!scheduledAt || scheduledAt <= now) continue;
                entry.item.botReminderSentKeys = { ...(entry.item.botReminderSentKeys || {}) };
                for (const tier of ["free","paid"]) {
                  const key = communityChatKey(entry.ownerType, entry.ownerId, tier);
                  const cfg = getCommunitySettings(entry.ownerType, entry.ownerId, tier);
                  if (!cfg.botEnabled || !cfg.botScheduled) continue;
                  const due = scheduledAt - Math.max(1, Number(cfg.botLeadHours || 3)) * 60 * 60 * 1000;
                  if (now >= due && !entry.item.botReminderSentKeys[key]) {
                    pushCommunityBotEvent(entry.ownerType, entry.ownerId, "scheduled", {
                      title: entry.item.title || "今天有预约直播",
                      dateText: entry.item.dateText || "",
                      text: `今天 ${entry.item.dateText || "稍后"} 开播，记得来。`
                    }, tier);
                    entry.item.botReminderSentKeys[key] = true;
                    changed = true;
                  } else if (!entry.item.botReminderSentKeys[key] && due > now) {
                    nextDue = Math.min(nextDue, due);
                  }
                }
              }
              if (changed) await persist();
              if (nextDue < Number.MAX_SAFE_INTEGER) {
                const delay = Math.max(250, Math.min(2147480000, nextDue - Date.now()));
                communityBotTimer = setTimeout(() => processCommunityBotReminders(), delay);
              }
            };

            const armCommunityBotTimers = () => { processCommunityBotReminders(); };

            const startAppointmentHostLive = async (ownerType, ownerId) => {
              const entity = getProfileEntity(ownerType, ownerId);
              const item = entity?.scheduledLive;
              if (!entity || !item) return;
              if (ownerType === "channel") {
                const live = {
                  ...entity,
                  id: entity.id,
                  ownerType: "channel",
                  ownerId: entity.id,
                  title: item.title || "预约直播",
                  category: item.content || "预约直播",
                  mode: item.mode || "solo",
                  startedAt: Date.now(),
                  live: true,
                  viewers: Math.max(1, Number(entity.viewers || 0)),
                  userParticipant: safeArray(item.participantIds).map(String).includes(String(state.viewerIdentityId)),
                  participants: safeArray(item.participants).filter(p => String(p?.id || "") !== String(entity.id)).map(p => {
                    if (String(p?.id || "") === String(state.viewerIdentityId)) {
                      const viewer = state.identities.find(x => String(x.id) === String(state.viewerIdentityId));
                      return { id:String(viewer?.id || p.id), name:String(viewer?.displayName || p.name || "user"), handle:String(viewer?.handle || ""), avatar:String(viewer?.avatar || "") };
                    }
                    const ch = state.channels.find(x => String(x.id) === String(p?.id || ""));
                    return { id:String(p?.id || ""), name:String(ch?.name || p?.name || "嘉宾"), handle:String(ch?.handle || ""), avatar:String(ch?.avatar || "") };
                  }),
                  business: item.business ? { ...item.business } : null
                };
                entity.live = true;
                entity.title = live.title;
                entity.scheduledLive = null;
                pushCommunityBotEvent("channel", entity.id, "live", { title: live.title, text: "直播已经开始，点击频道即可进入。" });
                await persist();
                openLive(live);
              } else {
                const live = { id: `own-scheduled-${entity.id}-${Date.now().toString(36)}`, ownerType: "identity", ownerId: entity.id, isOwn: true, name: entity.displayName || "我的频道", handle: entity.handle || "@me", avatar: entity.avatar || "U", followers: Number(entity.followers || 0), title: item.title || "我的直播间", category: item.content || "预约直播", cover: item.cover || "", viewers: 0, mode: item.mode || "solo", accessMode: "public", ageRequirement: "none", participants: safeArray(item.participants).filter(p => String(p?.id || "") !== String(entity.id)).map(p => { const ch = state.channels.find(x => String(x.id) === String(p?.id || "")); return { id:String(p?.id || ""), name:String(ch?.name || p?.name || "嘉宾"), handle:String(ch?.handle || ""), avatar:String(ch?.avatar || "") }; }), business: item.business ? { ...item.business } : null, startedAt: Date.now() };
                entity.live = true;
                entity.activeLive = { ...live };
                entity.scheduledLive = null;
                state.liveChat = [];
                state.pendingLiveUserMessage = null;
                pushCommunityBotEvent("identity", entity.id, "live", { title: live.title, text: "直播已经开始。" });
                await persist();
                openLive(live);
              }
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
            armAppointmentTimer();
            armCommunityBotTimers();
            settleWeeklySubscriptions();
            setTimeout(() => checkAppointmentReminder({ entry: true }), 420);

            let longPressTimer = null;
            let suppressClickUntil = 0;
            const triggerLongPressAction = async target => {
              const kind = String(target?.dataset?.longpress || "");
              if (!kind) return;
              suppressClickUntil = Date.now() + 650;
              if (kind === "delete-dm-conversation") {
                await deleteDMConversation(target.dataset.messageId || "");
              } else if (kind === "delete-chat-item") {
                await deleteChatItem(target.dataset.threadType || "dm", target.dataset.threadKey || "", target.dataset.itemId || "");
              }
            };
            root.addEventListener("pointerdown", event => {
              const target = event.target.closest?.("[data-longpress]");
              if (!target || !root.contains(target)) return;
              if (longPressTimer) clearTimeout(longPressTimer);
              longPressTimer = setTimeout(() => triggerLongPressAction(target), 560);
            });
            ["pointerup","pointercancel","pointerleave"].forEach(type => root.addEventListener(type, () => {
              if (longPressTimer) clearTimeout(longPressTimer);
              longPressTimer = null;
            }));
            root.addEventListener("pointermove", event => {
              if (!longPressTimer) return;
              if (Math.abs(Number(event.movementX || 0)) > 3 || Math.abs(Number(event.movementY || 0)) > 3) {
                clearTimeout(longPressTimer); longPressTimer = null;
              }
            });
            root.addEventListener("contextmenu", event => {
              const target = event.target.closest?.("[data-longpress]");
              if (!target || !root.contains(target)) return;
              event.preventDefault();
              triggerLongPressAction(target);
            });

            root.addEventListener("click", async (event) => {
              if (Date.now() < suppressClickUntil) { event.preventDefault(); event.stopPropagation(); return; }
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
              } else if (action === "wallet-bind-account" || action === "wallet-edit-account") {
                openWalletBind();
              } else if (action === "save-wallet-account") {
                await saveWalletAccount();
              } else if (action === "wallet-recharge-coin") {
                openWalletCoinRecharge();
              } else if (action === "confirm-wallet-coin-recharge") {
                await confirmWalletCoinRecharge();
              } else if (action === "wallet-cashout-coin") {
                openWalletCoinCashout();
              } else if (action === "confirm-wallet-coin-cashout") {
                await confirmWalletCoinCashout();
              } else if (action === "wallet-withdraw") {
                openWalletWithdraw();
              } else if (action === "confirm-wallet-withdraw") {
                await confirmWalletWithdraw();
              } else if (action === "wallet-refresh-fx") {
                await loadWalletFxRates({ force:true });
                renderWallet();
                toast("结算汇率已更新");
              } else if (action === "open-publish") {
                renderPublishMenu();
                q('[data-role="publish-sheet"]')?.classList.add("is-open");
              } else if (action === "close-publish-sheet") {
                q('[data-role="publish-sheet"]')?.classList.remove("is-open");
              } else if (action === "render-publish-menu") {
                renderPublishMenu();
              } else if (action === "clear-live-cover") {
                const hidden = q('[data-role="publish-sheet"] [data-live-publish-field="cover"]');
                const url = q('[data-role="publish-sheet"] [data-live-cover-url]');
                if (hidden) hidden.value = "";
                if (url) url.value = "";
                setPublishImagePreview("live", "");
              } else if (action === "clear-post-image") {
                const hidden = q('[data-role="publish-sheet"] [data-post-field="image"]');
                const url = q('[data-role="publish-sheet"] [data-post-image-url]');
                if (hidden) hidden.value = "";
                if (url) url.value = "";
                setPublishImagePreview("post", "");
              } else if (action === "open-live-publisher") {
                openLivePublisher();
              } else if (action === "start-prepared-live") {
                await startPreparedLive();
              } else if (action === "open-publish-post") {
                openCommunityPostEditor("identity", state.viewerIdentityId);
              } else if (action === "open-invite-guest") {
                openInviteGuest();
              } else if (action === "confirm-invite-guest") {
                await confirmInviteGuest();
              } else if (action === "dm-tab") {
                state.dmTab = button.dataset.dmTab === "community" ? "community" : "dm";
                await persist();
                renderMessages();
              } else if (action === "continue-subscription") {
                continueSubscription(button.dataset.channelId || "");
              } else if (action === "cancel-subscription") {
                await cancelSubscription(button.dataset.channelId || "");
              } else if (action === "subscribe-channel") {
                const channelId = String(button.dataset.channelId || "");
                const tier = button.dataset.tier === "paid" ? "paid" : "free";
                const channel = state.channels.find(ch => String(ch.id) === channelId);
                if (channelId && channel) {
                  const currentTier = state.subscriptions[channelId] || "none";
                  if (tier === "paid" && currentTier !== "paid") {
                    const cfg = getSubscriptionProfile("channel", channelId).paid;
                    const coinPrice = Math.max(1, Math.round(Number(cfg.coinPrice || 0)));
                    if (Number(state.wallet.coinBalance || 0) < coinPrice) { toast(`Vela Coin 不足，需要 🔷${coinPrice.toLocaleString("zh-CN")}`); return; }
                    state.wallet.coinBalance -= coinPrice;
                    state.wallet.subscriptionPurchases[channelId] = { tier:"paid", coinPriceSnapshot:coinPrice, subscribedAt:Date.now(), identityId:state.viewerIdentityId };
                    state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-sub`, type:"coin", title:"付费订阅", note:`${channel.name || channel.handle || "频道"} · ${cfg.name || "会员"}`, coin:-coinPrice, at:Date.now() });
                    // Char / other creator side records the exact Coin price that was paid.
                    recordSubscriptionAccrual("channel", channelId, coinPrice, `订阅者 ${state.viewerIdentityId}`);
                    state.subscriptions[channelId] = "paid";
                  } else if (tier === "free" && currentTier === "none") {
                    state.wallet.subscriptionPurchases[channelId] = { tier:"free", coinPriceSnapshot:0, subscribedAt:Date.now(), identityId:state.viewerIdentityId };
                    state.subscriptions[channelId] = "free";
                  }
                  await persist();
                  renderMessages();
                  renderWallet();
                  if (q('[data-screen="profile"]')?.classList.contains("is-open")) {
                    openProfile("channel", channel.id);
                    renderProfileTab("channel", channel.id, "subscriptions");
                  }
                  toast(tier === "paid" ? "已使用 Vela Coin 订阅" : "已加入免费订阅");
                }
              } else if (action === "set-host-input-mode") {
                setHostInputMode(button.dataset.hostInputMode || "speech");
              } else if (action === "send-host-stage-input") {
                await sendHostStageInput();
              } else if (action === "summon-host-live") {
                await summonHostLive();
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
              } else if (action === "open-own-profile-live") {
                const identity = state.identities.find(x => String(x.id) === String(button.dataset.identityId || ""));
                if (identity?.activeLive) openLive({ ...identity.activeLive });
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
              } else if (action === "open-live-lottery") {
                openLiveLotteryPanel();
              } else if (action === "close-live-economy") {
                closeLiveEconomyPanel();
              } else if (action === "add-live-prize-row") {
                const host = q('[data-screen="live"] [data-role="live-prize-rows"]');
                if (host) host.insertAdjacentHTML("beforeend", livePrizeRowHTML({}, host.querySelectorAll('[data-prize-row]').length));
              } else if (action === "remove-live-prize-row") {
                const row = button.closest('[data-prize-row]');
                const host = q('[data-screen="live"] [data-role="live-prize-rows"]');
                if (row && host && host.querySelectorAll('[data-prize-row]').length > 1) row.remove();
                else toast("至少保留一个奖项");
              } else if (action === "save-live-lottery") {
                await saveLiveLottery();
              } else if (action === "resolve-live-lottery") {
                await resolveLiveLottery();
              } else if (action === "new-live-lottery") {
                const live = state.liveSession;
                if (live) { getLiveStats(live).lottery = null; await persist(); openLiveLotteryPanel(); }
              } else if (action === "open-live-ad") {
                openLiveAdPanel();
              } else if (action === "save-live-ad") {
                await saveLiveAd();
              } else if (action === "clear-live-ad") {
                await clearLiveAd();
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
              } else if (action === "end-current-live" || action === "end-own-live") {
                await endCurrentLive();
              } else if (action === "continue-live") {
                await advanceLive({ fromUser: false });
              } else if (action === "summon-live") {
                await summonLive();
              } else if (action === "delete-live-chat") {
                await deleteLiveChat(button.dataset.chatIndex);
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
                if (Number(state.wallet?.coinBalance || 0) < amount) { toast("Vela Coin 余额不足"); return; }
                state.wallet.coinBalance = Number(state.wallet.coinBalance || 0) - amount;
                state.wallet.transactions.unshift({ id:`tx-${Date.now().toString(36)}-giftout`, type:"coin", title:"直播送礼", note: live.handle || live.name || "直播间", coin: -amount, at:Date.now() });
                const stats = getLiveStats(live);
                stats.userGiftTotal = Number(stats.userGiftTotal || 0) + amount;
                stats.giftReceivedCoin = Number(stats.giftReceivedCoin || 0) + amount;
                const ownHandle = state.identities.find(x => x.id === state.viewerIdentityId)?.handle || "@user";
                stats.gifts.push({ user:ownHandle, amount });
                stats.heat = Math.min(100, Number(stats.heat || 50) + Math.min(18, amount / 80));
                advanceViewerCount(live, { heatBoost: Math.min(10, amount / 120) });
                state.liveChat.push({ user: "系统", avatar: "🎁", text: `${state.identities.find(x => x.id === state.viewerIdentityId)?.handle || "@user"} 送出了 🔷${amount} 的礼物`, translation: "", at:Date.now() });
                await persist();
                renderLiveChatLines();
                renderLiveHUD();
                q('[data-screen="live"] [data-role="gift-picker"]')?.classList.remove("is-open");
                toast(`已送出 🔷${amount}`);
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
                renderProfileTab(button.dataset.ownerType || "identity", button.dataset.ownerId || "", button.dataset.profileTab || "activity");
              } else if (action === "open-subscription-settings") {
                openSubscriptionSettings(button.dataset.ownerType || "identity", button.dataset.ownerId || "");
              } else if (action === "save-subscription-settings") {
                await saveSubscriptionSettings(button.dataset.ownerType || "identity", button.dataset.ownerId || "");
              } else if (action === "message-channel") {
                await messageChannel(button.dataset.channelId || "");
              } else if (action === "open-community-chat") {
                openCommunityChat(button.dataset.ownerType || "channel", button.dataset.ownerId || "", button.dataset.tier || "free");
              } else if (action === "send-community-message") {
                await sendCommunityMessage(button.dataset.communityKey || "");
              } else if (action === "send-direct-message") {
                await sendDirectMessage(button.dataset.messageId || "");
              } else if (action === "summon-direct-message") {
                await summonDirectMessage(button.dataset.messageId || "");
              } else if (action === "open-dm-plus") {
                openDMPlus(button.dataset.messageId || "");
              } else if (action === "open-dm-tool-form") {
                openDMToolForm(button.dataset.messageId || "", button.dataset.toolType || "live_invite");
              } else if (action === "send-dm-tool-card") {
                await sendDMToolCard(button.dataset.messageId || "", button.dataset.toolType || "live_invite");
              } else if (action === "accept-dm-card") {
                await acceptDMCard(button.dataset.messageId || "", button.dataset.cardId || "");
              } else if (action === "decline-dm-card") {
                await declineDMCard(button.dataset.messageId || "", button.dataset.cardId || "");
              } else if (action === "cancel-dm-card") {
                await cancelDMCard(button.dataset.messageId || "", button.dataset.cardId || "");
              } else if (action === "edit-business-card") {
                openBusinessCardEditor(button.dataset.messageId || "", button.dataset.cardId || "");
              } else if (action === "send-business-revision") {
                await sendBusinessRevision(button.dataset.messageId || "", button.dataset.cardId || "");
              } else if (action === "fill-winner-card") {
                fillWinnerCard(button.dataset.messageId || "", button.dataset.cardId || "");
              } else if (action === "save-winner-reply") {
                await saveWinnerReply(button.dataset.messageId || "", button.dataset.cardId || "");
              } else if (action === "toggle-chat-topmenu") {
                q('[data-screen="message"] [data-role="chat-topmenu"]')?.classList.toggle("is-open");
              } else if (action === "clear-direct-chat") {
                await clearDirectChat(button.dataset.messageId || "");
              } else if (action === "summon-community-chat") {
                await summonCommunityChat(button.dataset.communityKey || "");
              } else if (action === "open-community-plus") {
                openCommunityPlus(button.dataset.communityKey || "");
              } else if (action === "open-community-tool-form") {
                openCommunityToolForm(button.dataset.communityKey || "", button.dataset.toolType || "poll");
              } else if (action === "publish-community-tool") {
                await publishCommunityTool(button.dataset.communityKey || "", button.dataset.toolType || "poll");
              } else if (action === "vote-community-poll") {
                await voteCommunityPoll(button.dataset.communityKey || "", button.dataset.cardId || "", button.dataset.optionIndex || "0");
              } else if (action === "join-community-lottery") {
                await joinCommunityLottery(button.dataset.communityKey || "", button.dataset.cardId || "");
              } else if (action === "resolve-community-lottery") {
                await resolveCommunityLottery(button.dataset.communityKey || "", button.dataset.cardId || "");
              } else if (action === "clear-community-chat") {
                await clearCommunityChat(button.dataset.communityKey || "", button.dataset.ownerType || "channel", button.dataset.ownerId || "", button.dataset.tier || "free");
              } else if (action === "edit-community") {
                openCommunitySettings(button.dataset.ownerType || "identity", button.dataset.ownerId || "", button.dataset.tier || "free");
              } else if (action === "save-community-settings") {
                await saveCommunitySettings(button.dataset.ownerType || "identity", button.dataset.ownerId || "", button.dataset.tier || "free");
              } else if (action === "view-appointment-host") {
                closeScreen("appointment-reminder");
                openProfile(button.dataset.ownerType || "channel", button.dataset.ownerId || "");
              } else if (action === "go-appointment-live") {
                closeScreen("appointment-reminder");
                await startAppointmentHostLive(button.dataset.ownerType || "channel", button.dataset.ownerId || "");
              } else if (action === "close-publish-sheet") {
                q('[data-role="publish-sheet"]')?.classList.remove("is-open");
              } else if (action === "open-replay") {
                openReplayDetail(button.dataset.replayId || "");
              } else if (action === "delete-replay") {
                await deleteReplay(button.dataset.replayId || "");
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
                  renderProfileTab("identity", identity.id, "activity");
                  toast("已取消预约");
                }
              } else if (action === "start-scheduled-live") {
                const identity = state.identities.find(x => String(x.id) === String(button.dataset.identityId || ""));
                if (identity?.scheduledLive) {
                  closeScreen("schedule-detail");
                  await startAppointmentHostLive("identity", identity.id);
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
                openLivePublisher();
              } else if (action === "biz-demo" || action === "noop") {
                toast("这个入口会在后续继续完善");
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
                await sendLiveChatOnly();
              } else if (target?.matches?.('[data-role="host-live-input"]')) {
                event.preventDefault();
                await sendHostStageInput();
              } else if (target?.matches?.('[data-role="dm-input"]')) {
                event.preventDefault();
                await sendDirectMessage(target.dataset.messageId || "");
              } else if (target?.matches?.('[data-role="community-message-input"]')) {
                event.preventDefault();
                await sendCommunityMessage(target.dataset.communityKey || "");
              }
            });

            root.addEventListener("change", async (event) => {
              const input = event.target;
              if (input?.matches?.('[data-live-cover-file]')) {
                try {
                  const value = await readLocalImage(input.files?.[0]);
                  if (!value) return;
                  const hidden = q('[data-role="publish-sheet"] [data-live-publish-field="cover"]');
                  const url = q('[data-role="publish-sheet"] [data-live-cover-url]');
                  if (hidden) hidden.value = value;
                  if (url) url.value = "";
                  setPublishImagePreview("live", value);
                } catch (err) { toast(String(err?.message || err || "读取图片失败")); }
              } else if (input?.matches?.('[data-post-image-file]')) {
                try {
                  const value = await readLocalImage(input.files?.[0]);
                  if (!value) return;
                  const hidden = q('[data-role="publish-sheet"] [data-post-field="image"]');
                  const url = q('[data-role="publish-sheet"] [data-post-image-url]');
                  if (hidden) hidden.value = value;
                  if (url) url.value = "";
                  setPublishImagePreview("post", value);
                } catch (err) { toast(String(err?.message || err || "读取图片失败")); }
              } else if (input?.matches?.('[data-community-avatar-file]')) {
                try {
                  const value = await readLocalImage(input.files?.[0]);
                  if (!value) return;
                  const hidden = q('[data-screen="community-settings"] [data-community-field="avatar"]');
                  if (hidden) hidden.value = value;
                  const preview = q('[data-screen="community-settings"] [data-role="community-avatar-preview"]');
                  if (preview) preview.innerHTML = `<img src="${escapeHTML(value)}" alt="">`;
                } catch (err) { toast(String(err?.message || err || "读取头像失败")); }
              } else if (input?.matches?.('[data-community-bot-avatar-file]')) {
                try {
                  const value = await readLocalImage(input.files?.[0]);
                  if (!value) return;
                  const hidden = q('[data-screen="community-settings"] [data-community-field="botAvatar"]');
                  if (hidden) hidden.value = value;
                  const preview = q('[data-screen="community-settings"] [data-role="community-bot-avatar-preview"]');
                  if (preview) preview.innerHTML = `<img src="${escapeHTML(value)}" alt="">`;
                } catch (err) { toast(String(err?.message || err || "读取机器人头像失败")); }
              } else if (input?.matches?.('[data-community-field="botEnabled"]')) {
                const options = q('[data-screen="community-settings"] [data-role="community-bot-options"]');
                if (options) options.hidden = !input.checked;
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
              } else if (input?.matches?.('[data-live-cover-url]')) {
                const value = String(input.value || "").trim();
                const hidden = q('[data-role="publish-sheet"] [data-live-publish-field="cover"]');
                if (hidden) hidden.value = value;
                setPublishImagePreview("live", value);
              } else if (input?.matches?.('[data-post-image-url]')) {
                const value = String(input.value || "").trim();
                const hidden = q('[data-role="publish-sheet"] [data-post-field="image"]');
                if (hidden) hidden.value = value;
                setPublishImagePreview("post", value);
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
