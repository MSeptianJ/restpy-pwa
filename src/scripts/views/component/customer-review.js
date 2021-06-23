class customerReview extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }

  renderError(error) {
    this.innerHTML = `
      <h2 class="content__error"> Error Detected : ${error} </h2>
    `;
  }

  render() {
    this.innerHTML = `
      <div class="review__sub">
        <p class="review__name">${this._content.name}</p>
        <p class="review__date">${this._content.date}</p>
      </div>
      <p class="review__content">${this._content.review}</p>
    `;
  }
}

customElements.define('customer-review', customerReview);
