import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"

//Layout Import 
import RootLayer from "./Layers/RootLayer"
import Help from "./Layers/Help"
import Faq from "./pages/Help/Faq"
import Contact from "./pages/Help/Contact"


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
    </Route>
  )
)
  return (
    < RouterProvider router={router} />
  )
}
export default App
