class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <h3 class="bottom">Nettside skrevet av Isak Hølleland</h3>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
  