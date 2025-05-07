import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './main.css'
import data from './data'
import Content from './components/Content'
import Navigation from './components/Navigation'

function App() {
  const [section, setSection] = useState(
    {
      content: data.sections.find(section => section.id === 1),
      type: 'form'
    }
  )
  function changeContent(sectionId) {
    setSection(data.sections.find(section => section.id === sectionId))
    setSection({...section, content: data.sections.find(section => section.id === sectionId)})
  }

  return (
    <>
      <header>
        <h1>CV Generator</h1>
        <Navigation sections={data.sections} changeContent={changeContent} />
      </header>
      <main>
        <h2>{section.content.name}</h2>
        <Content section={section} />
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
