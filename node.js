const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log("我準備好了")
})

bot.on('message', message => { //discord id
    if (message.content.startsWith("!zid")) {
        let target = message.mentions.users.first()
        if (target) {
            message.channel.send('他的discord id是 : ' + target)
        }
        else {
            message.reply('屌你老母tag個人都可以tag錯，有無人教過你tag人架\n格式：!zid @人')
        }
    }
})

bot.on('message', message => {  //創角色用的
    if (message.content.startsWith("!z創角骰點")) {
        function roll2d6() {
            return (
                Math.ceil(Math.random() * 6) +
                Math.ceil(Math.random() * 6) +
                6
            );
        }
        function roll3d6() {
            return (
                Math.ceil(Math.random() * 6) +
                Math.ceil(Math.random() * 6) +
                Math.ceil(Math.random() * 6)
            );
        }
        message.reply('\n=======================\n力量STR : ' + roll3d6() * 5 + '\n體質CON : ' + roll3d6() * 5 + '\n敏捷DEX : ' + roll3d6() * 5 + '\n外貌APP : ' + roll3d6() * 5 + '\n意志POW : ' + roll3d6() * 5 + '\n智力INT/靈感Idea : ' + roll2d6() * 5 + '\n體型size : ' + roll2d6() * 5 + '\n教養EDU/知識know : ' + roll2d6() * 5 + '\n幸運LUK : ' + roll3d6() * 5 + '\n=======================')
    }
})

bot.on('message', message => {
    if (message.content.startsWith("!zhelp")) {
        message.channel.send("創角屬性(骰點) : !z創角骰點\n技能判定 : !z技能 [技能] [數值]\n成長技能 : !z成長 [技能] [數值]\nSan check(1/1dX或者1dX/1dX) : !zSC [成功懲罰] [失敗懲罰] [數值]")
    }
})

bot.on('message', message => { //San Check，用於1/1dX或1dX/1dX (格式:!zSC [成功懲罰] [失敗懲罰] [數值])
    if (message.content.startsWith("!zSC")) {
        let sans = String(message.content.replace('!zSC ', ""))
        res = sans.split(' ');
        let one = res[0];
        let two = res[1];
        let three = res[2];
        if (one.startsWith("1d")) {
            let one2 = one.replace('1d', "")
            let one3 = Math.ceil(Math.random() * one2)
            let two2 = two.replace('1d', "")
            let two3 = Math.ceil(Math.random() * two2)
            let dice2 = Math.ceil(Math.random() * 100)
            let sohappy = (three - one3)
            let sosad = (three - two3)
            if (three > dice2) {
                message.reply('因為你的San值 (' + three + ') > ' + dice2 + ' , 所以扣 (' + one + ') ' + one3 + '點san值\n你現在的San值為：' + sohappy)
            }
            else {
                message.reply('因為你的San值 (' + three + ') < ' + dice2 + ' , 所以扣 (' + two + ') ' + two3 + '點san值\n你現在的San值為：' + sosad)
            }
        }
        else {
            let dice22 = Math.ceil(Math.random() * 100)
            let sohaha = (three - one)
            let two22 = two.replace('1d', "")
            let two33 = Math.ceil(Math.random() * two22)
            let sowuwu = (three - two33)
            if (three > dice22) {
                message.reply('因為你的San值 (' + three + ') > ' + dice22 + ' , 所以扣 ' + one + ' 點san值\n你現在的San值為：' + sohaha)
            }
            else {
                message.reply('因為你的San值 (' + three + ') < ' + dice22 + ' , 所以扣 (' + two + ') ' + two33 + '點san值\n你現在的San值為：' + sowuwu)
            }
        }
    }
})



bot.on('message', message => { //機器人學你講野
    if (message.guild) {
        if (message.content.startsWith('!zsay')) {
            let text = message.content.replace('!zsay', "")
            if (text === null) return;
            message.channel.send(text)
            message.channel.bulkDelete(1)
        }
    }
})

bot.on('message', message => {
    if (message.content.startsWith("!zClear")) {
        let clearNumber = Number(message.content.replace("!zClear", ''))
        message.channel.bulkDelete(clearNumber+1)
    }
})

