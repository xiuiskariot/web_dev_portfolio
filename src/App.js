
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Routes, Route, Link} from "react-router-dom"

import { Layout } from "./components/Layout/Layout";
import { ContactMe } from "./pages/contact_me/ContactMe";

import Snake from "./pages/Snake/Snake";
import { ProjectCard } from "./ui_comp/project_card/ProjectCard";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact_me" element={<ContactMe />} />
          <Route path="projects" element={ <ProjectCard/>} />
          <Route path="snake" element={<Snake />} />

        </Routes>
      </Layout>
    </>
  );
}

export default App;
