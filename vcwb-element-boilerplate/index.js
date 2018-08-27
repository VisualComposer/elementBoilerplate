import vcCake from 'vc-cake'
import ElementBoilerplate from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    component.add(ElementBoilerplate)
  },
  // css settings // css for element
  {
    css: false,
    editorCss: require('raw-loader!./editor.css'),
    cssMixins: {
      boilerplateColorMixin: {
        mixin: require('raw-loader!./cssMixins/boilerplateColorMixin.pcss')
      }
    }
  }
)
