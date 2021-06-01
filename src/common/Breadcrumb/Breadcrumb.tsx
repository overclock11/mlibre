import {useLocation} from "react-router-dom";
import './Breadcrumb.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {IItemList} from "../Models/IItemsList";

export const Breadcrumb = ({itemList}: {itemList: string[] | undefined}) => {
    const location = useLocation();
    const createBreadCrumb = () =>{
        if(itemList) {
            let items = itemList.map((element, index)=>{
                return itemList.length - 1 === index ? <span key={element}> {element} </span> : <span key={element}>{element} <ArrowForwardIosIcon style={{ fontSize: 10, marginLeft: 10, marginRight:10 }}/> </span>;
            });
            return items;
        }
    }
    if(location.pathname !== '/'){
        return (
            <div className="breadcrumb">
                {createBreadCrumb()}
            </div>
        )
    } else {
        return (<div></div>);
    }
}
