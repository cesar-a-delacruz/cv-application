import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './main.css'
import data from './data'
import Content from './components/Content'
import Navigation from './components/Navigation'

function App() {
  const [section, setSection] = useState(data.sections.find(section => section.id === 1))
  function changeSection(sectionId) {
    setSection(data.sections.find(section => section.id === sectionId))
  }

  return (
    <>
      <header>
        <h1>CV Generator</h1>
        <Navigation sections={data.sections} changeSection={changeSection} />
      </header>
      <main>
        <h2>{section.name}</h2>
        <Content info={section.info}/>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
