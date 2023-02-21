import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import RuntimeError from './RuntimeError';

let container: any = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render message', () => {
  act(() => {
    render(
      <RuntimeError
        error={{ name: 'TEST_NAME', message: 'TEST_MESSAGE' }}
        resetErrorBoundary={() => console.log('TEST_ERROR')}
      />,
      container
    );
  });

  expect(
    container.querySelector('[data-testid="message"]').textContent
  ).toEqual('TEST_MESSAGE');
});
