class NavBar extends HTMLElement {
  constructor() {
    super();

    const header = this.attachShadow({ mode: "open" });

    header.innerHTML = `
    <style>
    .navbar {
      background-color: var(--teritary-color);
      box-sizing: border-box;
      position: fixed;
      top:0;
      left: 0;
      width:100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: end;
     padding: 26px 3rem 12px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        z-index:1000;
    }
    
    .navbar .my-name {
      font-family: "Lexend Giga", sans-serif;
      font-weight: 500;
      font-size: 2rem;
    }
    
      .navbar ul {
      margin: 0;
      box-sizing: border-box;
      font-size: 1.25rem;
      font-weight: 300;
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: end;
      list-style: none;
      gap: 40px;
    }
    
    .navbar ul li a {
      color: var(--secondary-color);
      text-decoration: none;
    }

    .navbar ul li a.active{
      color: var(--primary-color);
      font-weight: 500;
    }
    
    .navbar ul li a:hover {
      color: var(--primary-color);
    }
    
    .navbar .nav-toggle {
      display: none;
    }

    .navbar .side-navbar{
      display:none;
    }

    @media screen and (max-width: 768px){
      .navbar{
        padding: 26px 40px 12px;
      }
      .navbar .nav-toggle {
        display: block;
        font-size: 1.5rem;
      cursor: pointer;
      color: var(--primary-color);
      }

    .navbar .nav-menu {
      display: none;
    }

    .side-navbar{
      top:0%;
      right: 0%;
      width: 50%;
      height: 100vh;
      position: absolute;
      background-color: rgba(249, 249, 249, 0.5);
      backdrop-filter: blur(6px);
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: start;
      padding: 80px 40px;
      gap: 20px;
    }

    .side-navbar .toggle-x{
    padding-bottom: 20px;
    text-align: right;
      display: block;
        font-size: 2rem;
      cursor: pointer;
      color: var(--primary-color);
    }

    .side-navbar .sidenavbar-menu{
      margin:0;
      display: flex;
      flex-direction: column;
    }

   
    @media screen and (max-width: 480px){
      .navbar{
        padding: 28px 20px 12px;
      }
    }
  }
    </style>

    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />

    <div class="navbar">
        <div class="my-name">Lavanya</div>
            <ul class="nav-menu">
                <li><a href="../pages/about.html">About</a></li>
                <li><a href="../pages/artworks.html">Artworks</a></li>
                <li><a href="../pages/contact.html">contact</a></li>
            </ul>
        <i class="bi bi-list nav-toggle"></i>

        <div class="side-navbar">
        <i class="bi bi-x toggle-x"></i>
        <ul class="sidenavbar-menu">
            <li><a href="../pages/about.html">About</a></li>
            <li><a href="../pages/artworks.html">Artworks</a></li>
            <li><a href="../pages/contact.html">contact</a></li>
        </ul>
    </div>
    </div>
    `;

    // ------Set nav link - active page
    const activePage = window.location.pathname;
    const links = this.shadowRoot.querySelectorAll(".navbar ul li a");
    console.log(activePage);

    links.forEach((link) => {
      if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
      }
    });

    // -----side nav bar
    const navToggle = this.shadowRoot.querySelector(".nav-toggle");
    const togglex = this.shadowRoot.querySelector(".toggle-x");

    const showsidenavbar = this.shadowRoot.querySelector(".side-navbar")
    navToggle.addEventListener("click", () => {
      showsidenavbar.style.display = "block";
    });

    const hidesidenavbar = this.shadowRoot.querySelector(".side-navbar")
    togglex.addEventListener("click", () =>{
      hidesidenavbar.style.display = "none";
    });

      // My name - interaction
      var landingpage = this.shadowRoot.querySelector(".my-name");

      landingpage.addEventListener("click",function(){
        window.location.href = "../index.html";
      })  
  
  }
}

// Register you tag
customElements.define("nav-bar", NavBar);

