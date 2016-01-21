
describe("checkLargestValue", function() {
  it("checks for the largest roman numeral value that can fit into the given number", function() {
    expect(checkLargestValue("102")).to.equal(100);
  })
});

describe("printSymbols", function() {
  it("prints roman numerals based on value from checkLargestValue", function() {
    expect(printSymbols("102")).to.equal("CII");
  })
});
