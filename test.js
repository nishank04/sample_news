const axios = require("axios");
const url = "https://newsapi.org/v2/everything";
const config = {
    headers: {
        "X-Api-Key": "928de73bc4254d84a86f7ebcc9fc1038" // Replace with valid key
    },
    params: {
        q: "play"
    }
}

axios.get(url, config)
.then(response => console.log("Call response data: ", JSON.stringify(response.data)))
.catch(e => console.error(e))

// const https = require('https');
// const fs = require('fs');

// const URL = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=928de73bc4254d84a86f7ebcc9fc1038";

// https.get(URL, res => {
    
//     let body = "";
    
//     res.on('data', data=> {
//         body+=data;
//     });

//     res.on('end', ()=> {

//         body = JSON.stringify(body);

//         console.log(body);
//     });

//     /*
//     res.on('end', ()=> {
//         fs.writeFile('data.json', body, 'utf8', (err)=> {
//             if(err) return err;
//             console.log("We just pulled all the posts and create a file");
//         });
//     });

//     */


// });