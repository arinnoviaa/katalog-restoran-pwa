import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-container">
<div class="detail-restaurant">
  <img class="detail-restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="detail-restaurant__info">
    <h2 class="detail-restaurant__name">${restaurant.name}</h2>
    <p class="detail-restaurant__city">${restaurant.city}</p>
    <p class="detail-restaurant__address">${restaurant.address}</p>
  </div>
  <div class="detail-restaurant__rating">
    <p> ${restaurant.rating} ⭐️</p>
  </div>
</div>
<div class="restaurant-menu">
  <div class="restaurant-menu__description">
    <h4>Detail</h4>
    <p>Kategori ${restaurant.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')}</p>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant-menu__foods">
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}</p>
  </div>
  <div class="restaurant-menu__drinks">
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}</p>
  </div>
</div>
<div class="review">
  <h2>Costumer Review</h2>
      ${restaurant.customerReviews.map((review) => `
              <div class="review-body">
              <small class="review-date-post">review ${review.date}</small>
                  <h3 class="review-costumer-name">${review.name}</h3>
                  <p class="review-content">${review.review}</p>
                  `).join('')}
              </div>
          </div>
      </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="list-item">
                    <p class="list-item__city">${restaurant.city}</p>
                    <img class="list-item__thumbnail"
                         src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}"
                         alt="gambar restoran ${restaurant.name}">
                    <div class="list-item__content">
                        <p class="list-item__rating">Rating : ${restaurant.rating}</p>
                        <h3 class="list-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
                        </h3>
                        <p class="list-item__description">${restaurant.description}</p>
                    </div>
                </article>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
