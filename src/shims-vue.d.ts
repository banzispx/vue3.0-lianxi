declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 专门为vue文件定义的说明文件。因为ts不能识别.vue 文件