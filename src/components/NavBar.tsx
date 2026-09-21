import logo from '../assets/logo-text.png'

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className=" container mx-auto flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3">

        <img src={logo} alt="" />

        <ul className="hidden items-center gap-6 font-medium text-slate-600 md:flex">
          <li className="text-[#D91B7E]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="btn border-none border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700">
            Sign In
          </button>
          <button className=" btn rounded-full bg-[#D91B7E] px-4 py-2 font-semibold text-white shadow-sm">
            Sign Up
          </button>
        </div>
        </div>
    </nav>
  )
}

export default NavBar;