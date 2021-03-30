import { html, css, LitElement } from 'lit-element';
import { spreadProps } from '@open-wc/lit-helpers';

import './todo-item.js';

export class TodoList extends LitElement {
  static get styles() {
    return css`
      /* title */
      h1{
        color: #aa8e8d;
        text-align: center;
        font-size: 32px;
        font-weight: 900;
      }
      /* tasks */
      .tasks{
        width: 400px;
        height: 405px;
        position: absolute;
        top: 20%;
        left: 0px;
        right: 0px;
        margin: 0px auto;
      }
    `;
  }

  static get properties() {
    return {
      list: { type: Array }
    };
  }

  render() {
    return html`
      <div class="tasks">
        <!-- title -->
        <h1>To-Do List</h1>
        ${this.list.map(item => html`
          <todo-item ...="${spreadProps(item)}"></todo-item>
        `)}

      </div>
    `;
  }
}

customElements.define('todo-list', TodoList);
