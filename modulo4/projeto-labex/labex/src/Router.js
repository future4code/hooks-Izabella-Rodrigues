import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ListTripPage } from "./pages/ListTripPage"
import {AplicationFormPage} from "./pages/ApplicationFormPage"
import {LoginPage} from "./pages/LoginPage"
import {AdminHomePage} from "./pages/AdminHomePage"
import {TripDetailsPage} from "./pages/TripDetailsPage"
import {CreateTripPage} from "./pages/CreateTripPage"


function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/ListTripPage" element={<ListTripPage/>}/>
                <Route path="/AplicationFormPage" element={<AplicationFormPage/>}/>
                <Route path="/LoginPage" element={<LoginPage/>}/>
                <Route path="/AdminHomePage" element={<AdminHomePage/>}/>
                <Route path="/TripDetailsPage" element={<TripDetailsPage/>}/>
                <Route path="/CreateTripPage" element={<CreateTripPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default Router;