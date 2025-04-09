class ContactIcons extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.innerHTML = `
        <style>
        .contenticons ul{
    margin: 0;
      box-sizing: border-box;
      font-size: 1.25rem;
      font-weight: 300;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      list-style: none;
      gap: 20px;
  }

  .contenticons ul li a {
    color:  var(--primary-color);
    text-decoration: none;
  }
  
  .contenticons ul li a:hover {
    color: var(--secondary-color);
  }

  .contenticons ul li a .bi{
    font-size: 1.125rem;
    cursor: pointer;
  }
        </style>

        <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />
        <div class="contenticons">
         <ul>
                <li><a href="mailto:lavanartgallery@gmail.com">
                    <i class="bi bi-envelope"></i></a>
                </li>

                <li><a href="https://wa.me/919445663970" target="_blank">
                    <i class="bi bi-whatsapp"></i></a>
                </li>

                <li><a href="https://instagram.com/lavan_artwork" target="_blank">
                    <i class="bi bi-instagram"></i></a>
                </li>
            </ul>
            </div>
        `;
    }
}

// Register you tag
customElements.define("contact-icons", ContactIcons);