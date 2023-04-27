const fs = require('fs');


const object = JSON.parse(fs.readFileSync('1-json.json').toString());
console.log(object);
object['name'] = 'Jesper';
object.age = 45;
console.log(object);

const objectJSON = JSON.stringify(object);
const objectSaved = fs.writeFileSync('1-json.json', objectJSON);
console.log(fs.readFileSync('1-json.json').toString());
/* const objectJSON = JSON.parse(fs.writeFileSync('1-json.json')) */