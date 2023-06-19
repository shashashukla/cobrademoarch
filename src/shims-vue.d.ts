/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  import {toaster} from '@meforma/vue-toaster'
  export default {component,toaster}
}


