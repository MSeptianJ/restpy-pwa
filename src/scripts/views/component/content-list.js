import './content-item';

class ContentList extends HTMLElement {
  set contents(contents) {
    this._contents = contents;
    this.render();
  }

  renderError(error) {
    this.innerHTML = `
      <h2 class="content__error"> Error Detected : ${error}  </h2>
    `;
  }

  render() {
    this._contents.forEach((content) => {
      const contentItemEl = document.createElement('content-item');
      contentItemEl.content = content;
      this.appendChild(contentItemEl);
    });
  }
}

customElements.define('content-list', ContentList);
