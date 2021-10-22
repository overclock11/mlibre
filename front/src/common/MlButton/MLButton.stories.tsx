import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {MlButton} from "./MlButton";
export default {
    title: 'MLButton',
    component: MlButton,
    argTypes: {
        handleClick: {action: 'clicked'}
    }
} as ComponentMeta<typeof MlButton>;
export const Buy: ComponentStory<typeof MlButton> = (args) => <MlButton {...args} />;
Buy.args = {
    type: "buy",
    text: "comprar",
}
export const Remove = Buy.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Remove.args = {
    type: "remove",
    text: "Quitar",
};
