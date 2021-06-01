import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useLocation} from "react-router-dom";
import './App.scss';
import {Welcome} from "./components/welcome/Welcome";
import {SearchBar} from "./common/SearchBar/SearchBar";
import {Breadcrumb} from "./common/Breadcrumb/Breadcrumb";
import {IItemList} from './common/Models/IItemsList';
import {ItemList} from "./components/ItemList/ItemList";

function App() {
    const [items, setItems] = useState<IItemList | null>(null);
    const [searchKey, setSearchKey] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const getItems = (searchKeyword: string): void => {
        if(searchKey !== searchKeyword) {
            setSearchKey(searchKeyword);
            setItems({
                "author": {
                    "name": "Julian",
                    "lastname": "Borray"
                },
                "categories": [
                    "Consolas y Videojuegos",
                    "Consolas"
                ],
                "items": [
                    {
                        "id": "MLA921510488",
                        "title": "Microsoft Xbox Series X 1tb  Color Negro",
                        "price": {
                            "currency": "ARS",
                            "amount": 264999
                        },
                        "picture": "https://http2.mlstatic.com/D_Q_NP_963862-MLA45041918050_032021-Q.webp",
                        "condition": "new",
                        "free_shipping": true,
                        "address": "Capital Federal"
                    }
                ]
            });
        }
    }
    return (
        <div className="main-content">
            <Router>
                <SearchBar searchKey={getItems}/>
                <Breadcrumb itemList={items?.categories} />
                <Switch>
                    <Route exact path='/' component={Welcome}/>
                    <Route exact path='/items'>
                        <ItemList itemList={items} searchKey={getItems}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
