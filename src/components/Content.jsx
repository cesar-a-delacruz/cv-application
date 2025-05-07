import { useState } from 'react'
import Form from './Form';
import Description from './Description';
export default function Content({section}) {
    const [type, setType] = useState('form')
    return (
        <div className="content">
            {(() => {
                if (type === 'form') 
                    return <Form info={section.info} changeType={changeType}/>
                else if (type === 'description') 
                    return <Description info={section.info}  changeType={changeType}/>
            })()}
        </div>
    )
    function changeType(sectionType) {
        setType(sectionType)
    }
}