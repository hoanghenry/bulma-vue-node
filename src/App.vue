<template>
  <div id="app">
    <div class="hero is-dark ">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <router-link to='/' class="navbar-item">
              <img src="https://placehold.it/128x48" alt="MyLogo">
            </router-link>
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <router-link to='/' class="navbar-item">Home</router-link>
              <span class="navbar-item">
                <router-link to='/login' class="button is-info">Login</router-link>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>