// var gators = {
//     school: 'University of Florida',
//     enrollment: 38000,
//     location: 'Gainesville, FL',
//     hasFootballTeam: true
// };
//
// // console.log(gators['school']);
// // gators.enrollment = 37000;
// // console.log(gators['enrollment']);
// // console.log(gators);
//
// var deacs = {
//     school: 'Wake Forest Univeristy',
//     enrollment: 5000,
//     location: 'Winston-Salem, NC',
//     hasFootballTeam: true,
//     sports: ['basektball', 'wrestling', 'gymnastics', 'track', 'baseball'],
//     admissionStats:{
//         applicants: 100000,
//         admitted: 12,
//         fourYearGradRate: .89
//     }
// };
//
// console.log(deacs['school']);
// deacs.enrollment = 6000;
// console.log(deacs['enrollment']);
// console.log(deacs.sports[2]);
// console.log(deacs.admissionStats.applicants);
//
// for (var prop in deacs){
//     if(prop !== 'admissionStats'){
//     console.log('%s for Wake Forest: %s',prop,deacs[prop]);
//     }else {
//         for (var stat in deacs[prop]) {
//             console.log('%s for Wake Forest: %s', stat, deacs[prop][stat]);
//         }
//     }
// }
//
// var fakeDeacs = {};
// Object.assign(fakeDeacs,deacs);
// fakeDeacs.enrollment = 40000000000;
// console.log(deacs.enrollment);
// console.log(fakeDeacs.enrollment);
//
// var o1 = {a:2}, o2 = {a:1}, o3 = {c:3};
// var result = Object.assign(o1,o2,o3);
// console.log(result);

//
var Car = function(make, model, cylinders, doors, color, year, value, mileage){
    this.make = make;
    this.model = model;
    this.cyinders = cylinders;
    this.doors = doors;
    this.color = color;
    this.year = year;
    this.value = value;
    this.mileage = mileage;
    this.honk = function(){
        console.log("the %s goes 'beep beep'", this.make);
    }
};

var maserati = new Car ('maserati', 'Ghibli', 8,2,'blue',2017,120000,8);
var acura = new Car ('acura', 'TL', 6,4,'honeysuckle white',2015,32000,200);
console.log(maserati.year);
console.log(acura.year);
acura.honk();

var acura2 = {};
var acura2 = Object.assign(acura2, acura);
acura2.color = 'hot damn orange';
console.log(acura.color);

var Article = function(){
    this.setTitle = function(title){
        if(typeof title != 'string'){
            console.log('you dummy');
        }else
            this.title = title;
    };
};

var gasPipelineNews = new Article();
gasPipelineNews.setTitle(12);
console.log(gasPipelineNews.title);

var Account = function (type,amount,acctNum,routingNum,state){
  this.type = type;
    this.amount = amount;
    this.actNum = acctNum;
    this.routingNum = routingNum;
    this.state = state;
};

var myChecking = new Account('checking',4000,1234567890,'0610000000','GA');


for (var i in myChecking){
    console.log(myChecking[i]);
}

//
// var Shoe = function() {
//     this.website = 'amazon';
//     this.sizeSearch = 12;
//     this.shoe = function(size, type, style, color){
//         this.size = size;
//         this.type = type;
//         this.style = style;
//         this.color = color;
//     };
//     this.purchase = function () {
//                 console.log('buy them!')
//             }
//     };
//
// var search = new Shoe (12, 'athletic', 'baseketball', 'green');
// console.log(search);
//
//
// var Monkey = function(name, species){
//     this.name = name;
//     this.species = species;
//     this.foodsEaten = [];
//     this.eatSomething = function (food) {
//         this.foodsEaten.push(food);
//     }
//     this.introduce = function () {
//         console.log('My name is ' + this.name + '. I am a ' + this.species + '. I ate a ' + this.foodsEaten.join(', ') + '.');
//     }
// };
// var monkey1 = new Monkey('Jack', 'Howler');
// monkey1.eatSomething('banana');
// monkey1.introduce();
//
//

