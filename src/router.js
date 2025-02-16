import { createRouter, createWebHistory } from 'vue-router';
import studentregistration_component from './components/studentregistration_component.vue';
import updatestudent_component from './components/updatestudent_component.vue';
import bookregistration_component from './components/bookregistration_component.vue';

const routes = [
  {
    path: '/studentregistration_component',
    name: 'studentregistration_component',
    component: studentregistration_component,
  },
  {
    path: '/updatestudent_component',
    name: 'updatestudent_component',
    component: updatestudent_component,
  },
  {
    path: '/bookregistration_component',
    name: 'bookregistration_component',
    component: bookregistration_component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;