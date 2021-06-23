import UrlParser from '../../routes/url-parser';
import RestaurantDicodingSource from '../../data/restaurantdicoding-source';
import '../component/restaurant-detail';

const Detail = {
  async render() {
    this.hideElements();
    return `
      <restaurant-detail></restaurant-detail>
           
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = document.querySelector('restaurant-detail');
    const loadingElement = document.querySelector('#contentLoading');

    try {
      loadingElement.classList.toggle('show');
      restaurantDetail.content = await RestaurantDicodingSource.detailRestaurant(url.id);
      loadingElement.classList.toggle('show');
    } catch (error) {
      restaurantDetail.renderError(error);
    }
  },
};

export default Detail;
