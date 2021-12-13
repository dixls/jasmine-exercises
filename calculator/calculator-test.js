
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount: 1000, years: 10, rate: 2})).toEqual("9.2");

});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount: 1000, years: 10, rate: 2.7}).length).toEqual(4);
});

/// etc
