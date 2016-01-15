// var plivo = require('plivo');
// var p = plivo.RestAPI({
//   authId: 'Your AUTH_ID',
//   authToken: 'Your AUTH_TOKEN'
// });
//
// AUTH_ID = 'MAOTVKNJC4ZMI0YJC2YZ'
// AUTH_TOKEN = "MzYwOTQ3YzYyN2RkMmUyNTg5OWQ4MWQ3NDZhMzJk"
//
// p = RestAPI.new(AUTH_ID, AUTH_TOKEN)
//
// // Send SMS
// params = {
//     'src' : '+16622430832', // Sender's phone number with country code
//     'dst' : '+18048688653', // Receiver's phone Number with country code
//     'text' : 'Your food is ready!', // Your SMS Text Message - English
// //    'text' => 'こんにちは、元気ですか？', // Your SMS Text Message - Japanese
// //    'text' => 'Ce est texte généré aléatoirement', // Your SMS Text Message - French
//     'url' : 'http://example.com/report/', // The URL to which with the status of the message is sent
//     'method' : 'POST' // The method used to call the url
// }
// // Prints the complete response
// (function(response){
// p.send_message(params, function (status, response) {
//     console.log('Status: ', status);
//     console.log('API Response:\n', response);
//     console.log('Message UUID:\n', response['message_uuid']);
//     console.log('Api ID:\n', response['api_id']);
// });
// })
//
// //  Sample Output
// //  [202,
// //    {
// //        "api_id"=>"492f5288-9f27-11e4-b153-22000abcaa64",
// //        "message"=>"message(s) queued",
// //        "message_uuid"=>["494b5c4e-9f27-11e4-b1a4-22000ac693b1"]
// //    }
// //  ]
// //
// // // Print the message message_uuid
// // puts response[1]['message_uuid']
// //
// // // Sample successful output
// // // ["f58113a2-9fca-11e4-b1a4-22000ac693b1"]
// //
// // // Print the api_id
// // puts response[1]['api_id']
// //
// // // Sample successful output
// // // f566addc-9fca-11e4-ac1f-22000ac51de6
