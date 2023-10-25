<script>

export default {
  data() {
    return {
      count: 0,
      name: '유저'
    }
  },
  methods: {
    greet(event) {
      // `this`는 메서드가 활성화된 현재 인스턴스를 가리킵니다.(export전체 그 자체)
      alert(`안녕 ${this.name}!`)
      // 'event'는 네이티브 DOM 이벤트 객체입니다.
      if (event) {
        alert(event.target.tagName)
      }
    },
    say(message) {
      alert(message)
    },
    warn(message, event) {
      // 이제 네이티브 이벤트 객체에 접근할 수 있습니다.
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    doThis() {
      //.stop
      alert('링크 전파를 차단했습니다');
    },
    onSubmit() {
      //.onSubmit
      alert('폼 제출을 막았습니다');
    },
    doThat() {
      //.stop.prevent
      alert('링크의 기본속성 차단, 링크 전파 차단');
    },
    boxClick() {
      alert('boxClick');
    },
    spanClick() {
      //onSubmit
      alert('spanClick');
    },
    submit() {
      alert('enter 키가 입력되었습니다');
    },
    onPageDown() {
      alert('pageDown 키가 입력되었습니다');
    }
  }
} 
  
</script>

<template>
  <div class="layout">
    <h4>이벤트 핸들링 (@click="할일 직접 작성")</h4>
    <div>
      <button @click="count++">1 추가</button>
      <p>숫자 값은: {{ count }}</p>
    </div>
    <h4>메서드 핸들러 (methods에 할당한 함수를 불러와서 실행)</h4>
    <div>
      <button @click="greet">환영하기</button>
      <button @click="say('안녕')">안녕이라고 말하기</button>
      <button @click="say('잘가')">잘가라고 말하기</button>
    </div>
    <h4>인라인 핸들러에서 이벤트 객체 접근하기</h4>
    <div>
      <!-- 특수한 키워드인 $event 사용 -->
      <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">
        제출하기
      </button>
      <!-- 인라인 화살표 함수 사용 -->
      <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">
        제출하기
      </button>
    </div>
    <h4>이벤트 수식어</h4>
    <div>
      <!-- 클릭 이벤트 전파가 부모에게 전달되는 것을 막습니다. -->
      <a @click.stop="doThis" href="http://www.naver.com" target="_blank">doThis</a>
      <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
      <form @submit.prevent="onSubmit" action="http://www.naver.com">
        <button>제출</button>
      </form>
      <!-- 수식어를 연결할 수 있습니다. -->
      <a @click.stop.prevent="doThat" href="http://www.naver.com" target="_blank">doThat</a>
      <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
      <form @submit.prevent>prevent</form>
      <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
      <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
      <div @click.self="doThat">doThat</div>
    </div>
    <h4>self 유무 차이</h4>
    <div>
      <div @click="boxClick" class="box">
        <span @click="spanClick" class="span">spanClick</span>
      </div>
      <div @click.self="boxClick" class="box">
        <span @click.self="spanClick" class="span">spanClick self</span>
      </div>
      <p>self를 사용하면 그 자신의 이벤트만 적용할수있다</p>
    </div>
    <h4>입력키 수식어</h4>
    <div>
      <!-- `key`가 `Enter`일 때만 `submit`을 호출합니다 -->
      <input @keyup.enter="submit" />
      <input @keyup.page-down="onPageDown" />
    </div>
    
  </div>
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
