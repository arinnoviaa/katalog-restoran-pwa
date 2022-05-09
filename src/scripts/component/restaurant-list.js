class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="restaurant">
    <h2 class="restaurant__label">Explore Restaurant</h2>
      <div class="restaurant__list" id="restaurants">
      </div>
      </div>
      `;
  }
}

customElements.define('restaurant-list', RestaurantList);
