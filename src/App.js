import React from "react";
import NavBar from './Navbar';
import Header from "./Header";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import Forms from "./Form";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Portfolio />
            <AboutSection />
            <Forms />
            <Footer />
        </div>
    )
}

export default App;
