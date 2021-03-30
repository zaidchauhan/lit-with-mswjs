import { html, css, LitElement } from 'lit-element';
import { getTodoList } from './service.js';

import './todo-list.js';

export class LitWithMswjs extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;

        background: #4d244e;
        font-family: sans-serif;
        border-top: 5px solid #aa8e8d;
      }
    `;
  }

  static get properties() {
    return {
      todosList: { type: Array },
    };
  }

  async firstUpdated() {
    this.todosList = await getTodoList();
  }

  constructor() {
    super();
    this.todosList = [];
  }

  render() {
    return html`
      <todo-list .list=${this.todosList}></todo-list>
    `;
  }
}
