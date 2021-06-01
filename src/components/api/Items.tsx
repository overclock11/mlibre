import { setup } from 'axios-cache-adapter';
const api = setup({
    baseURL: 'http://localhost:3007/api/items/',
    cache: {
        maxAge: 180000
    }
})

const SearchByKeyWord = async (keyWord: string) => {
    return api.get(`?q=${keyWord}`, {
        cache: {
            maxAge: 120000,
            exclude: { query: false }
        }
    });
}
const GetItemById = async (id: string) =>{
    return api.get(`${id}`);
}

export {SearchByKeyWord, GetItemById};
