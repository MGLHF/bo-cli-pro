<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
<style scoped lang="less">
#app {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>