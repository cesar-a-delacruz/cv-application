import { useState } from 'react'
import Form from './Form';
import Description from './Description';
export default function Content({section, changeContent}) {
    const [type, setType] = useState('form')
    return (
        <div className="content">
            {(() => {
                if (!isFull(section) || type === 'form') 
                    return <Form info={section.info} changeType={changeType} changeContent={changeContent} />
                else if (isFull(section) && type === 'description') 
                    return <Description info={section.info} changeType={changeType} />
            })()}
        </div>
    )
    function changeType(sectionType) {
        setType(sectionType)
    }
    function isFull(sec) {
        let val = false
        const firstInfo = Object.getOwnPropertyNames(sec.info)[0]
        if (sec.info[firstInfo]) val = true
        return val;
    }
}