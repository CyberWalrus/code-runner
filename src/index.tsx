import React from 'react';
import { render } from 'react-dom';
import App from 'pages/app/app';

const init = (): void => {
  render(<App />, document.querySelector('#app'));
};

init();
