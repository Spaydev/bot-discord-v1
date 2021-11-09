var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://unsa-unofficial-spotify-api.p.rapidapi.com/playlist',
  params: {id: '37i9dQZF1DXc51TI5dx7RC', start: '0', limit: '15'},
  headers: {
    'x-rapidapi-key': 'e159998be4msh270ea0ea7d1a602p136f6cjsn3ee8930da0e4',
    'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    for(let inDexSong=0 ; inDexSong<15;inDexSong++){
        const dataList = response.data.Results
        const songList = dataList
        
        console.log("artists : ",response.data.Results[inDexSong].track.artists[0].name);
        console.log("song : ",response.data.Results[inDexSong].track.name);
        console.log("\n");

    }
   
}).catch(function (error) {
	console.error(error);
});