function d(o){window.enmity.plugins.registerPlugin(o)}function m(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function w(o){return window.enmity.assets.getIDByName(o)}function c(o){return window.enmity.patcher.create(o)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const i=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;var l="HideBlockedMessages",r="1.0.1",a="For when you really need to shut someone the f*** up.",u=[{name:"NotMarek",id:"206299359007080450"}],y="#ff0069",S="https://raw.githubusercontent.com/notmarek/enmity-plugins/master/dist/HideBlockedMessages.js",g={name:l,version:r,description:a,authors:u,color:y,sourceUrl:S};const t=c("HideBlockedMessages"),p=m("_currentDispatchActionType","_subscriptions","_waitQueue"),h=m("isBlocked","isFriend"),v={...g,onStart(){i.open({content:"Waiting for LOAD_MESSAGES_SUCCESS."});let o=null;for(;o===null;)try{o=p._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(e=>e.name==="MessageStore")}catch{}i.open({content:"LOAD_MESSAGES_SUCCESS acquired.",source:w("Check")}),t.before(o,"actionHandler",(e,n)=>{n[0].messages=n[0].messages.filter(s=>!h.isBlocked(s.author.id))})},onStop(){t.unpatchAll()},patches:[]};d(v);
