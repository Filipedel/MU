import DocLayout from "../components/Documentation/DocLayout";
import Aside from "../components/Documentation/Aside";
import Home from "../components/Documentation/Home";
import About from "../components/Documentation/About";
import Members from "../components/Documentation/Members";
import Versions from "../components/Documentation/Versions";
import Contact from "../components/Documentation/Contact";

const DocPage = () =>
    <DocLayout pageTitle="Muzik">
        <Home/>
        <About/>
        <Members/>
        {/*<Versions/>*/}
        <Contact/>
    </DocLayout>;

export default DocPage;