<script>

export default {
  data() {
    return {
      message: '',
      multiple: '',
      checked: true,
      checkedNames: [],
      picked: '하나',
      selected: '',
      selected2: '',
      options: [
        { text: '하나', value: '1' },
        { text: '둘', value: '2' },
        { text: '셋', value: '3' }
      ],
      toggle: false,
      dynamicTrueValue: '네',
      dynamicFalseValue: '아니오',
      pick: 'pick one!',
      first: '네',
      second: '아니오',
      msg: ''
    }
  }
} 
  
</script>

<template>
  <div class="layout">
    <h4>텍스트 입력</h4>
    <div>
      <h4>인라인 요소에 직접 작성</h4>
      <div>
        <input type="text" :value="message" @input="event=>message=event.target.value">
        <p>message: {{ message }}</p>
        <p>한글일때는 인라인 요소에 직접 작성 문법을 사용하도록 하자</p>
      </div>
      <h4>위 문법을 vue 문법으로 단순화</h4>
      <div>
        <input v-model="message">
        <p>message: {{ message }}</p>
        <p>하지만 한글로 입력할때는 v-model을 사용하면 안된다 위 문법으로 작성해야함</p>
        <p>v-model이 영문만 실시간으로 반영해주기 때문</p>
      </div>
    </div>
    <h4>여러줄 텍스트 (textarea)</h4>
    <div>
      <p style="white-space: pre-line;">메시지: {{ multiple }}</p>
      <textarea v-model="multiple" placeholder="여러 줄을 추가해보세요"></textarea>
    </div>
    <h4>체크박스</h4>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>
    <h4>체크박스 여러개</h4>
    <div>
      <div>체크된 이름: {{ checkedNames }}</div>
      <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
      <label for="jack">젝</label>
      <input type="checkbox" id="john" value="존" v-model="checkedNames">
      <label for="john">존</label>
      <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
      <label for="mike">마이크</label>
    </div>
    <h4>라디오</h4>
    <div>
      <div>선택한 것: {{ picked }}</div>
        <input type="radio" id="one" value="하나" v-model="picked" />
        <label for="one">하나</label>

        <input type="radio" id="two" value="둘" v-model="picked" />
        <label for="two">둘</label>
    </div>
    <h4>셀렉트</h4>
    <div>
      <div>선택됨: {{ selected }}</div>
      <select v-model="selected">
        <option disabled value="">다음 중 하나를 선택하세요</option>
        <option value="a">가</option>
        <option value="b">나</option>
        <option value="c">다</option>
      </select>
    </div>
    <h4>셀렉트(v-for를 사용한 동적 렌더링)</h4>
    <div>
      <div>선택됨: {{ selected2 }}</div>
      <select v-model="selected2">
        <option v-for="option in options" :value="option.value" :key="option">
          {{ option.text }}
        </option>
      </select>
    </div>
    <h4>값 바인딩하기</h4>
    <div>
      <p>라디오, 체크박스 및 셀렉트 옵션의 경우, v-model에 바인딩된 값은 일반적으로 정적 문자열(체크박스의 경우 불리언)입니다:</p>
      <!-- `picked`는 선택 시 문자열 "가"입니다. -->
      <input type="radio" v-model="picked" value="가" />
      <p>{{ picked }}</p>
      <!-- `toggle`은 true 또는 false입니다. -->
      <input type="checkbox" v-model="toggle" />
      <p>{{ toggle }}</p>
      <!-- `selected`는 첫 번째 옵션이 선택될 때 문자열 "한글"입니다. -->
      <select v-model="selected">
        <option value="한글">한글</option>
      </select>
      <hr>
      <input
        type="checkbox"
        v-model="toggle"
        true-value="네"
        false-value="아니오" />
      <p>{{ toggle }}</p>
      <input
        type="checkbox"
        v-model="toggle"
        :true-value="dynamicTrueValue"
        :false-value="dynamicFalseValue" />
      <p>{{ toggle }}</p>
      <input type="radio" v-model="pick" :value="first" name="radio" id="first"/>
      <label for="first">first</label>
      <input type="radio" v-model="pick" :value="second" name="radio" id="second"/>
      <label for="second">second</label>
      <p>{{ pick }}</p>

    </div>
    <h4>수식어</h4>
    <div>
      <h4>lazy</h4>
      <div>
        <!-- "input" 대신 "change" 이벤트 후에 동기화됨 -->
        <!-- 내부적으로 값이변경되면 할일인 change 이벤트가 일어나야 반영하도록 설계되어 있는거임 -->
        <input v-model="msg" />
        <input v-model.lazy="msg" />
        <p>{{ msg }}</p>
      </div>
      <h4>number</h4>
      <div>

      </div>
      <h4>trim</h4>
      <div>

      </div>
    </div>
  </div>
</template>

<style>
  label{
    margin: 0 10px;
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
