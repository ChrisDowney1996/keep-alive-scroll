<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
<!--    <transition name="content-router-t" mode="out-in">-->
<!--      <keep-alive>-->
<!--        <router-view v-if="$route.meta.keepAlive"/>-->
<!--      </keep-alive>-->
<!--    </transition>-->
<!--    <transition name="content-router-t" mode="out-in">-->
<!--      <router-view v-if="!$route.meta.keepAlive"></router-view>-->
<!--    </transition>-->
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
