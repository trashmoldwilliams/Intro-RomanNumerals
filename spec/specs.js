
describe("checkLargestValue", function() {
  it("checks for the largest roman numeral value that can fit into the given number", function() {
    expect(checkLargestValue("102")).to.equal(100);
  });
});

describe("printSymbols", function() {
  it("prints roman numerals based on value from checkLargestValue", function() {
    expect(printSymbols("102")).to.equal("CII");
  });
});

// describe("simplifySymbols", function() {
//   it("finds the next highest roman numeral value when there are more than three of the same symbols in a row", function() {
//     expect(simplifySymbols("IIII")).to.equal("IV");
//   });
// });
