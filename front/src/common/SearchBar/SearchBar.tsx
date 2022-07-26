import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.scss';
import {useRef} from "react";

export const SearchBar = ({searchKey} : { searchKey: Function}) => {
    const history = useHistory();
    const searchRef = useRef<HTMLInputElement>(null);
    const searchKeyWord = (event: any, origin = 'input') => {
        const text = searchRef.current?.value;
        if ((event.charCode === 13 || origin === 'button') && text!=='') {
            history.push(`/items?search=${text}`);
            searchKey((document.getElementById("inputSearchBar") as HTMLInputElement).value);
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
                   onKeyPress={searchKeyWord}
                   ref={searchRef}/>
            <button className="search__button-search" onClick={e => searchKeyWord(e, 'button')}>
                <SearchIcon fontSize="small"/>
            </button>
        </div>
    )
}
