import React from "react";
import Card from "./card.jsx";
import Jumb from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

const Home = () => {
    return ( <>
        <Navbar/>
        <div className="container">
    <Jumb/>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-3 ">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
    <Footer/>
    </>
    )
};

export default Home;