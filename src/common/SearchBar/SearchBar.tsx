import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = () => {
    const history = useHistory();
    const searchKeyWord = (event: any, origin = 'input') => {
        if (event.charCode === 13 || origin === 'button') {
            history.push(`/items?search=${(document.getElementById("inputSearchBar") as HTMLInputElement).value}`);
            (document.getElementById("inputSearchBar") as HTMLInputElement).value = '';
        }
    }
    return (
        <div className="search">
            <Link to="/">
                <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.1/mercadolibre/logo__small.png"
                     alt="logo"
                     className="search__logo"
                />
            </Link>
            <input type="search"
                   className="search__input-search"
                   id="inputSearchBar"
                   placeholder="Buscar productos, marcas y más..."
                   onKeyPress={searchKeyWord}/>
            <button className="search__button-search" onClick={e => searchKeyWord(e, 'button')}>
                <SearchIcon fontSize="small"/>
            </button>
        </div>
    )
}
