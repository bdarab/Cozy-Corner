import Icon from '../images/img-tea-cozy-logo.png';

function header() {
  const element = document.createElement('div');

  element.innerHTML = `
    <nav>
       <button type="button" class="btn btn-dark" id="home"><a href="">Home</a></button>
       <button type="button" class="btn btn-dark" id="menu"><a href="">Menu</a></button>
       <button type="button" class="btn btn-dark" id="location"><a href="">Location</a></button>
     </nav>
    `;
  
  // const Home = document.querySelector('#home').addEventListener('click', (e) => {
    
  //   e.preventDefault()
  // })

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(header());

export default header;
