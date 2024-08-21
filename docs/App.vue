<template>
  <div class="">

    <Navbar />


    <!-- <div class="w-8/12 mx-auto bg-gray-100 flex">
      <Sidebar />

      <Content />
    </div> -->


    <div class="flex">
      <div id="custom-scrollbar" class="enchant-scrollbar"
        style="height: 400px; width: 600px; background-color: rgb(201, 201, 201);">
        <div class="scrollable-content text-3xl">
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <div style="height: 10px; width: 800px;;"></div>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
          <h1>This is a sample content</h1>
        </div>
      </div>
  
      <div style="height: 400px; width: 600px; background-color: rgb(201, 201, 201); margin-left: 20px; position: relative;">
        <div class="wrapper2">
          <div class="arrow-up"></div>
          <div class="track2 relative bg-slate-300">
            <div class="thumb2">

            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style>


.wrapper2 {
  @apply absolute w-[10px] h-full bg-slate-50 right-0
}

.thumb2 {
  @apply absolute bg-red-200 w-full h-3
}

.arrow-up {
  @apply absolute bg-blue-400 w-full h-5
}
</style>

<script setup>
import Content from './components/Content.vue';
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue';


</script>