import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './main.css'
import sectionsHandler from './data/sectionsHandler'
import Content from './components/Content'
import Navigation from './components/Navigation'

function App() {
  const [section, setSection] = useState(sectionsHandler.read(1))
  return (
    <>
      <header>
        <h1>CV Generator</h1>
        <Navigation sections={sectionsHandler.readAll()} changeContent={changeContent} />
      </header>
      <main>
        <h2>{section.name}</h2>
        <Content section={section} updateInfo={updateInfo} />
      </main>
    </>
  )
  
  function changeContent(id) {
    setSection(sectionsHandler.read(id));
  }
  function updateInfo(newInfo) {
    sectionsHandler.update(section.id, newInfo);
    setSection({...section, info: newInfo});
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
