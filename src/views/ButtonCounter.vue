<script>

export default {
  data() {
    return {
      count: 0
    }
  }
} 
  
</script>

<template>
  <button @click="count++">당신은 {{ count }} 번 클릭했습니다.</button>
</template>

<style>
input+input{
  margin-left: 10px;
}
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
