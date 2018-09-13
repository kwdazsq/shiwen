<template>
    <div id="app">
        <Aside/>
        <Headers/>
        <router-view/>
    </div>
</template>
<script>
import Aside from "./components/HomePage/Aside"
import Headers from "./components/HomePage/Headers"
export default {
    name: 'App',
    components: {
        Aside,
        Headers,
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

a, abbr, acronym, address, applet, bdi, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, iframe, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
    border: 0;
    margin: 0;
    font-style: inherit;
    font-weight: inherit;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    color: #555;
    font-size: 14px;
    font-family: "Lucida Grande", "Microsoft YaHei", sans-serif;
}
</style>