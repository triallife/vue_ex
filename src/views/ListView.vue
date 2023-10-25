<script>

export default {
  data() {
    return {
      parentlangs: '포켓몬',
      items: [
        { id: 1, title: '바보물개', desc: '손뼉형포켓몬'},
        { id: 2, title: '피츄', desc: '전기타입포켓몬'},
        { id: 3, title: '꼬부기', desc: '물타입포켓몬'}
      ],
      myObject : {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      numbers: [1, 2, 3, 4, 5],
      sets : [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10]]
    }
  },
  computed: {
    evenNumbers() {
      console.log('evenNumber실행')
      return this.numbers.filter(n => n % 2 === 0)
      //computed는 numbers의 값이 변경될때만 실행된다
    } 
  },
  methods: {
    even(numbers) {
      console.log('even실행')
      return numbers.filter(number => number % 2 === 0)
      //methods는 data함수내에 설정된 어떤 초기값이든 바뀌면 실행된다
    }
  }
} 
  
</script>

<template>
  <div class="layout">
    <h4>목록 렌더링</h4>
    <div>
      <h4>v-for</h4>
      <ul>
        <li v-for="(item,index) in items" v-bind:key="item.id">
          <span>{{ index }}</span>
          <span>{{ item.title }}</span>
          <span>{{ item.desc }}</span>
        </li>
      </ul>
      <h4>객체 v-for</h4>
      <ul>
        <li v-for="value in myObject" :key="value">
          {{ value }}
        </li>
      </ul>
      <h4>범위 v-for</h4>
      <ul>
        <li>
          <span v-for="n in 10" :key="n">{{ n }}</span>
        </li>
      </ul>
      <h4>템플릿 v-for</h4>
      <ul>
        <template v-for="item in items" :key="item">
          <li>{{ item.title }}</li>
          <!-- <li class="divider" role="presentation"></li> -->
        </template>
      </ul>
      <h4>필터링된 결과</h4>
      <ul>
        <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
      </ul>
      <h4>필터링된 결과 (세트)</h4>
        <ul v-for="numbers in sets" :key="numbers">
          <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
        </ul>
        <button @click="sets[0].push(12)">+</button>
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
