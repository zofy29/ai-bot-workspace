<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card>
      <v-card-title class="headline">AI Bot Workspace</v-card-title>
      <v-card-text>
        <h2>Version information</h2>

        <b>AI Bot Workspace version:</b> 1.0.0
        <br>

        <b>Match Wrapper version:</b> 1.0.0
        <br>

        <div v-for="competition in competitions" :key="competition.id">
          <b>{{ competition.name }} engine version:</b> Not yet installed
          <br>
        </div>

        <br>

        <h2>Credits</h2>

        <b>AI Bot Workspace</b>
        <br>
        <a @click="openExternal('https://github.com/jmerle')">Jasper van Merle</a>
        <br>

        <b>The match wrapper, game engines, match viewers and most images</b>
        <br>
        Made by the awesome people at <a @click="openExternal('https://www.riddles.io/')">Riddles.io</a>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn color="primary" flat @click.stop="visible = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { shell } from 'electron';
import { mapState } from 'vuex';

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState({
      competitions: state => state.competitions.all,
    }),
    visible: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.$emit('close');
        }
      },
    },
  },
  methods: {
    openExternal(link) {
      shell.openExternal(link);
    },
  },
};
</script>
