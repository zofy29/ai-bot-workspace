<template>
  <v-card class="elevation-5 portal-card">
    <v-toolbar card dark color="primary">
      <v-text-field solo light hide-details single-line label="Search competitions..."/>
      <v-btn icon @click.native.stop="showInfo = true">
        <v-icon>info</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text class="competition-container">
      <competition-list/>
    </v-card-text>

    <information-dialog :show="showInfo" @close="showInfo = false"/>
  </v-card>
</template>

<script>
import InformationDialog from '../../components/InformationDialog.vue';
import CompetitionList from '../../components/CompetitionList.vue';

export default {
  components: {
    InformationDialog,
    CompetitionList,
  },
  data() {
    return {
      showInfo: false,
    };
  },
};
</script>

<style>
.portal-card .toolbar, .portal-card .toolbar__content {
  height: 64px !important;
}

.portal-card .competition-container {
  padding: 0;
  height: calc(100% - 64px);
  overflow-y: auto;
}
</style>
