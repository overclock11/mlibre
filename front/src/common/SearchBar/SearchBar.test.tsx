import React from "react";
import {SearchBar} from "./SearchBar";
import { Router } from 'react-router-dom';
import {mount, shallow} from 'enzyme';
import {createMemoryHistory} from "history";

describe('Pruebas sobre el componente searchbar',()=>{
    const container = null;
    const history = createMemoryHistory();
    const route = '/items/MLA829852590';
    history.push(route);
    const getItems = (value: string) =>{
        console.log(value);
        return value;
    }
    const wrapper = mount(
        <Router history={history}>
            <SearchBar searchKey={getItems} />
        </Router>
    );
    xtest('debe retornar lo que está escrito en la barra al hacer click',()=>{
        const searchBar = wrapper.children().find('input').simulate('keypress', {key: 'Enter'})
        console.log(searchBar);
    })

    xtest('retornar el texto al hacer click en el boton',async ()=>{
        const button = wrapper.find('button').at(0);
        console.log(button.html());
        const input = wrapper.find('input');
        input.simulate('keypress', {key: 'Enter'})
        console.log(input.html());
        console.log(input.text());
    })

})
