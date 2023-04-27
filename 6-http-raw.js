const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=c411cbde935707e0029ffcf3d75ec2fd&query=45,-75&units=m';

http.request(url, (response) => {

let data = '';
    response.on('data', (chunk) =>{
       data = data + chunk.toString();
        console.log(response);
    })
    response.on('end', () =>{

    });
})

http.request.end();