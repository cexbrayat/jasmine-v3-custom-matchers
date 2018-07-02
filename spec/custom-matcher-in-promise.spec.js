const customMatcher = {
  toBeUseless: (util, customEqualityTesters) => ({
    compare: (actual, expected) => ({
      pass: true, message: 'useless'
    })
  })
}

describe('Custom matcher', () => {

  beforeEach(() => jasmine.addMatchers(customMatcher));
  
  it('should succeed', () => {
    expect(true).toBeUseless(true);
  });

  it('should succeed in promise', () => {
    Promise.resolve()
      .then(() => expect(true).toBeUseless(true));
  });

});
