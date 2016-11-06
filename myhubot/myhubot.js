
module.exports = function(robot) {
    robot.respond(/What's up!/, function(res) {
        return res.send("The sky!");
    });

    robot.respond(/Tell me a joke./, function(res) {
        return res.send('Im not that kind of robot');
    });


    //`.hear` command listens for a specific phrase anywhere in the Slack room. You don't have to mention
    //your Hubot in order to get a response.
    robot.hear(/Hello!/, function(res) {
        return res.send("Hi there!");
    });
//`.respond` is similar to `.hear`, except it will only be triggered when someone specifically mentions
//the Hubot using `@`, or sends a direct message
    robot.respond(/What's your favorite food?/, function(res) {
        return res.send("I'm a robot--I don't eat food!");
    });

    robot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
        var name;
        name = msg.match[1];
        if (name == "Hubot") {
            return msg.send("You're not Hubot--I'm Hubot!");
        } else {
            return msg.reply("Nice to meet you, " + name + "!");
        }
    });
};
