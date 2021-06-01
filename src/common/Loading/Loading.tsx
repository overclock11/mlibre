import CircularProgress from "@material-ui/core/CircularProgress";
import './Loading.scss';
export const Loading = ({children}:{children: any}) =>{
    return (
        <div>
            {children}
            <div className="loading">
                <CircularProgress color="secondary" />
            </div>
        </div>
    );
}
