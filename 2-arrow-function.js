/* const square = function (x) {
    return x *x;
}
const square = (x) => {
    return x *x;
} */

/* const square = (x) => x * x; */
/* 
console.log(square(4)); */

const event = {
    name: 'Birthday party',
    guestList: ['Jesper', 'Simon','Carsten'],
    printGuestList () {
        console.log('Guestlist for ' + this.name);
        this.guestList.forEach( (guest) => {
            console.log(guest + ' Is attending ' + this.name);
        })
    }

}

event.printGuestList()