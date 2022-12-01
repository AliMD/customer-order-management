import {AlwatrElement} from '@alwatr/element';
import {css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import {sampleProductList} from '../config';
import ionicNormalize from '../style/ionic.normalize';
import ionicTheming from '../style/ionic.theming';

import '../component/product-card';

import type {ListenerInterface} from '@alwatr/signal';
import type {TemplateResult} from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'page-product-list': PageProductList;
  }
}

@customElement('page-product-list')
export class PageProductList extends AlwatrElement {
  static override styles = [
    ionicNormalize,
    ionicTheming,
    css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .cards {
        display: flex;
        flex-wrap: wrap;
        padding: var(--card-padding);
        gap: var(--card-padding);

        --card-padding: 16px;
      }
      .cards product-card {
        min-width: 128px;
        max-width: 256px;
      }
    `,
  ];

  protected _listenerList: Array<unknown> = [];

  override connectedCallback(): void {
    super.connectedCallback();
    // this._listenerList.push(router.signal.addListener(() => this.requestUpdate()));
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._listenerList.forEach((listener) => (listener as ListenerInterface<keyof AlwatrSignals>).remove());
  }

  override render(): TemplateResult {
    return html`
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>شرکت تولیدی بازرگانی سافیت</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content fullscreen>${this._renderCards()}</ion-content>
    `;
  }

  protected _renderCards(): TemplateResult {
    const cards = sampleProductList.map(
        (product) =>
          html`
          <product-card
            id=${product.id}
            name=${product.title}
            imageSrc=${product.image}
            price=${product.price}
          ></product-card>
        `,
    );

    return html` <div class="cards">${cards}</div> `;
  }
}
