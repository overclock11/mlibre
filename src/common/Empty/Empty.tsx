import FindReplaceIcon from '@material-ui/icons/FindReplace';
import './Empty.scss';
export const Empty = () =>{
    return (
        <div className="empty">
            <div className="empty__search-icon">
                <FindReplaceIcon style={{ fontSize: 150 }}/>
            </div>
            <div>
                <h3>No hay publicaciones que coincidan con tu búsqueda</h3>
                <ol>
                    <li>Revisa la ortografía</li>
                    <li>Utiliza parabras mas genéricas</li>
                    <li>Navega por la categorías para encontrar un producto similar</li>
                </ol>
            </div>
        </div>
    )
}
