import CONFIG from '../../globals/CONFIG';

class ContentItem extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 tabindex="0" class="content__name"><a href="${`/#/detail/${this._content.id}`}">${this._content.name}</a></h2>

      <img tabindex="0" class="content__img" src="${`${CONFIG.BASE_IMAGE_URL}small/${this._content.pictureId}`}" alt="A Restaurant Image">
      
      <div class="content__sub">
        <h3 tabindex="0" class="content__address">${this._content.city}</h3>
          
        <h3 tabindex="0" class="content__ratingNumber">
          <span class="content__ratingIcon">★</span>
          ${this._content.rating.toString()}
        </h3>
          
      </div>
      
      <p tabindex="0" class="content__description">
          ${this._content.description.substring(0, 250)}...
      </p>
    `;
  }
}

customElements.define('content-item', ContentItem);
