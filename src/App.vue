<template>
  <div id="app">
    <Header/>
    
    <div class="container is-fluid">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Vue and Bulma</strong>!
      </p>
    </div>

    <Footer/>
  </div>
</template>
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
<script>


 import Header from './components/Header.vue'
 import Footer from './components/Footer.vue'

export default {
  name: 'app',
   components: {
     Header,
     Footer
   }
}
</script>