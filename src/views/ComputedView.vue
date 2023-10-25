<script>
  export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      // `this`는 컴포넌트 인스턴스를 가리킵니다.
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
      }
    }
  }
}

</script>

<template>
  <div class="layout">
    <h4>계산된 속성</h4>
    <div>
      <span>책을 가지고 있다?</span>
      <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}(삼항연산자)</span>
      <span>{{ publishedBooksMessage }}(계산된 속성)</span>
    </div>
    <h4>계산된 속성 활용</h4>
    <div>
      <span>풀네임 가져오기: {{ this.fullName }}</span>
      <!-- get() 함수가 실행된거임 -->
      <span>풀네임 값 변경: {{ this.fullName='길동 홍' }}</span>
      <!-- <span>풀네임 값 변경: {{ this.fullName('길동 홍') }}</span> -->
      <!-- export 한 전체를 this로 받아올수있다 -->
      <!-- export를 하지않고 const로 모든 변수값을 설정해줬다면 이름으로 받을 수 있다 -->
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
