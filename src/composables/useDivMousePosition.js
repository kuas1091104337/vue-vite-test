import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue"
export function DivMousePosition(){
  const mpDiv = ref(null),
        POS = reactive({ Xaxis:0, Yaxis:0 }),
        divPosUpdata = (e) => {
          POS.Xaxis = e.offsetX;
          POS.Yaxis = e.offsetY;
        };
  onMounted(() => {
    mpDiv.value.addEventListener('mousemove',divPosUpdata);
  });
  // Cannot read properties of null
  // onUnmounted(() => {
  //   mpDiv.value.removeEventListener('mousemove',divPosUpdata);
  // });
  return { ...toRefs(POS), mpDiv }
}