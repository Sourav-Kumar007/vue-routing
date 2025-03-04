import { createRouter , createWebHistory} from "vue-router"; 
import HomeView  from "../assets/HomeView.vue"
import AboutView from "../assets/AboutView.vue"; 
import CarView from "@/assets/CarView.vue";
import ContactView from "@/assets/ContactView.vue";
import NotFoundView from "../assets/404Views.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : "/",
            name : "home",
            component : HomeView
        },
        {
            path: "/about",
            name : "about",
            component : AboutView
        },
        {
            path: "/cars/:id",
            name : "car",
            component : CarView ,
            children:[
                {
                    path: "contact",
                    component : ContactView
                }
            ]
        },
        {
            path : "/:catchall(.*)*",
            name : "Not Found",
            component : NotFoundView
        }
    ]
});

export default router;
