// const Africastalking  = require('africastalking');

// const AT = Africastalking({usename:'kibanda',apiKey:'d3d3b74f88ba36f50c381488197a3b912f910494934bdf442a1390453d88ebb1'}).SMS;

// const sendSms = async () => {
//     const output = await AT.send({
//         to: ['+254798758128', '+254722626242'],
//         message: 'Vip Dev, Maisha iko vipi',
//         enqueue: true,

//     });
//     console.log({ output });
// };

// sendSms();
const credentials = {
    //mod
    apiKey: 'Your APi Key--',         
    username: 'kibanda',      
};
const Africastalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
const sms = Africastalking.SMS

// Use the service
const options = {
    to: ['+254798758128', '+254722626242','+254713197824'],
    message: "Ugali Matumbo 120"
}

// Send message and capture the response or error
sms.send(options)
    .then( response => {
        console.log(response);
        console.log("text")
    })
    .catch( error => {
        console.log(error);
    });

