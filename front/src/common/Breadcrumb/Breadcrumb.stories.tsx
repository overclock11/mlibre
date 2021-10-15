import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Breadcrumb} from './Breadcrumb';
import { createMemoryHistory } from 'history';
import {ItemDetail} from "../../components/ItemDetail/ItemDetail";
import {Router} from "react-router-dom";
const history = createMemoryHistory();
const route = '/items/MLA829852590';
history.push(route);
export default {
    title: 'Breadcrumb',
    component: Breadcrumb,
    decorators: [(Story) => (<Router history={history}><Story/></Router>)],
} as ComponentMeta<typeof Breadcrumb>;
export const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;
Template.args = {itemList :["Breadcrumb","storybook","arriba"]}
