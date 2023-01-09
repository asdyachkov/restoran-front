<template>
  <body>

    <header class="container">
      <div class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item"><a href="/" class="nav-link {% block main %}{% endblock %}">Home</a></li>
          <li class="nav-item"><a href="/menu" class="nav-link {% block menu %}{% endblock %}">Menu</a></li>
          <li class="nav-item"><a href="/rent_a_table" class="nav-link {% block rent_a_table %}{% endblock %}">Rent a table</a></li>
        </ul>
      </div>
    </header>


    <main>
      <section class="content">
        <slot/>
      </section>
    </main>


    <footer class="container">
      <div class="border-top">
        <p class="text-center">Copyright by Stepan Diachkov</p>
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