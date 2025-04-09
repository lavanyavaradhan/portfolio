class discoverBtn extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.innerHTML = `
        <style>
            .discoverbtn button{
                font-weight: 300;
                font-size: 1.25rem;
                background: none;
                border: none;
                color: var(--secondary-color);
                display: flex;
                flex-direction: row;
                gap: 6px;
                transition: transform 0.5s ease-in-out;
            }

            .discoverbtn button:hover{
                color: var(--primary-color);
                transform: scale(1.2);
            }
        </style>
        
        <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />
        <div class="discoverbtn">
        <button id="btn4">Discover
                    <i class="bi bi-arrow-right"></i>
                </button>
                </div>
        `;


    }
}
customElements.define("discover-btn", discoverBtn)