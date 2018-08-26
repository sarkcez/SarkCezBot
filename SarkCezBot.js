const Discord = require('discord.js')
const bot = new Discord.Client()

select = 0

count12 = 0
count8 = 0

full12 = 12
full8 = 8
full4 = 4

bot.login('NDgyOTc2NjIxMDQ1ODc0Njg5.DmMvDQ.pP_uoGSxWzHS2ln_ooIQ1rNJPvo')

bot.on("ready", () => {
    console.log('HELLO')
})

bot.on("message", (msg) => {
//--------------------------------------------------------------------------------------------- Guides of Creation 12/12
    if (msg.content == "full12") {
        select = 1;
        count12 = 0;
        msg.channel.send("**12** People Party Count Begin...")
        msg.channel.send("Press + to Join MPA")

    }else if (msg.content == "full8"){
        select = 2;
        count8 = 0;
        msg.channel.send("**8** People Party Count Begin...")
        msg.channel.send("Press + to Join MPA")
    }

    if(select == 1){
        if (msg.content == '+'){
            count12++
            msg.channel.send("[ **"+count12+"/"+full12+"** ]");
            if(count12==full12){
                msg.channel.send("**FULL PARTY** : Get salt to everyone");
                select=0;
            } 

        } else if (msg.content == "Clear"){
            count12 = 0;
            select = 0;
        }
    }

    
    if(select == 2){
        if (msg.content == '+'){
            count8++
            msg.channel.send("[ **"+count8+"/"+full8+"** ]");
            if(count8==full8){
                msg.channel.send("**FULL PARTY** : Get salt to everyone");
                select=0;
            }

        } else if (msg.content == "Clear"){
            count8 = 0;
            select = 0;
        }
    }
});

SarkCezBot.login('NDgyOTc2NjIxMDQ1ODc0Njg5.DmQR6Q.dt1f7L6nRhV3U7EWZ_yAY0Z6RgQ');
