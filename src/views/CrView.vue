<script>

export default {
  data() {
    return {
      awesome: true,
      type: 'D',
      page: true
    }
  }
} 
  
</script>

<template>
  <div class="layout">
    <h4>v-if와 v-else</h4>
    <div>
      <p>this is Conditional Rendering</p>
      <button @click="awesome = !awesome">Toggle</button>
      {{ awesome }}
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>
    <h4>v-else-if</h4>
    <div>
      <button type="button" @click="type = 'A'">A</button>
      <button type="button" @click="type = 'B'">B</button>
      <button type="button" @click="type = 'C'">C</button>
      <button type="button" @click="type = 'D'">D</button>
      <div v-if="type === 'A'">
        A
      </div>
      <div v-else-if="type === 'B'">
        B
      </div>
      <div v-else-if="type === 'C'">
        C
      </div>
      <div v-else>
        Not A/B/C
      </div>
    </div>
    <h4>v-if에 templete</h4>
    <div>
      <button type="button" @click="page=!page" :class="{active: page}">한영 전환</button>
      <template v-if="page">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>
      <template v-else>
        <h1>제목</h1>
        <p>단락 1</p>
        <p>단락 2</p>
      </template>
    </div>
    <h4>v-show</h4>
    <div>
      <button @click="v-show != v-show ">전환</button>
      <p v-show="true">v-show true</p>
      <p v-show="false">v-show false</p>
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
  button{
    margin: 10px;
    transition: 0.5s ease-in;
    border: none;
    padding: 10px;
  }
  button.active{
    background-color: hsla(160, 100%, 37%, .8);
    color: #fff;
  }
</style>
