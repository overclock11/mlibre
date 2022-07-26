import {useEffect, useState} from "react";
import {SearchByKeyWord} from '../components/api/Items';

// @ts-ignore
export const useFetch = ({ keyword }: {string})=>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(()=>{
        SearchByKeyWord(keyword)
            .then(response => response.json())
            .then((products)=>{
                setState({
                    data: products,
                    loading: false
                })
            })
    },[])
    return state;
}
