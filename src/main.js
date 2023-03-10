//////////// Tailwind.config
import './style/Tailwind.config/Tailwind.base.scss'
import './style/Tailwind.config/Tailwind.component.scss'
import './style/Tailwind.config/Tailwind.utilities.scss'

/////////// images
import './assets/instagram/1.jpg'
import './assets/instagram/2.jpg'
import './assets/instagram/3.jpg'
import './assets/instagram/4.jpg'
import './assets/instagram/5.jpg'
import './assets/instagram/6.jpg'

/////////// data
import './Data/NavbarData.json'

///////// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping ,faMagnifyingGlass,faChevronDown,faTruckFast,faChevronRight,faBars,faX,faAngleRight,faAngleLeft,faChevronLeft,faEarthEurope,faTree,faMapLocationDot,faHandHoldingDollar,faMagnifyingGlassPlus,faMagnifyingGlassMinus,faPlus,faMinus,faCaretDown,faQuestion,faChevronUp,faLock,faCircleQuestion,faMobileScreen,faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faTwitter,faPinterest,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faThumbsUp,faCircleCheck} from '@fortawesome/free-regular-svg-icons'

library.add(faCartShopping,faMagnifyingGlass,faChevronDown,faTruckFast,faChevronRight,faBars,faX,faAngleRight,faAngleLeft,faChevronLeft,faEarthEurope,faTree,faMapLocationDot,faHandHoldingDollar,faMagnifyingGlassMinus,faMagnifyingGlassPlus,faPlus,faMinus,faFacebookF,faTwitter,faPinterest,faThumbsUp,faInstagram,faCaretDown,faQuestion,faChevronUp,faLock,faCircleQuestion,faMobileScreen,faCircleExclamation,faCircleCheck)


////////// vue router
import router from "./router.config.js";

///////// pinia
import {createPinia} from "pinia";


//////// global component
import column from "./components/Grid/column.vue";
import row from "./components/Grid/row.vue";
import container from './components/Grid/container.vue'
import containerFull from "./components/Grid/containerFull.vue";

////// directives
import vFade from './composables/directives/vFade.js'
import vCollapse from './composables/directives/vCollapse.js'


///// skeletor
import VueSkeletor from 'vue-skeletor';
import { Skeletor } from 'vue-skeletor';

///// carousel
import 'vue3-carousel/dist/carousel.css'

///// lazy loading image
import VueLazyLoad from 'vue3-lazyload'


///// toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


//// imask
import { IMaskDirective } from 'vue-imask';

////////// Vue
import {createApp} from "vue";
import App from "./App.vue";
const app=createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false
app.use(router)
app.use(createPinia())
app.component('row',row);
app.component('column',column);
app.component('container',container);
app.component('container-full',containerFull);
app.component(Skeletor.name, Skeletor);
app.use(VueSkeletor, {shimmer: false,})
app.use(VueLazyLoad)
app.use(Toast,{
    position:'bottom-right',
    timeout: 2000
});
app.directive('fade',vFade)
app.directive('collapse',vCollapse)
app.directive('imask',IMaskDirective)
app.mount('#app')