const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const g=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const m=e.FormRow,w=e.FormSection;e.FormSelect,e.FormSubLabel;const y=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function p(o){window.enmity.plugins.registerPlugin(o)}function h(o){return window.enmity.plugins.installPlugin(o)}function r(o,t,i){window.enmity.settings.set(o,t,i)}function s(o,t,i){return window.enmity.settings.get(o,t,i)}function S(o){return window.enmity.patcher.create(o)}var F="BetterTwitterEmbeds",v="1.1.1",b="Convert Twitter links to FxTwitter links so the tweet embed is better.",T=[{name:"spin",id:"308440976723148800"}],f="#ff0069",x="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/BetterTwitterEmbeds.js",a={name:F,version:v,description:b,authors:T,color:f,sourceUrl:x};window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const C=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function _(o,t){return window.enmity.modules.getModule(o,t)}window.enmity.modules.common;var E=({pluginUrl:o})=>n.createElement(m,{label:"Update Plugin",trailing:m.Arrow,onPress:()=>{console.log(o),h(`${o}?${Math.floor(Math.random()*1001)}.js`)}});function l(o){return window.enmity.assets.getIDByName(o)}const d=_(o=>o.open!==void 0&&o.close!==void 0&&!o.openLazy&&!o.startDrag&&!o.init&&!o.openReplay&&!o.openChannelCallPopout),u=S("BTE"),B={...a,onStart(){try{s("_twitter","_type",!1)||r("_twitter","_type","fxtwitter"),u.before(C,"sendMessage",(o,t,i)=>{const c=t[1].content;!c.match(/http(s)?:\/\/twitter.com\/\w{4,15}\/status\/\d+/gim)||(t[1].content=c.replace(/http(s)?:\/\/twitter.com/gim,`https://${s("_twitter","_type",!1)}.com`))})}catch(o){console.log("[ BetterTwitterEmbeds Error ]",o)}},onStop(){u.unpatchAll()},patches:[],getSettingsPanel({settings:o}){return n.createElement(g,{settings:o},n.createElement(w,{title:"Settings"},n.createElement(m,{label:"Use vxtwitter.com instead of fxtwitter.com",leading:n.createElement(m.Icon,{source:l("toast_copy_link")}),trailing:n.createElement(y,{value:o.getBoolean("_vxtwitter",!1),onValueChange:()=>{try{o.toggle("_vxtwitter",!1),o.getBoolean("_vxtwitter",!1)?r("_twitter","_type","vxtwitter"):r("_twitter","_type","fxtwitter"),d.open({content:`Switched to ${s("_twitter","_type",!1)}.`,source:l("check")})}catch(t){console.log("[ BetterTwitterEmbeds Error ]",t),d.open({content:"An error has occurred. Check debug logs for more info.",source:l("Small")})}}})})),n.createElement(w,{title:"Plugin"},n.createElement(E,{pluginUrl:a.sourceUrl})))}};p(B);
