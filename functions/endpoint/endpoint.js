require('dotenv').config();
const axios = require('axios');
const contentful = require('contentful');


const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "t1u1jb3v81x6",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.APIKEY
});


const fetchData = (type) => {
  console.log(type)
  if(type == "all") {
    return client
    .getEntries("OqoFlWFlY6DkBnj3")
    .then(entry => entry)
    .catch(err => console.log(err));
  } else {
    return client
    .getEntries("OqoFlWFlY6DkBnj3")
    .then(entry => console.log(entry))
    .catch(err => console.log(err));
  }
}

const handler = async (event) => {
  const query = event.queryStringParameters.type; 
  let theData = await fetchData(query)
  return {
    statusCode: 200,
    body: JSON.stringify(theData, null, 2)
  }
  
  // try {
  //   // const subject = event.queryStringParameters.name || 'World'
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(fetchData()),
  //     // // more keys you can return:
  //     // headers: { "headerName": "headerValue", ... },
  //     // isBase64Encoded: true,
  //   }
  // } catch (error) {
  //   return { statusCode: 500, body: error.toString() }
  // }
}

module.exports = { handler }
