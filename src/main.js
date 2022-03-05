import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas  } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import './assets/style.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; 

import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver


library.add(fas, faInstagram, faGithub, faFacebook, faLinkedin);

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')

