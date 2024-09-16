<template>
    <div class="w-full md:w-8/12 px-6 py-[100px]">
        <h1 id="introduction">Introduction</h1>
        <p>
            Enchant-scrollbar is a lightweight plugin designed to create and customize scrollbars for your web
            applications. The motivation behind this library is to address inconsistencies in scrollbar behavior across
            different platforms, operating systems, and browsers. For example, on Windows, scrollbars decrease the
            browser window’s size when they appear, while on macOS, scrollbars are hidden by default and only appear
            during scrolling, without being draggable. With Enchant-scrollbar, you can add a cross-platform scrollbar
            design that is consistent and personalized to match your application's look and feel.
        </p>


        <h1 id="installation">Installation</h1>

        <p>
            To get started with Enchant-scrollbar, you can install it using NPM or include it directly from a CDN.
        </p>

        <div class="code-block" lang="bash">
            <code>npm install enchant-scrollbar</code>
        </div>

        <h1 id="usage">Usage</h1>

        <p>
            To use Enchant-scrollbar, you first need to define the HTML structure for your scrollable content.
        </p>
        <div class="code-block" lang="html">
            <code>
                &lt;div id="enchant-wrapper" style="position: fixed; height: 100%; width: 100%;"&gt; <br>
                &nbsp;&nbsp;&lt;div id="enchant-content" style="position: absolute; height: 100%; width: 100%;"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Your content here&lt;/h1&gt; <br>
                &nbsp;&nbsp;&lt;/div&gt; <br>
                &lt;/div&gt;
            </code>
        </div>

        <p>
            After setting up your markup, import the Enchant-scrollbar library and create a new instance:
        </p>

        <div class="code-block" lang="javascript">
            <code>
                import EnchantScrollbar from 'enchant-scrollbar'; <br>
                const enchantWrapper = document.querySelectorAll(".enchant-wrapper"); <br>
                const enchantScrollbar = new EnchantScrollbar(enchantWrapper);
            </code>
        </div>

        <h2 class="text-2xl font-bold text-slate-600">Result</h2>
        <div id="enchant-wrapper2" class="border border-gray-300 p-2" style="height: 400px; width: 100%;">
            <div class="enchant-content text-3xl w-full h-full">
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
                <h1>Scroll me</h1>
            </div>
        </div>

        <h1 class="text-2xl font-bold text-slate-600" id="presets">Presets</h1>
        <p>
            Enchant-scrollbar includes several presets that you can use out of the box. These presets are like themes
            that you can import and apply:
        </p>

        <div class="code-block" lang="javascript">
            <code>
                import EnchantScrollbar from 'enchant-scrollbar'; <br>
                import { preset_1 } from 'enchant-scrollbar/presets'; <br>
                const enchantScrollbar = new EnchantScrollbar('#custom-scrollbar', preset_1);
            </code>
        </div>

        <h1 id="configuration">Configuration</h1>
        <p>
            Enchant-scrollbar provides a wide range of configuration options to customize the appearance and behavior
            of your scrollbars. You can adjust the scrollbar's width, height, color, and position, as well as enable or
            disable specific features like auto-hide and smooth scrolling. Here's an example of how you can configure
            your scrollbar:
        </p>
        <div class="code-block" lang="javascript">
            <code>
                    const enchantScrollbar = new EnchantScrollbar('#custom-scrollbar', { <br>
                    &nbsp;&nbsp;width: '10px', <br>
                    &nbsp;&nbsp;opacity: "1", <br>
                    &nbsp;&nbsp;showArrows: true, <br>
                    });
                </code>
        </div>

        <h1 id="contributing">Contributing</h1>
        <p>
            I welcome contributions from the community to help improve Enchant-scrollbar and make it even better. If
            you have any ideas, suggestions, or bug reports, please feel free to open an issue or submit a pull request
            on GitHub. I appreciate your feedback and support!
        </p>

        <h1 id="license">License</h1>
        <p>
            Enchant-scrollbar is licensed under the MIT License, which means you are free to use, modify, and
            distribute the library for personal or commercial projects. If you have any questions about the
            license or usage of Enchant-scrollbar, please feel free to contact us.

        </p>
    </div>
</template>

<style>
pre {
    @apply p-4 rounded-lg my-4 overflow-clip;
    font-size: 0.9rem;
}
</style>

<script setup>
import { onMounted } from 'vue';
import { codeToHtml } from 'shiki'


onMounted(async () => {
    const codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(async (codeBlock) => {
        const html = await codeToHtml(codeBlock.innerText, {
            lang: codeBlock.getAttribute('lang'),
            theme: 'nord'
        })

        codeBlock.innerHTML = html;
    })
})


</script>