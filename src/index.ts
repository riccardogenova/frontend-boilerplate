/** @format */

import { render } from "./utilities/render";

function Example(){
  return '<div>Welcome to the app!</div>'
}

window.onload = () => {
 render('root', Example)
};
