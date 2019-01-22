# VCWB Elements API


## What is an element
The element is the independent part of the system which represents HTML based block with the ability to output media and dynamic content.

## How does it work?
The editor works with elements as React components. These components must be built with webpack and enqueued by API.
Every element has preview, thumbnail, category and React-based component.

### Element containment 

Elements contains
- manifest.json - describes element data, preview, thumbnail, category and php files.
- package.json - npm install/update files for required node modules
- webpack.config files to build a component with Webpack

Directory {tag} (must be renamed to src):
- index.js - the main file, build with Webpack
- component.js - ReactJs component contains VCWB editor component. This component is used only in the editor.
- settings.json - Describes element attributes
- *.php files - Required PHP files(must be described in ../manifest.json)
- editor.css - CSS files which will be used only in the editor
- style.css - CSS files which will be used on the frontend to display content.
- cssMixins - directory that holds POSTCSS (*.pcss) files with mixin for custom generated styles

### Requirements
- node > 8.0, recommended latest
- PHP > 5.4, recommended latest (7.2)

## Installation
- To work with the element, each element is independent
- Run `yarn install` in the element directory
- Build via `yarn build`
- Once the element is built it will appear in the editor

### Commands
```
yarn install // Install all the element dependencies (must be same as visualcomposer)
yarn build // Build development build
yarn watch // Watches & Build development version on file modification
yarn build-production // Builds the minified build
```
