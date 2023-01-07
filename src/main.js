//////////// Tailwind.config
import './style/Tailwind.config/Tailwind.base.scss'
import './style/Tailwind.config/Tailwind.component.scss'
import './style/Tailwind.config/Tailwind.utilities.scss'


/////////// data
import './Data/NavbarData.json'

///////// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping ,faMagnifyingGlass,faChevronDown,faTruckFast,faChevronRight} from '@fortawesome/free-solid-svg-icons'
library.add(faCartShopping,faMagnifyingGlass,faChevronDown,faTruckFast,faChevronRight)


////////// vue router
import router from "./router.config.js";

///////// pinia
import {createPinia} from "pinia";


//////// global component
import column from "./components/Grid/column.vue";
import row from "./components/Grid/row.vue";
import container from './components/Grid/container.vue'

////// directives
import vFade from './composables/directives/vFade.js'
import vCollapse from './composables/directives/vCollapse.js'

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
app.directive('fade',vFade)
app.directive('collapse',vCollapse)
app.mount('#app')