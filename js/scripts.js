var checkLargestValue = function(inputNumber) {

  var symbolValues = [1000, 500, 100, 50, 10, 5, 1];
  
  for (var i = 0; i < 6; i += 1) {
    if (inputNumber >= symbolValues[i]) {
      return symbolValues[i];
      break;
    };
  };
};

// var printSymbols = function(inputNumber) {
//   var ;
//
//   for (i= inputNumber; i > 0; i) {
//
//   };
// };


// $(document).ready(function() {
//   $("form#countUpBy").submit(function(event) {
//
//     var total = parseInt($("input#total").val());
//     var multiple = parseInt($("input#multiple").val());
//     var result = countUpBy(total, multiple);
//     for (i = 0; i < result.length; i++) {
//       $("#result").append("<li>" + result[i] + "</li>");
//     };
//
//     event.preventDefault();
//   });
// });
