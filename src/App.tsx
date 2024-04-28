import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
}

export default App;

