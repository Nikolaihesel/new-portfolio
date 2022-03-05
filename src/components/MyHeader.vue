<template>
<header>
           <img class="logo-watermark slide-in-right" src="@/assets/img/duck-logo.svg" alt="">

            <nav>

            <div class="top-nav-container">

                <div class="menu-points" id="menuPoints" >
                    <ul id="menu-items" v-if="showNavMenu" @click="toggleTopNav">
                        <li id="close-menu"><a href="#home">Home</a></li>
                        <li id="close-menu"><a href="#">About</a></li>
                        <li id="close-menu"><a href="#portfolio">Portfolio</a></li>
                        <li id="close-menu"><a href="#">contact</a></li>
                    </ul>
                </div>
                <div class="burger" id="top-nav" @click="toggleTopNav">
                    <div class="line"></div>
                    <div class="line" id="line2"></div>
                    <div class="line" id="line3"></div>
                </div>


            </div>


            <div class="side-nav" id="nav">
                <ul>
                    <li id="menu-item"> <fa icon="home" />
                        <p id="nav-text"> Home </p>
                    </li>
                    <li id="menu-item"><fa icon="info" />
                        <p id="nav-text">About</p>
                    </li>
                    <li id="menu-item"><fa icon="phone" />
                        <p id="nav-text">Contact</p>
                    </li>
                    <li id="menu-item"><fa icon="image" />
                        <p id="nav-text">Portfolio</p>
                    </li>
                </ul>
            </div>

        </nav>

         <div class="top-container-about">
            <div class="content-container-top">
                <span class="description slide-in-left">
                    <p class="slide-in-left">Multimediadesign Student</p>
                </span>
                <h1 class="header-name slide-in-left"> <span class="span-name">N</span>ikolai <span
                        class="span-name">H</span>esel
                </h1>

                <p class="text-enlarge-background slide-in-left" id="turn-text">Code 
                 
                   <fa class="rotate-45deg" id="turn-icon" icon="xmark"  />
                    Design </p>

            </div>
            <div class="icon-container slide-in-left">

                <div class="background-icon">
                    <fa class="some-icon-top" :style="{color: 'hsl(61, 89%, 58%)', height: '2em'}" :icon="['fab','instagram']" />
                </div>
                <div class="background-icon">
                    <fa class="some-icon-top" :style="{color: 'hsl(61, 89%, 58%)', height: '2em'}"  :icon="['fab','github']" />
                </div>

                <div class="background-icon">
                    <fa class="some-icon-top" :style="{color: 'hsl(61, 89%, 58%)', height: '2em'}" :icon="['fab','facebook']" />
                </div>

                <div class="background-icon">
                    <fa class="some-icon-top" :style="{color: 'hsl(61, 89%, 58%)', height: '2em'}" :icon="['fab','linkedin']" />
                </div>

                <div class="background-icon">
                    <a href="mailto:nikolaihesel@icloud.com"> <fa class="some-icon-top" :style="{color: 'hsl(61, 89%, 58%)', height: '2em'}" icon="at" /> </a>
                </div>
            </div>
        </div>


</header>
</template>

<script> 

export default {
    name: 'MyHeader',


    data(){
        return{
        showNavMenu: 0
        }
    },





    mounted(){
        //styrer øverste navigation - første del er farven ved hover, anden del er åben / luk.
const topNav = document.getElementById('top-nav');
const menu = document.getElementById('menu-items');
const burger = document.querySelectorAll('.line');


topNav.addEventListener('mouseover', () => {
    burger.forEach(line => {
    line.style.background = "#272727";

});

});
topNav.addEventListener('mouseout', () => {
    burger.forEach(line => {
    line.style.background = "#f2f3f7";

});
});




//udvid side navigation ved hover og få den til at trække sammen igen 
const navText = document.querySelectorAll('#nav-text')
const nav = document.getElementById('nav');


nav.addEventListener('mouseover', function handleMouseOver(){
    nav.style.width = "4em"
    nav.style.transition =".25s ease-in"
  navText.forEach((icon) => {
      icon.style.opacity = "100%" 
     
     
  });
  
    
});

nav.addEventListener('mouseout', function handleMouseOut(){
    nav.style.width = "2em"
    nav.style.transition =".25s ease-in"
    navText.forEach((e) => {
        e.style.opacity = "0"
    });
})




//onscroll events her 
window.onscroll = function() {hideNav()};
let menuPoints = document.querySelectorAll('#close-menu')

function hideNav() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   nav.style.display = "none";
   topNav.style.display="flex";
   menu.style.display="flex";
    
  
  } else {
   nav.style.display="flex";
   topNav.style.display="none";
   menu.style.display="none";

   
   menuPoints.foreach(  (e) => {
       e.style.display="none"
   });
   
  }
}
window.onload = hideNav();

window.onscroll


    },

    methods: {
        toggleTopNav() {
            this.showNavMenu = !this.showNavMenu
        }
    }
}
</script>