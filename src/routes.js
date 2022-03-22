import About from "./components/ReactRouter/About";
import Home from "./components/ReactRouter/Home";
import Contact from "./components/ReactRouter/Contact"
import Login from "./components/ReactRouter/Login";

const routes =[
    {
        exact:true,
        path:"/",
        component:Home
    },
    {
        expect:true,
        path:"/About",
        component:About,
    },
    {
        exact:true,
        path:"/Contact",
        component:Contact,
    },
    {
        exact:true,
        path:"/Login",
        component:Login
    }
]

export default routes;