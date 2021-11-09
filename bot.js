const Discord = require("discord.js");
const client = new Discord.Client();

const auth = require("./auth.json");
const http = require("https");



const fetch = require('node-fetch');

let requrl = "https://static.easysunday.com/covid-19/getTodayCases.json";
let settings = { method: "Get" };

//listSong
var axios = require("axios").default;

    


client.on('message', msg =>{
    if(msg.content === "top10pop"){
        var options = {
            method: 'GET',
            url: 'https://unsa-unofficial-spotify-api.p.rapidapi.com/playlist',
            params: {id: '37i9dQZF1DXc51TI5dx7RC', start: '0', limit: '10'},
            headers: {
            'x-rapidapi-key': 'e159998be4msh270ea0ea7d1a602p136f6cjsn3ee8930da0e4',
            'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            msg.channel.send("```css\n"+"TOP 10 SONGS IN Thailand (Spotify playlist) By Spaydev.\n"+"```");
            for(let i=0 ; i<10;i++){

                const List = response.data.Results[i].track.artists[0].name;
                const song = response.data.Results[i].track.name;
                msg.channel.send("```"+`อันดับ #${i+1}`+"      "+"Song : "+" "+song+"      "+"Artist : "+" "+List+"```");
        
            }
           
        }).catch(function (error) {
            console.error(error);
        });
       
    }else if(msg.content === "top10hit"){

        var options = {
            method: 'GET',
            url: 'https://unsa-unofficial-spotify-api.p.rapidapi.com/playlist',
            params: {id: '37i9dQZF1DWW1S2VXZ4bIj', start: '0', limit: '10'},
            headers: {
            'x-rapidapi-key': 'e159998be4msh270ea0ea7d1a602p136f6cjsn3ee8930da0e4',
            'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            msg.channel.send("```css\n"+"TOP 10 SONGS IN Thailand (Spotify playlist) By Spaydev.\n"+"```");
            for(let i=0 ; i<10;i++){

                const List = response.data.Results[i].track.artists[0].name;
                const song = response.data.Results[i].track.name;
                msg.channel.send("```"+`อันดับ #${i+1}`+"      "+"Song : "+" "+song+"      "+"Artist : "+" "+List+"```");
        
            }
           
        }).catch(function (error) {
            console.error(error);
        });
    
    }else if(msg.content === "covid"){

        let ts = Date.now();

        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();

        fetch(requrl, settings)
            .then(res => res.json())
            .then((json) => {
                var Todaycase = json.todayCases;
                var TodayDeaths = json.todayDeaths;
                var Allcases = json.cases;
                var AllRecovered = json.recovered;
                msg.channel.send( "วันที่ " + date+ "/" + month + "/" + year +"\n\nThailand COVID-19 "+`\nยอดผู้ติดเชื้อ Covid วันนี้ : ${Todaycase} คน\n`+`Deaths to day: ${TodayDeaths} คน\n`+`Recovered : ${AllRecovered} คน \n\n`+`Confirmed case : ${Allcases} คน` );
                // console.log(json);
               
        });

    }else if(msg.content === "ปอน"){
        msg.channel.send("ควย");

    }else if(msg.content === "โด่ง"){
        msg.channel.send("หมอยติดฟัน");
    }

});

client.once('ready', () => {
	console.log('SERVER DISCORD IS  READY!');
});
client.login(auth.token).catch(function (error) {
    console.error(error);
});

