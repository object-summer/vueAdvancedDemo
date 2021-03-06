//引入一堆
import Vue from 'vue';
import VueRouter from 'vue-router';

//主体
import App from './components/app.vue';
//路由切换页面
import header from './components/header.vue'
import footer from './components/footer.vue'



//注册全局头组件
// Vue.component('headerVue', header);
// Vue.component('footerVue', footer);
//注册全局底部组件

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
let router = new VueRouter({
    //routes
    routes: [{
            path: '/',
            components: {
                header: footer,
                default: header,
                footer: footer
            }
        }

    ]
});






//new Vue 启动
new Vue({
    el: '#app',
    //让vue知道我们的路由规则
    router, //可以简写router
    render: c => c(App),
})