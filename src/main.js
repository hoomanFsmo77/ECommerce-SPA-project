//////////// Tailwind.config
import './style/Tailwind.config/Tailwind.base.scss'
import './style/Tailwind.config/Tailwind.component.scss'
import './style/Tailwind.config/Tailwind.utilities.scss'


///////// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse)


////////// vue router
import router from "./router.config.js";

///////// pinia
import {createPinia} from "pinia";


//////// global component
import column from "./components/Grid/column.vue";
import row from "./components/Grid/row.vue";


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
app.mount('#app')