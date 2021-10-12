export const Address = document.createElement('div');
const location = () => {
  Address.classList.add('container');
  Address.innerHTML = `    
    <div id="location">
    <br />
    <br />
    <br />
    <h2>Location</h2>
    <div class="location">
      <div class="column -25">
        <div class="joo">
          <h3>Downtown</h3>
          <p>384 West 4th St</p>
          <p>Suite 108</p>
          <p>Portland, Maine</p>
        </div>
      </div>
      <div class="column -25">
        <div class="joo">
          <h3>East Bayside</h3>
          <p>3433 Phisherman's Avenue</p>
          <p>(Northwest Corner)</p>
          <p>Portland, Maine</p>
        </div>
      </div>
      <div class="column -25">
        <div class="joo">
          <h3>Oakdale</h3>
          <p>515 Crescent Avenue</p>
          <p>Second Floor</p>
          <p>Portland, Maine</p>
        </div>
      </div>
    </div>
    </div>
  `;

  return Address;
};

document.body.appendChild(location());
