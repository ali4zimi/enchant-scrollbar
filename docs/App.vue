<template>
  <div id="main" class="w-full h-screen fixed enchant-wrapper">
    <div class="w-full h-full enchant-content">

      <Navbar />

      <div class="w-full md:w-8/12 h-fit mx-auto flex">
        <Sidebar />

        <Content />
      </div>
      <Footer />
    </div>

  </div>
</template>

<script setup>
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue';


</script>