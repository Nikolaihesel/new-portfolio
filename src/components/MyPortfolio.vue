<template>
    <section>


        <div class="portfolio-container" id="portfolio">

            <div class="portfolio-content">

                <h2>What can i do so far?</h2>
                <p>
                    when I first started, I had no idea which way my skills would develop, but as I got into the
                    different branches of the education, I really locked on to the design aspect! now I'm focused on
                    illustration, graphical design and web development, and I'm thoroughly enjoying it! <br>
                    If you want to read more about my thoughts and skills then click on the beams below.
                    <i class="fa-solid fa-hand-point-down"></i>


                </p>
            </div>



            <div class="skills-container dev-skills">

                <h4 class="sub-head-portfolio"> Design and Illustration </h4>

                <div class="beam-container">

                    <div class="beam" id="illustrator" @click="toggleModal">
                        <div class="background-beam-icon">
                            <img class="beam-logo" src="@/assets/img/illustrator.svg" alt="">
                        </div>
                        <h3>Adobe Illustrator</h3>
                    </div>

                    <div class="beam" id="photoshop" @click="toggleModal">
                        <div class="background-beam-icon">
                            <img class="beam-logo" src="@/assets/img/photoshop.svg" alt="">
                        </div>
                        <h3>Adobe Photoshop</h3>
                    </div>

                    <div class="beam" id="xd" @click="toggleModal">
                        <div class="background-beam-icon">
                            <img class="beam-logo" src="@/assets/img/xd.svg" alt="">
                        </div>
                        <h3>Adobe XD</h3>
                    </div>

                    <div class="beam" id="animate" @click="toggleModal">
                        <div class="background-beam-icon" >
                            <img class="beam-logo" src="@/assets/img/animate.svg" alt="">
                        </div>
                        <h3>Adobe Animate</h3>
                    </div>

                    <div href="google.dk" class="beam" id="procreate" @click="toggleModal">
                        <div class="background-beam-icon">
                            <img class="beam-logo" src="@/assets/img/procreate.png" alt="">
                        </div>
                        <h3>Procreate</h3>
                    </div>

                    <div class="beam" id="aftereffects" @click="toggleModal">
                        <div class="background-beam-icon">
                            <img class="beam-logo" src="@/assets/img/after-effects.svg" alt="">
                        </div>
                        <h3>Adobe After Effects</h3>
                    </div>

                </div>




            </div>

        </div>


        <div class="skills-container dev-skills" >

            <h4 class="sub-head-portfolio"> Development</h4>

            <div class="beam-container">

                <div class="beam" id="vscode" @click="toggleModal">
                    <div class="background-beam-icon">
                        <img class="beam-logo" src="@/assets/img/vscode.png" alt="">
                    </div>
                    <h3>Visual Studio Code</h3>
                </div>

                <div class="beam" id="html-logo" @click="toggleModal">
                    <div class="background-beam-icon">
                        <img class="beam-logo" src="@/assets/img/html-logo.png" alt="">
                    </div>
                    <h3>HTML 5</h3>
                </div>

                <div class="beam" id="css" @click="toggleModal">
                    <div class="background-beam-icon">
                        <img class="beam-logo" src="@/assets/img/css.logo.png" alt="">
                    </div>
                    <h3>CSS 3</h3>
                </div>

                <div class="beam" id="js-logo" @click="toggleModal">
                    <div class="background-beam-icon">
                        <img class="beam-logo" src="@/assets/img/js-logo.png" alt="" >
                    </div>
                    <h3>Javascript</h3>
                </div>

                <div href="google.dk" class="beam" id="wordpress" @click="toggleModal">
                    <div class="background-beam-icon">
                        <img class="beam-logo" src="@/assets/img/wordpress-logo.png" alt="">
                    </div>
                    <h3>Wordpress & Theme Dev</h3>
                </div>

                <div href="google.dk" class="beam" id="scss-logo" @click="toggleModal" >
                    <div class="background-beam-icon">
                        <img class="beam-logo" src="@/assets/img/scss-logo.png" alt="">
                    </div>
                    <h3>SCSS</h3>
                </div>
               
            </div>

        </div>


       

    </section>

     <div v-if="showModal" class="backdrop"  @click.self="toggleModal">
            <div class="modal">
                <div class="top-container-modal-skills">

                 <h1>
                    Test test test
                </h1>
                               </div>

            </div>
        </div>

</template>

<script>
export default {
    name: 'MyPortfolio',

data()  {

return{
    showModal: 0
    
}
},

methods: {
    toggleModal()  {
        this.showModal = !this.showModal;
    }
}

}
</script>
