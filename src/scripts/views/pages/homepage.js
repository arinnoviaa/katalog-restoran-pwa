import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Homepage = {
  async render() {
    return `
    <hero-element id="maincontent"></hero-element>
    <restaurant-list></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Homepage;
