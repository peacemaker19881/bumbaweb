import { createRouter, createWebHistory } from 'vue-router';
import studentregistration from './components/studentregistration.vue';
import updatestudent from './components/updatestudent.vue';
import bookregistration from './components/bookregistration.vue';

const routes = [
  {
    path: '/studentregistration',
    name: 'studentregistration',
    component: studentregistration,
  },
  {
    path: '/updatestudent',
    name: 'updatestudent',
    component: updatestudent,
  },
  {
    path: '/bookregistration',
    name: 'bookregistration',
    component: bookregistration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;