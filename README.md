# MapHomeSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

### Demo



## Installation

- Fork and download code and run `yarn install` or `npm install`

- Goto https://developers.google.com/places/web-service/get-api-key, login with Goole account and click on `Get A Key` button
- Register google map API key and create file called `config.ts` in source directory
- After getting key paste key in file created above
  ```
  export const AppConfig = {
    API_KEY: '<API_KEY>'
  };

  ```

## Porject Overview

Motivation behind this project to explore anuglar fundamental concepts and app architecture, such as

> I tried to keep this project DRY and worked on SOLID principles, to easily understand

### Architecture
- Modules and Components which are used acorss application and kept in `app/core` directory
- Search Place is self contained module and kept in `app/place-search`
 - `Component` directory to keep (specific to place-search module) reuseable and common components
 - `Container` directory keep the search page and detail page
 - `service and module` are at root of `place-search` directory

### Core
- Components
- Templates
- Input
- Output
- Routing
- Services (Google Maps API)
- EventEmitters
- Resueable components
- Modules
