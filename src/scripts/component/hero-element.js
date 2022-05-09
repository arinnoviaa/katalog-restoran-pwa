class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
          <div class="hero__inner">
              <h2 class="hero__title">Ciptakan Momen Kuliner Kaya Selera</h2>
              <p class="hero__tagline">Jelajahi dan temukan tempat makan lezat di sekitar Anda, dari jajanan kaki lima hingga hidangan gourmet masa kini.</p>
          </div>
      </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
