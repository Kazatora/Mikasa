let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(`
┓━ اكتب قبل كل امر [.] ━┏

┓──【 *الـملصقات* 】───┏
🖼️ .مكس <ايموجي+ايموجي>
🖼️ .ملصق
🖼️ .لصوره
🖼️ .لفيديو
🖼️ .تريجر @المستخدم
🖼️ .سرقة <الاسم الاول>|<الاسم الثاني>
▪━━━━┣🖼️┫━━━━▪

┓──【 *الـصور* 】───┏
🖼️ .بينتيرست
🖼️ .خلفية
▪━━━━┣🖼️┫━━━━▪

┓──【 *الـجروب* 】───┏
👔 .ضيف
👔 .حذف
👔 .حذف_تحذير
👔 .اعفاء (منشن)
👔 .الجروب
👔 .مخفي
👔 .دعوه <الرقم>
👔 .طرد (منشن)
👔 .لينك
👔 .بروفايل
👔 .ترقية
👔 .تغيير_اللينك
ه👔 .setbye <text>
ه👔 .setwelcome <text>
👔 .محاكاة <الكلمه> @المستخدم
👔 .المشرفين
👔 .منشن
👔 .لمنشن
👔 .انئار @المستخدم
👔 .الانذارات
▪━━━━┣👔┫━━━━▪

┓──【 *الـتعبيرات* 】───┏
⚓ .قتل
⚓ .تربيتي
⚓ .ضرب
▪━━━━┣⚓┫━━━━▪
`.trim())
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['ا', 'اوامر'] 

export default handler
