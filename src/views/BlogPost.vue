<script>
  export default {
    props: ['title'],//부모가 던져준값을 받는 문법,
    emits: ['enlarge-text','smaller-text']
  }
</script>

<template>
  <h4>{{ title }}</h4>
  <button type="button" @click="$emit('enlarge-text')">텍스트 확대</button>
  <button type="button" @click="$emit('smaller-text')">텍스트 축소</button>
</template>