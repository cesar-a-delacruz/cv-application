import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './main.css'
import data from './data'
import Content from './components/Content'
import Navigation from './components/Navigation'

function App() {
  const [section, setSection] = useState(data.sections.find(section => section.id === 1))
  return (
    <>
      <header>
        <h1>CV Generator</h1>
        <Navigation sections={data.sections} changeContent={changeContent} />
      </header>
      <main>
        <h2>{section.name}</h2>
        <Content section={section} changeContent={changeContent} />
      </main>
    </>
  )
  
  function changeContent(sectionId, newInfo) {
    if (!sectionId && newInfo) {
      setSection({...section, info: newInfo})
      data.sections.forEach((sec, i, arr) => {
        if (sec.id === section.id) arr[i].info = newInfo
      })
    } else {
      setSection(data.sections.find(section => section.id === sectionId));
    }
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
