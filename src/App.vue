<template>
  <div id="app">
    <div class="page-container">
      <h1>Список дел</h1>
      <hr>
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  font: 15px/1.4 "Poppins", sans-serif;
  color: #333;
}

.page-container {
  max-width: 480px;
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
}

#app {
  padding: 60px 0;
}

h1 {
  text-align: center;
  margin: 0 0 20px;
}
</style>
