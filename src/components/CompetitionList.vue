<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="competition in competitions" :key="competition.id" xs12 sm6 md3 xl2>
        <competition-item :competition="competition"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import CompetitionItem from './CompetitionItem.vue';

export default {
  components: {
    CompetitionItem,
  },
  computed: {
    ...mapState({
      competitions: state => state.competitions.all,
    }),
  },
};
</script>
