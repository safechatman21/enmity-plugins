function S(e,o,a){window.enmity.settings.set(e,o,a)}function T(e,o,a){return window.enmity.settings.get(e,o,a)}function D(e,o,a){return window.enmity.settings.getBoolean(e,o,a)}const{components:s}=window.enmity;s.Alert;const we=s.Button;s.FlatList;const Q=s.Image;s.ImageBackground,s.KeyboardAvoidingView,s.Modal,s.Pressable,s.RefreshControl;const Z=s.ScrollView;s.SectionList,s.StatusBar,s.StyleSheet,s.Switch;const b=s.Text;s.TextInput,s.TouchableHighlight;const L=s.TouchableOpacity;s.TouchableWithoutFeedback,s.Touchable;const E=s.View;s.VirtualizedList,s.Form,s.FormArrow,s.FormCTA,s.FormCTAButton,s.FormCardSection,s.FormCheckbox;const v=s.FormDivider;s.FormHint,s.FormIcon;const fe=s.FormInput;s.FormLabel,s.FormRadio;const i=s.FormRow,M=s.FormSection;s.FormSelect,s.FormSubLabel;const P=s.FormSwitch;s.FormTernaryCheckBox,s.FormText,s.FormTextColors,s.FormTextSizes;function be(e){window.enmity.plugins.registerPlugin(e)}const I={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,o)=>window.enmity.modules.filters.byName(e,o),byTypeName:(e,o)=>window.enmity.modules.filters.byTypeName(e,o),byDisplayName:(e,o)=>window.enmity.modules.filters.byDisplayName(e,o)};function j(...e){return window.enmity.modules.bulk(...e)}function k(...e){return window.enmity.modules.getByProps(...e)}function pe(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const h=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const V=window.enmity.modules.common.Native,t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const p=window.enmity.modules.common.Storage,_=window.enmity.modules.common.Toasts,N=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const ee=window.enmity.modules.common.REST;window.enmity.modules.common.Settings;const G=window.enmity.modules.common.Users,O=window.enmity.modules.common.Navigation,te=window.enmity.modules.common.NavigationNative,oe=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const R=window.enmity.modules.common.StyleSheet,Ee=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const ne=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function Se(e){return window.enmity.patcher.create(e)}const ae=e=>{let o=0;for(let a in e)o++;return o};function u(e){return window.enmity.assets.getIDByName(e)}const c={Debug:u("debug"),Retry:u("ic_message_retry"),Failed:u("Small"),Cancel:u("ic_megaphone_nsfw_16px"),Add:u("add_white"),Delete:u("ic_message_delete"),Clear:u("ic_clear_all_24px"),Pencil:u("ic_pencil_24px"),Success:u("ic_selection_checked_24px"),Warning:u("ic_warning_24px"),Copy:u("toast_copy_link"),Open:u("ic_leave_stage"),Clipboard:u("pending-alert"),Initial:u("coffee"),Shield:u("ic_person_shield"),Debug_Command:{Sent:u("ic_application_command_24px"),Clock:u("clock")},Settings:{Toasts:{Context:u("toast_image_saved"),Settings:u("ic_selection_checked_24px")},Self:u("friends_toast_icon"),Share:u("share"),Robot:u("ic_robot_24px"),Commands:u("ic_profile_badge_bot_commands"),Debug:u("ic_rulebook_16px")}},Y=e=>{_.open({content:`Copied ${e} to clipboard.`,source:c.Clipboard})},ve=e=>{let o=e.split(`
`).map(a=>{if(a!="")return`"${a.replaceAll(":",'":"').replace(" ","")}",`});return o[0]=`{${o[0]}`,o[ae(o)]=`${o[ae(o)]}}`,o=o.join(""),o=o.replaceAll("undefined",""),o=o.split("").reverse().join("").replace(",","").split("").reverse().join(""),o};async function De(){try{let e=await p.getItem("device_list");if(e)return JSON.parse(e);let o=(await ee.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,a=ve(o);await p.setItem("device_list",a);let n=await p.getItem("device_list");return JSON.parse(n)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function $e(e,o,a){let n=await De();return`**[${e}] Debug Information**
> **Plugin Version:** ${o}
> **Plugin Build:** ${a.split("-")[1]}
> **Discord Build:** ${V.InfoDictionaryManager.Version} (${V.InfoDictionaryManager.Build})
> **Software Version:** ${V.DCDDeviceManager.systemVersion}
> **Device:** ${n[V.DCDDeviceManager.device]}`}const{native:F}=window.enmity;function Le(){F.reload()}F.version,F.build,F.device,F.version;const xe=k("transitionToGuild");async function Ce({manifest:e}){const o=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,a=await(await ee.get(o)).text;let n=a.match(/\d\.\d\.\d+/g),r=a.match(/patch\-\d\.\d\.\d+/g);return!n||!r?se(e.name,e.version):(n=n[0],r=r[0],n!=e.version?le(o,n,r.split("-")[1],e,!1):r!=e.build?le(o,n,r.split("-")[1],e,!0):se(e.name,e.version))}const le=(e,o,a,n,r)=>{const g=r?a:o;N.show({title:"Update found",body:`A newer ${r?"build":"version"} is available for ${n.name}. ${r?`
The version will remain at ${o}, but the build will update to ${a}.`:""}
Would you like to install ${r?`build \`${a}\``:`version \`${o}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Te(e,g,n,r)})},se=(e,o)=>{console.log(`[${e}] Plugin is on the latest version, which is ${o}`),_.open({content:`${e} is on latest version (${o})`,source:c.Success})};async function Te(e,o,a,n){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?N.show({title:`Updated ${a.name}`,body:`Successfully updated to ${n?"build":"version"} \`${o}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{Le()}}):N.show({title:"Error",body:`Something went wrong while updating ${a.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{xe.openURL(`https://github.com/safechatman21/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${a.name}%20Update%20Error%3A%20${n?`b${o}`:`v${o}`}`)}})})}const H=window.enmity.modules.common.Components.General.Animated,[z,Ie]=j(I.byProps("transitionToGuild"),I.byProps("setString")),w=R.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:h.Fonts.DISPLAY_NORMAL},header:{color:h.ThemeColorMap.HEADER_PRIMARY,fontFamily:h.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:h.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var Ne=({manifest:e})=>{const o=t.useRef(new H.Value(1)).current,a=()=>{H.spring(o,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},n=()=>{H.spring(o,{toValue:1,duration:250,useNativeDriver:!0}).start()},r=()=>{z.openURL("https://spin.rip/")},g={transform:[{scale:o}]};return t.createElement(t.Fragment,null,t.createElement(E,{style:w.container},t.createElement(L,{onPress:r,onPressIn:a,onPressOut:n},t.createElement(H.View,{style:[g]},t.createElement(Q,{style:[w.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(E,{style:w.text_container},t.createElement(L,{onPress:()=>{z.openURL(e.sourceUrl)}},t.createElement(b,{style:[w.main_text,w.header]},e.name," ")),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(b,{style:[w.main_text,w.sub_header]},"A plugin by"),t.createElement(L,{onPress:()=>{z.openURL("https://spin.rip/")}},t.createElement(b,{style:[w.main_text,w.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),t.createElement(E,{style:{flexDirection:"row"}},t.createElement(b,{style:[w.main_text,w.sub_header]},"Settings page by"),t.createElement(L,{onPress:()=>{z.openURL("https://github.com/acquitelol/")}},t.createElement(b,{style:[w.main_text,w.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),t.createElement(E,null,t.createElement(L,{style:{flexDirection:"row"},onPress:()=>{Ie.setString(`**${e.name}** v${e.version}`),Y("plugin name and version")}},t.createElement(b,{style:[w.main_text,w.sub_header]},"Version:"),t.createElement(b,{style:[w.main_text,w.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[Be,re]=j(I.byProps("transitionToGuild","openURL"),I.byProps("setString","getString")),x=R.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:h.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:h.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var Me=({manifest:e,settings:o,hasToasts:a,children:n,commands:r})=>t.createElement(Z,null,t.createElement(Ne,{manifest:e}),n,r&&t.createElement(M,{title:"Plugin Commands"},r.map(g=>t.createElement(i,{label:`/${g.name}`,subLabel:g.description,leading:t.createElement(i.Icon,{style:x.icon,source:c.Settings.Commands}),trailing:i.Arrow,onPress:function(){re.setString(`/${g.name}`),Y(`the command ${g.name}`)}}))),t.createElement(M,{title:"Utility"},a&&t.createElement(t.Fragment,null,t.createElement(i,{label:"Initialization Toasts",leading:t.createElement(i.Icon,{style:x.icon,source:c.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:t.createElement(P,{value:o.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{o.toggle(`${e.name}-toastEnable`,!1),_.open({content:`Successfully ${o.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:c.Success})}})}),t.createElement(v,null)),t.createElement(i,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:t.createElement(i.Icon,{style:x.icon,source:c.Settings.Debug}),trailing:i.Arrow,onPress:async function(){re.setString(await $e(e.name,e.version,e.build)),Y("plugin debug information")}}),t.createElement(v,null),t.createElement(i,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:t.createElement(i.Icon,{style:x.icon,source:c.Delete}),trailing:i.Arrow,onPress:async function(){await p.removeItem("device_list"),_.open({content:"Cleared device list storage.",source:c.Success})}})),t.createElement(M,{title:"Source"},t.createElement(i,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(i.Icon,{style:x.icon,source:c.Copy}),trailing:i.Arrow,onPress:()=>{Ce({manifest:e})}}),t.createElement(v,null),t.createElement(i,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(i.Icon,{style:x.icon,source:c.Open}),trailing:i.Arrow,onPress:()=>{Be.openURL(`https://github.com/safechatman21/enmity-plugins/tree/master/${e.name}`)}})),t.createElement(i,{style:x.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`}));async function ie(e,o,a,n){const r={type:e,author:{...o,avatar:o.avatar?`https://cdn.discordapp.com/avatars/${o.id}/${o.avatar}.${o.avatar?.startsWith("a_")?"gif":"png"}?size=1024`:"https://cdn.discordapp.com/embed/avatars/0.png"},context:a,content:n.edited?[new Date(n.time).toLocaleString(),n.original,n.edited]:[new Date(n.time).toLocaleString(),n.original]};let g=await p.getItem("NoDeleteLogs");g=JSON.parse(g),r!==g[g.length-1]&&(g.push(r),await p.setItem("NoDeleteLogs",JSON.stringify(g)))}var Pe="NoDelete",Re="3.5.15",Fe="patch-1.0.14",Ue='Somewhat basic "Message Logger"',Ae=[{name:"Marek (modified by spin)",id:"308440976723148800"}],ke="#ff0069",Ve="https://raw.githubusercontent.com/safechatman21/enmity-plugins/master/dist/NoDelete.js",f={name:Pe,version:Re,build:Fe,description:Ue,authors:Ae,color:ke,sourceUrl:Ve},ce;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(ce||(ce={}));var X;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(X||(X={}));var J;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(J||(J={}));var me;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(me||(me={}));var de;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(de||(de={}));var ge;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(ge||(ge={}));const ue=oe.createStackNavigator(),{ThemeColorMap:B}=Ee,U=R.createThemedStyleSheet({container:{backgroundColor:B.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:B.BACKGROUND_MOBILE_PRIMARY,color:B.TEXT_NORMAL},header:{backgroundColor:B.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:B.HEADER_PRIMARY},close:{color:B.HEADER_PRIMARY}});var Ge=({name:e="Page",component:o=E,close_button:a={name:"Close",functionality:()=>{O.pop()}}}={})=>t.createElement(te.NavigationContainer,{independent:!0},t.createElement(ue.Navigator,{initialRouteName:e,style:U.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:U.cardStyle,headerStyle:U.header,headerTitleContainerStyle:U.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(ue.Screen,{name:e,component:o,options:{headerTitleStyle:{color:"white"},headerLeft:()=>t.createElement(we,{color:U.close.color,title:a.name,onPress:a.functionality}),...oe.TransitionPresets.ModalSlideFromBottomIOS}})));const[Oe,Ye]=j(I.byProps("setString"),I.byProps("fetchProfile")),He=pe("StaticSearchBarContainer"),y=R.createThemedStyleSheet({main_text:{opacity:.975,letterSpacing:.25,fontFamily:h.Fonts.DISPLAY_NORMAL},item_container:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:4,paddingBottom:4,width:"100%"},author_name:{color:h.ThemeColorMap.HEADER_PRIMARY,fontFamily:h.Fonts.DISPLAY_BOLD,fontSize:18,letterSpacing:.25,paddingBottom:4},log_header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"95%"},log_sub_header:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"50%"},log_time:{color:h.ThemeColorMap.TEXT_MUTED,opacity:.99,fontSize:13,paddingLeft:4},log_type:{color:h.ThemeColorMap.TEXT_MUTED,opacity:.45,fontSize:16,marginLeft:"auto"},avatar_container:{alignSelf:"start",justifySelf:"start",marginTop:5},author_avatar:{width:40,height:40,borderRadius:100},old_message:{color:h.ThemeColorMap.TEXT_MUTED,opacity:.89,fontSize:16},message_content:{color:h.ThemeColorMap.TEXT_NORMAL,opacity:.985,fontSize:16},main_container:{paddingLeft:8,paddingRight:4,paddingTop:2,paddingBottom:16,width:"95%"},text_container:{display:"flex",flexDirection:"column",paddingBottom:4,paddingLeft:8,width:"95%"}});var he=()=>{const e=(l,C)=>l.length>C?l.substring(0,C)+"...":l,o=()=>{p.setItem("NoDeleteLogs","[]"),p.getItem("NoDeleteLogs").then(l=>{l=="[]"?N.show({title:"Logs Cleared",body:"NoDelete message logs have been cleared",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>O.pop()}):N.show({title:"Error clearing logs",body:"NoDelete logs could not be cleared. Try again or report this issues to spin.",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>O.pop()})})},a=T("_nodelete","maxLogs","1000"),[n,r]=t.useState([]),[g,A]=t.useState([]);t.useEffect(()=>{p.getItem("NoDeleteLogs").then(l=>{let C=JSON.parse(l);r(C.reverse())})},[]);for(let l=0;l<n.length;l++)n[l].author.id==null&&(n[l]={type:n[l].type,author:{username:n[l].author,id:n[l].id,avatar:n[l].avatar,bot:"unknown"},context:{guild:"unknown",channel:"unknown",message:"unknown"},content:n[l].content},l==n.length-1&&r(n));return n.length>parseInt(a)&&(D("_nodelete","autoClear",!1)==!1?N.show({title:`Logs have exceeded ${e(a,12)}`,body:`NoDelete logs have exceeded your limit of ${e(a,12)}${parseInt(a)>1e3?`
You may experience performance issues or a laggy log page UI. Clear your logs to fix this issue.`:""}`,confirmText:"Clear logs",cancelText:"Close",onConfirm:()=>o()}):(o(),p.getItem("NoDeleteLogs").then(l=>{l==="[]"?_.open({content:`Auto-cleared ${e(n.length,10)} logs.`,source:c.Success}):_.open({content:"NoDelete logs could not be cleared. Try again or report this issues to spin.",source:c.Failed})}))),t.createElement(t.Fragment,null,t.createElement(He,{placeholder:"Search Logs",onChangeText:l=>A(l)}),t.createElement(i,{label:"Clear all NoDelete message logs",trailing:i.Arrow,onPress:()=>o()}),t.createElement(v,null),t.createElement(Z,null,t.createElement(E,{style:y.main_container},n.filter(l=>JSON.stringify(l).includes(g)).map(l=>t.createElement(t.Fragment,null,t.createElement(E,{style:y.item_container},t.createElement(L,{onPress:()=>{G.getUser(l.author.id)?ne.showUserProfile({userId:l.author.id}):Ye.getUser(l.author.id).then(()=>ne.showUserProfile({userId:l.author.id}))},style:y.avatar_container},t.createElement(Q,{style:y.author_avatar,source:{uri:l.author.avatar}})),t.createElement(L,{onPress:()=>{Oe.setString(`${l.author.username} (\`${l.author.id}\`):
>>> ${l.content.join(`
`)}`),Y("log content")},style:y.text_container},t.createElement(E,{style:y.log_header},t.createElement(E,{style:y.log_sub_header},t.createElement(b,{style:[y.main_text,y.author_name]},l.author.username),t.createElement(b,{style:[y.main_text,y.log_time]},l.content[0])),t.createElement(b,{style:[y.main_text,y.log_type]},l.type==="edit"?t.createElement(i.Icon,{source:c.Pencil}):t.createElement(i.Icon,{source:c.Delete}))),t.createElement(E,null,l.content.length==3?t.createElement(t.Fragment,null,t.createElement(b,{style:[y.main_text,y.old_message]},l.content[1]),t.createElement(b,{style:[y.main_text,y.message_content]},l.content[2])):t.createElement(b,{style:y.message_content},l.content[1])))),t.createElement(v,null))))))};function ze(e,o,a,n){window.enmity.clyde.sendReply(e,o,a,n)}const We={id:"logs-command",name:"logs",displayName:"logs",description:"Open the NoDelete message logs page",displayDescription:"Open the NoDelete message logs page",type:X.Chat,inputType:J.BuiltInText,execute:async function(e,o){try{O.push(Ge,{component:he,name:"NoDelete Message Logs"})}catch(a){console.log("[ NoDelete Error ]",a),ze(o?.channel.id??"0","An error occured while trying to open NoDelete message logs. Check debug logs for more info.")}}},_e=[We];var je=({styles:e})=>{const o=te.useNavigation();return t.createElement(M,{title:"Message Logs"},t.createElement(i,{label:"View Message Logs",subLabel:"Tap on an item to copy to clipboard",leading:t.createElement(i.Icon,{style:e.icon,source:c.Settings.Debug}),onPress:()=>{o.push("EnmityCustomPage",{pageName:"NoDelete Message Logs",pagePanel:he})}}))};const Xe=R.createThemedStyleSheet({icon:{color:h.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:h.ThemeColorMap.TEXT_MUTED}});let K;const q=Se(f.name),Je={...f,patches:[],onStart(){p.getItem("NoDeleteLogs").then(r=>{r==null&&p.setItem("NoDeleteLogs","[]")}).catch(r=>{console.log(`[${f.name} Storage Error]`,r)});let e=0;const o=3,a=()=>{const r=D(f.name,`${f.name}-toastEnable`,!1);try{e++;const g=k("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),A=k("getMessage","getMessages"),l=k("getChannel","getDMFromUserId");console.log(`${f.name} delayed start attempt ${e}/${o}.`),r&&_.open({content:`[${f.name}] start attempt ${e}/${o}.`,source:c.Debug});for(const $ of["MESSAGE_UPDATE","MESSAGE_DELETE"])try{g.dispatch({type:$,message:{}})}catch(m){console.log(`[${f.name} Dispatch Error]`,m)}const C=g._actionHandlers._orderedActionHandlers?.MESSAGE_DELETE.find($=>$.name==="MessageStore"),ye=g._actionHandlers._orderedActionHandlers?.MESSAGE_UPDATE.find($=>$.name==="MessageStore");q.before(C,"actionHandler",($,m)=>{const d=A.getMessage(m[0].channelId,m[0].id);if(!(!d?.author?.id||!d?.author?.username||!d?.content&&d?.attachments?.length==0&&d?.embeds?.length==0)&&!(D("_nodelete","_logBots",!1)===!1&&d?.author?.bot)&&!(D("_nodelete","_logSelf",!1)===!1&&d?.author?.id==K)){if(D("_nodelete","_storageLog",!1)==!1&&(m[0]={}),!d?.editedTimestamp||d?.editedTimestamp._isValid){const W={type:"MESSAGE_UPDATE",message:{...d,edited_timestamp:"invalid_timestamp",content:d?.content+" `[deleted]`\n-# <:Pleading:1057994933237198939> Message Above was Deleted\n",guild_id:l.getChannel(d?.channel_id)?.guild_id},log_edit:!1};g.dispatch(W)}ie("delete",{username:`${d?.author?.username}#${d?.author?.discriminator}`,id:d?.author?.id,avatar:d?.author?.avatar,bot:d?.author?.bot},{guild:l.getChannel(d?.channel_id)?.guild_id,channel:d?.channel_id,message:d?.id},{time:d?.timestamp,original:d?.content?.replace("`[deleted]`","").trim()})}}),q.before(ye,"actionHandler",($,m)=>{try{const d=A.getMessage(m[0].message.channel_id,m[0].message.id);if(!d?.content||!m[0]?.message?.content||!m[0]?.message?.content&&m[0]?.message?.attachments?.length==0&&m[0]?.message?.embeds?.length==0||m[0]?.message?.embeds?.[0]?.type==="link"||m[0].log_edit==!1||D("_nodelete","_logBots",!1)===!1&&m[0]?.message?.author?.bot||D("_nodelete","_logSelf",!1)===!1&&m[0]?.message?.author?.id==K)return;try{if(!m[0].edited_timestamp._isValid)return}catch{}const W=m[0].message.content;D("_nodelete","_storageLog",!1)==!1&&(m[0].message.content=d?.content+" \n-# <:Pleading:1057994933237198939> Message Above was Edited\n"+m[0]?.message?.content),ie("edit",{username:`${m[0]?.message?.author?.username}#${m[0]?.message?.author?.discriminator}`,id:m[0]?.message?.author?.id,avatar:m[0]?.message?.author?.avatar,bot:m[0]?.message?.author?.bot},{guild:m[0].message.guild_id,channel:m[0].message.channel_id,message:m[0].message.id},{time:m[0]?.message?.edited_timestamp,original:d?.content?.replace(/\`\[edited\]\`/gim,"")?.replace("`[deleted]`","").trim(),edited:`${W?.replace(/\`\[edited\]\`/gim,"")?.replace("`[deleted]`","").trim()}`})}catch(d){console.log(`[${f.name} Error]`,d)}}),console.log(`${f.name} delayed start successful.`),r&&_.open({content:`[${f.name}] start successful.`,source:c.Success})}catch(g){console.log(`[${f.name} Plugin Error]`,g),e<o?(console.warn(`${f.name} failed to start. Trying again in ${e}0s.`),r&&_.open({content:`[${f.name}] failed to start trying again in ${e}0s.`,source:c.Failed}),setTimeout(a,e*1e4)):(console.error(`${f.name} failed to start. Giving up.`),_.open({content:`${f.name} failed to start. Giving up.`,source:c.Failed}))}},n=()=>{if(!G.getCurrentUser())return console.warn(`Current user hasn't initialized yet!: ${G.getCurrentUser()}. Trying again in 25ms`),setTimeout(()=>n(),25);K=G.getCurrentUser().id,a()};setTimeout(()=>{n()},300),this.commands=_e},onStop(){q.unpatchAll(),this.commands=[]},getSettingsPanel({settings:e}){return t.createElement(Me,{manifest:f,settings:e,hasToasts:!1,commands:_e},t.createElement(je,{styles:Xe}),t.createElement(v,null),t.createElement(M,{title:"Plugin Settings"},t.createElement(i,{label:"Log bot messages",subLabel:"Whether or not bot message events should be logged",leading:t.createElement(i.Icon,{source:c.Settings.Robot}),trailing:t.createElement(P,{value:e.getBoolean("_nodelete_logBots",!1),onValueChange:()=>{try{e.toggle("_nodelete_logBots",!1),e.getBoolean("_nodelete_logBots",!1)?S("_nodelete","_logBots",!0):S("_nodelete","_logBots",!1),_.open({content:`Log self-events has been set to: ${T("_nodelete","_logBots",!1)}.`,source:c.Success})}catch(o){console.log("[ NoDelete Toggle Error ]",o),_.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})}),t.createElement(v,null),t.createElement(i,{label:"Log my own messages",subLabel:"Whether or not your own edits and deleted messages will be logged",leading:t.createElement(i.Icon,{source:c.Settings.Self}),trailing:t.createElement(P,{value:e.getBoolean("_nodelete_logSelf",!1),onValueChange:()=>{try{e.toggle("_nodelete_logSelf",!1),e.getBoolean("_nodelete_logSelf",!1)?S("_nodelete","_logSelf",!0):S("_nodelete","_logSelf",!1),_.open({content:`Log self-events has been set to: ${T("_nodelete","_logSelf",!1)}.`,source:c.Success})}catch(o){console.log("[ NoDelete Toggle Error ]",o),_.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})}),t.createElement(v,null),t.createElement(i,{label:"Only log to Storage",subLabel:"Message logs will not show in chat, only in Storage",leading:t.createElement(i.Icon,{source:c.Pencil}),trailing:t.createElement(P,{value:e.getBoolean("_nodelete",!1),onValueChange:()=>{try{e.toggle("_nodelete",!1),e.getBoolean("_nodelete",!1)?S("_nodelete","_storageLog",!0):S("_nodelete","_storageLog",!1),_.open({content:`Storage-only log has been set to: ${T("_nodelete","_storageLog",!1)}.`,source:c.Success})}catch(o){console.log("[ NoDelete Toggle Error ]",o),_.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})}),t.createElement(v,null),t.createElement(fe,{value:T("_nodelete","maxLogs","1000"),onChange:o=>/^\d+$/.test(o)?S("_nodelete","maxLogs",o.trim()):S("_nodelete","maxLogs","1000"),title:"Max Logs to Store"}),t.createElement(i,{label:"Auto-clear logs",subLabel:"Message logs will automatically clear after they have exceeded your max logs limit",leading:t.createElement(i.Icon,{source:c.Clear}),trailing:t.createElement(P,{value:e.getBoolean("_nodelete_autoClear",!1),onValueChange:()=>{try{e.toggle("_nodelete_autoClear",!1),e.getBoolean("_nodelete_autoClear",!1)?S("_nodelete","autoClear",!0):S("_nodelete","autoClear",!1),_.open({content:`Logs auto-clearing has been set to: ${T("_nodelete","autoClear",!1)}.`,source:c.Success})}catch(o){console.log("[ NoDelete Toggle Error ]",o),_.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})})))}};be(Je);
