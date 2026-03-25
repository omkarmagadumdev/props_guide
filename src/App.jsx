
import './App.css'
import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import Complexprops from './components/Complexprops'
import RefProp from './components/RefProps'
import ThemeToggler from './components/ThemeToggler'


function Navigation(){
  const sections = [
    {id:"basic",lable:"Basic Props",icon:"📦"},
    {id:"children",lable:"children Props",icon:"👶🏻"},
    {id:"ref",lable:"ref Props",icon:"🔗"},
    {id:"complex",lable:"complex Props",icon:"🧩"},
    {id:"theme toggler",lable:"theme toggler",icon:"🎨"},
    
  ]
  
  return (<nav className={`sticky top-0 z-50 border-b border-gray-700 bg-gray-900/90 backdrop-blur shadow-md`}>
    <div className={`mx-auto max-w-6xl px-4 py-3`}>
      <div className={`flex flex-wrap gap-2 justify-center`}>
        {
          sections.map((sections)=>(
            <button
            className={`px-3 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2 hover:bg-sky-700 cursor-pointer transition-colors`}
            key={sections.id}
            >
              <span className={`mr-2`}>{sections.icon}</span>
              {sections.lable}
            </button>
          ))
        }
      </div>
    </div>
  </nav>)
}

function AppContent(){
  const isDark = true;
  return(
    <div className="min-h-screen bg-gray-800">
      <Navigation />
      <div className={`container mx-auto px-4 py-8`}>
        <header className={`text-white mb-12 transition-colors 
        ${
          isDark ? "text-white" : "text-gray-500"
      }`} 
        >
          <h1 className={`text-3xl font-bold tracking-tight md:text-4xl flex flex-wrap justify-center`}>React props explained </h1>
          <p className={`mt-3 text-base md:text-lg text-gray-300 flex justify-center`}>A simple comprehensive guide to understand props in React</p>
        </header>
        <div className={`space-y-8`}>
          <div id="basic" className='scroll-mt-20'>
            <BasicProps/>
          </div>
          <div id="childrenProps" className='scroll-mt-20'>
            <ChildrenProps/>
          </div>
          <div id="refprops" className='scroll-mt-20'>
            <RefProp/>
          </div>
          <div id="complexProps" className='scroll-mt-20'>
            <Complexprops/>
          </div>
          <div id="themetoggler" className='scroll-mt-20'>
            <ThemeToggler/>
          </div>
        </div>
      </div>
      <footer className="border-t border-gray-700 bg-gray-900/60 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-300">
          Made with Bun, React and Tailwind CSS
        </div>
      </footer>
    </div>
  )
}


function App() {
  return <AppContent/>
}

export default App
