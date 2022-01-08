import React from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Header from "./components/Header/Header";

const App = () => {
    return ( 
        <React.Fragment>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Homepage />} />
                    {/* <Route path="/not-found" component={NotFound} /> */}
                </Routes>
        </BrowserRouter>
      </React.Fragment>
     );
}
 

export default App;
