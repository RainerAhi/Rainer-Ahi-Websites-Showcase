import { SectionOne } from "./Sections/SectionOne";
import { SectionTwo } from "./Sections/SectionTwo";
import Lenis from "@studio-freight/lenis";
import { SectionZero } from "./Sections/SectionZero";
import Cursor from "./Cursor";

function App() {

  const lenis = new Lenis({
    duration: 1, // speed
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 0.5, // sensibility
    smoothTouch: false, // Mobile
    touchMultiplier: 2, // sensibility on mobile
    infinite: false // Infinite scrolling
  });
  
  //get scroll value
  // Here we can do a throttle like
  // in other projects to reduce the callbacks.
  // lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  //   console.log(direction);
  // });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  function addAnotherSection() {
    const element = document.createElement("div");
    element.classList.add("section");
    element.innerHTML = "";
    document.body.appendChild(element);
  }
  
  requestAnimationFrame(raf);
  setTimeout(addAnotherSection, 1000);

    return (
      <>

        <SectionZero />
        <SectionOne />
        <SectionTwo />

        <Cursor />

        {/* <div className="cursor-dot" id="cursor-dot" ></div>
        <div className="cursor-outline"  id="cursor-outline"></div> */}
    
        </>
    )
}

export default App;