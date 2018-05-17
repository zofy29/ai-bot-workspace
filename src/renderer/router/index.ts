import Vue from 'vue';
import VueRouter from 'vue-router';
import Competition from '../views/Competition.vue';
import Portal from '../views/Portal.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'portal',
      component: Portal,
    },
    {
      path: '/competition/:id',
      name: 'competition',
      component: Competition,
    },
  ],
});
