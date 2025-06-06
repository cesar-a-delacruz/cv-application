import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './main.css'
import sectionsHandler from './data/sectionsHandler'
import Content from './components/Content'
import Navigation from './components/Navigation'

function App() {
  const [section, setSection] = useState(sectionsHandler.read(1));
  const [type, setType] = useState('form');
  return (
    <>
      <header>
        <h1>CV Generator</h1>
        <Navigation sections={sectionsHandler.readAll()} changeContent={changeContent} changeType={changeType} />
      </header>
      <main>
        <div>
          <h2>{section.name}</h2>
          <Content section={section} type={type} changeType={changeType}/>
        </div>
      </main>
      <footer aria-label='image credits'>
        <p>
          Image by 
          <a href="https://pixabay.com/users/olilynch-3815693/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3726428"
          aria-label='Oli Lynch artist'
          >
            Oli Lynch
          </a> 
          from 
          <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3726428" 
          aria-label='Pixabay website'
          >
            Pixabay
          </a>
        </p>
      </footer>
    </>
  )
  
  function changeContent(id) {
    setSection(sectionsHandler.read(id));
  }
  function changeType(sectionType, info) {
      if (info) updateInfo(info);
      setType(sectionType);
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
