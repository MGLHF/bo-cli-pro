<template>
  <div>
    状态共享：{{ count }}
    <button @click="handleCut">递减</button>
    <img src="http://staticfe.oss-cn-beijing.aliyuncs.com/demo/vue_logo.jpg" alt="vue">
  </div>
</template>

<script>
import appStore from '@/store';
import action from '@/store/action';
  export default {
    props: [],
    data () {
      return {
        count: appStore.getState().count,
      }
    },
    mounted () {
      appStore.on('count', () => {
        this.count = appStore.getState().count;
      });
    },
    methods: {
      handleCut: () => {
        action.cut();
        appStore.emit('count');
      }
    },
    computed: {
    },
    destroyed () {
      appStore.removeAllListeners('count');
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    animation: fangda infinite 2s linear;
  }
}
</style>