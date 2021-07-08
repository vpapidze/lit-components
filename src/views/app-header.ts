import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {

  static styles = css`
    :host {
      color: green;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'Header Html';

  // Render the UI as a function of component state
  render() {
    return html`<div>${this.name}!</div>`;
  }
}
