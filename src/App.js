
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom"

import { Layout } from "./components/Layout/Layout";
import { ContactMe } from "./pages/contact_me/ContactMe";


import { Projects } from "./pages/projects/Projects/Projects";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact_me" element={<ContactMe />} />
          <Route path="projects" element={ <Projects/>} />
      
        </Routes>
      </Layout>
    </>
  );
}

export default App;
