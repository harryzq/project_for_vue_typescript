import Vue from 'vue';
import Main from './main.vue';

const HaToastConstructor = Vue.extend(Main);
let instance: any;
interface options {
  msg: String;
  visable:Boolean,
  onClose?: Function;
}
/* eslint-disable */
const HaToast = function (options: options) {
  if(!instance){
    instance = new HaToastConstructor({
      data: options,
    });
  }
  Object.assign(instance,options)
  //   let userOnClose = options.onClose;
  options.onClose = function () {
    HaToast.close();
  };
  instance.$mount();
  document.body.appendChild(instance.$el);
};
HaToast.close = function () {
  instance.close();
};

export default HaToast;
