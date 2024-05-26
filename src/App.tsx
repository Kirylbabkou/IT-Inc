import './App.css';
import {Header} from "./layout/header/Header";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Main} from "./layout/sections/main/Main";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;

