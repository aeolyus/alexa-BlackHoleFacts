'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.757eeeb8-8de6-4645-b01e-c4e472163fa4"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Black Hole Facts';

/**
 * Array containing ice cream facts.
 */
var FACTS = [
	"You can't directly see a black hole",
	"Our Milky way has a black hole lurking in the middle of our galaxy",
	"Dying stars create black holes",
	"Black holes can range in size from one atom's size to supermassive black holes that are one million times more massive than the Sun",
	"The first black hole wasn't discovered until X-ray astronomy was used",
	"The nearest black hole is likely 1,600 light years away",
	"The massive gravitational influence of a black hole distorts space and time the closer you get",
	"The closer you get towards a black hole, the slower time runs for you",
	"The point of no return around a black hole is called the event horizon",
	"Einstein didn't discover the existence of black holes but his theory of telativity does preidct their formation",
	"Karl Schwarzchild was the first to use Einstein's revolutionary equaitons to show that black holes could indeed form",
	"Black holes will spagehttify you and everything else",
	"Black holes could spawn new universes",
	"Black holes actually evaporate over time, as first predicted by Stephen Hawking in 1974, due to Hawking radiation",
	"You could theoretically turn anything into a black hole if you compressed it enough"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random ice cream fact from the ice cream facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a black hole fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
