<template>

 <MyHeader />
 <AboutMe />
 <MyPortfolio />

</template>

<script>

import MyHeader from './components/MyHeader.vue'
import AboutMe from './components/AboutMe.vue'
import MyPortfolio from './components/MyPortfolio.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    AboutMe,
    MyPortfolio

  }
}
</script>

