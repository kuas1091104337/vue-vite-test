<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
const route = useRoute(),
      watchLink = ref('');
watch(
  () => route.path,
  (newVal) => {
    watchLink.value = newVal.split('/')[1];
    console.log(newVal.split('/')[1]);
    // console.log(newVal) console.log(route.path)
  }
);
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test1">Test1</RouterLink>
        <RouterLink to="/test2">Test2</RouterLink>
        <RouterLink to="/banner">Banner</RouterLink>
        <RouterLink to="/todo">Todo</RouterLink>
        <RouterLink to="/vuehtml">Vuehtml</RouterLink>
        <RouterLink to="/from">From</RouterLink>
        <RouterLink to="/regist">Regist</RouterLink>
        <RouterLink to="/about">About 7/9-20</RouterLink>
        <RouterLink to="/trans">Trans 7/21-24</RouterLink>
        <RouterLink to="/event">Event 7/25-32</RouterLink>
        <RouterLink to="/oneWayDataFlow">One way data flow</RouterLink>
        <RouterLink to="/gsap">GSAP</RouterLink>
        <RouterLink to="/course" :class="{acitve: watchLink === 'course'}">Course</RouterLink>
        <RouterLink to="/nested">Nested</RouterLink>
        <RouterLink to="/vuex">Vuex</RouterLink>
        <RouterLink to="/vuexApi">VuexApi</RouterLink>
        <RouterLink to="/compositionApi">CompositionApi</RouterLink>
        <RouterLink to="/styleVarInjection">StyleVarInjection</RouterLink>
        <RouterLink to="/vueI18n">VueI18n</RouterLink>
        <RouterLink to="/suspense">Suspense</RouterLink>
        <RouterLink to="/plugin">Plugin</RouterLink>
        <RouterLink to="/aos">AOS</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss">
header {line-height: 1.5;}
// .logo { display: block; margin: 0 auto 2rem; }
nav {
  font-size: 14px;
  text-align: center;
  width: 100%;
  margin: 15px 0;
  > a{
    display: inline-block;
    padding: 0 1rem;
    + a{border-left: 1px solid var(--color-border);}
  }
}
.nav{
  .router-link-exact-active, 
  .router-link-active,
  .acitve{
    color: var(--color-text);
    &:hover {background-color: transparent;}
  }
}
</style>
