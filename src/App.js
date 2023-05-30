
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom"

import { Layout } from "./components/Layout/Layout";
import { ContactMe } from "./pages/contact_me/ContactMe";


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
      
        </Routes>
      </Layout>
    </>
  );
}

export default App;
