<template>
  <div class="container">
    <h1 class="text-center">Welcome to My Vue App</h1>
    <button class="btn btn-primary">Click Me!</button>
  </div>
  <img alt="Vue logo" src="./assets/logo.png">

  <h2>yes we can make change</h2>
  <studentregistartion_component></studentregistartion_component>
  <reusablebutton_component buttonClass="custom-button" @click="handleButtonClick">
         Click Here to Start!
  </reusablebutton_component>


</template>

<script>
import reusablebutton_component from './components/reusablebutton_component.vue';
import studentregistartion_component from './components/studentregistartion_component.vue'

export default {
  name: 'App',
  components: {
    studentregistartion_component,
    reusablebutton_component
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
