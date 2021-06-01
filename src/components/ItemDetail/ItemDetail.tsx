import Grid from "@material-ui/core/Grid";
import './ItemDetail.scss';
import {useParams} from "react-router-dom";
import {IItemDetail} from "../../common/Models/IItemDetail";
import {MlButton} from "../../common/MlButton/MlButton";

export const ItemDetail = ({itemDetail, selectedItem}: {itemDetail: IItemDetail | null, selectedItem: Function})=>{
    const params: any = useParams();
    if(params.id !== null){
        selectedItem(params.id);
    }
    const buyItem = () => {
        console.log('comprando item');
    }
    return (
        <div className="item-detail__item-space">
            <div className="item-detail">
                <Grid container justify="space-around" className="item-detail__product-detail">
                    <Grid item sm={6} md={6} className="item-detail__image">
                        <img src={itemDetail?.picture} alt="imagen del producto"
                             className="item-detail__container-image"/>
                    </Grid>
                    <Grid item sm={4} md={4}>
                        <p className="item-detail__sold">{itemDetail?.condition.toLowerCase() === 'new' ? "Nuevo " : "Usado "} - {itemDetail?.sold_quantity} vendidos</p>
                        <h2 className="item-detail__title">{itemDetail?.title}</h2>
                        <span className="item-detail__price">$ {itemDetail?.price.amount.toLocaleString(navigator.language, { minimumFractionDigits: 2,currency: itemDetail?.price.currency, style:'decimal'})}</span>
                        <div className="item-detail__buy-button">
                            <MlButton handleClick={buyItem} text={'Comprar'} type={'buy'}/>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    {itemDetail?.description !== '' ? (
                        <Grid item sm={7} className="item-detail__detail">
                            <h2 className="item-detail__title--description">Descripción del producto</h2>
                            <p className="item-detail__description">
                                {itemDetail?.description}
                            </p>
                        </Grid>): <div></div>}
                </Grid>
            </div>
        </div>
    );
}