bot.on('message', message => { //Spam
    if (message.content.startsWith("!zSpam")) {
        let LC = message.content.replace("!zSpam", '')
        let play = LC.split(' ')
        let play1 = play[1]
        let play2 = play[2]
        for (i = 0; i < play2; i++) {
            message.channel.send(play1);
        }
    }
})

bot.on('message', message => {
    if (message.content.startsWith("!zD")) {
        let on9 = message.content.replace("!zD", '')
        function getRandom(x) {
            return Math.floor(Math.random() * x) + 1;
        };
        function roll(command) {
            cmd = command.toLowerCase().split('d');
            n = parseInt(cmd[0])
            m = parseInt(cmd[1])
            res = 0
            for (i = 0; i < n; i++) {
                res += getRandom(m)
            }
            return res;
        }
        message.channel.send('[' + on9 + '] 的結果為：' + roll(on9))
    }
})

bot.on('message', message => {
    if (message.content.startsWith("!zAsk")) {
        let question = message.content.replace("!zAsk", '')
        let LOL = Math.ceil(Math.random() * 3)
        if (LOL === 1) {
            message.channel.send('問題 : ' + question + '\n答案 : 不確定')
        }
        if (LOL === 2) {
            message.channel.send('問題 : ' + question + '\n答案 : 確定')
        }
        if (LOL === 3) {
            message.channel.send('問題 : ' + question + '\n答案 : 否定')
        }

    }
})

bot.on('message', message => { //成長用途 (!z成長 [技能] [數值])
    if (message.content.startsWith("!z成長")) {
        let GS = String(message.content.replace("!z成長", ""))
        GSS = GS.split(' ')
        let growskill = GSS[1]
        let growvl = GSS[2]
        let dice3 = Math.ceil(Math.random() * 100)
        let GD = Math.ceil(Math.random() * 10)
        let skillvl = Number(growvl) + Number(GD)
        if (dice3 > growvl) {
            message.reply('__' + growskill + '__ 技能成長成功！ (' + dice3 + ' > ' + growvl + ' )\n你的 __' + growskill + '__ 提升了 __' + GD + '__ 點！\n現在你的 __' + growskill + '__ 數值是 : __' + skillvl + '__')
        }

        else {
            message.reply('遺憾地你的技能並沒有成長 (' + dice3 + ' < ' + growvl + ' )\n你的 __' + growskill + '__ 依然是 __' + growvl + '__ 點')
        }
    }
})

bot.on('message', message => { //技能判定 (!z技能 [技能] [數值])
    if (message.content.startsWith("!z技能")) {
        let bruh = String(message.content.replace('!z技能', ""))
        haha = bruh.split(' ')
        let skill = haha[1]
        let vl = parseInt(haha[2])
        let vlhard = (vl / 2)
        let vlsohard = (vlhard / 2)
        let dice = (Math.random() * 100)
        if (vl > dice) {
            if (dice <= 5) {
                message.channel.send(skill + '判定 : 因為' + vl + '>' + Math.round(dice) + ' , 大成功')
            }
            else {
                if (dice <= vlsohard) {
                    message.channel.send(skill + '判定 : 因為' + vl + '>' + Math.round(dice) + ' , 極限成功')
                }
                else {
                    if (dice <= vlhard) {
                        message.channel.send(skill + '判定 : 因為' + vl + '>' + Math.round(dice) + ' , 困難成功')
                    }
                    else {
                        message.channel.send(skill + '判定 : 因為' + vl + '>' + Math.round(dice) + ' , 成功')
                    }
                }
            }

        }

        else {
            if (dice >= 97) {
                message.channel.send(skill + '判定 : 因為' + vl + '<' + Math.round(dice) + ' , 大失敗')
            } else {

                message.channel.send(skill + '判定 : 因為' + vl + '<' + Math.round(dice) + ' , 失敗')
            }
        }

    }
})

bot.on('message', message => {
    if (message.content.includes("起身屌閪")) {
        message.channel.send("起身屌閪啦！！！")
    }
    if (message.content === "hihi") {
        message.channel.send("早晨><")
    }
})

bot.on('message', message => {
    if (message.content.startsWith("!z Youtube")) {
        message.channel.send("https://www.youtube.com/channel/UCjqMM_DQwjNXg_l9ArCpfCg")
    }
})

bot.login('ODA5NzIwODgxMDM0ODIxNjMy.YCZNVQ.BUFJemy3Fu_xcI5ztptKcZYyrN8')