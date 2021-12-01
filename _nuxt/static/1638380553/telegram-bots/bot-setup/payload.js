__NUXT_JSONP__("/telegram-bots/bot-setup", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj){return {data:[{document:{slug:"bot-setup",description:"",title:"Bot Setup",category:"Telegram Bots",fullscreen:true,position:20,toc:[{id:I,depth:q,text:J},{id:K,depth:q,text:L},{id:M,depth:p,text:N},{id:n,depth:p,text:n},{id:O,depth:q,text:P},{id:Q,depth:p,text:A},{id:R,depth:p,text:n},{id:S,depth:q,text:T},{id:U,depth:p,text:A},{id:V,depth:q,text:n}],body:{type:"root",children:[{type:b,tag:r,props:{id:I},children:[{type:b,tag:h,props:{href:"#creating-a-new-telegram-bot",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Go to "},{type:b,tag:h,props:{href:"https:\u002F\u002Ft.me\u002Fbotfather",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"@BotFather"}]},{type:a,value:" on Telegram."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Send "},{type:b,tag:m,props:{},children:[{type:a,value:"\u002Fnewbot"}]},{type:a,value:", to start creating a new Bot and setting its name and username."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{src:"screenshots\u002Fnew-bot.jpg"},children:[]},{type:a,value:c},{type:b,tag:B,props:{start:p},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"take note of the bot "},{type:b,tag:W,props:{},children:[{type:a,value:e}]},{type:a,value:"."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{src:"screenshots\u002Fnew-bot-token.jpg"},children:[]},{type:a,value:c},{type:b,tag:B,props:{start:4},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Now you need to allow your Bot to send direct messages, so send "},{type:b,tag:m,props:{},children:[{type:a,value:"\u002Fsetjoingroups"}]},{type:a,value:" to @BotFather, select your Bot and click Enable:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{src:"screenshots\u002Fnew-bot-joingroups.jpg"},children:[]},{type:a,value:c},{type:b,tag:B,props:{start:5},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"(optional) To let your bot to listen for commands (like "},{type:b,tag:m,props:{},children:[{type:a,value:"\u002Fchatid"}]},{type:a,value:") you need to enable privacy mode: send `\u002F"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{src:"screenshots\u002Fnew-bot-setprivacy.jpg"},children:[]},{type:a,value:c},{type:b,tag:r,props:{id:K},children:[{type:b,tag:h,props:{href:"#registering-the-newly-created-bot-into-your-application",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Any number of bots can be created, both programmatically and through an artisan command"}]},{type:a,value:c},{type:b,tag:u,props:{id:M},children:[{type:b,tag:h,props:{href:"#through-artisan-command",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You can add a new bot issuing the dedicated "},{type:b,tag:X,props:{},children:[{type:a,value:"artisan"}]},{type:a,value:" command:"}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"php artisan telegraph:new-bot\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"you will be guided through a bot creation wizard that will (optionally) allow you to add a new chat and setup a bot webhook as well"}]},{type:a,value:c},{type:b,tag:t,props:{src:"screenshots\u002Fartisan-new-bot.jpg"},children:[]},{type:a,value:c},{type:b,tag:u,props:{id:n},children:[{type:b,tag:h,props:{href:"#programmatically",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If you are implementing a custom bot creation logic, you can create a new bot using the "},{type:b,tag:m,props:{},children:[{type:a,value:"TelegramBot"}]},{type:a,value:" model:"}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,Y]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[e,C]},children:[{type:a,value:E}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"="}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,"scope"]},children:[{type:a,value:Z},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:"::"}]}]},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:"create"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:"["}]},{type:a,value:_},{type:b,tag:d,props:{className:[e,$,aa]},children:[{type:a,value:"'token'"}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:ab}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,C]},children:[{type:a,value:"$token"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ac}]},{type:a,value:_},{type:b,tag:d,props:{className:[e,$,aa]},children:[{type:a,value:"'name'"}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:ab}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,C]},children:[{type:a,value:"$name"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ac}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:"]"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ad}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:r,props:{id:O},children:[{type:b,tag:h,props:{href:"#setting-a-webhook",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"A webhook let your bot to answer commands issued from telegram chats and buttons inside messages"}]},{type:a,value:c},{type:b,tag:u,props:{id:Q},children:[{type:b,tag:h,props:{href:"#through-an-artisan-command",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"php artisan telegraph:set-webhook "},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ae}]},{type:a,value:af},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ag}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:c},{type:b,tag:u,props:{id:R},children:[{type:b,tag:h,props:{href:"#programmatically-1",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,Y]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[e,"doc-comment","comment"]},children:[{type:a,value:"\u002F** "},{type:b,tag:d,props:{className:[e,"keyword"]},children:[{type:a,value:"@var"}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,"class-name"]},children:[{type:a,value:Z}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,"parameter"]},children:[{type:a,value:E}]},{type:a,value:" *\u002F"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,C]},children:[{type:a,value:E}]},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:ai}]},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:"registerWebhook"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:ai}]},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:"send"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ad}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:r,props:{id:S},children:[{type:b,tag:h,props:{href:"#associating-a-chat-to-a-bot",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Associating a chat to a bot, lets you send messages to that chat and interacting with commands"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:W,props:{},children:[{type:a,value:"note"}]},{type:a,value:" to get the "},{type:b,tag:X,props:{},children:[{type:a,value:"chat_id"}]},{type:a,value:" write the "},{type:b,tag:m,props:{},children:[{type:a,value:"\u002Fchat_id"}]},{type:a,value:" command inside the chat"}]},{type:a,value:c},{type:b,tag:u,props:{id:U},children:[{type:b,tag:h,props:{href:"#through-an-artisan-command-1",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"php artisan telegraph:new-chat "},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ae}]},{type:a,value:af},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ag}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:c},{type:b,tag:r,props:{id:V},children:[{type:b,tag:h,props:{href:"#programmatically-2",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"[TODO]"}]}]},dir:"\u002Fen\u002Ftelegram-bots",path:"\u002Fen\u002Ftelegram-bots\u002Fbot-setup",extension:".md",createdAt:aj,updatedAt:aj,to:"\u002Ftelegram-bots\u002Fbot-setup"},prev:{title:"Support Us",path:"\u002Fen\u002Fsupport-us",to:"\u002Fsupport-us"},next:null}],fetch:{},mutations:[]}}("text","element","\n","span","token","punctuation","p","a","true",-1,"icon","icon-link","code","programmatically"," ",3,2,"h2","li","img","h3","div","nuxt-content-highlight","pre","line-numbers","operator","through an artisan command","ol","variable","language-shell","$bot","function","(",")","creating-a-new-telegram-bot","Creating a new Telegram Bot","registering-the-newly-created-bot-into-your-application","Registering the newly created bot into your application","through-artisan-command","through artisan command","setting-a-webhook","Setting a webhook","through-an-artisan-command","programmatically-1","associating-a-chat-to-a-bot","Associating a chat to a bot","through-an-artisan-command-1","programmatically-2","strong","em","language-php","TelegraphBot","\n    ","string","single-quoted-string","=\u003E",",",";","{","bot_id","}","the bot_id argument is mandatory if you have created more than one bot","-\u003E","2021-12-01T17:41:06.729Z")));