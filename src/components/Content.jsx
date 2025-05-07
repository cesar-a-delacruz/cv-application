import { useState } from 'react';
import Form from './Form';
import Description from './Description';
export default function Content({section}) {
    return (
        <div className="content">
            {(() => {
                if (section.type === 'form') return <Form info={section.content.info} />
                else if (section.type === 'description') return <Description info={section.content.info} />
            })()}
        </div>
    )
}