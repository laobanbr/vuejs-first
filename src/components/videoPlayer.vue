<template>
    <div class="video-player">
        <iframe width="640" height="360" v-bind:src="url" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    computed: {
        url(){
            return this.$store.state.videoUrl
        }
    }
}
</script>

<style lang="css">

</style>
