class seriesLayout extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const title = this.getAttribute("title");
        const link = this.getAttribute("link");
        const notes = this.getAttribute("notes");

        this.shadowRoot.innerHTML = `
        <style>
.main-container{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  color: var(--primary-color);
}

.main-container .title{
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: 400;
}

.main-container .notes{
  color: var(--secondary-color);
  font-size: 1rem;
  font-weight: 300;
}

.main-container .content{
  font-family: "linden hill", serif;
  font-size: 1.165rem;
  font-weight: 400;
  text-align: justify;
}

::slotted(span){
  font-family: "lexend", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--secondary-color);
}

.main-container .link{
  font-size: 1rem;
  color: var(--secondary-color);
  font-weight: 200;
  text-decoration: none;
}

.main-container .link:hover{
  color: var(--primary-color);
}

.main-container .card-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

  @media screen and (max-width:768px){
    .main-container .notes{
      font-size: 0.875rem;
    }

    .main-container .link{
      font-size: 0.875rem;
    }

  }

    @media screen and (max-width:480px){
      .main-container .content{
        font-size: 0.875rem;
      }
    }

        </style>


            <div class="main-container">
                <div class="title">${title}</div>

                <div class="notes">${notes}</div>

                <div class="content">
                    <slot name="description"></slot>
                </div>

                <a class="link" href="${link}">
                    A handwritten Tamil version of my story. Read it →
                </a>
            </div>
        `;

        var pdflink = this.shadowRoot.querySelector(".main-container .link");

        pdflink.addEventListener("click", function(){
            window.location.href = `${link}`;
        })
    }
}

customElements.define("series-layout", seriesLayout);
