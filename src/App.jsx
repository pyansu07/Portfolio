import { useState, useEffect, Suspense, lazy } from "react";
import { Navbar } from "./components/index";
import { Home, Contact } from "./pages/index";
import { MrMiyagi } from "@uiball/loaders";
import Progressbar from "./Progressbar/";
import FloatingBubbles from './bubble';
import './styles.css'; 


const Skills = lazy(() => import("./pages/Skills"));
const Work = lazy(() => import("./pages/Work"));

function App() {
  const [theme, setTheme] = useState("light");
  const [nav, setNav] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    setProgressWidth(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const preferredColorScheme =
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "dark"
        : "light";
    setTheme(preferredColorScheme);
  }, []);
  document.body.className = theme === "light" ? "light-theme" : "dark-theme";

  return (
    <div className="relative h-screen">
    <FloatingBubbles />
   
    <div className="content relative z-10">
     <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <MrMiyagi size={60} lineWeight={3.5} speed={1} color="#68d391" />
          </div>
        }
      >
        <Navbar theme={theme} setTheme={setTheme} setNav={setNav} />
        {/* <div className="progress_wrapper">
          <div
            className="progress_bar"
            id="bar"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div> */}
         <Progressbar />
        <Home />
        <Skills />
        <Work />
        <Contact nav={nav} />
      </Suspense>
    </div>
  </div>
    
      
    
  );
}

export default App;
