import { createRouter, createWebHistory } from 'vue-router'

// En Vue es importante añadir la extensión .vue a las importaciones
import Layout from './components/Layout.vue'
import Home from './Pages/Home.vue'
import Empresa from './Pages/Empresa.vue'
import CanviClimatic from './Pages/CanviClimatic.vue'
import ASG from './Pages/ASG.vue'
import Contact from './Pages/Contact.vue'

export const router = createRouter({
  // Equivalente a createBrowserRouter (usa el historial limpio de HTML5)
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        // En Vue, una ruta hija con path vacío ('') equivale al "index: true" de React
        { path: '', component: Home },
        { path: 'empresa', component: Empresa },
        { path: 'canvi-climatic', component: CanviClimatic },
        { path: 'asg', component: ASG },
        { path: 'contact', component: Contact },
      ],
    },
  ],
})