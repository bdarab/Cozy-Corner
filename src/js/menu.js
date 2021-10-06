// import '../css/style.css'
import Bedford from '../images/img-bedford-bizarre.jpg';
import Berry from '../images/img-berryblitz.jpg';
import Donut from '../images/img-donut.jpg';
import Myrtle from '../images/img-myrtle-ave.jpg';
import Rum from '../images/img-spiced-rum.jpg';
import Napoleon from '../images/Classic-French-Napoleon.jpg'
import CheeseCake from '../images/cheesecake-8.jpg'
import Puff from '../images/Luscious-Puff.jpg'

function itemsTemplate(item) {
  return `
  <div class='chai'>
    <div class='image-content'>
      <img src="${item.photo}" width="500" height="250" >
      <h4>${item.name}</h4>
    </div>
  </div>
  `;
}

const menu = menuItems => {
  menuItems = [
    {
      name: 'Fall Berry Blitz Tea',
      description: 'blank',
      photo: Berry
    },
    {
      name: 'Classic French Napoleon',
      photo: Napoleon
    },
    {
      name: 'Spiced Rum Tea',
      description: 'blank',
      photo: Rum
    },
    {
      name: 'Seasonal Donuts',
      description: 'blank',
      photo: Donut
    },
    {
      name: 'Myrtle Ave Tea',
      description: 'blank',
      photo: Myrtle
    },
    {
      name: 'Creamy Cheese Cake',
      photo: CheeseCake
    },
    {
      name: 'Bedford Bizarre Tea',
      description: 'blank',
      photo: Bedford
    },
    {
      name: 'Luscious Puff',
      photo: Puff
    }
  ];

  const Menu = document.createElement('div');
  Menu.classList.add('menuItem');
  Menu.innerHTML = `
  <h2 class="items-text" >Pleasures of the Day</h2>
  <h4 class="items-text" >What's Steeping at The Tea Cozy Today?</h4>
  <h4 class="items-text" >${menuItems.length} items ready for you: </h4>
  ${menuItems.map(itemsTemplate).join('')}
    `;

  return Menu;
};

document.body.appendChild(menu());

export default menu;
