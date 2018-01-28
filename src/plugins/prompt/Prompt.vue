<template>
  <div class="prompt">
      <div :class="classStatus">
        {{message}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'Prompt',
  data () {
    return {
      classStatus: 'success',
      message: ''
    }
  },
  methods: {
    showSuccess (message) {
      this.message = message
      this.classStatus = 'success'
    },
    showError (message) {
      this.message = message
      this.classStatus = 'error'
    }
  }
}
</script>

<style lang="less" scoped>
  .prompt{
    >div{
      padding:15px 30px;
      font-size:14px;
      border-radius:5px;
      position:fixed;
      z-index:99999;
      top:80px;
      left:50%;
      transform: translateX(-50%);
    }
  }
  .success{
    color:green;
    background:#f0f9eb;
  }
  .error{
    color:red;
    background:#fef0f0;
  }
</style>
