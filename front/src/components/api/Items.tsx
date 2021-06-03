const baseUrl = "http://localhost:3007";
//const baseUrl = "";
const SearchByKeyWord = async (keyWord: string) => {
    return fetch(`${baseUrl}/api/items/?q=${keyWord}`,{cache: 'force-cache'});
}
const GetItemById = async (id: string) =>{
    return fetch(`${baseUrl}/api/items/${id}`,{cache: 'force-cache'});
}

export {SearchByKeyWord, GetItemById};
