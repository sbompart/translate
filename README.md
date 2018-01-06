# Translate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Instalacion de ngx-translate

npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader

## Importar librerías necesarias

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

## Crear funcion que retornará un TranslateHttpLoader

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

## Agregar al @ngModule

imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
  
  ## Importar en el app.component.ts
  
  import { TranslateService } from '@ngx-translate/core';
  
  /*------ Inyectar en el constructor ------*/
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
  /*------ Crear los archivos tipo .json de distintos idiomas ------*/
