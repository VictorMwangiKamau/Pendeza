window.addEventListener('DOMContentLoaded', () => {

    const app = Vue.createApp({
      template: `
        <Navbar></Navbar>
        <Header></Header>
        <Main></Main>
     `
    })
    app.component('Navbar',{
      template: `
      <div class="navbar pos-sticky sticky-top light lighten-3" style="z-index: 1500">
        <div class="navbar-body wrapper-sm">
          <span class="navbar-brand" style="font-size: 1rem"><a href="#home">Pendeza</a></span>
          <nav>
            <ul>
              <li><a href="#home"><i class="fas fa-home mx-0.5"></i>Home</a></li>
              <li><a href="./css/pendeza.css"><i class="fas fa-download mx-0.5"></i>Download</a></li>
              <li><a href="#home"><i class="fab fa-github mx-0.5"></i>Github</a></li>
              <li><a href="#home"><i class="fas fa-author"></i>Author</a></li>
            </ul>
          </nav>
        </div>
      </div>
     `
    })
    app.component('Header',{
      template: `
        <header id="home" class="wrapper-sm h-100vh" style="padding-top: 3%">
          <h1>{{ title }} <i class="fab fa-sass"></i></h1>
           <p class="lead" v-html="msg"></p>
           <div class="dis-flex justify-evenly">
           <a href="./css/pendeza.css"><button class="btn">Download</button></a>
           <button class="btn">Github</button>
   </div>

   </div>
           <h3 class="mt-4">Why Pendeza?</h3>
           <ul class="simple-list" v-for="list in myList">
             <li class="simple-list-item mb-3">{{ list }}</li>
           </ul>
         </header>
   `,
      data() {
        return {
          title: 'Pendeza',
          msg: `<span class='cursor-pointer text-link text-secondary'>Pendeza CSS</span> is a lightweight css framework that makes building great UIs simpler and more fun.  </br>It also makes use of <a href="/sawazisha.css" class="cursor-pointer text-link text-secondary">sawazisha css </a> which is a tiny css reset tool.</br> More than that, pendeza creates applications that are responsive by default.`,
              myList: [
                    'It is easy to learn',
                    'Has lost of classes',
                    'The names of the classes are easy to remember',
                    'Can be extended through SASS',
                    'Compressed version of Pendeza is a really small file',
                    'Makes development faster',
                    'Has lost of color to pick from',
                    'Has good documentation'
                  ]
          }
      }
    })
    app.component('Main',{
      template: `
      <main class="wrapper-sm">
        <Colors></Colors>
        <Buttons></Buttons>
        <Shadow></Shadow>
        <Grid></Grid>
      </main>
     `
    })
    app.component('Colors',{
      template: `
       <section id="colors" style="padding-top: 4%">
          <h2>Colors</h2>
         <div class="dis-grid cols-3">
            <div v-for="color in colors">
               <h4 class="color-title">{{ color.name }}</h4>
               <div :class="color.class">
                  <div :class="color.classes[0]" style="height: 1.8rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[0] }}</span></div>
                  <div :class="color.classes[1]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[0] }}</span></div>
                  <div :class="color.classes[2]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[0] }}</span></div>
                  <div :class="color.classes[3]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[3] }}</span></div>
                  <div :class="color.classes[4]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[4] }}</span></div>
                  <div :class="color.classes[5]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[5] }}</span></div>
                  <div :class="color.classes[6]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[6] }}</</span></div>
                  <div :class="color.classes[7]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[7] }}</span></div>
                  <div :class="color.classes[8]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[8] }}</span></div>
                  <div :class="color.classes[9]" style="height: 1.5rem; text-align: center; padding-top: 0.23rem"><span class="color-text">{{ color.classes[9] }}</span></div>
               </div>
           </div>
         </div>
        </section>
     `,
      data() {
        return {
          colors: [
                { id: 0, name: 'primary', classes: ['primary lighten-1','primary lighten-2','primary lighten-3','primary lighten-4', 'primary ', 'primary darken-1','primary darken-2','primary darken-3','primary darken-4',] },
                { id: 1, name: 'secondary', classes: ['secondary lighten-1','secondary lighten-2','secondary lighten-3','secondary lighten-4', 'secondary ', 'secondary darken-1','secondary darken-2','secondary darken-3','secondary darken-4',], },
                { id: 2, name: 'success', classes: ['success lighten-1','success lighten-2','success lighten-3','success lighten-4', 'success ', 'success darken-1','success darken-2','success darken-3','success darken-4',], },
                { id: 3, name: 'danger', classes: ['danger lighten-1','danger lighten-2','danger lighten-3','danger lighten-4', 'danger ', 'danger darken-1','danger darken-2','danger darken-3','danger darken-4',], },
                { id: 4, name: 'warning', classes: ['warning lighten-1','warning lighten-2','warning lighten-3','warning lighten-4', 'warning ', 'warning darken-1','warning darken-2','warning darken-3','warning darken-4',], },
                { id: 5, name: 'muted', classes: ['muted lighten-1','muted lighten-2','muted lighten-3','muted lighten-4', 'muted ', 'muted darken-1','muted darken-2','muted darken-3','muted darken-4',], },
                { id: 6, name: 'dark', classes: ['dark lighten-1','dark lighten-2','dark lighten-3','dark lighten-4', 'dark ', 'dark darken-1','dark darken-2','dark darken-3','dark darken-4',], },
                { id: 7, name: 'light', classes: ['light lighten-1','light lighten-2','light lighten-3','light lighten-4', 'light ', 'light darken-1','light darken-2','light darken-3','light darken-4',], },
                { id: 8, name: 'blue', classes: ['blue lighten-1','blue lighten-2','blue lighten-3','blue lighten-4', 'blue ', 'blue darken-1','blue darken-2','blue darken-3','blue darken-4',], },
                { id: 9, name: 'green', classes: ['green lighten-1','green lighten-2','green lighten-3','green lighten-4', 'green ', 'green darken-1','green darken-2','green darken-3','green darken-4',], },
                { id: 10, name: 'yellow', classes: ['yellow lighten-1','yellow lighten-2','yellow lighten-3','yellow lighten-4', 'yellow ', 'yellow darken-1','yellow darken-2','yellow darken-3','yellow darken-4',], },
                { id: 11, name: 'orange', classes: ['orange lighten-1','orange lighten-2','orange lighten-3','orange lighten-4', 'orange ', 'orange darken-1','orange darken-2','orange darken-3','orange darken-4',], },
                { id: 12, name: 'pink', classes: ['pink lighten-1','pink lighten-2','pink lighten-3','pink lighten-4', 'pink ', 'pink darken-1','pink darken-2','pink darken-3','pink darken-4',], },
                { id: 13, name: 'red', classes: ['red lighten-1','red lighten-2','red lighten-3','red lighten-4', 'red', 'red darken-1','red darken-2','red darken-3','red darken-4'], },
                { id: 14, name: 'purple', classes: ['purple lighten-1','purple lighten-2','purple lighten-3','purple lighten-4', 'purple ', 'purple darken-1','purple darken-2','purple darken-3','purple darken-4',], },
                { id: 15, name: 'teal', classes: ['teal lighten-1','teal lighten-2','teal lighten-3','teal lighten-4', 'teal ', 'teal darken-1','teal darken-2','teal darken-3','teal darken-4',], },
                { id: 16, name: 'indigo', classes: ['indigo lighten-1','indigo lighten-2','indigo lighten-3','indigo lighten-4', 'indigo ', 'indigo darken-1','indigo darken-2','indigo darken-3','indigo darken-4',], },
                { id: 17, name: 'brown', classes: ['brown lighten-1','brown lighten-2','brown lighten-3','brown lighten-4', 'brown ', 'brown darken-1','brown darken-2','brown darken-3','brown darken-4',], },
                { id: 18, name: 'violet', classes: ['violet lighten-1','violet lighten-2','violet lighten-3','violet lighten-4', 'violet ', 'violet darken-1','violet darken-2','violet darken-3','violet darken-4',], },
                { id: 19, name: 'grey', classes: ['grey lighten-1','grey lighten-2','grey lighten-3','grey lighten-4', 'grey ', 'grey darken-1','grey darken-2','grey darken-3','grey ighten-4',], },
                { id: 20, name: 'black', classes: ['black darken-1','black lighten-2','black lighten-3','black lighten-4', 'black ', 'black darken-1','black darken-2','black darken-3','black lighten-4',], },
          ]
        }
      }
    })
    app.component('Buttons',{
      template: `
        <section class="my-4">
          <h3>Buttons</h3>
          <p class="lead">All pendeza buttons have the class of btn</p>
          <div class="dis-grid cols-3">
            <div v-for="btn in btns">
              <div>
                <button :class="btn.class">{{ btn.name }}</button>
              </div>
            </div>
          </div>
        </section>
      `,
      data() {
        return {
          btns: [
            { id: 0, name: 'btn-xs', class: 'btn btn-xs', },
            { id: 1, name: 'btn-sm', class: 'btn btn-sm', },
            { id: 2, name: 'btn-lg', class: 'btn btn-lg', },
            { id: 3, name: 'btn-xl', class: 'btn btn-xl', },
            { id: 4, name: 'primary', class: 'btn primary', },
            { id: 5, name: 'outlined-primary', class: 'btn outlined-primary', },
          ]
        }
      }
    })
    app.component('Shadow', {
      template: `
        <section class="my-4">
          <h3>Shadow</h3>
          <p class="lead">Pendeza css uses google material design for its components</p>
          <div class="dis-grid cols-4 col-gap-3">
            <div class="shadow-1 text-center py-4 shadow-2:hover">shadow 1</div>
            <div class="shadow-2 text-center py-4 shadow-3:hover">shadow 2</div>
            <div class="shadow-3 text-center py-4 shadow-4:hover">shadow 3</div>
            <div class="shadow-4 text-center py-4 shadow-5:hover">shadow 4</div>
          </div>
        </section>
      `
    })
    app.component('Grid', {
      template: `
        <section class="my-4">
          <h3>Grid</h3>
          <div class="dis-grid cols-4 mb-2">
            <div class="primary h-2"></div>
            <div class="danger h-2"></div>
            <div class="secondary h-2"></div>
            <div class="warning h-2"></div>
          </div>
          <span>Code ..</span>
          <pre>
            &lt;div class="dis-grid cols-4">
              &lt;div class="primary h-2"&gt;&lt;/div&gt;
              &lt;div class="danger h-2"&gt;&lt;/div&gt;
              &lt;div class="secondary h-2"&gt;&lt;/div&gt;
              &lt;div class="warning h-2"&gt;&lt;/div&gt;
            &lt;/div>
          </pre>
         <div class="dis-grid cols-5 col-gap-3 mb-2">
            <div class="primary h-2"></div>
            <div class="danger h-2"></div>
            <div class="secondary h-2"></div>
            <div class="warning h-2"></div>
            <div class="muted h-2"></div>
          </div>
          <span>Code ..</span>
          <pre>
            &lt;div class="dis-grid cols-4 col-gap-3"&gt;
              &lt;div class="primary h-2"&gt;&lt;/div&gt;
              &lt;div class="danger h-2"&gt;&lt;/div&gt;
              &lt;div class="secondary h-2"&gt;&lt;/div&gt;
              &lt;div class="warning h-2"&gt;&lt;/div&gt;
              &lt;div class="muted h-2"&gt;&lt;/div&gt;
            &lt;/div>
          </pre>
        </section>
      `
    })
    app.mount('#root')
})
