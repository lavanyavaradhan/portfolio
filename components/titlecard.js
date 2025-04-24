class titleCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const link = this.getAttribute("link");

    this.shadowRoot.innerHTML = `
        <style>
        .titlecard{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: start;
            justify-content: start;
            gap: 30px;
            padding: 20px 0;

        }
           
        ::slotted(img){
            width: auto;
            height: 350px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 10px;
            }

            .titlecard .rightpanel{
            width: auto;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
            justify-content: flex-start;
            }

            .titlecard .rightpanel .card-title{
            width: 100%;
            font-family: "lexend", sans-serif;
            font-size: 2.5rem;
            font-weight: 400;
            color: var(--secondary-color);
            word-wrap: break-word;
            }

            .titlecard .rightpanel .card-description{
            font-family: "Linden Hill", serif;
            font-size: 1.5rem;
            font-weight: 300;
            text-align: justify;
            color: var(--primary-color);
            }

        @media screen and (max-width: 768px){
            .titlecard{
            gap: 20px;
            }



            .titlecard .rightpanel{
            gap:15px;
            }

            .titlecard .rightpanel .card-title{
            width: 100%;
            font-size: 1.56rem;
            }

            .titlecard .rightpanel .card-description{
            font-size: 1.125rem;
            }

        @media screen and (max-width: 480px){
            .titlecard{
            flex-direction: column;
            align-items: center;
            }

             .titlecard .rightpanel{
            gap:10px;
            }

            .titlecard .rightpanel .card-title{
            width: 100%;
            font-size: 1.5rem;
            }

            .titlecard .rightpanel .card-description{
            font-size: 1rem;
            }
        }
        }

        </style>

         <div class="titlecard">
                
            <slot name="image">${link}</slot>
            
            <div class="rightpanel">
                <div class="card-title">
                    ${title}
                </div>
                <div class="card-description">
                    <slot name="description"></slot>
                </div>
                <discover-btn>${link}</discover-btn>
            </div>

        </div>
        `;

        var btnlink = this.shadowRoot.querySelector(".titlecard .rightpanel discover-btn");
        var imglink = this.shadowRoot.querySelector(".titlecard slot")

        btnlink.addEventListener("click", function(){
            window.location.href = `${link}`;
        })

        imglink.addEventListener("click", function(){
            window.location.href = `${link}`;
        })

  }
}

customElements.define("title-card", titleCard);
