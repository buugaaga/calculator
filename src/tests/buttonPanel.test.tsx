import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ButtonPanel from '../componets/ButtonPanel';

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

it("verify a click button", () => {
  const handleClick = jest.fn();
  act( () => {
    render(<ButtonPanel handleClick={handleClick} />, container)
  });
  //достаем элемент кнопки и проверям клик
  const button = document.querySelectorAll("button")[3];
  expect(button.textContent).toBe("7");


  act( () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  })
  expect(handleClick).toHaveBeenCalledTimes(1);
  //получаем элемент display и проверяем ввод
 
});
