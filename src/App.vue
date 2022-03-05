<template>

 <MyHeader />
 <AboutMe />
 <MyPortfolio />

</template>

<script>

import AboutMe from './components/AboutMe.vue'
import MyPortfolio from './components/MyPortfolio.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    AboutMe,
    MyPortfolio
  }
}
</script>

