import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import PageWrapper from './PageWrapper';

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

it('should render children', () => {
  act(() => {
    render(
      <PageWrapper>
        <div>TEST_CHILDREN</div>
      </PageWrapper>,
      container
    );
  });

  expect(container.querySelector('[data-testid="wrapper"]').innerHTML).toEqual(
    `<div>TEST_CHILDREN</div>`
  );
});
