import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSearch,
  faBookOpen,
  faPlayCircle,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faRandom,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHome,
  faSearch,
  faBookOpen,
  faPlayCircle,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faRandom,
  faRedo
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
