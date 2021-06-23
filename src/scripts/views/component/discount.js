class Discount extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="discount">
        <div class="discount__inner">
          <div tabindex="0" class="discount__number">
            <h2>Get 30% off at this Restaurant</h2>
            <i class="fas fa-arrow-alt-circle-down"></i>
          </div>
          <div class="discount__images">
            <img tabindex="0" src="https://dicoding-restaurant-api.el.r.appspot.com/images/medium/29" alt="Restaurant that has a discount">
            <img tabindex="0" src="https://dicoding-restaurant-api.el.r.appspot.com/images/medium/38" alt="Restaurant that has a discount">
            <img tabindex="0" src="https://dicoding-restaurant-api.el.r.appspot.com/images/medium/07" alt="Restaurant that has a discount">
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('discount-container', Discount);
