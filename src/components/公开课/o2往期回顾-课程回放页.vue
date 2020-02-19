<template>
<div>
    <course-details>
        <div slot="sideBar" class="hot-group"><TfrHotGroup></TfrHotGroup></div>
    </course-details>
</div>
</template>

<script>
    import courseDetails from "../common/courseDetails";
    import TfrHotGroup from "../托福人/o3托福人childComps/TfrHotGroup";
    export default {
        components: {
            courseDetails,
            TfrHotGroup
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
    .hot-group{
        flex: 1;
    }
</style>
