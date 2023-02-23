import { Form, Formik } from 'formik';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import FormikTextField from './FormikTextField';

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

it('should render field', () => {
  act(() => {
    render(
      <Formik
        initialValues={{ TEST_ID: 'TEST_VALUE' }}
        validateOnChange={false}
        onSubmit={() => console.log('TEST_SUBMIT')}>
        <Form>
          <FormikTextField name="TEST_ID" label="TEST_LABEL" />
        </Form>
      </Formik>,
      container
    );
  });

  const field = container.querySelector('[data-testid="field"]');

  expect(field.querySelector('label').textContent).toEqual('TEST_LABEL');
  expect(field.querySelector('input').value).toEqual('TEST_VALUE');
  expect(field.querySelector('input').id).toEqual('TEST_ID');
});
