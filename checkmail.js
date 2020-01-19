const { Observable, Subject, ReplaySubject, from, of, range, interval } = require('rxjs');
const { map, filter, switchMap, takeUntil, take } = require('rxjs/operators');
var emailExistence = require('email-existence');
var emailCheck = require('email-check');
var mail = require('./newMails.json');
// console.log(mail[1])
var int =  interval(10000);
const example = int.pipe(take(1900));
// example.subscribe(res=>{
//     console.log(res);
//     emailExistence.check(mail[res], function(error, response){
//         console.log('res: '+response);
//     });
//     // generate2k();
// })
emailExistence.check('matheusloures@gmail.com', function(error, response){
    console.log('res: '+response);
});

var emailCheck = require('email-check');
 
// Quick version
emailCheck("blsaldkaldkalsdksa@gmail.com")
  .then(function (res) {
      console.log('res2', res)
    // Returns "true" if the email address exists, "false" if it doesn't.
  })
  .catch(function (err) {
    if (err.message === 'refuse') {
      // The MX server is refusing requests from your IP address.
    } else {
      // Decide what to do with other errors.
    }
  });

