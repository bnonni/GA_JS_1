
module.exports = function(robot) {
    robot.hear(/Yo!/, function(res) {
        return res.send("What up?");
    });

    robot.hear(/Chillin', you?/, function(res) {
        return res.send("Like a villain");
    });

    robot.hear(/Are you alive?/, function(res) {
        return res.send("That depends on your definition of 'alive.'");
    });

    robot.hear(/Are you self-aware?/, function(res){
        return res.send('What is a self?');
    });

    robot.hear(/Perfect/, function(res){
        return res.send('Indeed');
    });

    var roll = ['Eric', 'Aaron', 'John', 'Kin', 'Kim', 'Fletcher', 'Shaun', 'Jason'];
    robot.hear(/Roll call!|roll call|Roll call/, function(res) {
        return res.send(msg.random(roll));
    });

    robot.respond(/What's your favorite food?/, function(res) {
        return res.send("I'm a robot--I don't eat food!");
    });

    robot.respond(/I live in (.*)/i, function(msg) {
        var city;
        city = msg.match[1];
        if (city == "Atlanta") {
            return msg.send("Hotlantaaaa!");
        }else {
            return msg.reply("Where is " + city + "?");
        }
    });

    var states = ['Washington', 'Alabama', 'Kansas', 'Alaska', 'Florida', 'Maine', 'New York', 'Texas', 'South Carolina', 'Hawaii'];
    robot.respond(/in (.*)/i, function(msg){
        var state;
        state = msg.match[1];
        if (state == states){
            return msg.reply('oh cool! I want to go there');
        }else{
            return msg.reply('Never even hear of that... TO THE GOOGLES!')
        }
    });

    return robot.hear(/What's the weather like?/i, function(msg) {
        return msg.send();
    });
};

