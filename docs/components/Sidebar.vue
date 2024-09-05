<template>
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
                <a href="#configuration">Configuration</a>
            </li>
            <li>
                <a href="#api">API Reference</a>
            </li>
            <li>
                <a href="#events">Events</a>
            </li>
            <li>
                <a href="#contributing">Contributing</a>
            </li>
            <li>
                <a href="#license">License</a>
            </li>
        </ul>
    </div>
</template>


<style>
#sidebar {
    @apply w-[300px] md:w-4/12 h-screen px-6 pt-[100px] left-[-300px] fixed top-0 md:sticky border-r;
    transition: left 0.3s;
}

#sidebar ul {
    @apply list-none;
}

#sidebar li {
    @apply mb-2;
}

a {
    @apply text-slate-600;
    font-size: 18px;
}

a:hover {
    @apply text-slate-800 font-semibold
}

a.active {
    @apply text-slate-800 font-semibold
}
</style>

<script setup>
import { ref } from 'vue';

const activeLink = ref(null);



</script>