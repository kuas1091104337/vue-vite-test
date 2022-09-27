import { ref } from "vue"

export function State(){
  const idx = ref(0);
  return { idx }
}