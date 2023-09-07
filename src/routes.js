
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
const routes = [
    {
        type: "collapse",
        name: "Home",
        key: "home",
        icon: <i class="bi bi-icon_name"></i>,
        route: "/",
        component: <Home />,
    },

    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <i class="bi bi-icon_name"></i>,
        route: "/dashboard",
        component: <Dashboard />,
    }
];

export default routes;