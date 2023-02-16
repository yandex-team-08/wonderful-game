import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import FormikTextField from './FormikTextField';
import { Form, Formik } from 'formik';

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

it('should render label', () => {
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

  expect(
    container.querySelector('[data-testid="field"]').querySelector('label')
      .textContent
  ).toEqual('TEST_LABEL');
});

it('should set value', () => {
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

  expect(
    container.querySelector('[data-testid="field"]').querySelector('input')
      .value
  ).toEqual('TEST_VALUE');
});

it('should set id', () => {
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

  expect(
    container.querySelector('[data-testid="field"]').querySelector('input').id
  ).toEqual('TEST_ID');
});
