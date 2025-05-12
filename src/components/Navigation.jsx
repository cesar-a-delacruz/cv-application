import '../styles/navigation.css';
export default function Navigation({sections, changeContent, changeType}) {
    return (
        <nav>
            <ul>
                {sections.map(section => 
                    <li key={section.id}
                    onClick={() => changeStates(section)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") changeStates(section);
                    }}
                    aria-label={section.name + " section"}
                    tabIndex={section.id}
                    >
                        {section.name}
                    </li>
                )}
            </ul>
        </nav>
    );
    function changeStates(section) {
        if (section.info[Object.getOwnPropertyNames(section.info)[0]])
            changeType('description');
        else changeType('form');
        
        changeContent(section.id);
    }
}