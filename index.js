var express = require("express");
var alexa = require("alexa-app");
var express_app = express();
 
var app = new alexa.app("madlexa");
 
app.intent("MakeMadlib", {
    "slots": { "Name": "AMAZON.GB_FIRST_NAM" },
    "utterances": ["make a story for {Name}"]
  },

  function(request, response) {
      let name = request.slot("Name")
      response.say(`Generating a story for ${name}`)
  }
  
);
 
// setup the alexa app and attach it to express before anything else 
app.express({ expressApp: express_app });

express_app.listen(process.env.PORT || 3000, function (err) {
    console.log("Started")
})