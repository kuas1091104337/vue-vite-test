import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue"

export function MousePosition(){
  const x = ref(0),
        y = ref(0),
        pos = reactive({ x:0, y:0 }),
        position = reactive({ Xaxis:0, Yaxis:0 }),
        posUpdata = (e) => {
          x.value = e.pageX;
          y.value = e.pageY;
          pos.x = e.pageX;
          pos.y = e.pageY;
          position.Xaxis = e.pageX;
          position.Yaxis = e.pageY;
        };
        console.log(toRefs(pos));
  onMounted(() => {
    window.addEventListener('mousemove',posUpdata);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove',posUpdata);
  });
  return { x, y, pos, ...toRefs(position) }
}