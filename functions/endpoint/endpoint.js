
const contentful = require("contentful");


const client = contentful.createClient({
  space: "t1u1jb3v81x6",
  accessToken: process.env.APIKEY
});


const fetchData = async (type) => {
  if(type == "all") {
    return client
    .getEntries({
      'content_type': 'title'
    })
    .then(entry => entry)
    .catch(err => console.log(err));
  } else if(type === "articles") {
    return client
    .getEntries({
      'content_type': 'article'
    })
    .then(entry => entry)
    .catch(err => console.log(err));
  }
  
  
}

const handler = async (event) => {
  const query = event.queryStringParameters.type; 
  let theData = await fetchData(query)
  return {
    statusCode: 200,
    body: JSON.stringify(theData)
  }
}

module.exports = { handler }
