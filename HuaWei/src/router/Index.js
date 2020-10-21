import Vue from "vue";

import Router from "vue-router";

import PhoneLogin from "../components/PhoneLogin";
import PasswordLogin from "../components/PasswordLogin";
import Statement from "../components/Statement";

Vue.use(Router);

let routes = 
    [
        { 
            path: '/components/PhoneLogin', 
            component:PhoneLogin
            },
        { 
            path: '/components/PasswordLogin',
             component: PasswordLogin 
            }, 
        {
            path: '/components/Statement',
             component: Statement 
            },
        {
            path:'*',
            redirect:'/components/PhoneLogin'
            },

];


let router = new Router({
    routes
});

export default router;