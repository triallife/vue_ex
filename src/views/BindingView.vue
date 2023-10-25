<script>

export default {
  data() {
    return {
      isActive: true,
      error: null,
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}
  
</script>

<template>
  <div class="layout">
    <h4>클래스와 스타일 바인딩</h4>
    <div>
      <div
        class="normal"
        :class="classObject"
      >isActive 값이 참이면 class에 acitve 추가, false면 삭제</div>
      <div :class="[activeClass, errorClass]">isActive 값이 참이면 class에 acitve 추가, false면 삭제</div>
      <div :class="[isActive ? activeClass : '', errorClass]"></div>
    </div>
  </div>
</template>

<style>
  *{
    text-align: left;
  }
  .layout{
    margin: 50px 0;
  }
  h1 {
    font-size: 1rem;
  }
  h4{
    font-weight: bold;
    background-color: #ccc;
    padding: 5px 10px;
  }
  hr{
    margin: 20px 0;
  }
  h4+div{
    border:#ccc 1px solid;
    padding: 30px;
    margin: 0px 0;
  }
  span{
    padding-right: 10px;
    transition: 0.5s ease-in;
  }
  span:hover{
    color: #fff;
    background-color: hsla(160, 100%, 37%, .8);
  }
</style>
