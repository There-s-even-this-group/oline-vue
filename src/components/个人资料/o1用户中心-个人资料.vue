<template>
    <div>
        <secondmenu/>
        <router-view/>
    </div>
</template>

<script>
    import secondmenu from "./personComp/secondmenu";
    export default {
        components: {
            secondmenu
        },
        data() {
            return {}
        },
        mounted: function () {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
