import Icon from '../images/img-tea-cozy-logo.png';

export const Home = document.querySelector('#home');
export const Menu = document.querySelector('#menu');
export const Location = document.querySelector('#location');

const Ele = document.createElement('div');
function header() {
  Ele.innerHTML = `
    <nav>
       <button type="button" class="btn btn-dark" id="home"><a href="">Home</a></button>
       <button type="button" class="btn btn-dark" id="menu"><a href="">Menu</a></button>
       <button type="button" class="btn btn-dark" id="location"><a href="">Location</a></button>
     </nav>
    `;

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  Ele.appendChild(myIcon);

  return Ele;
}

document.body.appendChild(header());
