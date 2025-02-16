<template>
  <div id="app">
    <nav>
      <router-link to="/studentregistration">Student Registration</router-link>
      <router-link to="/updatestudent">Update Student</router-link>
      <router-link to="/bookregistration">Book Registration</router-link>
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