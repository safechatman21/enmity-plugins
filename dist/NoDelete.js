function S(e,o,n){window.enmity.settings.set(e,o,n)}function N(e,o,n){return window.enmity.settings.get(e,o,n)}function D(e,o,n){return window.enmity.settings.getBoolean(e,o,n)}const{components:r}=window.enmity;r.Alert;const fe=r.Button;r.FlatList;const Q=r.Image;r.ImageBackground,r.KeyboardAvoidingView,r.Modal,r.Pressable,r.RefreshControl;const Z=r.ScrollView;r.SectionList,r.StatusBar,r.StyleSheet,r.Switch;const b=r.Text;r.TextInput,r.TouchableHighlight;const L=r.TouchableOpacity;r.TouchableWithoutFeedback,r.Touchable;const E=r.View;r.VirtualizedList,r.Form,r.FormArrow,r.FormCTA,r.FormCTAButton,r.FormCardSection,r.FormCheckbox;const v=r.FormDivider;r.FormHint,r.FormIcon;const be=r.FormInput;r.FormLabel,r.FormRadio;const i=r.FormRow,B=r.FormSection;r.FormSelect,r.FormSubLabel;const M=r.FormSwitch;r.FormTernaryCheckBox,r.FormText,r.FormTextColors,r.FormTextSizes;function pe(e){window.enmity.plugins.registerPlugin(e)}const T={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,o)=>window.enmity.modules.filters.byName(e,o),byTypeName:(e,o)=>window.enmity.modules.filters.byTypeName(e,o),byDisplayName:(e,o)=>window.enmity.modules.filters.byDisplayName(e,o)};function j(...e){return window.enmity.modules.bulk(...e)}function k(...e){return window.enmity.modules.getByProps(...e)}function Ee(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const h=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const V=window.enmity.modules.common.Native,t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const p=window.enmity.modules.common.Storage,_=window.enmity.modules.common.Toasts,I=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const ee=window.enmity.modules.common.REST;window.enmity.modules.common.Settings;const G=window.enmity.modules.common.Users,O=window.enmity.modules.common.Navigation,te=window.enmity.modules.common.NavigationNative,oe=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const R=window.enmity.modules.common.StyleSheet,Se=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const ne=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function ve(e){return window.enmity.patcher.create(e)}const ae=e=>{let o=0;for(let n in e)o++;return o};function u(e){return window.enmity.assets.getIDByName(e)}const c={Debug:u("debug"),Retry:u("ic_message_retry"),Failed:u("Small"),Cancel:u("ic_megaphone_nsfw_16px"),Add:u("add_white"),Delete:u("ic_message_delete"),Clear:u("ic_clear_all_24px"),Pencil:u("ic_pencil_24px"),Success:u("ic_selection_checked_24px"),Warning:u("ic_warning_24px"),Copy:u("toast_copy_link"),Open:u("ic_leave_stage"),Clipboard:u("pending-alert"),Initial:u("coffee"),Shield:u("ic_person_shield"),Debug_Command:{Sent:u("ic_application_command_24px"),Clock:u("clock")},Settings:{Toasts:{Context:u("toast_image_saved"),Settings:u("ic_selection_checked_24px")},Self:u("friends_toast_icon"),Share:u("share"),Robot:u("ic_robot_24px"),Commands:u("ic_profile_badge_bot_commands"),Debug:u("ic_rulebook_16px")}},Y=e=>{_.open({content:`Copied ${e} to clipboard.`,source:c.Clipboard})},De=e=>{let o=e.split(`
`).map(n=>{if(n!="")return`"${n.replaceAll(":",'":"').replace(" ","")}",`});return o[0]=`{${o[0]}`,o[ae(o)]=`${o[ae(o)]}}`,o=o.join(""),o=o.replaceAll("undefined",""),o=o.split("").reverse().join("").replace(",","").split("").reverse().join(""),o};async function $e(){try{let e=await p.getItem("device_list");if(e)return JSON.parse(e);let o=(await ee.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,n=De(o);await p.setItem("device_list",n);let a=await p.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function Le(e,o,n){let a=await $e();return`**[${e}] Debug Information**
> **Plugin Version:** ${o}
> **Plugin Build:** ${n.split("-")[1]}
> **Discord Build:** ${V.InfoDictionaryManager.Version} (${V.InfoDictionaryManager.Build})
> **Software Version:** ${V.DCDDeviceManager.systemVersion}
> **Device:** ${a[V.DCDDeviceManager.device]}`}const{native:F}=window.enmity;function xe(){F.reload()}F.version,F.build,F.device,F.version;const Ce=k("transitionToGuild");async function Ne({manifest:e}){const o=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,n=await(await ee.get(o)).text;let a=n.match(/\d\.\d\.\d+/g),s=n.match(/patch\-\d\.\d\.\d+/g);return!a||!s?re(e.name,e.version):(a=a[0],s=s[0],a!=e.version?le(o,a,s.split("-")[1],e,!1):s!=e.build?le(o,a,s.split("-")[1],e,!0):re(e.name,e.version))}const le=(e,o,n,a,s)=>{const g=s?n:o;I.show({title:"Update found",body:`A newer ${s?"build":"version"} is available for ${a.name}. ${s?`
The version will remain at ${o}, but the build will update to ${n}.`:""}
Would you like to install ${s?`build \`${n}\``:`version \`${o}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Te(e,g,a,s)})},re=(e,o)=>{console.log(`[${e}] Plugin is on the latest version, which is ${o}`),_.open({content:`${e} is on latest version (${o})`,source:c.Success})};async function Te(e,o,n,a){window.enmity.plugins.installPlugin(e,({data:s})=>{s=="installed_plugin"||s=="overridden_plugin"?I.show({title:`Updated ${n.name}`,body:`Successfully updated to ${a?"build":"version"} \`${o}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{xe()}}):I.show({title:"Error",body:`Something went wrong while updating ${n.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{Ce.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${n.name}%20Update%20Error%3A%20${a?`b${o}`:`v${o}`}`)}})})}const H=window.enmity.modules.common.Components.General.Animated,[z,Ie]=j(T.byProps("transitionToGuild"),T.byProps("setString")),w=R.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:h.Fonts.DISPLAY_NORMAL},header:{color:h.ThemeColorMap.HEADER_PRIMARY,fontFamily:h.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:h.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var Pe=({manifest:e})=>{const o=t.useRef(new H.Value(1)).current,n=()=>{H.spring(o,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},a=()=>{H.spring(o,{toValue:1,duration:250,useNativeDriver:!0}).start()},s=()=>{z.openURL("https://spin.rip/")},g={transform:[{scale:o}]};return t.createElement(t.Fragment,null,t.createElement(E,{style:w.container},t.createElement(L,{onPress:s,onPressIn:n,onPressOut:a},t.createElement(H.View,{style:[g]},t.createElement(Q,{style:[w.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(E,{style:w.text_container},t.createElement(L,{onPress:()=>{z.openURL(e.sourceUrl)}},t.createElement(b,{style:[w.main_text,w.header]},e.name," ")),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(b,{style:[w.main_text,w.sub_header]},"A plugin by"),t.createElement(L,{onPress:()=>{z.openURL("https://spin.rip/")}},t.createElement(b,{style:[w.main_text,w.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(b,{style:[w.main_text,w.sub_header]},"Settings page by"),t.createElement(L,{onPress:()=>{z.openURL("https://github.com/acquitelol/")}},t.createElement(b,{style:[w.main_text,w.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),t.createElement(E,null,t.createElement(L,{style:{flexDirection:"row"},onPress:()=>{Ie.setString(`**${e.name}** v${e.version}`),Y("plugin name and version")}},t.createElement(b,{style:[w.main_text,w.sub_header]},"Version:"),t.createElement(b,{style:[w.main_text,w.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[Be,se]=j(T.byProps("transitionToGuild","openURL"),T.byProps("setString","getString")),x=R.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:h.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:h.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var Me=({manifest:e,settings:o,hasToasts:n,children:a,commands:s})=>t.createElement(Z,null,t.createElement(Pe,{manifest:e}),a,s&&t.createElement(B,{title:"Plugin Commands"},s.map(g=>t.createElement(i,{label:`/${g.name}`,subLabel:g.description,leading:t.createElement(i.Icon,{style:x.icon,source:c.Settings.Commands}),trailing:i.Arrow,onPress:function(){se.setString(`/${g.name}`),Y(`the command ${g.name}`)}}))),t.createElement(B,{title:"Utility"},n&&t.createElement(t.Fragment,null,t.createElement(i,{label:"Initialization Toasts",leading:t.createElement(i.Icon,{style:x.icon,source:c.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:t.createElement(M,{value:o.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{o.toggle(`${e.name}-toastEnable`,!1),_.open({content:`Successfully ${o.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:c.Success})}})}),t.createElement(v,null)),t.createElement(i,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:t.createElement(i.Icon,{style:x.icon,source:c.Settings.Debug}),trailing:i.Arrow,onPress:async function(){se.setString(await Le(e.name,e.version,e.build)),Y("plugin debug information")}}),t.createElement(v,null),t.createElement(i,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:t.createElement(i.Icon,{style:x.icon,source:c.Delete}),trailing:i.Arrow,onPress:async function(){await p.removeItem("device_list"),_.open({content:"Cleared device list storage.",source:c.Success})}})),t.createElement(B,{title:"Source"},t.createElement(i,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(i.Icon,{style:x.icon,source:c.Copy}),trailing:i.Arrow,onPress:()=>{Ne({manifest:e})}}),t.createElement(v,null),t.createElement(i,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(i.Icon,{style:x.icon,source:c.Open}),trailing:i.Arrow,onPress:()=>{Be.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),t.createElement(i,{style:x.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`}));async function ie(e,o,n,a){const s={type:e,author:{...o,avatar:o.avatar?`https://cdn.discordapp.com/avatars/${o.id}/${o.avatar}.${o.avatar?.startsWith("a_")?"gif":"png"}?size=1024`:"https://cdn.discordapp.com/embed/avatars/0.png"},context:n,content:a.edited?[new Date(a.time).toLocaleString(),a.original,a.edited]:[new Date(a.time).toLocaleString(),a.original]};let g=await p.getItem("NoDeleteLogs");g=JSON.parse(g),s!==g[g.length-1]&&(g.push(s),await p.setItem("NoDeleteLogs",JSON.stringify(g)))}var Re="NoDelete",Fe="3.5.15",Ue="patch-1.0.12",Ae='Somewhat basic "Message Logger"',ke=[{name:"Marek (modified by spin)",id:"308440976723148800"}],Ve="#ff0069",Ge="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/NoDelete.js",f={name:Re,version:Fe,build:Ue,description:Ae,authors:ke,color:Ve,sourceUrl:Ge},ce;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(ce||(ce={}));var X;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(X||(X={}));var J;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(J||(J={}));var me;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(me||(me={}));var de;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(de||(de={}));var ge;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(ge||(ge={}));const ue=oe.createStackNavigator(),{ThemeColorMap:P}=Se,U=R.createThemedStyleSheet({container:{backgroundColor:P.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:P.BACKGROUND_MOBILE_PRIMARY,color:P.TEXT_NORMAL},header:{backgroundColor:P.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:P.HEADER_PRIMARY},close:{color:P.HEADER_PRIMARY}});var Oe=({name:e="Page",component:o=E,close_button:n={name:"Close",functionality:()=>{O.pop()}}}={})=>t.createElement(te.NavigationContainer,{independent:!0},t.createElement(ue.Navigator,{initialRouteName:e,style:U.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:U.cardStyle,headerStyle:U.header,headerTitleContainerStyle:U.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(ue.Screen,{name:e,component:o,options:{headerTitleStyle:{color:"white"},headerLeft:()=>t.createElement(fe,{color:U.close.color,title:n.name,onPress:n.functionality}),...oe.TransitionPresets.ModalSlideFromBottomIOS}})));const[Ye,He]=j(T.byProps("setString"),T.byProps("fetchProfile")),ze=Ee("StaticSearchBarContainer"),y=R.createThemedStyleSheet({main_text:{opacity:.975,letterSpacing:.25,fontFamily:h.Fonts.DISPLAY_NORMAL},item_container:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:4,paddingBottom:4,width:"100%"},author_name:{color:h.ThemeColorMap.HEADER_PRIMARY,fontFamily:h.Fonts.DISPLAY_BOLD,fontSize:18,letterSpacing:.25,paddingBottom:4},log_header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"95%"},log_sub_header:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"50%"},log_time:{color:h.ThemeColorMap.TEXT_MUTED,opacity:.99,fontSize:13,paddingLeft:4},log_type:{color:h.ThemeColorMap.TEXT_MUTED,opacity:.45,fontSize:16,marginLeft:"auto"},avatar_container:{alignSelf:"start",justifySelf:"start",marginTop:5},author_avatar:{width:40,height:40,borderRadius:100},old_message:{color:h.ThemeColorMap.TEXT_MUTED,opacity:.89,fontSize:16},message_content:{color:h.ThemeColorMap.TEXT_NORMAL,opacity:.985,fontSize:16},main_container:{paddingLeft:8,paddingRight:4,paddingTop:2,paddingBottom:16,width:"95%"},text_container:{display:"flex",flexDirection:"column",paddingBottom:4,paddingLeft:8,width:"95%"}});var he=()=>{const e=(l,C)=>l.length>C?l.substring(0,C)+"...":l,o=()=>{p.setItem("NoDeleteLogs","[]"),p.getItem("NoDeleteLogs").then(l=>{l=="[]"?I.show({title:"Logs Cleared",body:"NoDelete message logs have been cleared",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>O.pop()}):I.show({title:"Error clearing logs",body:"NoDelete logs could not be cleared. Try again or report this issues to spin.",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>O.pop()})})},n=N("_nodelete","maxLogs","1000"),[a,s]=t.useState([]),[g,A]=t.useState([]);t.useEffect(()=>{p.getItem("NoDeleteLogs").then(l=>{let C=JSON.parse(l);s(C.reverse())})},[]);for(let l=0;l<a.length;l++)a[l].author.id==null&&(a[l]={type:a[l].type,author:{username:a[l].author,id:a[l].id,avatar:a[l].avatar,bot:"unknown"},context:{guild:"unknown",channel:"unknown",message:"unknown"},content:a[l].content},l==a.length-1&&s(a));return a.length>parseInt(n)&&(D("_nodelete","autoClear",!1)==!1?I.show({title:`Logs have exceeded ${e(n,12)}`,body:`NoDelete logs have exceeded your limit of ${e(n,12)}${parseInt(n)>1e3?`
You may experience performance issues or a laggy log page UI. Clear your logs to fix this issue.`:""}`,confirmText:"Clear logs",cancelText:"Close",onConfirm:()=>o()}):(o(),p.getItem("NoDeleteLogs").then(l=>{l==="[]"?_.open({content:`Auto-cleared ${e(a.length,10)} logs.`,source:c.Success}):_.open({content:"NoDelete logs could not be cleared. Try again or report this issues to spin.",source:c.Failed})}))),t.createElement(t.Fragment,null,t.createElement(ze,{placeholder:"Search Logs",onChangeText:l=>A(l)}),t.createElement(i,{label:"Clear all NoDelete message logs",trailing:i.Arrow,onPress:()=>o()}),t.createElement(v,null),t.createElement(Z,null,t.createElement(E,{style:y.main_container},a.filter(l=>JSON.stringify(l).includes(g)).map(l=>t.createElement(t.Fragment,null,t.createElement(E,{style:y.item_container},t.createElement(L,{onPress:()=>{G.getUser(l.author.id)?ne.showUserProfile({userId:l.author.id}):He.getUser(l.author.id).then(()=>ne.showUserProfile({userId:l.author.id}))},style:y.avatar_container},t.createElement(Q,{style:y.author_avatar,source:{uri:l.author.avatar}})),t.createElement(L,{onPress:()=>{Ye.setString(`${l.author.username} (\`${l.author.id}\`):
>>> ${l.content.join(`
`)}`),Y("log content")},style:y.text_container},t.createElement(E,{style:y.log_header},t.createElement(E,{style:y.log_sub_header},t.createElement(b,{style:[y.main_text,y.author_name]},l.author.username),t.createElement(b,{style:[y.main_text,y.log_time]},l.content[0])),t.createElement(b,{style:[y.main_text,y.log_type]},l.type==="edit"?t.createElement(i.Icon,{source:c.Pencil}):t.createElement(i.Icon,{source:c.Delete}))),t.createElement(E,null,l.content.length==3?t.createElement(t.Fragment,null,t.createElement(b,{style:[y.main_text,y.old_message]},l.content[1]),t.createElement(b,{style:[y.main_text,y.message_content]},l.content[2])):t.createElement(b,{style:y.message_content},l.content[1])))),t.createElement(v,null))))))};function We(e,o,n,a){window.enmity.clyde.sendReply(e,o,n,a)}const je={id:"logs-command",name:"logs",displayName:"logs",description:"Open the NoDelete message logs page",displayDescription:"Open the NoDelete message logs page",type:X.Chat,inputType:J.BuiltInText,execute:async function(e,o){try{O.push(Oe,{component:he,name:"NoDelete Message Logs"})}catch(n){console.log("[ NoDelete Error ]",n),We(o?.channel.id??"0","An error occured while trying to open NoDelete message logs. Check debug logs for more info.")}}},_e=[je];var Xe=({styles:e,renderPage:o})=>{const n=te.useNavigation();return React.createElement(B,{title:"Message Logs"},React.createElement(i,{label:"View Message Logs",subLabel:"Tap on an item to copy to clipboard",leading:React.createElement(i.Icon,{style:e.icon,source:c.Settings.Debug}),onPress:()=>{o(n,{pageName:"NoDelete Message Logs",pagePanel:he})}}))};const Je=R.createThemedStyleSheet({icon:{color:h.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:h.ThemeColorMap.TEXT_MUTED}});let K;const q=ve(f.name),ye={...f,patches:[],onStart(){p.getItem("NoDeleteLogs").then(s=>{s==null&&p.setItem("NoDeleteLogs","[]")}).catch(s=>{console.log(`[${f.name} Storage Error]`,s)});let e=0;const o=3,n=()=>{const s=D(f.name,`${f.name}-toastEnable`,!1);try{e++;const g=k("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),A=k("getMessage","getMessages"),l=k("getChannel","getDMFromUserId");console.log(`${f.name} delayed start attempt ${e}/${o}.`),s&&_.open({content:`[${f.name}] start attempt ${e}/${o}.`,source:c.Debug});for(const $ of["MESSAGE_UPDATE","MESSAGE_DELETE"])try{g.dispatch({type:$,message:{}})}catch(m){console.log(`[${f.name} Dispatch Error]`,m)}const C=g._actionHandlers._orderedActionHandlers?.MESSAGE_DELETE.find($=>$.name==="MessageStore"),we=g._actionHandlers._orderedActionHandlers?.MESSAGE_UPDATE.find($=>$.name==="MessageStore");q.before(C,"actionHandler",($,m)=>{const d=A.getMessage(m[0].channelId,m[0].id);if(!(!d?.author?.id||!d?.author?.username||!d?.content&&d?.attachments?.length==0&&d?.embeds?.length==0)&&!(D("_nodelete","_logBots",!1)===!1&&d?.author?.bot)&&!(D("_nodelete","_logSelf",!1)===!1&&d?.author?.id==K)){if(D("_nodelete","_storageLog",!1)==!1&&(m[0]={}),!d?.editedTimestamp||d?.editedTimestamp._isValid){const W={type:"MESSAGE_UPDATE",message:{...d,edited_timestamp:"invalid_timestamp",content:d?.content+" `[deleted]`",guild_id:l.getChannel(d?.channel_id)?.guild_id},log_edit:!1};g.dispatch(W)}ie("delete",{username:`${d?.author?.username}#${d?.author?.discriminator}`,id:d?.author?.id,avatar:d?.author?.avatar,bot:d?.author?.bot},{guild:l.getChannel(d?.channel_id)?.guild_id,channel:d?.channel_id,message:d?.id},{time:d?.timestamp,original:d?.content?.replace("`[deleted]`","").trim()})}}),q.before(we,"actionHandler",($,m)=>{try{const d=A.getMessage(m[0].message.channel_id,m[0].message.id);if(!d?.content||!m[0]?.message?.content||!m[0]?.message?.content&&m[0]?.message?.attachments?.length==0&&m[0]?.message?.embeds?.length==0||m[0]?.message?.embeds?.[0]?.type==="link"||m[0].log_edit==!1||D("_nodelete","_logBots",!1)===!1&&m[0]?.message?.author?.bot||D("_nodelete","_logSelf",!1)===!1&&m[0]?.message?.author?.id==K)return;try{if(!m[0].edited_timestamp._isValid)return}catch{}const W=m[0].message.content;D("_nodelete","_storageLog",!1)==!1&&(m[0].message.content=d?.content+" `[edited]`\n"+m[0]?.message?.content),ie("edit",{username:`${m[0]?.message?.author?.username}#${m[0]?.message?.author?.discriminator}`,id:m[0]?.message?.author?.id,avatar:m[0]?.message?.author?.avatar,bot:m[0]?.message?.author?.bot},{guild:m[0].message.guild_id,channel:m[0].message.channel_id,message:m[0].message.id},{time:m[0]?.message?.edited_timestamp,original:d?.content?.replace(/\`\[edited\]\`/gim,"")?.replace("`[deleted]`","").trim(),edited:`${W?.replace(/\`\[edited\]\`/gim,"")?.replace("`[deleted]`","").trim()}`})}catch(d){console.log(`[${f.name} Error]`,d)}}),console.log(`${f.name} delayed start successful.`),s&&_.open({content:`[${f.name}] start successful.`,source:c.Success})}catch(g){console.log(`[${f.name} Plugin Error]`,g),e<o?(console.warn(`${f.name} failed to start. Trying again in ${e}0s.`),s&&_.open({content:`[${f.name}] failed to start trying again in ${e}0s.`,source:c.Failed}),setTimeout(n,e*1e4)):(console.error(`${f.name} failed to start. Giving up.`),_.open({content:`${f.name} failed to start. Giving up.`,source:c.Failed}))}},a=()=>{if(!G.getCurrentUser())return console.warn(`Current user hasn't initialized yet!: ${G.getCurrentUser()}. Trying again in 25ms`),setTimeout(()=>a(),25);K=G.getCurrentUser().id,n()};setTimeout(()=>{a()},300),this.commands=_e},onStop(){q.unpatchAll(),this.commands=[]},renderPage(e,{pageName:o,pagePanel:n}){Navigation.push("EnmityCustomPage",{pagePanel:n,pageName:o})},getSettingsPanel({settings:e}){return t.createElement(Me,{manifest:f,settings:e,hasToasts:!1,commands:_e},t.createElement(Xe,{styles:Je,renderPage:ye.renderPage}),t.createElement(v,null),t.createElement(B,{title:"Plugin Settings"},t.createElement(i,{label:"Log bot messages",subLabel:"Whether or not bot message events should be logged",leading:t.createElement(i.Icon,{source:c.Settings.Robot}),trailing:t.createElement(M,{value:e.getBoolean("_nodelete_logBots",!1),onValueChange:()=>{try{e.toggle("_nodelete_logBots",!1),e.getBoolean("_nodelete_logBots",!1)?S("_nodelete","_logBots",!0):S("_nodelete","_logBots",!1),_.open({content:`Log self-events has been set to: ${N("_nodelete","_logBots",!1)}.`,source:c.Success})}catch(o){console.log("[ NoDelete Toggle Error ]",o),_.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})}),t.createElement(v,null),t.createElement(i,{label:"Log my own messages",subLabel:"Whether or not your own edits and deleted messages will be logged",leading:t.createElement(i.Icon,{source:c.Settings.Self}),trailing:t.createElement(M,{value:e.getBoolean("_nodelete_logSelf",!1),onValueChange:()=>{try{e.toggle("_nodelete_logSelf",!1),e.getBoolean("_nodelete_logSelf",!1)?S("_nodelete","_logSelf",!0):S("_nodelete","_logSelf",!1),_.open({content:`Log self-events has been set to: ${N("_nodelete","_logSelf",!1)}.`,source:c.Success})}catch(o){console.log("[ NoDelete Toggle Error ]",o),_.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})}),t.createElement(v,null),t.createElement(i,{label:"Only log to Storage",subLabel:"Message logs will not show in chat, only in Storage",leading:t.createElement(i.Icon,{source:c.Pencil}),trailing:t.createElement(M,{value:e.getBoolean("_nodelete",!1),onValueChange:()=>{try{e.toggle("_nodelete",!1),e.getBoolean("_nodelete",!1)?S("_nodelete","_storageLog",!0):S("_nodelete","_storageLog",!1),_.open({content:`Storage-only log has been set to: ${N("_nodelete","_storageLog",!1)}.`,source:c.Success})}catch(o){console.log("[ NoDelete Toggle Error ]",o),_.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})}),t.createElement(v,null),t.createElement(be,{value:N("_nodelete","maxLogs","1000"),onChange:o=>/^\d+$/.test(o)?S("_nodelete","maxLogs",o.trim()):S("_nodelete","maxLogs","1000"),title:"Max Logs to Store"}),t.createElement(i,{label:"Auto-clear logs",subLabel:"Message logs will automatically clear after they have exceeded your max logs limit",leading:t.createElement(i.Icon,{source:c.Clear}),trailing:t.createElement(M,{value:e.getBoolean("_nodelete_autoClear",!1),onValueChange:()=>{try{e.toggle("_nodelete_autoClear",!1),e.getBoolean("_nodelete_autoClear",!1)?S("_nodelete","autoClear",!0):S("_nodelete","autoClear",!1),_.open({content:`Logs auto-clearing has been set to: ${N("_nodelete","autoClear",!1)}.`,source:c.Success})}catch(o){console.log("[ NoDelete Toggle Error ]",o),_.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})})))}};pe(ye);
