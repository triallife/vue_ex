<script setup>
  defineProps({
    msg: {
      type: String,
      required: true
    },
    msg2: {
      type: String,
      required: true
    }
  })

</script>

<template>
  <h4>learn vue</h4>
  <div>
    <h1 class="green">{{ msg }}{{ msg2 }}</h1>
  </div>
</template>

<style scoped>
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
