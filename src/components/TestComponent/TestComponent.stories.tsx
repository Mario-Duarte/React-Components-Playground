import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestComponent } from 'components/TestComponent';

export default {
    component: TestComponent,
    title: 'Test/Test component',
    decorators: [
        (Story) => (
            <Story />
        ),
    ],
} as ComponentMeta<typeof TestComponent>;

const Template: ComponentStory<typeof TestComponent> = (args) => <TestComponent {...args}/>;

export const Test = Template.bind({});
Test.args = {
    title: 'Test Component',
    content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
}