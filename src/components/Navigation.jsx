import '../styles/navigation.css';
export default function Navigation({sections, changeContent}) {
    return (
        <nav>
            <ul>
                {sections.map(section => 
                    <li key={section.id}
                    onClick={() => changeContent(section.id)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") changeContent(section.id);
                    }}
                    aria-label={section.name + " section"}
                    tabIndex={section.id}
                    >
                        {section.name}
                    </li>
                )}
            </ul>
        </nav>
    )
}