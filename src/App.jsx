import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <AboutMe />
                <Projects />
                <Socials />
                <Contact />
                <Footer />
            </div>

            <ButtonGradient />
        </>
    );
};

export default App;
