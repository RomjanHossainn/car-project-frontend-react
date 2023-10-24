import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ServiceDetails from "./components/Service/ServiceDetails";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";




const router  = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/details/:id',
                element : <ServiceDetails></ServiceDetails>,
                loader : () => fetch('/services.json')
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
            
        ]
    }
])

export default router;