<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 14px;
}

@media all and (max-width: 768px) {
  html {
    font-size: 12px;
  }
}

body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  margin-bottom: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
