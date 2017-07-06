var express = require("express");
var alexa = require("alexa-app");
var express_app = express();
const randomWord = require("random-word")
var app = new alexa.app("madlexa");
 
app.intent("MakeMadlib", {
    "slots": { "Name": "AMAZON.GB_FIRST_NAM" },
    "utterances": ["make a story for {Name}"],
    "dialog": {
      type: "delegate"
    },
  },

  function(request, response) {
      let name = request.slot("Name")
      response.say(`It turns out that ${name} is a great big ${randomWord()}`)
  }
  
);
 
// setup the alexa app and attach it to express before anything else 
app.express({ expressApp: express_app });

express_app.listen(process.env.PORT || 3000, function (err) {
    console.log("Started")
})