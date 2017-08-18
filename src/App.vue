<template>
    <div id="app">
        <div class="videoPlayer"><video-player></video-player></div>
        <div class="editorPane"><editor-pane></editor-pane></div>
        <div class="terminalPane"><terminal-pane></terminal-pane></div>
    </div>
</template>

<script>
import VideoPlayer from './components/videoPlayer.vue';
import EditorPane from './components/editorPane.vue';
import TerminalPane from './components/terminalPane.vue';

export default {
    components: {
        'video-player': VideoPlayer,
        'editor-pane': EditorPane,
        'terminal-pane': TerminalPane
    },
}
</script>

<style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.css');
    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    @import url('./css/code-along.css');
</style>
