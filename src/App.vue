<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/template">기초 문법</RouterLink>
        <RouterLink to="/reactivity">상태변화</RouterLink>
        <RouterLink to="/computed">계산된 속성</RouterLink>
        <RouterLink to="/binding">클래스와 스타일 바인딩</RouterLink>
        <RouterLink to="/conditional">조건부 렌더링</RouterLink>
        <RouterLink to="/list">리스트 렌더링</RouterLink>
        <RouterLink to="/event">이벤트 핸들링</RouterLink>
        <RouterLink to="/form">폼 입력 바인딩</RouterLink>
        <RouterLink to="/life">생명주기</RouterLink>
        <RouterLink to="/watchers">감시자</RouterLink>
        <RouterLink to="/refs">템플릿 참조</RouterLink>
        <RouterLink to="/comp">컴포넌트</RouterLink>
      </nav>
      <HelloWorld msg="let's study" msg2=" Vue.js"/>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  margin: 2rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
