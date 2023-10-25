<script setup>

  import { ref, nextTick, reactive } from 'vue'

const count = ref(0)
console.log(count);
const state = reactive({ count2: 0 })
console.log(state);
console.log(state.count2);

  const increment = async () => {
    count.value++
    console.log(document.getElementById('counter').textContent);
    await nextTick() //업데이트가 완료된후
    console.log(document.getElementById('counter').textContent);
  }
  
</script>

<template>
  {{ console.log('template 실행') }}
  <div class="layout">
    <h4>ref 활용</h4>
    <div>
      <button @click="count++">증가, 할일 직접 부여</button>
      <span>{{ count }}</span>
      <button @click="increment">증가, 함수 직접 연결</button>
      <span id="counter">{{ count }}</span>
    </div>
    <h4>reactive 활용</h4>
    <div>
      <button @click="state.count2++">count2 증가</button>
      <span>{{ state.count2 }}</span>
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
    padding: 0 10px;
  }
</style>
