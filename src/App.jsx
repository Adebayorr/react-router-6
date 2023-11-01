import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider} from "react-router-dom"

  //Layout Import 
  import RootLayer from "./Layers/RootLayer"

import About from "./pages/About"
import Home from "./pages/Home"
function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      
    </Route>
  )
)
  return (
    < RouterProvider router={router} />
  )
}
export default App
