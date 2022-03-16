const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('928de73bc4254d84a86f7ebcc9fc1038');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines().then(response => {
  console.log("this" + JSON.stringify (response));
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
}).catch((error) => {
    console.log(error)
  });


// // To query /v2/everything
// // You must include at least one q, source, or domain
newsapi.v2.everything({
    q: 'murder',
    from: '2022-02-20',
    to: '2022-03-16',
}).then(response => {
  console.log("that everything" + JSON.stringify(response));
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
})
.catch((error) => {
    console.log(error)
  });
// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});