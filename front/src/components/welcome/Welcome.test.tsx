import React from 'react';
import { render, screen } from '@testing-library/react';
import {Welcome} from './Welcome';

describe('pruebas de componente welcome', ()=>{

    test('debe mostrar titulo y descripcion',()=>{
        const {getByText, container} = render( <Welcome/> );
        const title = container.querySelector('h1');
        const body = container.querySelector('h3');
        expect(title).toBeTruthy();
        expect(body).toBeTruthy();
        expect(getByText('Mercado Libre')).toBeInTheDocument();
        expect(getByText(`Donde puedes comprar y vender miles de productos en toda Latinoamerica, entre electronicos, informatica, celulares, camaras digitales, vehiculos, libros, ropa y mucho mas.`)).toBeInTheDocument();
    });

})
