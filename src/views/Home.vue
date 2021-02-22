<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ count }} {{ double }}</div>
    <div @click="increment">++++</div>
    <h1>{{ x }} {{ y }}</h1>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  reactive,
  toRefs,
  watch,
} from 'vue'
import { useMousePositionRec } from './../hook/useMounsePosition'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
interface DaraProps {
  count: number
  increment: () => void
  double: number
}
export default defineComponent({
  name: 'Home',

  setup() {
    onMounted(() => {
      console.log('mounted')
    })
    onUpdated(() => {
      console.log('update')
    })
    const data: DaraProps = reactive({
      count: 0,
      increment: () => {
        data.count++
      },
      double: computed(() => data.count * 2),
    })
    watch([() => data.count], () => {
      document.title = data.count + ''
    })
    document.title = data.count + ''
    const refData = toRefs(data)
    // 鼠标位置的移动事件
    const { x, y } = useMousePositionRec()
    // const x = ref(0)
    // const y = ref(0)
    // const updateLocation = (e: MouseEvent) => {
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }
    // onMounted(() => {
    //   document.addEventListener('click', updateLocation)
    // })
    // onUpdated(() => {
    //   document.removeEventListener('click', updateLocation)
    // })
    return { ...refData, x, y }
  },
})
</script>
