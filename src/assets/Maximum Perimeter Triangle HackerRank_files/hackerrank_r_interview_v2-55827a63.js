(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{"+RGH":function(e,t,a){},"/D9Q":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("cDcd"),l=a.n(n),s=a("/MKj"),r=a("OMhZ");function i(e){const t=Object(s.e)();l.a.useEffect(()=>{const a=e.map(e=>e.slug||e);t(r.a.fetchPlaylistsMockTestProgress({playlistSlugs:a}))},[])}},"15ay":function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));a("a1Th");var n=a("pVnL"),l=a.n(n),s=a("QILm"),r=a.n(s),i=a("cDcd"),c=a.n(i),o=a("TSYQ"),m=a.n(o),u=a("vN+2"),d=a.n(u),p=a("YZNL");a("lX+r");function v(e){let t=e.children,a=r()(e,["children"]);return c.a.createElement("div",l()({onClick:e=>e.stopPropagation()},a),t)}t.b=function(e){const t=e.active,a=e.to,n=e.children,s=e.onClick,i=void 0===s?d.a:s,o=e.className,u=r()(e,["active","to","children","onClick","className"]);if(t&&!a)throw new Error("`active` prop should be used only when whole card is interactive. Either provide `to` prop or set `active` to `false`");const v=c.a.useCallback(e=>{if(!a)return void i(e);var t;window.getSelection().toString()||(null===(t=document.querySelector(`[href="${a}"]`))||void 0===t||t.click())},[a]);return c.a.createElement(p.a,l()({active:t,onClick:v,className:m()("theme-m card",o)},u),n)}},"3vnb":function(e,t,a){},"5LoG":function(e,t,a){},"9/km":function(e,t,a){},HGTv:function(e,t,a){},ItHR:function(e,t,a){"use strict";var n=a("cDcd"),l=a.n(n);a("9/km");t.a=function(e){const t=e.heading,a=e.content;return l.a.createElement("div",{className:"interview-info-banner"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"interview-info-banner-heading"},t),l.a.createElement("p",{className:"interview-info-banner-text"},a)))}},"K/+P":function(e,t,a){},QLNv:function(e,t,a){},"lX+r":function(e,t,a){},lqfM:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("cDcd"),l=a.n(n),s=a("/MKj"),r=a("OMhZ");function i(e){const t=Object(s.e)();l.a.useEffect(()=>{e.mockTestIds||t(r.a.fetchAllMockTestsForPlaylist({playlistSlug:e.slug}))},[e])}},nHpw:function(e,t,a){"use strict";a.r(t),a.d(t,"PureInterviewHome",(function(){return u})),a.d(t,"mapStateToProps",(function(){return d}));var n=a("cDcd"),l=a.n(n),s=a("ANjH"),r=a("/MKj"),i=a("zUH+"),c=a("ItHR"),o=a("/D9Q"),m=a("rWpX");a("3vnb");function u(e){const t=e.parentPrepKit,a=e.prepKits,n=t.description;return Object(o.a)(a),l.a.createElement("div",{className:"interview-home"},l.a.createElement(c.a,{heading:"Prepare for your Interview",content:n}),l.a.createElement("div",{className:"container interview-section"},l.a.createElement("h2",{className:"text-para-headline bold interview-section-title"},"HackerRank Kits"),l.a.createElement("div",{className:"interview-section-grid"},a.map(e=>l.a.createElement(m.a,{key:e.slug,playlist:e})))))}const d=e=>({parentPrepKit:Object(i.b)(e),prepKits:Object(i.c)(e)});t.default=Object(s.c)(Object(r.d)(d))(u)},pNBQ:function(e,t,a){},rWpX:function(e,t,a){"use strict";a("a1Th");var n=a("cDcd"),l=a.n(n),s=a("MGin"),r=a("YZNL"),i=a("tWBh"),c=a("lqfM");a("HGTv");t.a=function(e){const t=e.playlist,a=Object(n.useRef)(),o=t.name,m=t.slug,u=t.image_url,d=t.skills,p=t.hacker_playlist_progress,v=void 0===p?{}:p,g=t.challenges_count,h=t.attempts_count,E=t.parent,f=t.mockTestsProgress,k=void 0===f?{}:f,N=v.last_active_playlist_slug,b=v.solved_challenges_count,w=k.solved_count,y=void 0===w?0:w,P=k.total_count,_=void 0===P?0:P,S=E.slug,T=y>0?`${y}/${_}`:_;Object(c.a)(t);const j={onClick:function(e){e.stopPropagation()},"data-event-category":"HRC Interview Prep","data-analytics":"ViewSkillDirectory","data-event-label":"ViewSkillDirectory","data-attr1":m,"data-cd-interview-time":m};return l.a.createElement(r.a,{active:!0,className:"prep-kit-card",onClick:function(){!window.getSelection().toString()&&a.current&&a.current.click()}},l.a.createElement("h3",null,l.a.createElement(s.Link,{className:"prep-kit-name",to:`/interview/${S}/${m}/${N||""}`,"data-event-category":"HRC Interview Prep","data-analytics":"ViewPrepKit","data-event-label":"ViewPrepKit","data-attr1":m,"data-cd-interview-time":m},l.a.createElement("span",{ref:a},o))),l.a.createElement("div",{className:"prep-kit-stats"},l.a.createElement("div",null,l.a.createElement("span",null,"Challenges: "),l.a.createElement("span",{className:"prep-kit-stat-value"},b?`${b}/${g}`:g)),", ",l.a.createElement("div",null,l.a.createElement("span",null,"Attempts: "),l.a.createElement("span",{className:"prep-kit-stat-value"},h)),", ",l.a.createElement("div",null,l.a.createElement("span",null,"Mock Tests: "),l.a.createElement("span",{className:"prep-kit-stat-value"},T))),d&&l.a.createElement("div",{className:"prep-kit-skills"},l.a.createElement(i.a,{skills:d,skillTagProps:j,extraSkillsTooltipProps:j,extraSkillsBtnProps:j})),l.a.createElement("img",{className:"prep-kit-logo",src:u,alt:""}))}},sJKf:function(e,t,a){"use strict";a.r(t);var n=a("MVZn"),l=a.n(n),s=a("mVx/"),r=a.n(s),i=a("cDcd"),c=a.n(i),o=a("/MKj"),m=a("ANjH"),u=a("peh1"),d=a("EfbJ"),p=a("LPUq"),v=a("Z/B0"),g=a("Uz/7"),h=a("cK/l"),E=a("zBd5"),f=a("vKMH"),k=a("lqfM"),N=a("pVnL"),b=a.n(N),w=a("QILm"),y=a.n(w),P=a("OEX3"),_=a("IU/7"),S=a("15ay"),T=a("m/YY"),j=a("1LkA");a("+RGH");var O=Object(d.b)((function(e){const t=e.challenge,a=e.appUtil,n=a.location.pathname,l=a.params,s=l.parentPlaylistSlug,r=l.playlistSlug,i=e.showFullScreenEditor,o=void 0===i||i,m=t.name,u=t.slug,d=t.solved_count,p=t.skill,v=t.skill_slug,g=Object(h.m)(n,t,o),E=function(e){let t=e.success_ratio;return t>0?(100*t).toFixed(2)+"%":"0.0%"}(t),f=function(e){let t=e.solved,a=e.attempted;const n={children:"Solve Challenge","data-analytics":"SolvePrepKitChallenge","data-event-label":"SolvePrepKitChallenge"};return t?(n.children="Solved",n.Icon=_.a,n.iconAlignment="right",n["data-analytics"]="ViewSolvedPrepKitChallenge",n["data-event-label"]="ViewSolvedPrepKitChallenge"):a&&(n.children="Try Again",n["data-analytics"]="SolveAgainPrepKitChallenge",n["data-event-label"]="SolvedAgainKitChallenge"),n}(t),k=f.children,N=y()(f,["children"]),w=u+"-cta",O={name:p,slug:v};return c.a.createElement(S.b,{active:!0,to:g,className:"theme-m interview-ch-li"},c.a.createElement("article",{className:"interview-ch-li-grid"},c.a.createElement("h2",{id:u,className:"interview-ch-li-title ellipsis",title:m},m),c.a.createElement(S.a,{className:"interview-ch-li-bookmark"},c.a.createElement(j.a,{challenge:t,className:"interview-ch-li-bookmark-icon"})),c.a.createElement("div",{className:"interview-ch-li-stat"},d>100&&c.a.createElement("span",{className:"interview-ch-li-stat-item"},c.a.createElement("span",{className:"interview-ch-li-stat-key"},"Attempts: "),d),c.a.createElement("span",{className:"interview-ch-li-stat-item"},c.a.createElement("span",{className:"interview-ch-li-stat-key"},"Success Rate: "),E),c.a.createElement("span",{className:"interview-ch-li-stat-skill interview-ch-li-stat-item"},c.a.createElement("span",{className:"interview-ch-li-stat-key"},"Skill: "),c.a.createElement(S.a,null,c.a.createElement(T.a,{skill:O,className:"interview-ch-li-skill-tag"})))),c.a.createElement(P.e,b()({"aria-labelledby":`${w} ${u}`,id:w,role:"link",to:g,className:"interview-ch-li-cta"},N,{"data-event-category":"HRC Interview Prep","data-attr1":r,"data-attr2":s,"data-cd-interview-time":u}),k)))})),M=a("ItHR"),C=(a("pIFo"),a("MGin")),I=a("iylS"),A=a("MKsj"),K=a("bUeg"),D=a("/D9Q");a("K/+P");function L(e){let t=e.playlist,a=e.url;return c.a.createElement("li",{className:"milestone-item"},c.a.createElement(C.Link,{activeClassName:"active",className:"milestone-link",to:a},c.a.createElement(R,{playlist:t}),t.name))}const H=Object.freeze({DEFAULT:"default",STARTED:"started",COMPLETED:"completed"});function R(e){const t=function(e){const t=e.hacker_playlist_progress,a=void 0===t?{}:t,n=e.mockTestsProgress,l=void 0===n?{}:n,s=a.solved_challenges_count,r=a.total_challenges_count,i=l.solved_count,c=void 0===i?0:i,o=l.total_count,m=void 0===o?0:o,u=s>0,d=c>0;return u&&s===r&&(0===m||d&&m===c)?H.COMPLETED:u||d?H.STARTED:H.DEFAULT}(e.playlist);return t===H.COMPLETED?c.a.createElement(I.a,{className:"milestone-progress milestone-progress-completed"}):t===H.STARTED?c.a.createElement(A.a,{className:"milestone-progress milestone-progress-started"}):c.a.createElement(K.a,{className:"milestone-progress milestone-progress-default"})}var B=Object(d.b)((function(e){const t=e.playlists,a=void 0===t?[]:t,n=e.appUtil,l=n.location.pathname,s=n.params.playlistSlug;return Object(D.a)(a),c.a.createElement("nav",{className:"interview-milestone-nav theme-m"},c.a.createElement("ul",{"aria-label":"Milestone Menu",className:"interview-milestone-list"},a.map(e=>{const t=l.replace(s,e.slug);return c.a.createElement(L,{key:e.slug,playlist:e,url:t})})))})),$=a("J4zp"),V=a.n($),x=a("ve2B"),U=a("iiin"),G=a("lrHr"),Q=a("QU3h");a("pNBQ");var z=Object(d.b)((function(e){const t=e.playlists,a=void 0===t?[]:t,n=e.appUtil,l=n.location.pathname,s=n.params.playlistSlug,r=n.goto;Object(D.a)(a);const o=Object(i.useState)(!1),m=V()(o,2),u=m[0],d=m[1],p=()=>{d(!1)},v=e=>{const t=l.replace(s,e);r(t),p()};return c.a.createElement(x.a,{handleOpen:()=>{d(!0)},handleClose:p,icon:"ui-icon-calendar",type:"full-screen",open:u},c.a.createElement("div",{className:"interview-fab-popup theme-m"},c.a.createElement("header",{className:"interview-fab-popup-header"},c.a.createElement(U.a,{Icon:Q.a,size:"small",className:"close-button",onClick:p}),c.a.createElement("h3",{className:"heading-label"},"Milestones")),c.a.createElement("section",{className:"interview-milestone-container"},c.a.createElement("div",{className:"milestone-list"},c.a.createElement("ul",{"aria-label":"Milestone Menu",className:"interview-milestone-list"},a.map(e=>{const t=s===e.slug,a=t?"label-active":"label";return c.a.createElement("li",{key:e.slug,className:"milestone-item"},c.a.createElement("div",{className:"milestone"},c.a.createElement(G.a,{label:e.name,value:e.slug,onChange:v.bind(null,e.slug),checked:t,className:a}),c.a.createElement(R,{playlist:e})))}))))))})),q=(a("rGqo"),a("Y+p1")),Y=a.n(q),Z=a("7lYa");a("v3ai");var F=c.a.memo((function(e){const t=function(e){const t=function(e){let t=0,a=0;return e.forEach(e=>{let n=e.mockTestsProgress,l=void 0===n?{}:n;const s=l.solved_count,r=void 0===s?0:s,i=l.total_count;t+=r,a+=void 0===i?0:i}),{solvedMockTests:t,totalMockTests:a}}(e.playlists),a=t.solvedMockTests,n=t.totalMockTests,l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e.length,a=e.filter(e=>e.solved_challenges_count===e.total_challenges_count).length;return{skillsMastered:a,totalSkills:t}}(e.hacker_skills_progress),s=l.totalSkills,r=l.skillsMastered,i=e.hacker_playlist_progress,c=void 0===i?{}:i,o=c.solved_challenges_count,m=void 0===o?0:o,u=c.total_challenges_count,d=void 0===u?0:u,p=(m+a)/(d+n)||0;return{challengesProgress:`${m}/${d}`,testsProgress:`${a}/${n}`,skillsMasteredProgress:`${r}/${s}`,totalProgressPercentage:Math.round(100*p)}}(e.parentPlaylist),a=t.challengesProgress,n=t.testsProgress,l=t.totalProgressPercentage;return c.a.createElement("div",{className:"interview-progress"},c.a.createElement("h3",{className:"text-sec-headline-s interview-progress-title"},"Progress"),c.a.createElement(Z.a,{title:l+"% progress",value:l,className:"interview-progress-bar"}),c.a.createElement("p",{className:"text-content"},"Challenges: ",c.a.createElement("span",{className:"interview-progress-text"},a),"Mock Tests: ",c.a.createElement("span",{className:"interview-progress-text"},n)))}),Y.a),J=a("QahQ"),X=a("oBtd"),W=a("HfZf"),ee=a("Ihdz"),te=a("+ip1"),ae=a("SDI2");a("QLNv");function ne(e){let t=e.promoMeta;const a=t.heading,n=t.cta_link,l=t.cta_text,s=t.subtitle,r=t.metadata,i=JSON.parse(r),o=i.border_color,m=i.logo_link,u=i.dark_mode_logo_link,d=Object(ae.a)()===te.a.dark?u:m;return c.a.createElement("section",{"aria-label":"ad",className:"interview-promotion",style:{borderColor:o}},c.a.createElement("header",{className:"d-flex justify-content-between align-items-center interview-promotion-header"},c.a.createElement("img",{className:"interview-promotion-logo",src:d,alt:a}),c.a.createElement("a",{href:n,className:"text-content interview-promotion-cta",target:"_blank",rel:"noreferrer"},l," ",c.a.createElement(ee.a,{className:"interview-promotion-cta-icon"}))),c.a.createElement(W.a,{className:"text-content interview-promotion-subtitle",element:"p",html:s}))}function le(e){let t=e.promotionBanner,a=e.playlistName;return t.slot===v.h.BANNER_PREPKIT&&"adUnit"===t.type?c.a.createElement(J.a,{component:ne,slot:t.slot,sendMetrics:(e,t)=>{const n=t.id;"View"===e&&(X.a.batch_track("View","PromoBannerAd",{attribute1:n,attribute2:a}),window&&"function"==typeof window.jsTrackGoogleAnalytics&&window.jsTrackGoogleAnalytics({eventCategory:"HRC PromoSideBanner",eventLabel:`PromoBannerAd ${n} ${a}`,eventAction:"View"}))}}):null}var se=a("VVqX");a("5LoG");a.d(t,"makePlaylistChallengesProps",(function(){return ce})),a.d(t,"PureInterviewChallengeList",(function(){return ie}));const re=e=>{const t=e.router.routes,a=r()(t,e=>Boolean(e.promotionBanner));return(null==a?void 0:a.promotionBanner)||{}};function ie(e){const t=e.appUtil,a=e.challenges,n=e.currentPlaylist,l=e.parentPlaylist,s=e.mockTests,r=void 0===s?[]:s;return Object(k.a)(n),c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{heading:"Personalized Preparation Kit for you",content:l.description}),c.a.createElement("div",{className:"interview-challenge-list-container container panes-container"},c.a.createElement("main",{className:"left-pane"},c.a.createElement(p.b,null,c.a.createElement("div",{className:"interview-challenge-progress"},c.a.createElement(F,{parentPlaylist:l})),c.a.createElement(z,{playlists:l.playlists})),c.a.createElement(g.a,{challenges:a,ChallengeListItemComponent:O,listType:v.b.PLAYLIST,currentPlaylist:n,className:"interview-challenge-list",disableNativeAd:!0}),c.a.createElement("ul",{className:"mock-tests-list"},r.map(e=>c.a.createElement("li",{key:e.unique_id,className:"mock-tests-list-item"},c.a.createElement(se.a,{mockTest:e}))))),c.a.createElement(p.a,null,c.a.createElement("aside",{className:"right-pane"},c.a.createElement(F,{parentPlaylist:l}),c.a.createElement(B,{playlists:l.playlists}),c.a.createElement(le,{promotionBanner:re(t),playlistName:l.name})))))}const ce=()=>Object(u.createSelector)([E.b,E.c,h.h,f.d],(e,t,a,n)=>{var s;let r=n.tests;const i=t.challenges.map(e=>a[e]),c=e[t.parent.slug],o=c.playlists.map(t=>e[t]),m=null===(s=t.mockTestIds)||void 0===s?void 0:s.map(e=>r[e]);return{challenges:i,currentPlaylist:t,parentPlaylist:l()({},c,{playlists:o}),mockTests:m}});t.default=Object(m.c)(d.b,Object(o.d)(ce()))(ie)},v3ai:function(e,t,a){},vKMH:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o}));var n=a("peh1"),l=a("j//G");const s=e=>e.community.mockTests,r=Object(n.createSelector)([s],e=>{const t=e.testIds,a=e.tests;return t.map(e=>a[e])}),i=Object(n.createSelector)([r],e=>{const t=[void 0,l.a.INITIATED];return e.filter(e=>t.includes(e.status))}),c=Object(n.createSelector)([r],e=>{const t=[l.a.STARTED,l.a.PROCESSING,l.a.PASSED];return e.filter(e=>t.includes(e.status))}),o=Object(n.createSelector)([i,c],(e,t)=>[...e,...t].slice(0,2))},"zUH+":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return o}));var n=a("peh1"),l=a("Z/B0");const s=e=>e.community.playlist,r=Object(n.createSelector)([s],e=>e[l.l.PREPARATION_KITS]),i=Object(n.createSelector)([r],e=>null==e?void 0:e.playlists),c=Object(n.createSelector)([i,s],(e,t)=>null==e?void 0:e.map(e=>t[e])),o=Object(n.createSelector)([c,e=>e.community.profile],(e,t)=>null==e?void 0:e.find(e=>{var a,n;return(null!==(a=e.recommended_for_durations)&&void 0!==a?a:[]).includes((null==t||null===(n=t.job_seeker_details)||void 0===n?void 0:n.interview_in_time)||"one_month")}))}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_interview_v2-55827a63.js.map