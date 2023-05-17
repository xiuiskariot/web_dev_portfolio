
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Routes, Route, Link} from "react-router-dom"

import { Layout } from "./components/Layout/Layout";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Layout>

    </>
  );
}

export default App;
