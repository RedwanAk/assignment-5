import { Suspense } from "react"
import BannerArea from "./components/BannerArea"
import NavBar from "./components/NavBar"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <NavBar />
      <BannerArea />

      <Suspense fallback={<p className="px-4 pb-10 text-slate-500">Loading technologies...</p>}>
        <Technologies />
      </Suspense>

    <Footer/>
      



    </>
  )
}

export default App
