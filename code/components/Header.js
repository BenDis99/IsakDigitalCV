class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <nav id="category_buttons">
                <a class="category_button" href="dashboard.html">Hjem</a>
                <a class="category_button" href="education.html">Utdanning</a>
                <a class="category_button" href="jobs.html">Jobberfaring</a>
                <a class="category_button" href="programming.html">Programmering</a>
                <a class="category_button" href="about.html">Om meg</a>
            </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  