import { use, useState } from "react"

type TechItem = {
  title: string
  badge: string | null
  description: string
  category: string
  level: string
  rating: number
}

const techsCache: Promise<TechItem[]> = fetch("/data.json").then((response) => response.json()) as Promise<TechItem[]>

// Helper function to match exact badge styles from the image
const getBadgeStyles = (badge: string) => {
  switch (badge.toLowerCase()) {
    case "popular":
    case "top sql":
    case "essential":
    case "robust":
    case "containers":
      return "bg-sky-100/70 text-sky-500"
    case "versatile":
    case "standard":
    case "modern":
      return "bg-emerald-100/70 text-emerald-600"
    case "fast":
    case "cache":
      return "bg-amber-100/70 text-amber-600"
    case "ssr / edge":
      return "bg-purple-100/70 text-purple-600"
    case "ubiquitous":
      return "bg-yellow-100/70 text-yellow-700"
    default:
      return "bg-slate-100 text-slate-600"
  }
}

const Technologies = () => {
  const techs = use(techsCache)
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])

  const toggleTech = (title: string) => {
    setSelectedTechs((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title)
      }
      return [...prev, title]
    })
  }

  return (
    <>
    
    <div className="container mx-auto mt-20 px-4">
      <h2 className="text-4xl font-bold">
        Explore the{" "}
        <span className="bg-linear-to-r from-[#DB4BA9] to-[#CB4FB9] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="mt-2 text-[#64748B]">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* Main Container */}
      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        
        {/* Left Side: Tech Cards Grid */}
        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techs.map((tech) => {
            const isSelected = selectedTechs.includes(tech.title)

            return (
              <div
                key={tech.title}
                className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              >
                <div>
                  {/* Top row: Badge floating right */}
                  <div className="flex items-start justify-between min-h-7">
                    <div></div>
                    {tech.badge && (
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadgeStyles(tech.badge)}`}>
                        {tech.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {tech.description}
                  </p>
                </div>

                <div>
                  {/* Category, Level, Rating Row */}
                  <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                    <span className="rounded-md bg-slate-100/80 px-2.5 py-1 font-medium text-slate-600">
                      {tech.category}
                    </span>
                    <span>{tech.level}</span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <span className="text-amber-400">★</span> {tech.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => toggleTech(tech.title)}
                    className={`mt-4 w-full rounded-xl py-3 text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-[#0B0F19] text-white hover:bg-slate-800"
                    }`}
                  >
                    {isSelected ? "Remove from Stack" : "Add to Stack"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full lg:w-80 shrink-0 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Your Stack</h2>
          <p className="text-xs text-slate-400">{selectedTechs.length} Technology Selected</p>

          {selectedTechs.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">Your stack is empty.</p>
          ) : (
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {selectedTechs.map((tech) => (
                <li key={tech} className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <span>{tech}</span>
                  <button onClick={() => toggleTech(tech)} className="text-slate-400 hover:text-slate-600">
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}

          {selectedTechs.length > 0 && (
            <button
              onClick={() => setSelectedTechs([])}
              className="mt-6 w-full rounded-lg border border-red-200 py-2 text-xs font-semibold text-red-500 hover:bg-red-50"
            >
              Remove All
            </button>
          )}
          
        </div>
        
      </div>
    </div>
    <hr className="my-6 border-t border-gray-100" />
    </>
  )
}

export default Technologies