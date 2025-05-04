export default function Navigation({sections, changeSection}) {
    return (
        <nav>
            <ul>
                {sections.map(section => 
                    <li key={section.id}
                    onClick={() => changeSection(section.id)}
                    >
                        {section.name}
                    </li>
                )}
            </ul>
        </nav>
    )
}