function m(t){window.enmity.plugins.registerPlugin(t)}function s(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;function l(t){return window.enmity.patcher.create(t)}var u="NoDelete",p="1.1.2",_='Basic "Message Logger"',h=[{name:"NotMarek",id:"206299359007080450"}],M="#ff0069",f={name:u,version:p,description:_,authors:h,color:M};const r=s("getMessage","getMessages"),E=s("getChannel","getDMFromUserId"),a=s("_currentDispatchActionType","_subscriptions","_waitQueue"),o=l("NoDelete"),y={...f,patches:[],onStart(){const t=()=>{const d=a._orderedActionHandlers.MESSAGE_DELETE.find(i=>i.name==="MessageStore"),c=a._orderedActionHandlers.MESSAGE_UPDATE.find(i=>i.name==="MessageStore");o.before(d,"actionHandler",(i,e)=>{const n=r.getMessage(e[0].channelId,e[0].id);if(e[0]={},!n.editedTimestamp||n.editedTimestamp._isValid){const g={type:"MESSAGE_UPDATE",message:{...n,edited_timestamp:"invalid_timestamp",content:n.content+" `[deleted]`",guild_id:E.getChannel(n.channel_id).guild_id}};a.dispatch(g)}}),o.before(c,"actionHandler",(i,e)=>{try{const n=r.getMessage(e[0].message.channel_id,e[0].message.id);try{if(!e[0].edited_timestamp._isValid)return}catch{}e[0].message.content=n.content+" `[edited]`\n"+e[0].message.content;return}catch{}})};setTimeout(()=>{t()},300)},onStop(){o.unpatchAll()}};m(y);
