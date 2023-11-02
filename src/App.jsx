import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/help/Contact"
import NotFound from "./pages/NotFound"
import Careers, {careersLoader} from "./pages/careers/Careers"
import Faq from "./pages/Help/Faq"

//Layout Import 
import RootLayer from "./Layers/RootLayer"
import Help from "./Layers/Help"
import CareersLayout from "./Layers/CareersLayout"
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails"



function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Help" element={<Help />} >
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/careers" element={<CareersLayout />} >
        <Route 
        index 
        element={<Careers />} 
        loader={careersLoader}
        
        />
        <Route 
          path=":id" 
          element={<CareerDetails />} 
          loader={careerDetailsLoader}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
  return (
    < RouterProvider router={router} />
  )
}
export default App
