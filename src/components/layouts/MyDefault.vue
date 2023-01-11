<template>
  <body>

    <div class="no_footer">
      <div class="first-screen">
        <header class="container">
          <div class="d-flex flex-wrap align-items-center py-3 mb-4 border-bottom">
            <ul class="nav">
              <li class="nav-item"><router-link to="/" exact class="nav-link">Home</router-link></li>
              <li class="nav-item"><router-link to="/menu" class="nav-link">Menu</router-link></li>
              <li class="nav-item"><router-link to="/rent_a_table" class="nav-link">Rent a table</router-link></li>
            </ul>

            <div style="margin-left: auto; display: flex; align-items: center; justify-content: center">

              <form role="search">
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
              </form>
              <button type="button" class="btn btn-warning m-2" v-if="!logged_in">Login</button>
              <button type="button" class="btn btn-warning m-2" v-if="!logged_in">Sign-up</button>
              <button type="button" class="btn m-2" v-if="logged_in"><router-link to="#"><img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"></router-link></button>
              <button type="button" class="btn btn-warning m-2" v-if="logged_in">Logout</button>

            </div>
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
    </div>






    <v-footer border style="background: none; color: white">
      <div class="container">
        <p class="text-center">Copyright by Stepan Diachkov 211-321</p>
      </div>
    </v-footer>
  </body>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "MyDefault",
  data() {
    return {
      logged_in: true
    }
  },
  methods: {

  }
}
</script>

<style>
@import "@/assets/css/MyDefault.css";
</style>