<script setup>
  const rawHtml = '<a href="">Link</a>';
  const pid = 10;
  const isButtonDisabled = true;
  const objectOfAttrs = {
        id: 'container',
        class: 'wrapper'
  }
  const number = 20;
  const ok = false;
  const message = '바보물개';
  const id = 30;
  const sayHello = (msg) => {
    alert(msg);
  }
  const url = 'http://www.google.com';
  const attributeName = 'href';
  const items = [
    { id: 0, title: 'html' },
    { id: 1, title: 'css' },
    { id: 2, title: 'javascript' },
  ];
  const onSubmit = () => {
    alert('제출되었습니다');
  }
</script>

<template>
  <div>
    <h4>변수명 출력</h4>
    <div>
      <h1 class="green">'{{  }}'이 안에 출력한다</h1>
    </div>

    <h4>텍스트 출력, 태그 출력</h4>
    <div>
      <p>{{ rawHtml }}</p>
      <p v-html="rawHtml"></p>
    </div>

    <h4>속성 바인딩</h4>
    <div>
      <div v-bind:id="pid"></div>
      <!-- 결과: <div id="10"></div> -->
      <div id="pid"></div>
      <div id="pid">{{ pid }}</div>
    </div>

    <h4>불리언 속성 바인딩</h4>
    <div>
      <button :disabled="isButtonDisabled">버튼</button>
      <button :disabled="!isButtonDisabled">버튼</button>
      <button disabled="true">버튼</button>
    </div>

    <h4>여러 속성을 동적으로 바인딩</h4>
    <div>
      <div v-bind="objectOfAttrs">바인딩 결과</div>
    </div>

    <h4>자바스크립트 표현식(javascript expression)</h4>
    <div>
      {{ number + 1 }}
      {{ ok ? '예' : '아니오' }}
      {{ message.split('').reverse().join('') }}
      <div :id="`list-${id}`"></div>
    </div>

    <h4>함수 호출(사용)</h4>
    <div>
      <p :title="sayHello('바보물개')">함수 호출(속성으로)</p>
      <p>함수 호출(태그안에서) {{ sayHello('개물보바') }}</p>
    </div>

    <h4>인자</h4>
    <div>
      <p>일부 디렉티브는 디렉티브 뒤에 콜론(:)으로 표시되는 "인자"를 사용할 수 있습니다. 예를 들어 v-bind 디렉티브는 HTML 속성을 반응적으로 업데이트하는 데 사용됩니다:</p>
      <a v-bind:href="url"> 링크 </a>
      <!-- 단축 문법 -->
      <a :href="url"> 링크 </a>
    </div>

    <h4>동적 인자</h4>
    <div>
      <a v-bind:[attributeName]="url"> 링크 </a>
      <!-- 단축 문법 -->
      <a :[attributeName]="url"> 링크 </a>
    </div>

    <h4>반복문</h4>
    <div>
      <p v-for="item in items" :key="item.id">{{ item.title }}</p>
      <!-- 변수명 items안의 것들을 item으로 받을게
      반복문을 위해서 key 속성값에 item.id 할당
      item.title 출력 -->
    </div>

    <h4>이벤트 연결 v-on</h4>
    <div>
      <button type="button" v-on:click="sayHello('이벤트연결')">이벤트연결</button>
      <button type="button" @click="sayHello('단축 문법')">단축 문법 이벤트연결</button>
      <button type="button" @mouseover="sayHello('단축 문법')">단축 문법 이벤트연결</button>
    </div>

    <h4>수식어</h4>
    <div>
      <form action="">
        <button @submit.prevent="onSubmit">제출</button>
        <!-- .prevent를 통해 제출이벤트가 일어나면 무조건 기본기능을 막음 -->
      </form>
    </div>
  </div>
</template>

<style>
  *{
    text-align: left;
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
</style>
