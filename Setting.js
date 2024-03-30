//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟻.𝟹                                                  // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : SIGMA-MD
* @Developer : Maher-Zubair
* @Version : v.1.5.3
* @license : Apache-2.0

This Project Is Under Apache-2.0 License.
So, No One Have Permission To Copy This Project,
Reupload, Reversed Engineering And Any Kind Of Deobfuscation.
Otherwise, A Legal Github Copyright Action Will Be Taken Against You
Which Result In Removing The Copied Project And Permanantly Banning Of Your Account.
* @Copyright_owner : Maher-Zubair

**/

const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//=========================[DEVELOPER'S VARIABLES, DON'T TOUCH]===================
global.port  = process.env.PORT  || 5000  ;
global.Gname = process.env.GNAME || "",
global.waUrl = process.env.WAURL || "",
global.audio = '' ; 
global.video = '' ;
global.lol   = 'GataDios'
global.cali  = `lykoUzNh`
global.devs  = "918318542882";
global.inrl_key = `inrl-bot-mdaqz3ks6md7`;
global.inrl_api = `https://upper-romy-inrl-bot.koyeb.app/`;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email     = 'death69ban@proton.me' ; 
global.github    = 'https://github.com/Arun696969/ALLEN-SIGMA' ;
global.location  = 'india/kolkata' ;
global.website   = 'https://eren9.godaddysites.com' ; 
global.maher_api = process.env.MAHER_API || `https://api.maher-zubair.tech/` ; // MY OWN OFFICIAL API WEBSITE, YOU CAN USE IT IN YOUR BOT OR PROJECT
//=================================================================================


//===========================[COMPULSORY VARIABLES]================================
global.owner = process.env.OWNER_NUMBER  || '918318542882' ;  // ADD YOUR NUMBER WITHOUT +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Allen69:XEy6hObcrZgmeuEE@allen69.0qvegkr.mongodb.net/?retryWrites=true&w=majority" ;            // PUT MONGODB KEY HERE, WITHOUT MONGODB YOUR BOT WILL NOT RUN
global.timezone  = process.env.TIME_ZONE || 'India/kolkata' // ADD CORRECT TIMEZONE OR LEAVE IT SAME , OTHERWISE YOU GET ERROS
//=================================================================================


//======================[YOUR CHOICE, CHANGE OR LEAVE IT SAME]=====================
global.sudo  =  process.env.SUDO || "918318542882" ;          // DON'T REMOVE
global.mztit = process.env.MZTIT ||"𝐀𝐥𝐥𝐞𝐧😔𝐎𝐛𝐞𝐫𝐨𝐢𝐢🥀",               // ADD YOUR TITLE, ONE WORD WILL BE MORE BETTER
global.gurl  = 'https://www.youtube.com/@Curious_hacker' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/379521f005b82d9e89ca3.jpg' ;
//=================================================================================


