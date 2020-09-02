var person1 = {
    firstname:'Pham Quang',
    lastname: 'Dat'
};
var person2 = {
    firstname:'Quang Dat',
    lastname: 'Pham'
};

function say(greeting1, greeting2){
    console.log(greeting1 + ',' + greeting2 + " " + this.firstname + ' ' +this.lastname);
}

say.apply(person1,['Hello','Hi']);

var sayHello = say.bind(person1,'hello','hi');  