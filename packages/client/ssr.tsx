import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import Root from './src/pages/Root';
import store from './src/store/store';

export function render() {
  return renderToString(
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
