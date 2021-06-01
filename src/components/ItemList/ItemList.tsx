import {IItemList} from "../../common/Models/IItemsList";
import Grid from "@material-ui/core/Grid";
import {Link, useLocation} from "react-router-dom";
import {useMemo} from "react";
import './ItemList.scss';

export const ItemList = ({itemList, searchKey}: {itemList: IItemList | null, searchKey: Function | any}) =>{
    let search: string = useLocation().search;
    const value = new URLSearchParams(search).get('search');
    if(value !== null){
        searchKey(value);
    }
    const renderItems = () =>{
        let itemsArray:any = [];
        itemList?.items.forEach((item)=>{
            itemsArray.push(
                <li className="list__list-item" key={item.id}>
                    <Grid container justify="space-between">
                        <Grid item sm={4} md={3} className="list__image-container">
                            <Link to={`/items/${item.id}`}>
                                <img className="list__image-container--image" src={item.picture} alt={item.title} width="160" height="160"/>
                            </Link>
                        </Grid>
                        <Grid item  sm={6}  md={7} className="list__item-detail">
                            <p  className="list__item-detail--title">
                                <strong>$ {item.price.amount.toLocaleString(navigator.language, { currency: item.price.currency, style:'decimal'})}</strong>
                            </p>
                            <p className="list__item-detail--shipping">{item.free_shipping ? "Envío gratis": "Envío con costo"}</p>
                            <Link to={`/items/${item.id}`}  className="list__item-detail--link">
                                <h2 className="list__item-detail--description">
                                    {item.title}
                                </h2>
                            </Link>
                        </Grid>
                        <Grid item sm={2} md={2}>
                            <address  className="list__item-address" >{item.address}</address>
                        </Grid>
                    </Grid>
                </li>)
        });
        return itemsArray;
    }
    return (
        <div className="list__list-container">
            <ol className="list">
                {renderItems()}
            </ol>
        </div>
    )
}
