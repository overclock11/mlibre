import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createMemoryHistory } from 'history';
import {Router} from "react-router-dom";
import {SearchBar} from "./SearchBar";


const history = createMemoryHistory();
const route = '/items/MLA829852590';
history.push(route);

export default {
    title: 'SearchBar',
    component: SearchBar,
    decorators: [(Story) => (<Router history={history}><Story/></Router>)],
    argTypes: {
        searchKey: {action: 'search'}
    }
} as ComponentMeta<typeof SearchBar>;
export const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;
