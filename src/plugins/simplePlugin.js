import SrollHandler from "../mixins/srollHandler"; //Глобально подключать

export default {
  install(Vue){
    Vue.mixin(SrollHandler)
    Vue.prototype.$myMethod = function () {
      console.log("SimplePlugin works");
    }
  }
}