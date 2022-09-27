import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useMenuStore = defineStore('menu',() => {
  const isOpen = ref(false),
        menuOpen = (val) => isOpen.value = val;
        // menuOpen = () => isOpen.value = !isOpen.value;
        
  return { isOpen, menuOpen }
})