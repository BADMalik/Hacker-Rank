function shortTimeFunction(callback) {
    setTimeout(function() {
    callback(null, 'resultOfShortTime');
    }, 200);
   }
   function mediumTimeFunction(callback) {
    setTimeout(function() {
    callback(null, 'resultOfMediumTime');
    }, 500);
   }
   function longTimeFunction(callback) {
    setTimeout(function() {
    callback(null, 'resultOfLongTime');
    }, 1000);
   }
   async.parallel([
    shortTimeFunction,
   https://riptutorial.com/ 25
    mediumTimeFunction,
    longTimeFunction
    ],
    function(err, results) {
    if (err) {
    return console.error(err);
    }
    conso