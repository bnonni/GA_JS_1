
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

//`.respond` is similar to `.hear`, except it will only be triggered when someone specifically mentions
//the Hubot using `@`, or sends a direct message
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
      return msg.send('oh cool! I want to go there');
    }else{
      return msg.reply('Never even hear of that... TO THE GOOGLES!')
    }
    });

  var squirrels;
  squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

    /* Random Example
     If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
    return robot.hear(/ship it/i, function(msg) {
      return msg.send(msg.random(squirrels));
    });
  };

