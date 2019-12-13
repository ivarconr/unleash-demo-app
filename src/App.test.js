import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const unleash = {
  isEnabled: () => false,
  getVariant: () => 'disabled',
  on: () => false
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App unleash={unleash} userId="123" />, div);
});
