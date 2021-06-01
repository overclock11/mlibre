const SearchByKeyWord = async (keyWord: string) => {
    return fetch(`http://192.168.0.2:3007/api/items/?q=${keyWord}`,{cache: 'force-cache'});
}
const GetItemById = async (id: string) =>{
    return fetch(`http://192.168.0.2:3007/api/items/${id}`,{cache: 'force-cache'});
}

export {SearchByKeyWord, GetItemById};
