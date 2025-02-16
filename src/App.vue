<template>
  <div id="app">
    <nav>
      <router-link to="/studentregistration_comonent">Student</router-link>
      <router-link to="/updatestudent_component">Update</router-link>
      <router-link to="/bookregistration_component">Book</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>