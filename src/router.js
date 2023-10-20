import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from './views/WelcomePage.vue'
import CharactersPage from './views/CharactersPage.vue'
import CharacterDetailPage from './views/CharacterDetailPage.vue'
import ComicsPage from './views/ComicsPage.vue'
import EventsPage from './views/EventsPage.vue'
import ContactPage from './views/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: WelcomePage },
  {
    path: '/characters',
    name: 'Characters',
    component: CharactersPage,
    children: [
      {
        path: ':id',
        name: 'CharacterDetails',
        component: CharacterDetailPage,
      },
    ],
  },
  /*{ path: '/characters/:id', name:'Rota' ,component: CharacterDetailPage },*/
  { path: '/comics', name: 'Comics', component: ComicsPage },
  { path: '/events', name: 'Events', component: EventsPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach((to, from, next) => {
    if (to.name === 'CharacterDetail') {
      // Recuperar o nome do personagem com base no ID e atualizar o nome da rota
      const id = to.params.id;
      // Faça a sua lógica de busca do nome do personagem aqui
      // Suponha que você tem o nome do personagem em uma variável chamada characterName
      to.name = `Character_${id}`;
    }
    next();
  });
  
export default router
