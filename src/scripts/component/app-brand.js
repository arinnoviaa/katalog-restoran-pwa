class AppBrand extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header__inner">
        <h1 class="header__title">
            ${this.title}
        </h1>
    </div>
    `;
  }
}

customElements.define('app-brand', AppBrand);
