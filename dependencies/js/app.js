"use strict"

window.addEventListener("DOMContentLoaded", () => {
  const app =  Vue.createApp({
    template: "<Headings /><Buttons /><Cards /><Carousel />"
  })

  app.component("Headings", {
    template: `
      <section>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </section>
    `,
  })

  app.component("Buttons", {
    template: `
      <section>
        <button class="btn btn-xxs"> btn </button>
        <button class="btn btn-xs"> btn </button>
        <button class="btn btn-sm"> btn </button>
        <button class="btn"> btn </button>
        <button class="btn btn-lg"> btn </button>
        <button class="btn btn-xl"> btn </button>
        <button class="btn btn-xxl"> btn </button>
      </section>
    `
  })

  app.component("Cards", {
    template: `
      <section class="dis-grid cols-3 col-gap-1">
        <div class="card">
          <div class="card-body">
            <div class="card-header">
              <h3 class="card-title">Card 1</h3>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, libero.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="card-header">
              <h3 class="card-title">Card 2</h3>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, libero.</p>
            </div>
          </div>
        </div>  <div class="card">
          <div class="card-body">
            <div class="card-header">
              <h3 class="card-title">Card 3</h3>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, libero.</p>
            </div>
          </div>
        </div>
      </section>
    
    `
  })


  app.component("Carousel", {
    template: `
      <section>
        <h3>Carousel</h3>
        <div class="carousel">
          <div class="carousel-item bg-primary item-1">carousel</div>
          <div class="carousel-item bg-warning item-2">carousel</div>
          <div class="carousel-item bg-danger item-3">carousel</div>
        </div>
        <button class="btn" @click="initializeCarouselSlider">carousel start</button>
      </section>
    `,
    data() {
      return {
        carousel_items: document.querySelectorAll(".carousel-item")
      }
    },
    methods: {
      initializeCarouselSlider() {
        for (let i = 0; i < this.carousel_items.length; i++) {
          console.log(i)
        }
        document.querySelector(".item-3").classList.toggle("carousel-slide")
      }
    }

  })


  app.mount("#root")
  }) 

