import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Display from '../componets/Display';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render with arguments result: number and calculation: string", () => {

  act( () => {
    render(<Display result={3} calculation={"43"}/>, container);
  })
  expect(container.querySelector(".result").textContent).toBe("3");
  expect(container.querySelector(".calculation").textContent).toBe("43");
  act( () => {
    render(<Display result={5} />, container);
  });
  expect(container.querySelector(".result").textContent).toBe("5");
  expect(container.querySelector(".calculation").textContent).toBe("0");
})