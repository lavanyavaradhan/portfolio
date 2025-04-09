class FooterSection extends HTMLElement {
    constructor() {
        super();

        const footbar = this.attachShadow({ mode: "open" });

    footbar.innerHTML = `

    <style>
       .footer-sec{
  background-color: var(--teritary-color);
      box-sizing: border-box;
      position: sticky;
      width:100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: end;
     padding: 12px 3rem 40px;
      gap: 5px;
  }

  .footer-sec .content{
    font-family: "lexend giga", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--secondary-color);
  }
    </style>

    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />

  <div class="footer-sec">
            <contact-icons></contact-icons>
            <div class="content">Thank you!</div>
        </div>
   
    `;
    }
       
}

// Register you tag
customElements.define("footer-section", FooterSection);