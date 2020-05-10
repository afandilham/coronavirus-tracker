class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="bg-gray-700 text-white text-center p-4">
        <p>Made with &#x2764; in Malang</p>
        <a href="https://github.com/afandilham" class="bg-gray-700 hover:bg-gray-800">afandilham</a> &copy; 2020
      </footer>
    `;
  }
}

customElements.define('footer-section', Footer);