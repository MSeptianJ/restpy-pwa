class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="main_Content" tabindex="0" class="hero">
        <div class="hero__inner">
          <h1 tabindex="0" class="hero__title">Restaurant Happy</h1>
          <p tabindex="0" class="hero__tagline">A fun, nice and wonderful place for you to fill your tummy</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-container', Hero);
