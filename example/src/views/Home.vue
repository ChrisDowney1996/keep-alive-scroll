<template>
  <keep-alive-scroll class="home">
    <!-- example-x -->
    <section class="example example-x-y">
      <div class="example-name">scroll x & y</div>
      <keep-alive-scroll tag="ul">
        <li v-for="(item, index) in num" :key="index">
          <router-link :to="{name: 'about'}">
            <p v-for="(item2, index2) in 8" :key="index2">click here <strong>{{item2}}</strong></p>
          </router-link>
        </li>
      </keep-alive-scroll>
    </section>
    <!-- example-x -->
    <section class="example example-x">
      <div class="example-name">scroll x</div>
      <keep-alive-scroll tag="ul">
        <li v-for="(item, index) in num" :key="index">
          <router-link :to="{name: 'about'}">click here <strong>{{item}}</strong></router-link>
        </li>
      </keep-alive-scroll>
    </section>
    <!-- example-y -->
    <section class="example example-y">
      <div class="example-name">scroll y</div>
      <keep-alive-scroll tag="ul">
        <li v-for="(item, index) in num" :key="index">
          <router-link :to="{name: 'about'}">click here <strong>{{item}}</strong></router-link>
        </li>
      </keep-alive-scroll>
    </section>
  </keep-alive-scroll>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      num: 50
    }
  }
}
</script>

<style>
.home{
  height: 100vh;
  overflow: auto;
  padding: 30px 40px;
  box-sizing: border-box;
}
.example:first-child~*{
  margin-top: 50px;
}
.example-name{
  font-size: 26px;
  font-weight: 600;
  padding-left: 16px;
  border-left: 4px solid #43BF88;
  margin-bottom: 20px;
}
.example ul{
  margin: 0;
  padding: 0;
}
.example ul li{
  list-style: none;
  box-sizing: border-box;
}
.example ul li a{
  display: block;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  text-align: center;
}
.example-x-y ul{
  width: 100%;
  height: 160px;
  overflow: auto;
  white-space: nowrap;
}
.example-x-y ul li{
  width: 140px;
  height: 320px;
  border: 1px dashed #eee;
  border-right: none;
  text-align: center;
  padding: 18px 0;
  display: inline-block;
}
.example-x ul{
  width: 100%;
  overflow: auto;
  white-space: nowrap;
}
.example-x ul li{
  width: 140px;
  height: 120px;
  border: 1px dashed #eee;
  border-right: none;
  text-align: center;
  padding: 20px 0;
  display: inline-block;
}
.example-x ul li:last-child{
  border-right: 1px dashed #eee;
}
.example-y ul{
  height: 360px;
  overflow: auto;
}
.example-y ul li{
  border-top: 1px dashed #eee;
  line-height: 40px;
  display: flex;
}
.example-y ul li:last-child{
  border-bottom: 1px dashed #eee;
}
</style>
