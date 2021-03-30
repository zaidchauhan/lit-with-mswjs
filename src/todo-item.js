/* eslint-disable lit-a11y/click-events-have-key-events */
import { html, css, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export class TodoList extends LitElement {
  static get styles() {
    return css`
      input[type=checkbox] {
        display: none;
      }
      label{
        background: #ae5f75;
        height: 69px;
        width: 100%;
        display: block;
        border-bottom: 1px solid #2C3E50;
        color: #fff;
        text-transform: capitalize;
        font-weight: 900;
        font-size: 11px;
        letter-spacing: 1px;
        text-indent: 20px;
        cursor: pointer;
        transition: all 0.7s ease;
        position: relative;
        padding: 5px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }
      label h2 span{
        display: block;
        font-size: 12px;
        text-transform: capitalize;
        font-weight: normal;
        color: #fff;
      }
      label:before{
        content:"";
        width: 20px;
        height: 20px;
        background: #fff;
        display: block;
        position: absolute;
        border-radius: 100%;
        right: 20px;
        top: 30%;
        transition: border 0.7s ease
      }
      label.checked{
        background: #6d335c;
        border-bottom: 1px solid #34495E;
        color: #d37b79;
      }
      label.checked:before {
        background: url("https://i.imgur.com/eoPQ05r.png") no-repeat center center;
      }
      label.checked h2 span {
        color: #f6bd66;
      }
    `;
  }

  static get properties() {
    return {
      id: { type: Number },
      isDone: { type: Boolean },
      title: { type: String },
      note: { type: String },
    };
  }

  __onToggle() {
    this.isDone = !this.isDone;
  }

  render() {
    return html`
      <input type='checkbox' ?checked=${this.isDone} />
      <label class=${classMap({checked: this.isDone})} @click=${this.__onToggle}>
        <h2>${this.title}
          <span>${this.note}</span>
        </h2>
      </label>
    `;
  }
}

customElements.define('todo-item', TodoList);
