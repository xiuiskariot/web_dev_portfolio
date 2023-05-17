import { Header } from "./components/Header/Header";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Routes, Route, Link} from "react-router-dom"
import { Footer } from "./components/Footer/Footer";


function App() {


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>

  //   },
  //   {
  //     path: "about",
  //     element: <About/>
  //   }
  // ])

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
