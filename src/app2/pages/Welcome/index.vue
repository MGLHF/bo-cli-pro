<template>
  <div>
    <img src="http://staticfe.oss-cn-beijing.aliyuncs.com/demo/vue_logo.jpg" alt="vue">
  </div>
</template>

<script>
  export default {
    props: [],
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    },
    computed: {
    }
  }
</script>
<style scoped lang="less">
@keyframes fangda {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
div {
  min-height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    animation: fangda infinite 2s linear;
  }
}
</style>