class Contacts extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="contacts">
        <h2 tabindex="0" class="contacts__label">Contacts</h2>
          <ul class="contacts__icons">
          <li class="contacts__icon">
            <a href="#">
              <i class="fab fa-instagram-square"></i>
            </a>
          </li>
          <li class="contacts__icon">
            <a href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="contacts__icon">
            <a href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('contacts-container', Contacts);
