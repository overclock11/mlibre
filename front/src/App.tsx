import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import {IItemList} from './common/Models/IItemsList';
import {IItem} from "./common/Models/IItemDetail";
import {Welcome} from "./components/welcome/Welcome";
import {SearchBar} from "./common/SearchBar/SearchBar";
import {Breadcrumb} from "./common/Breadcrumb/Breadcrumb";
import {Loading} from "./common/Loading/Loading";
import {ItemList} from "./components/ItemList/ItemList";
import {ItemDetail} from "./components/ItemDetail/ItemDetail";
import {Empty} from "./common/Empty/Empty";
import {SearchByKeyWord, GetItemById} from './components/api/Items';

function App() {
    const [items, setItems] = useState<IItemList | null>(null);
    const [item, setItem] = useState<IItem | null>(null);
    const [itemId, setItemId] = useState<string | null>(null);
    const [searchKey, setSearchKey] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getItems = async (searchKeyword: string): Promise<void> => {
        if (searchKey !== searchKeyword) {
            setLoading(true);
            setSearchKey(searchKeyword);
            await SearchByKeyWord(searchKeyword).then((res=>res.json())).then((response)=>{
                setItems(response);
                setLoading(false);
            });
        }
    }
    const getItemById = async (id: string): Promise<void> => {
        if (itemId !== id) {
            setLoading(true);
            setItemId(id);
            GetItemById(id).then(res => res.json()).then((response)=>{
                setItem(response);
            });
            setLoading(false);
        }
    }
    if(loading === true) {
        return (
            <Router>
                <Loading>
                    <SearchBar searchKey={getItems}/>
                    <Welcome/>
                </Loading>
            </Router>
        );
    } else if(items?.items.length === 0) {
        return (
            <Router>
                <SearchBar searchKey={getItems}/>
                <Empty />
            </Router>
        );
    } else {
        return (
            <div className="main-content">
                <Router>
                    <SearchBar searchKey={getItems}/>
                    <Breadcrumb itemList={items?.categories}/>
                    <Switch>
                        <Route exact path='/' component={Welcome}/>
                        <Route exact path='/items/:id'>
                            <ItemDetail itemDetail={item ? item.items[0]: null} selectedItem={getItemById}/>
                        </Route>
                        <Route exact path='/items'>
                            <ItemList itemList={items} searchKey={getItems}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
