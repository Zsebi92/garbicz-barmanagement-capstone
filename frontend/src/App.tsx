import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter, Route, Routes} from "react-router-dom";

import AdminOverview from "./pages/AdminOverview";
import Inventory from "./pages/Inventory";
import BarManagement from "./pages/BarManangement";
import OrderManagement from "./pages/OrderManagement";
import StaffManagement from "./pages/StaffManagement";
import BarDetailsPage from "./pages/BarDetailsPage";
import UseBar from "./hooks/UseBar";
import UseListing from "./hooks/UseListing";



function App() {

    const {bar, bars, addBar, updateBar, deleteBar} = UseBar();
    const {listing, listings, addListing} = UseListing();

    return (
        <div className="App">
            <ToastContainer position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick
                            rtl={false}
                            draggable
                            theme="dark"/>
            <header className="App-header">

                <HashRouter>
                    <Routes>
                        <Route path={"/"} element={<AdminOverview/>}/>
                        <Route path={"/inventory"} element={<Inventory/>}/>
                        <Route path={"/bar-management"} element={<BarManagement/>}/>
                        <Route path={"/order-management"} element={<OrderManagement/>}/>
                        <Route path={"/staff-management"} element={<StaffManagement/>}/>
                        <Route path={"/bars/:id"}
                               element={<BarDetailsPage
                                   updateBar={updateBar}
                                   deleteBar={deleteBar}/>}/>
                    </Routes>
                </HashRouter>


            </header>


        </div>
    );
}

export default App;

