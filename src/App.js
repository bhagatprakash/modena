import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "animate.css";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import HomeSection from "./pages/Home/HomeSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home_sectoin",
    element: <HomeSection />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
