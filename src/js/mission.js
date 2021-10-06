const mission = () => {
  const element = document.createElement('div');
  element.innerHTML = `

  <div class='asl'>
      <div class='mission' id='mission'>
          <div class='text-content'>
              <h2>Our Mission</h2>
              <h4>Provide you with Handpicked, Artisanally Curated, Free Range, Sustainable, Organic Tea & Delicious Desserts</h4>
          </div>
      </div>
  </div>

    `;

  return element;
};

document.body.appendChild(mission());

export default mission;
