export default function Navigation({sections, changeContent}) {
    return (
        <nav>
            <ul>
                {sections.map(section => 
                    <li key={section.id}
                    onClick={() => changeContent(section.id)}
                    >
                        {section.name}
                    </li>
                )}
            </ul>
        </nav>
    )
}