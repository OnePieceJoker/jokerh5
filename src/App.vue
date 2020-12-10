<template>
  <a-layout>
    <a-layout-header style="background: #fff;">
      <div class="logo">
        <img src="./assets/logo.png" />
      </div>
    </a-layout-header>
  </a-layout>
  <router-view/>
</template>

<style>
html,body,#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.logo {
  width: 160px;
  height: 80%;
  background: rgba(255, 255, 255, 0.2);
  float: left;
}
.logo img {
  width: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
