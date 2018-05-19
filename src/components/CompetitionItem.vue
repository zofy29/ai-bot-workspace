<template>
  <v-card class="elevation-2">
    <v-card-media>
      <img
        :src="'data:image/png;base64,' + getCompetitionThumbnailBase64(competition.id)"
        class="competition-thumbnail">
    </v-card-media>
    <v-card-title>
      <div>
        <h3 class="headline mb-0">{{ competition.name }}</h3>
        <div>{{ competition.description }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="primary">
        Open
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    competition: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('competitions', [
      'getCompetitionThumbnailBase64',
    ]),
  },
};
</script>

<style scoped>
.competition-thumbnail {
  height: 100%;
}
</style>
