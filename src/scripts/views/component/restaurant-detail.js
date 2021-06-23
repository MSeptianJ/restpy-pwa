import CONFIG from '../../globals/CONFIG';
import './customer-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';

class RestaurantDetail extends HTMLElement {
  set content(content) {
    this._content = content.restaurant;
    this.render();
    this.renderCustomer();
    this.renderLikeButton();
  }

  renderError(error) {
    this.innerHTML = `
      <h2 class="content__error"> Error Detected : ${error} </h2>
    `;
  }

  renderCategories() {
    const categoryList = [];
    this._content.categories.forEach((category) => {
      categoryList.push(category.name);
    });
    return categoryList.join(', ');
  }

  renderFoods() {
    const foodList = [];
    this._content.menus.foods.forEach((food) => {
      foodList.push(`<li>${food.name}</li>`);
    });
    return foodList.join('');
  }

  renderDrinks() {
    const drinkList = [];
    this._content.menus.drinks.forEach((drink) => {
      drinkList.push(`<li>${drink.name}</li>`);
    });
    return drinkList.join('');
  }

  render() {
    this.innerHTML = `
      <div class="detail__bg">
      
        <h2 class="detail__title">${this._content.name}</h2>
        
        <div class="detail__img-container">
          <img class="detail__img" src="${`${CONFIG.BASE_IMAGE_URL}small/${this._content.pictureId}`}" alt="${this._content.name}" />        
        </div>
        
        <div class="detail__details-container">
          <div class="content__sub">
          
            <h3 tabindex="0" class="content__address">${this._content.city}</h3>
            <h3 tabindex="0" class="content__ratingNumber">
              <span class="content__ratingIcon">★</span>
              ${this._content.rating.toString()}
            </h3>
            
          </div>
          
          <table class="detail__table">
            <tbody>
              <tr>
                <td>Address</td>
                <td>${this._content.address}</td>
              </tr>
              <tr>
                <td>Categories</td>
                <td>${this.renderCategories()}</td>
              </tr>
            </tbody>
          </table>
          
          <p tabindex="0" class="detail__description">
            ${this._content.description}...
          </p>
        </div>
            
        <h3 class="detail__name">Menu</h3>

        <div class="detail__menu-container">
          <div class="detail__menu-sub">
            <p>Foods</p>
          </div>
          <ul class="detail__list">${this.renderFoods()}</ul>
        </div>
        
        <div class="detail__menu-container">
          <div class="detail__menu-sub">
            <p>Drinks</p>            
          </div>
          <ul class="detail__list">${this.renderDrinks()}</ul>
        </div>
      </div>
      
      <div class="detail__bg">
        <h3 class="detail__name">Customer Review</h3>
        <div class="customer__reviews" id="customerReviews">
            
        </div>
      </div>
      
      <div id="likeButtonContainer"></div> 
    `;
  }

  renderCustomer() {
    this._content.customerReviews.forEach((content) => {
      const customerReviewEl = document.createElement('customer-review');
      const customerReviews = document.getElementById('customerReviews');
      customerReviewEl.content = content;
      customerReviews.appendChild(customerReviewEl);
    });
  }

  async renderLikeButton() {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      restaurant: {
        id: this._content.id,
        name: this._content.name,
        title: this._content.title,
        rating: this._content.rating,
        city: this._content.city,
        pictureId: this._content.pictureId,
        description: this._content.description,
      },
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
