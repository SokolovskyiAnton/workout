<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Дневник</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact active-class="active">Создать</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list" active-class="active">Список</router-link>
        </li>
      </ul>  
    </div>
  </nav>
</template>

<style scoped>
</style>