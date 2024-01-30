/** @format */

import { render } from './utilities/render';
import './css/general.css';

function Example() {
  return '<div>Welcome to the app!</div>';
}

window.onload = () => {
  render('root', Example);
};
