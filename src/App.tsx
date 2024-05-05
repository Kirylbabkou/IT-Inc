import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Main2} from "./layout/sections/main/Main2";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main2></Main2>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;

