import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import '../component/content-list';

const Favorite = {
  async render() {
    this.hideElements();
    return `
      <content-list></content-list>
    `;
  },

  hideElements() {
    const heroContainer = document.querySelector('hero-container');
    const contactsContainer = document.querySelector('contacts-container');
    const contentLabel = document.querySelector('.content__label');
    const discountContainer = document.querySelector('discount-container');
    this.hideElement(heroContainer);
    this.hideElement(contactsContainer);
    this.hideElement(contentLabel);
    this.hideElement(discountContainer);
  },

  hideElement(element) {
    element.classList.add('hide');
  },

  async afterRender() {
    const contentListElement = document.querySelector('content-list');
    const loadingElement = document.querySelector('#contentLoading');

    try {
      loadingElement.classList.toggle('show');
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      loadingElement.classList.toggle('show');
      contentListElement.contents = restaurants;
    } catch (error) {
      contentListElement.renderError(error);
    }
  },
};

export default Favorite;
