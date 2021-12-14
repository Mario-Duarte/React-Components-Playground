import React from 'react';
import { colors } from '../../theme/colors';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircleIcon } from './CircleIcon';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 64px;
    }
`;

export default {
    component: CircleIcon,
    title: 'Icons/Circle Icon',
    decorators: [ (Story) => (
        <Container>
            <Story />
        </Container>
        ),
    ],
} as ComponentMeta<typeof CircleIcon>;

const Template: ComponentStory<typeof CircleIcon> = (args) => <CircleIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
    color: colors.draculaOrchid,
}