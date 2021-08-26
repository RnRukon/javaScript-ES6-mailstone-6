class Support {
    name;
    designation = 'support web dev'
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const amair = new Support('Amir khan', 'BD');
const salman = new Support('soliman khan', 'Dubai');
const sharuk = new Support('sharuk  khan', 'Dubai');
const akshay = new Support('akshay kumar', 'Dubai');

// console.log(amair);
// console.log(salman);
amair.startSession();
salman.startSession();

console.log(amair, salman, sharuk, akshay);