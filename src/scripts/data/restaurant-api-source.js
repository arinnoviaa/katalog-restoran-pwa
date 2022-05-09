import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    if (responseJson.restaurants) {
      return responseJson.restaurants;
    }
    throw new Error('Daftar restaurant tidak dapat ditemukan.');
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    if (responseJson.restaurant) {
      return responseJson.restaurant;
    }
    throw new Error('Detail restaurant tidak dapat ditemukan.');
  }
}

export default RestaurantApiSource;
