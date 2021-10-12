const Footer = document.createElement('div');

const footer = () => {
  Footer.innerHTML = `
  <footer>
    <h2>The Tea Cozy</h2>
    <h6>contact@theteacozy.com</h6>
    <h6>917-555-8904</h6>
    <span><h6>&copy copyright The Tea Cozy 2017</h6></span>
</footer>
  `;
  return Footer;
};

document.body.appendChild(footer());

export default footer;
