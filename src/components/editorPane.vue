<template>
    <div class="editor-pane">
        <h1 class="title">This uses a getter</h1>
        <h2 class="subtitle">Adds * and retrieves url from store</h2>
        <p>{{ asteriskUrl }}</p>
        <img src="http://www.animalfactguide.com/wp-content/uploads/2013/01/grizzly1.jpg" alt="a bear">
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'asteriskUrl'
        ])
    }
}
</script>

<style>
</style>
