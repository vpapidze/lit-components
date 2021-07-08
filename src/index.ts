import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './views/app-header';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: red;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'World';

  // Render the UI as a function of component state
  render() {
    return html`<div>
    <app-header></app-header>
    <p>Hello, ${this.name}!</p>
    
    </div>`;
  }
}
