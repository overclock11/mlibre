const SearchByKeyWord = async (keyWord: string) => {
    return fetch(`/api/items/?q=${keyWord}`,{cache: 'force-cache'});
}
const GetItemById = async (id: string) =>{
    return fetch(`/api/items/${id}`,{cache: 'force-cache'});
}

export {SearchByKeyWord, GetItemById};
