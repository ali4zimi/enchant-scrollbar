<template>
  <div id="main" class="w-full h-screen fixed enchant-wrapper dark:bg-gray-800">
    <div class="w-full h-full enchant-content">

      <div class="w-full h-[80px] fixed top-0 flex items-center shadow-md z-10 bg-slate-200 dark:bg-gray-900">
        <div class="w-full md:w-8/12 px-6 mx-auto flex">
          <div class="flex gap-2 ">
            <div class="burger-menu content-center justify-center md:hidden" @click="toggleSidebar">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                <path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
              </svg>
            </div>
            <img src="/new5.svg" alt="logo" class="h-10" />
            <a class="text-xl font-semibold self-center ">Enchant Scrollbar</a>
          </div>

          <div class="ml-auto flex items-center">
            <div class="flex gap-2">
              <div class="github-link">
                <a href="https://github.com/ali4zimi/enchant-scrollbar" class="text-lg font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                    <path
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                  </svg>
                </a>
              </div>
              <div class="w-[1px] h-10px bg-slate-500 dark:bg-slate-500"></div>
              <div class="theme-switcher" id="theme-switcher" @click="switchTheme">
                <div class="circle p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-if="!isDark">
                    <path fill="#888888"
                      d="M11 5V1h2v4zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425zM19 13v-2h4v2zm-8 10v-4h2v4zM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75zM1 13v-2h4v2zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-4" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-else>
                    <path fill="#888888"
                      d="M14 22q-2.075 0-3.9-.788t-3.175-2.137T4.788 15.9T4 12t.788-3.9t2.137-3.175T10.1 2.788T14 2q.875 0 1.75.175t1.675.525q.3.125.45.387t.15.538q0 .225-.088.425t-.287.35q-1.75 1.375-2.7 3.375T14 12q0 2.25.925 4.25t2.7 3.35q.2.15.288.363T18 20.4q0 .275-.15.538t-.45.387q-.8.35-1.662.513T14 22m0-2h.525q.25 0 .475-.05q-1.425-1.65-2.212-3.687T12 12t.788-4.262T15 4.05Q14.775 4 14.525 4H14q-3.325 0-5.663 2.338T6 12t2.338 5.663T14 20m-2-8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-8/12 h-fit mx-auto flex ">
        <div id="sidebar" class="">
          <ul class="mt-8">
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#installation">Installation</a>
            </li>
            <li>
              <a href="#usage">Usage</a>
            </li>

            <li>
              <a href="#presets">Presets</a>
            </li>
            <li>
              <a href="#configuration">Configuration</a>
            </li>
            <li>
              <a href="#contributing">Contributing</a>
            </li>
            <li>
              <a href="#license">License</a>
            </li>
          </ul>
        </div>

        <Content />
      </div>

      <footer class="w-full py-4  border-t shadow-md bg-slate-200 dark:bg-gray-900 dark:text-slate-500 dark:border-slate-700">
        <div class="w-8/12 mx-auto text-center md:flex md:justify-between">
          <div>
            &copy; {{ currentYear }} Enchant-Scrollbar. All rights reserved.
          </div>

          <div class="flex justify-center my-2 md:my-0">
            <a href="https://github.com/ali4zimi/enchant-scrollbar">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<style>
.theme-switcher {
  position: relative;
  width: 35px;
  height: 23px;
  background-color: #4B5563;
  border-radius: 15px;
  cursor: pointer;
}

.circle {
  position: absolute;
  width: 19px;
  height: 19px;
  background-color: white;
  border-radius: 50%;
  margin: 2px;
  left: 0px;
  transition: 0.3s;
}

svg {
  fill: #4B5563;
}

#sidebar {
  @apply w-[300px] md:w-4/12 h-screen px-6 pt-[100px] left-[-300px] fixed top-0 md:sticky border-r bg-white dark:bg-gray-800 border-slate-200 dark:border-slate-700;
  transition: left 0.3s;
}

#sidebar ul {
  @apply list-none;
}

#sidebar li {
  @apply mb-2;
}

a {
  @apply text-slate-600 dark:text-slate-300;
  font-size: 18px;
}

a:hover {
  @apply text-slate-800 dark:text-white font-semibold
}

a.active {
  @apply text-slate-800 dark:text-white font-semibold
}
</style>

<script setup>
import Content from './components/Content.vue';


import { ref, onMounted } from 'vue';

const isDark = ref(false);
const sidebarOpen = ref(false);
const currentYear = new Date().getFullYear();

const switchTheme = () => {
  isDark.value = !isDark.value;
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  document.body.classList.toggle('dark');

  const circle = document.querySelector('.circle');
  if (isDark.value) {
    circle.style.left = '12px';
  } else {
    circle.style.left = '0px';
  }

}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
  const sidebar = document.querySelector('#sidebar');
  if (sidebarOpen.value) {
    sidebar.style.left = '0px';
  } else {
    sidebar.style.left = '-300px';
  }
}

onMounted(() => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    switchTheme();
  }  


  document.querySelectorAll('#sidebar a').forEach((link) => {
    link.addEventListener('click', () => {
      toggleSidebar();
    });
  });
})
</script>