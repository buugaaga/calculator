

import store from '../store';

test("product 3 and 5", () => {
  expect(store.exampleForTest("35-5-20")).toBe(10);
})