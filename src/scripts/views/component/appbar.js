class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header__inner">
        <a class="header__icon" href="index.html">
          <img class="header__iconImage" src="./favicon.png" alt="Icon RestPy">
          <h1 class="header__title">RestPy</h1>
        </a>
      </div>
      <button tabindex="0" id="hamburgerButton" name="Navigation Button">☰</button>
      <nav id="navigationDrawer" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="index.html">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://www.linkedin.com/in/mseptianj/" target="_blank">About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
