/*
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  StorefrontComponent,
  StorefrontModule,
  translations,
  defaultCmsContentConfig,
} from '@spartacus/storefront';

import { environment } from '../environments/environment';
import { ConfigModule } from '@spartacus/core';

const devImports = [];

if (!environment.production) {
  devImports.push(StoreDevtoolsModule.instrument());
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'spartacus-app' }),
    BrowserTransferStateModule,
    StorefrontModule.withConfig({
      production: environment.production,
      server: {
        baseUrl: environment.occBaseUrl,
      },
      pwa: {
        enabled: true,
        addToHomeScreen: true,
      },
      siteContext: {
        urlEncodingParameters: ['BASE_SITE', 'LANGUAGE', 'CURRENCY'],
        parameters: {
          BASE_SITE: {
            values: ['electronics-spa', 'apparel-de', 'apparel-uk'],
            defaultValue: 'electronics-spa',
            persistence: 'route',
          },
        },
      },
      routesConfig: {
        translations: {
          default: {
            product: {
              paths: ['product/:productCode', 'product/:name/:productCode'],
            },
          },
        },
      },
      i18n: {
        resources: translations,
      },
    }),

    ConfigModule.withConfigFactory(defaultCmsContentConfig),
    ...devImports,
  ],

  bootstrap: [StorefrontComponent],
})
export class AppModule {}
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StorefrontModule } from '@spartacus/storefront';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StorefrontModule.withConfig({
      server: {
        baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
