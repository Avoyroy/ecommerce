import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Navitem from "./Navitem";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Home } from "./Home";
const baseUrl = 'https://fakestoreapi.com/products';
const App = () => {
    const [data, setData] = useState([]);
    React.useEffect(() => {
        axios(baseUrl).then(response => {

            setData(response.data)
        });
    }, []);
    // let man = [];
    //if (!data) return null;
    return (<>
        <Navitem />
        {/* {data.map(e => console.log(e))}; */}
        {/* 
            imageTitle={e.title}
            disc={e.description}
            itemPrice={e.itemPrice} />//*/}
        {/* data.map(e=>e.price)//value => < Home item={value} /> */}

        {data?.length > 0 ? data?.map((e) => (<Home listData={e} />)) : null}
        {/* <BrowserRouter>
            <Routes>
                {/* <Route Path='/' element={<Home />} /> *
            </Routes>
        </BrowserRouter> */}
    </>
    )
}
export default App;