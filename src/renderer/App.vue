<template>
  <div>
    <h1>
      {{ message }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  message: string = 'Hello world!';
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
