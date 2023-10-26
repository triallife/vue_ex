<script>
import ButtonCounter from './ButtonCounter.vue';
import BlogPost from './BlogPost.vue';
import HomeView from './tabs/HomeView.vue';
import ArchiveView from './tabs/ArchiveView.vue';
import PostView from './tabs/PostView.vue';

export default {
  components: {
    ButtonCounter,
    BlogPost,
    HomeView,
    ArchiveView,
    PostView
  },
  data() {
    return {
      posts: [
        { id: 1, title: '제목1' },
        { id: 2, title: '제목2' },
        { id: 3, title: '제목3' },
      ],
      postFontSize: 1,
      currentTab: 'HomeView',
      tabs:['HomeView','PostView','ArchiveView']
    }
  }
  // 옵션방식에서는 이렇게 꼭 따로 컴포넌트를 등록해줘야한다
} 
//컴포지션방식을 사용하면 등록을 하지 않아도된다

// CompView->BlogPost.Vue로 값 전달
// @속성명 에 담을수있는것 = 무조건 함수
// :속성명 에 담을수있는것 = 숫자,문자,불리언,배열,객체 즉 함수 제외 모든것
  
</script>

<template>
  <div class="layout">
    <h4>컴포넌트 정의하기</h4>
    <div>
      <ButtonCounter/>
      <ButtonCounter/>
      <ButtonCounter/>
      <ButtonCounter/>
    </div>
    <h4>Props 전달하기</h4>
    <div>
      <h4>블로그</h4>
      <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost 
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          @enlarge-text="postFontSize += 0.1"
          @smaller-text="postFontSize -= 0.1"
        />
      </div>
    </div>
    <h4>동적 컴포넌트</h4>
    <div>
      <h4>Tab</h4>
      <div>
        <button
          type="button"
          :key="tab"
          v-for="tab in tabs"
          :class="['tab-button',{active: currentTab === tab}]"
          @click="currentTab = tab"
        >
        {{ tab }}
        </button>
        <component :is="currentTab" class="tab"></component>
      </div>
    </div>
  </div>
</template>

<style>
.tab{
  margin-left: 10px;
}
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
