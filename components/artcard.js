class artCard extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const name = this.getAttribute("name");
        const artmedium = this.getAttribute("artmedium");
        
        this.shadowRoot.innerHTML =`
        <style>
            .cardmain-container{
                width:100%;
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 10px;
            } 


            .cardmain-container .detail-content{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 6px;
                font-family: "lexend" , sans-serif;
            }

            .cardmain-container .detail-content .art-name{
                color: var(--primary-color);
                font-size: 1.25rem;
                font-weight: 300;
            }

            .cardmain-container .detail-content .art-medium{
                color: var(--secondary-color);
                font-size: 1rem;
                font-weight: 200;
                word-wrap: break-word;
            }

        </style>

        <div class="cardmain-container">
                <slot name=image></slot>

            <div class="detail-content">
                ${name ? `<div class="art-name">${name}</div>` : ""}
                ${artmedium ? `<div class="art-medium">${artmedium}</div>` : ""}
            </div>
        </div>
        `;
    }
}

customElements.define("art-card", artCard);