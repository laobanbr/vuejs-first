<template lang="html">
    <div class="terminal-pane">
        <h1 class="title">Copy and paste video link.</h1>
        <input type="text" class="input is-primary" placeholder="Page" v-model="urlInput"></input>
        <button class="button is-primary" v-on:click="changeUrl" role="button">Ok</button>
        <br>
        <h4>Some links just to test</h4>
        <p>https://www.youtube.com/watch?v=1QJLTp8587o</p>
        <p>https://www.youtube.com/watch?v=DtKCNJmARF0</p>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            urlInput: ''
        }
    },
    methods: {
        changeUrl: function(){
            if(this.urlInput != '')
                this.$store.dispatch('changeUrl', this.urlInput);
            else
                this.$store.dispatch('changeUrl', 'https://www.youtube.com/embed/DtKCNJmARF0');
        }
    }

}
</script>

<style>
</style>
