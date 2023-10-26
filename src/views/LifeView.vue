<script>

export default {
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    console.log('mounted: 컴포넌트 마운트 후에 할일')
  },
  beforeMount() {
    console.log('beforeMount: 컴포넌트 마운트 전에 할일')
  },
  beforeUpdate() {
    alert('업데이트 시작!');
    console.log('beforeUpdate: 업데이트 이전에 할일')
  },
  updated() {
    alert('업데이트 완료!');
    console.log('updated: 업데이트 후에 할일')
  }
} 
  
</script>

<template>
  {{ console.log('템플릿 컴파일 시작') }}
  <div class="layout">
    <h4>생명주기</h4>
    <div>
      <button type="button" @click="count++">업데이트 발생시키기 count + 1</button>
      {{ count }}
    </div>
  </div>
  {{ console.log('템플릿 컴파일 완료') }}
</template>

<style>
.box{
  border:#ccc 1px solid;
  box-sizing: border-box;
  padding: 30px;
}
.span{
  border:#ccc 1px solid;
  padding: 10px;
}
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
  button{
    margin: 10px;
    transition: 0.5s ease-in;
    border: none;
    padding: 10px;
  }
  button:hover{
    background-color: hsla(160, 100%, 37%, .5);
  }
  button.active{
    background-color: hsla(160, 100%, 37%, .8);
    color: #fff;
  }
  li{
    list-style: none;
    padding: 10px;
    background-color: rgba(0, 0, 0, .1);
    transition: 0.4s ease-in;
  }
  li:hover{
    background-color: hsla(160, 100%, 37%, .8);
    color: #fff;
  }
  ul{
    margin: 0;
    padding:0;
  }
</style>
