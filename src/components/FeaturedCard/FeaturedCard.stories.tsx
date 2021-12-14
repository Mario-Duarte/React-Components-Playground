import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FeaturedCard } from './FeaturedCard';

export default {
    component: FeaturedCard,
    title: 'Card/Featured card',
    decorators: [
        (Story) => (
            <Story />
        ),
    ],
} as ComponentMeta<typeof FeaturedCard>;

const Template: ComponentStory<typeof FeaturedCard> = (args) => <FeaturedCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
    title: <>Blue oceans <br/> Waves crash</>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featuredImg: "https://unsplash.com/photos/-djS1aPrSr4/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM5NDM3MTE4&force=true&w=640",
}