import { html } from 'lit-html';
import '../lit-with-mswjs.js';
// import { worker } from '../mocks/browser.js';

export default {
  title: 'LitWithMswjs',
  component: 'lit-with-mswjs',
  // decorators:[
  //   (Story) => {
  //     worker.resetHandlers();
  //     return html`<Story />`;
  //     // return <Story />
  //   },
  // ],
  argTypes: {},
};

function Template() {
  return html`<lit-with-mswjs></lit-with-mswjs>`;
}



export const ToDoList = Template.bind({});
ToDoList.args = {};
