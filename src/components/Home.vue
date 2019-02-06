<template>
  <div id='Home'>
    <section class="hero is-light is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
        <p class="title">
          <h1>Home</h1>
        </p>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>

 import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',
    data () {
      return {
        title: 'Home'
      }
    },
    components: {
      Footer
   }
  }
</script>