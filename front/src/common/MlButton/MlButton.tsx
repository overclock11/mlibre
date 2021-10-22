import './MlButton.scss';

export const MlButton = ({type, text, handleClick}: {type: 'buy' | 'remove', text: string , handleClick: Function}) =>{
    const clickButton = () =>{
        handleClick();
    }
    return (
        <button className={`button button__type--${type}`} onClick={clickButton}>{text}</button>
    )
}
