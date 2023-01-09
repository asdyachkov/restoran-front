<template>
  <body>

    <div class="first-screen">
      <header class="container">
        <div class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li class="nav-item"><router-link to="/" exact class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/menu" class="nav-link">Menu</router-link></li>
            <li class="nav-item"><router-link to="/rent_a_table" class="nav-link">Rent a table</router-link></li>
          </ul>
        </div>
      </header>

      <section class="first-section">
        <slot name="first-section"></slot>
      </section>
    </div>


    <main>
      <section class="content">
        <slot name="content"></slot>
      </section>
    </main>


    <footer>
      <div class="container">
        <div class="border-top">
          <p class="text-center">Copyright by Stepan Diachkov 211-321</p>
        </div>
      </div>
    </footer>
  </body>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "MyDefault",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style src="@/assets/css/MyDefault.css">

</style>