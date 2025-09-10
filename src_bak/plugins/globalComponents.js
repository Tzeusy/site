import { DropDown } from "../components";
import { Parallax } from "../components";
import { VPopover } from "v-tooltip";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("DropDown", DropDown);
    Vue.component(Parallax.name, Parallax);
    Vue.component("VPopover", VPopover);
  }
};

export default GlobalComponents;
