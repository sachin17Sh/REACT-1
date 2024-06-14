export default function Tabbuttons({children, onSelect}){


    return(
        <li><button onClick={onSelect}>{children}</button></li>
    )
}