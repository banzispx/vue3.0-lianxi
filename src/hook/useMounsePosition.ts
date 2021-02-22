import { ref, onMounted, onUnmounted, reactive, toRefs } from 'vue'
function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  const updateLocation = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', updateLocation)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updateLocation)
  })
  return {
    x,
    y,
  }
}
// 使用reactive改造
function useMousePositionRec() {
  const positions = reactive({
    x: 0,
    y: 0,
  })
  const updateLocation = (e: MouseEvent) => {
    positions.x = e.pageX
    positions.y = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', updateLocation)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updateLocation)
  })
  const refsPositions = toRefs(positions)
  return {
    ...refsPositions,
    // x: refsPositions.x,
    // y: refsPositions.y,
  }
}
export { useMousePosition, useMousePositionRec }
