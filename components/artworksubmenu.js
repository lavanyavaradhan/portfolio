class artworkSubMenu extends HTMLElement {
    constructor(){
        super();

        const submenu = this.attachShadow({mode: "open"});

        submenu.innerHTML =  `
        <style>
        .submenu-bar{
        width:100%;
        height: 70px;
        position: fixed;
        top:75px;
        left: 0;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background-color: var(--teritary-color);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        }

        .submenu-bar ul {
        box-sizing: border-box;
        margin:0;
        width: 100%;
        height: 100%;
        padding-bottom: 12px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            gap: 20px;
            font-weight: 300;
            font-size: 1.125rem;
        }

        .submenu-bar ul li{
        list-style:none;
        }

        .submenu-bar ul li a{
        text-decoration:none;
        color: var(--secondary-color);
        }

        .submenu-bar ul li a.active{
        color: var(--primary-color);
        font-weight: 500;
        }

        .submenu-bar ul li a:hover{
        color: var(--primary-color);
        }

        @media screen and (max-width: 480px){
            .submenu-bar{
                height: 50px;
            }  

            .submenu-bar ul{
                font-size: 0.875rem;
                padding-bottom:8px;
                flex-wrap: wrap;
                gap: 15px;
                justify-content: flex-start;
            }
        }

        </style>

            <div class="submenu-bar">
                <ul>
                    <li><a href="../pages/artworks.html">Charcoal</a></li>
                    <li><a href="../pages/watercolor.html">Watercolor</a></li>
                    <li><a href="../pages/customarts.html">Cutom Artworks</a></li>
                </ul>
            </div>

        `;

         // ------Set sub- nav link - active page
    const activePage = window.location.pathname;
    const links = this.shadowRoot.querySelectorAll(".submenu-bar ul li a");
    console.log(activePage);

    links.forEach((link) => {
      if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
      }
    });
    }
}

customElements.define("artworks-submenu", artworkSubMenu)