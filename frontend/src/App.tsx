import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter, Route, Routes} from "react-router-dom";

import AdminOverview from "./pages/AdminOverview";
import Inventory from "./pages/Inventory";
import BarManagement from "./pages/BarManangement";
import OrderManagement from "./pages/OrderManagement";
import StaffManagement from "./pages/StaffManagement";



function App() {

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
                    </Routes>
                </HashRouter>


            </header>



        </div>
    );
}

export default App;

