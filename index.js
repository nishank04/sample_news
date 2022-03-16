let express  = require('express');
let app = express();
let bodyParser = require('body-parser');
let unirest = require('unirest');

 app.use(bodyParser.json());
// const axios = require("axios");
// const url = "https://newsapi.org/v2/everything";
// const config = {
//     headers: {
//         "X-Api-Key": "928de73bc4254d84a86f7ebcc9fc1038" // Replace with valid key
//     },
//     params: {
//         q: "play"
//     }
// }

// axios.get(url, config)
// .then(response => console.log("Call response data: ", JSON.stringify(response.data)))
// .catch(e => console.error(e))


app.get('/', function(req, res) {
	res.send('<h1>Welcome to Node.js project setup</h1>')
})

app.get('/api/v2/top-headlines', (req, res) => {
    const request = unirest("GET", "https://newsapi.org/v2/top-headlines");
    request.query({language: "en"});
    request.headers({
        "X-Api-Key": '928de73bc4254d84a86f7ebcc9fc1038',
    });
    request.end(function (response) {
      if (response.error) throw new Error(response.error);
      res.json(response.body || {});
      console.log(response.body);
    });
  });

  app.get('/api/v2/everything', (req, res) => {
    const request = unirest("GET", "https://newsapi.org/v2/everything");
    request.query({sources: "wired"});
    request.headers({
        "X-Api-Key": '928de73bc4254d84a86f7ebcc9fc1038',
    });
    request.end(function (response) {
      if (response.error) throw new Error(response.error);
      res.json(response.body || {});
      console.log(response.body);
    });
  });



app.listen(3000, function(){
	console.log("Server started on port: 3000")
})