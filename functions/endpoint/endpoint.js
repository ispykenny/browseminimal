
const contentful = require("contentful");


const client = contentful.createClient({
  space: "t1u1jb3v81x6",
  accessToken: process.env.APIKEY
});


const fetchData = (type) => {
  if(type == "all") {
    return client
    .getEntries("OqoFlWFlY6DkBnj3")
    .then(entry => entry)
    .catch(err => console.log(err));
  } else {
    return client
    .getEntry(type)
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