module.exports = {

  //==============================[COMPULSORY]=====================================
  sessionName: process.env.SESSION_ID || '',              // PUT YOUR SESSION ID
  botname: process.env.BOT_NAME       || 'sɪɢᴍᴀ-ᴍᴅ',         // ADD YOUR BOT NAME
  ownername:  process.env.OWNER_NAME  || `𝐀𝐥𝐥𝐞𝐧😔𝐎𝐛𝐞𝐫𝐨𝐢𝐢🥀`, // ADD YOUR NAME
  HANDLERS: process.env.PREFIX        || '.',              // ADD YOUR BOT PREFIX
  WORKTYPE: process.env.WORKTYPE      || 'private',      // IF PRIVATE ONLY YOU CAN USE YOUR BOT, IF PUBLIC EVERYONE CAN USE YOUR BOT
  //================================================================================


  //==============================[WHAT'SAPP FEATURES]==============================
  author:  process.env.PACK_AUTHER  || '𝐀𝐥𝐥𝐞𝐧😔𝐎𝐛𝐞𝐫𝐨𝐢𝐢🥀',      // ADD YOUR STICKER AUTHOR NAME
  status_view : process.env.AUTO_STATUS_VIEW   || 'false',    // IF IT TRUE IT AUTOMATICALLY VIEWS YOUR STATUSES
  status_saver : process.env.AUTO_STATUS_SAVER || 'false', // IF TRUE IT AUTOMATICALLY DOWNLOADS YOUR STATUSES AND SEND IN YOUR INBOX
  packname:  process.env.PACK_NAME  || "💕👀 𝑳𝑶𝑽𝑬 𝒀𝑶𝑼 𝑫𝑨𝑹𝑳𝑰𝑵𝑮🙈😚#𝑫****🥹✨🌎" ,          // ADD YOUR STICKER PACKNAME
  autoreaction: process.env.AUTO_REACTION || 'false',    // IF TRUE IT WILL REACT TO YOUR MESSAGES
  readmessage: process.env.READ_MESSAGE   || 'false',      // IF TRUE IT WILL SEEN ALL YOUR MESSAGES
  disablepm: process.env.DISABLE_PM || "false",        // IF TRUE IT WILL DISABLE THE BOT IN YOUR PM
  //=================================================================================


  //===========================[YOUR CHOICE, CHANGE OT LEAVE IT SAME]================
  warncount : process.env.WARN_COUNT || 2,                 // WARN LIMITS
  MsgsInLog:process.env.MSGS_IN_LOG  || 'false',            // IF TRUE IT WILL SHOW YOUR MESSAGES IN LOGS
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS    || 'false',   // IF TRUE IT WILL SHOW YOUR PM MESSAGES IN LOGS
  antifake :   process.env.FAKE_COUNTRY_CODE || '212',     // ANTIFAKE NUMBER CAN'T JOIN GROUPS
  levelupmessage: process.env.LEVEL_UP_MESSAGE ||'false', // SENDS A LEVEL UP MESSAGE WHEN SOMEONE'S RANK INCREASE
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com,youtube.com,instagram.com,tiktok.com,vt.tiktok.com,wa.me,facebook.com', // ANTILINKS VALUES, IT WILL TAKE ACTION WHO SEND THESE LINKS
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'false' ,     // IF TRUE IT WILL SEND AN ALERT MESSAGE WHEN SOMEONE PROMOTED/DEMOTED IN GROUPS
  antibadwords_values: process.env.ANTI_BAD_WORDS || 'Fuck,porn,sex,xxx,fucker,asshole,fuck you,fuck off,MC,Mc,mc,BC,Bc,bc,BKL,Bkl,bkl,CHOD,Chod,chod,CHODO,Chodo,chodo,LUND,Lund,lund,CHUT,Chut,chut,CHOOT,Choot,choot,BHOSDA,Bhosda,bhosda,BHOSDI,Bhosdi,bhosdi,BHOXDI,Bhoxdi,bhoxdi,BHOSD3,Bhosd3,bhosd3,BSDK,Bsdk,bsdk,PUSSY,Pussy,pussy,DICK,Dick,dick,BUMR,Bumr,bumr,GAND,Gand,gand,TMKC,Tmkc,tmkc,LODA,Loda,loda,LODU,Lodu,lodu,XXX,Xxx,xxx,PORN,Porn,porn,SEX,Sex,sexMILF,Milf,milf,FUCK,Fuck,fuck,FUCKER,Fucker,fucker,GAND,Gand,gand,G4ND,RANDI,Randi,randi,RAMDI,Ramdi,ramdi,RANDWA,Randwa,randwa,BETICHOD,Betichod,betichod,MADARCHOD,Madarchod,madarchod,BHENCHOD,Bhenchod,bhenchod,BKL,Bkl,bkl,HIJDI,Hijdi,hijdi,BUMR,Bumr,bumr,BAKACHODA,Bakachoda,bakachoda,chat.whatsapp.com,https,',   // IT WILL TAKES ACTIONS WHO SENDS THESE BAD WORDS
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,    // ADD YOUR OPEN AI KEY IF YOU HAVE
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY   || "1YueQDSbfnexBFK9ai86T1JX",    // ADD YOUR REMOVE BG KEY IF YOU HAVE
  //=================================================================================


  //=============================[DEVELOPER'S VARIABLES DON'T TOUCH]=================
  afk:  process.env.AFK   || false,
  BRANCH: process.env.BRANCH   || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption :process.env.CAPTION || "*• 𝐀𝐥𝐥𝐞𝐧-ѕιgмα*\n*• ωнαтѕαρρ вσт* ",
  LANG: process.env.THEME || "ALLEN-SIGMA",
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟻.𝟹'
  //=================================================================================
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
