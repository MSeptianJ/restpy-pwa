class CopyrightBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="copyright">
        <p>Copyright © 2021 - Restaurant Happy</p>
      </div>
    `;
  }
}

customElements.define('copyright-bar', CopyrightBar);
