import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue';
import { useStore } from './stores/store';

import './assets/output.css'

const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

const app = createApp(App);

app.use(pinia);

app.mount('#app');