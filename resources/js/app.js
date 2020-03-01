
require('./bootstrap');

window.Vue = require('vue');

Vue.config.devtools = true;
Vue.config.performance = true;

import App from './components/App';

const app = new Vue({
    el:'#app',
    components: {
        App
    },
    render: h => h(App)
});
