import formatDate from './formatDate';

describe('(method) formatDate', () => {
  it('should return 18/11/2021', () => {
    expect(formatDate("2021-11-18T17:32:17.287Z")).toBe("18/11/2021")
  });
  it('should return empty string when it receives nil input', () => {
    expect(formatDate()).toBe("")
  })
})
