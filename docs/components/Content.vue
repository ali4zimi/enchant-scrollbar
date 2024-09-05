<template>
    <div class="w-full md:w-8/12 px-6 py-[100px]">
        <h1  id="introduction">Introduction</h1>
        <p>
            Entchant-scrollbar is a lightweight plugin designed to create and customize scrollbars for your web
            applications. The motivation behind this library is to address inconsistencies in scrollbar behavior across
            different platforms, operating systems, and browsers. For example, on Windows, scrollbars decrease the
            browser window’s size when they appear, while on macOS, scrollbars are hidden by default and only appear
            during scrolling, without being draggable. With Entchant-scrollbar, you can add a cross-platform scrollbar
            design that is consistent and personalized to match your application's look and feel.
        </p>


        <h1  id="installation">Installation</h1>

        <p>
            To get started with Entchant-scrollbar, you can install it using NPM or include it directly from a CDN.
        </p>

        <div class="bg-gray-100 p-4 rounded-md">
            <code>npm install enchant-scrollbar</code>
        </div>

        <h1  id="usage">Usage</h1>
        <p>
            To use Entchant-scrollbar, you first need to define the HTML structure for your scrollable content. Here's a
            simple example:
        </p>

        <div class="bg-gray-100 p-4 rounded-md">
            <code>
                    &lt;div id="custom-scrollbar" class="enchant-scrollbar" style="height: 400px; width: 600px;
                    background-color: rgb(201, 201, 201);"&gt; <br>
                    &lt;div class="scrollable-content text-3xl"&gt; <br>
                    
                    &lt;/div&gt; <br>
                    &lt;/div&gt;
                </code>
        </div>

        <h2 class="text-2xl font-bold text-slate-600" id="customization">Customization</h2>
        <p>
            After setting up your markup, import the Entchant-scrollbar library and create a new instance:
        </p>

        <div class="bg-gray-100 p-4 rounded-md">
            <code>
                    import EnchantScrollbar from 'enchant-scrollbar'; <br>
                    const customScrollbar = new EnchantScrollbar('#custom-scrollbar');
                </code>
        </div>

        <div id="custom-scrollbar" class="enchant-scrollbar2"
            style="height: 400px; width: 100%; background-color: rgb(201, 201, 201);">
            <div class="scrollable-content text-3xl w-full h-full">
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <div class=" bg-red-300" style="height: 10px; width: 800px;;"></div>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
                <h1>This is a sample content</h1>
            </div>
        </div>

        <h1  id="configuration">Configuration</h1>
        <p>
            Entchant-scrollbar provides a wide range of configuration options to customize the appearance and behavior
            of
            your scrollbars. You can adjust the scrollbar's width, height, color, and position, as well as enable or
            disable specific features like auto-hide and smooth scrolling. Here's an example of how you can configure
            your scrollbar:
        </p>

        <h2 class="text-2xl font-bold text-slate-600" id="customization">Customization</h2>
        <div class="bg-gray-100 p-4 rounded-md">
            <code>
                    const customScrollbar = new EnchantScrollbar('#custom-scrollbar', { <br>
                    &nbsp;&nbsp;width: '10px', <br>
                    &nbsp;&nbsp;height: '10px', <br>
                    &nbsp;&nbsp;color: '#333', <br>
                    &nbsp;&nbsp;position: 'right', <br>
                    &nbsp;&nbsp;autoHide: true, <br>
                    &nbsp;&nbsp;smoothScroll: true <br>
                    });
                </code>
        </div>

        <h2 class="text-2xl font-bold text-slate-600" id="presets">Presets</h2>
        <p>
            Entchant-scrollbar includes several presets that you can use out of the box. These presets are like themes
            that you can import and apply:
        </p>

        <div class="bg-gray-100 p-4 rounded-md">
            <code>
                    import EnchantScrollbar from 'enchant-scrollbar'; <br>
                    import 'enchant-scrollbar/dist/presets/dark.css'; <br>
                    const customScrollbar = new EnchantScrollbar('#custom-scrollbar');
                </code>
        </div>

        <h2 class="text-2xl font-bold text-slate-600" id="customization">Customization</h2>
        <p>
            If you want to create a custom scrollbar design, you can use the provided CSS variables to style the
            scrollbar
            elements. Here's an example of how you can customize the scrollbar's appearance:
        </p>

        <h1  id="api">API Reference</h1>
        <p>
            Entchant-scrollbar provides a simple and intuitive API for interacting with your scrollbars. You can use
            methods like <code>scrollTo</code>, <code>scrollBy</code>, and <code>destroy</code> to control the
            scrollbar's position, scroll behavior, and lifecycle. Here's an overview of the available methods:

            Here’s a summary of the available API methods and properties:

            new EntchantScrollbar(element, config): Initializes the scrollbar on the given element with optional
            configuration.
            scrollbar.update(): Updates the scrollbar, useful if the content inside the scrollable container changes
            dynamically.
            scrollbar.destroy(): Destroys the scrollbar instance and reverts to the native scrollbar.
        </p>

        <h1  id="events">Events</h1>
        <p>
            Entchant-scrollbar provides a set of events that you can listen to and respond to in your application. You
            can use events like <code>scroll</code>, <code>scrollStart</code>, and <code>scrollEnd</code> to trigger
            custom actions based on the scrollbar's state. Here's an example of how you can listen to the scroll event:
        </p>

        <h1  id="contributing">Contributing</h1>
        <p>
            We welcome contributions from the community to help improve Entchant-scrollbar and make it even better. If
            you have any ideas, suggestions, or bug reports, please feel free to open an issue or submit a pull request
            on GitHub. We appreciate your feedback and support!
        </p>

        <h1  id="license">License</h1>
        <p>
            Entchant-scrollbar is licensed under the MIT License, which means you are free to use, modify, and
            distribute
            the library for personal or commercial projects. We only ask that you include the original copyright notice
            and license information in your project's documentation or source code. If you have any questions about the
            license or usage of Entchant-scrollbar, please feel free to contact us.

        </p>



    </div>
</template>

<script setup>
import { codeToHtml } from 'shiki'
import Sidebar from './Sidebar.vue'


// select all code blocks
const codeBlocks = document.querySelectorAll('code')

// loop through each code block
codeBlocks.forEach(async (codeBlock) => {
    const code = codeBlock.textContent

    const html = await codeToHtml(code, {
        lang: 'javascript',
        themes: {
            light: 'min-light',
            dark: 'nord',
        }
    })

    // codeBlock.innerHTML = html
})


</script>