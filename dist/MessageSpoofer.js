function W(e){window.enmity.plugins.registerPlugin(e)}const S={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function M(...e){return window.enmity.modules.bulk(...e)}function h(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const u=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const F=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const _=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const E=window.enmity.modules.common.Storage,T=window.enmity.modules.common.Toasts,L=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const N=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const H=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const B=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function X(e){return window.enmity.patcher.create(e)}function l(e){return window.enmity.assets.getIDByName(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const q=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const J=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const g=o.Text;o.TextInput,o.TouchableHighlight;const b=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const f=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const A=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const r=o.FormRow,I=o.FormSection;o.FormSelect,o.FormSubLabel;const K=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const k=e=>{let t=0;for(let i in e)t++;return t},Q=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[k(t)]=`${t[k(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function Z(){try{let e=await E.getItem("device_list");if(e)return JSON.parse(e);let t=(await N.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=Q(t);await E.setItem("device_list",i);let a=await E.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ee(e,t,i){let a=await Z();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${i.split("-")[1]}
> **Discord Build:** ${_.InfoDictionaryManager.Version} (${_.InfoDictionaryManager.Build})
> **Software Version:** ${_.DCDDeviceManager.systemVersion}
> **Device:** ${a[_.DCDDeviceManager.device]}`}const d={Debug:l("debug"),Retry:l("ic_message_retry"),Failed:l("Small"),Cancel:l("ic_megaphone_nsfw_16px"),Add:l("add_white"),Delete:l("ic_message_delete"),Copy:l("toast_copy_link"),Open:l("ic_leave_stage"),Clipboard:l("pending-alert"),Debug_Command:{Sent:l("ic_application_command_24px"),Clock:l("clock")},Settings:{Toasts:{Context:l("toast_image_saved"),Settings:l("ic_selection_checked_24px")},Share:l("share"),Commands:l("ic_profile_badge_bot_commands"),Debug:l("ic_rulebook_16px")}},R=e=>{T.open({content:`Copied ${e} to clipboard.`,source:d.Clipboard})},{native:v}=window.enmity;function te(){v.reload()}v.version,v.build,v.device,v.version;const ne=h("transitionToGuild");async function oe({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await N.get(t)).text;let a=i.match(/\d\.\d\.\d+/g),s=i.match(/patch\-\d\.\d\.\d+/g);return!a||!s?V(e.name,e.version):(a=a[0],s=s[0],a!=e.version?U(t,a,s.split("-")[1],e,!1):s!=e.build?U(t,a,s.split("-")[1],e,!0):V(e.name,e.version))}const U=(e,t,i,a,s)=>{const c=s?i:t;L.show({title:"Update found",body:`A newer ${s?"build":"version"} is available for ${a.name}. ${s?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${s?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>ie(e,c,a,s)})},V=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),T.open({content:`${e} is on latest version (${t})`,source:d.Settings.Toasts.Settings})};async function ie(e,t,i,a){window.enmity.plugins.installPlugin(e,({data:s})=>{s=="installed_plugin"||s=="overridden_plugin"?L.show({title:`Updated ${i.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{te()}}):L.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{ne.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${a?`b${t}`:`v${t}`}`)}})})}const $=window.enmity.modules.common.Components.General.Animated,[D,se]=M(S.byProps("transitionToGuild"),S.byProps("setString"));var ae=({manifest:e})=>{const t=B.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:u.ThemeColorMap.HEADER_PRIMARY,fontFamily:u.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:u.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=n.useRef(new $.Value(1)).current,a=()=>{$.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},s=()=>{$.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},c=()=>{D.openURL("https://spin.rip/")},p={transform:[{scale:i}]};return n.createElement(n.Fragment,null,n.createElement(f,{style:t.container},n.createElement(b,{onPress:c,onPressIn:a,onPressOut:s},n.createElement($.View,{style:[p]},n.createElement(q,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(f,{style:t.text_container},n.createElement(b,{onPress:()=>{D.openURL(e.sourceUrl)}},n.createElement(g,{style:[t.main_text,t.header]},e.name," ")),n.createElement(f,{style:{flexDirection:"row"}},n.createElement(g,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(b,{onPress:()=>{D.openURL("https://spin.rip/")}},n.createElement(g,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(f,{style:{flexDirection:"row"}},n.createElement(g,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(b,{onPress:()=>{D.openURL("https://github.com/acquitelol/")}},n.createElement(g,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),n.createElement(f,null,n.createElement(b,{style:{flexDirection:"row"},onPress:()=>{se.setString(`**${e.name}** v${e.version}`),R("plugin name and version")}},n.createElement(g,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(g,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[re,O]=M(S.byProps("transitionToGuild"),S.byProps("setString"));var le=({manifest:e,settings:t,hasToasts:i,section:a,commands:s})=>{const c=B.createThemedStyleSheet({icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:u.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[p,x]=n.useState(),[w,P]=n.useState();return n.createElement(n.Fragment,null,n.createElement(J,{onTouchStart:m=>{x(m.nativeEvent.pageX),P(m.nativeEvent.pageY)},onTouchEnd:m=>{p-m.nativeEvent.pageX<-100&&w-m.nativeEvent.pageY<40&&w-m.nativeEvent.pageY>-40&&H.pop()}},n.createElement(ae,{manifest:e}),a,s&&n.createElement(I,{title:"Plugin Commands"},s.map(m=>n.createElement(r,{label:`/${m.name}`,subLabel:m.description,leading:n.createElement(r.Icon,{style:c.icon,source:d.Settings.Commands}),trailing:r.Arrow,onPress:function(){O.setString(`/${m.name}`),R(`the command ${m.name}`)}}))),n.createElement(I,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(r,{label:"Initialization Toasts",leading:n.createElement(r.Icon,{style:c.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(K,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),T.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Settings.Toasts.Settings})}})}),n.createElement(A,null)),n.createElement(r,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(r.Icon,{style:c.icon,source:d.Settings.Debug}),trailing:r.Arrow,onPress:async function(){O.setString(await ee(e.name,e.version,e.build)),R("plugin debug information")}}),n.createElement(A,null),n.createElement(r,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(r.Icon,{style:c.icon,source:d.Delete}),trailing:r.Arrow,onPress:async function(){await E.removeItem("device_list"),T.open({content:"Cleared device list storage.",source:d.Settings.Toasts.Settings})}})),n.createElement(I,{title:"Source"},n.createElement(r,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(r.Icon,{style:c.icon,source:d.Copy}),trailing:r.Arrow,onPress:()=>{oe({manifest:e})}}),n.createElement(A,null),n.createElement(r,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(r.Icon,{style:c.icon,source:d.Open}),trailing:r.Arrow,onPress:()=>{re.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(r,{label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))},me="MessageSpoofer",ce="1.1.8",de="patch-1.0.8",ue="Change what people say.",pe=[{name:"Marek (modified by spin)",id:"308440976723148800"}],ge="#ff0069",we="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/MessageSpoofer.js",Y={name:me,version:ce,build:de,description:ue,authors:pe,color:ge,sourceUrl:we};const ye=h("getMessage","getMessages"),he=h("getChannel","getDMFromUserId"),C=X("message-spoofer"),z=h("openLazy"),be=h("_currentDispatchActionType","_subscriptions","_waitQueue"),fe={...Y,patches:[],onStart(){let e=!1;C.before(z,"openLazy",(t,[i,a])=>{a==="MessageLongPressActionSheet"&&i.then(s=>{let c=s.default;return s.default=function({message:p,user:x,channel:w,canAddNewReactions:P},m){let y=c({message:p,user:x,channel:w,canAddNewReactions:P},m);if(y.props.children.props.children.props.children[1][0].key=="69")return y;let G=y.props.children.props.children.props.children[1][0].type,j=n.createElement(G,{key:"69",onPressRow:ve=>{z.hideActionSheet(),F.startEditMessage(`dirty-${w.id}`,p.id,p.content)},message:"Spoof edit",iconSource:l("ic_message_retry")});return y.props.children.props.children.props.children[1].unshift(j),y},s})}),C.before(F,"startEditMessage",(t,i,a)=>{i[0].startsWith("dirty-")?(i[0]=i[0].replace("dirty-",""),e=!0):e=!1}),C.before(F,"editMessage",(t,i,a)=>{if(e){const s=ye.getMessage(i[0],i[1]);be.dispatch({type:"MESSAGE_UPDATE",message:{...s,...i[2],edited_timestamp:s.editedTimestamp,mention_roles:s.mentionRoles,mention_everyone:s.mentionEveryone,member:s.author,guild_id:he.getChannel(s.channel_id).guild_id},log_edit:!1}),i={}}})},onStop(){C.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(le,{manifest:Y,settings:e,hasToasts:!1,section:null,commands:null})}};W(fe);
