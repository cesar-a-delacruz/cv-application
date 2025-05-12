import { useState } from 'react'
import Form from './Form';
import Description from './Description';

export default function Content({section, updateInfo}) {
    const [type, setType] = useState('form');
    return (
        <>
            {(() => {
                if (!isInfoFull(section.info) || type === 'form') 
                    return <Form info={section.info} changeType={changeType} />;
                else if (isInfoFull(section.info)) 
                    return <Description info={section.info} changeType={changeType} />;
            })()}
        </>
    );

    function changeType(sectionType, info) {
        if (info) updateInfo(info);
        setType(sectionType);
    }
    function isInfoFull(info) {
        let answer = false;
        const firstInfo = Object.getOwnPropertyNames(info)[0];
        if (info[firstInfo]) answer = true;
        return answer;
    }
}