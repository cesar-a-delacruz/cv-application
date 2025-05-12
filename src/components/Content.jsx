import { useState } from 'react'
import '../styles/content.css';
import Form from './Form';
import Description from './Description';

export default function Content({section, type, changeType}) {
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

    function isInfoFull(info) {
        if (info[Object.getOwnPropertyNames(info)[0]]) return true;
        else return false;
    }
}