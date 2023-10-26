<script>

export default {
  data() {
    return {
      list: [
        'a','b','c'
      ]
    }
  },
  mounted() {
    // document.querySelector('#username').focus();
    this.$refs.input.focus();
    console.log(this.$refs.items)
  }
} 
  
</script>

<template>
  <div class="layout">
    <h4>템플릿 참조</h4>
    <div>
      <p>
        Vue의 선언적 렌더링 모델은 개발자가 직접 DOM에 접근해야 해야하는 대부분을 추상화하지만, 개발자가 DOM 엘리먼트에 직접 접근해야 하는 경우가 여전히 있을 수 있습니다. 이러한 필요성을 충족시키기 위해 ref라는 특별한 속성을 사용할 수 있습니다:
      </p>
      <hr>
      <p>
        ref는 v-for 장에서 언급한 key 속성과 유사한 특수 속성입니다. 이를 통해 마운트된 특정 DOM 엘리먼트 또는 자식 컴포넌트 인스턴스에 직접적인 참조를 얻을 수 있습니다. 예를 들어 컴포넌트 마운트의 인풋에 초점을 맞추거나 엘리먼트에서 타사 라이브러리를 초기화하려는 경우, 프로그래밍 방식으로 조작하기 편리합니다.
      </p>
      <hr>
      <input ref="input">
      <input type="text" id="username">
    </div>
    <h4>v-for 내부에서 ref 사용하기</h4>
    <div>
      <ul>
        <li v-for="item in list" ref="items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
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
