class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="navbar" class="bg-white flex justify-center items-center p-6 font-semibold">
        <a href="./index.html" class="px-3">Home</a>
        <a href="./resources.html" class="px-3">Resources</a>
        <a href="./about.html" class="px-3">Tentang</a>
      </nav>
    `;
  }
}

customElements.define('navigation-bar', Navbar);