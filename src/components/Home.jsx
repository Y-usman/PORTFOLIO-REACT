import React from "react";
import "./home.css";
import Contact from "./Contact";
import About from "./About";
import ScrollDown from "./ScrollDown";

export const Home = () => {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Contact />
                        
                        <div className="home__img"></div>
                        
                        <About />
                    </div>

                    <ScrollDown />
                </div>
            </section>
        </>
    )
}

export default Home;