import React from 'react'
import vcCake from 'vc-cake'
const vcvAPI = vcCake.getService('api')

export default class ElementBoilerplate extends vcvAPI.elementComponent {
  render () {
    const { id, atts, editor } = this.props
    const { output, customClass, metaCustomId } = atts // destructuring assignment for attributes from settings.json with access public
    let elementBoilerplateClasses = 'vce-element-boilerplate'
    let wrapperClasses = 'vce-element-boilerplate-wrapper vce'
    let customProps = {}
    if (typeof customClass === 'string' && customClass) {
      elementBoilerplateClasses = elementBoilerplateClasses.concat(' ' + customClass)
    }

    let mixinData = this.getMixinData('boilerplateColorMixin')
    if (mixinData) {
      elementBoilerplateClasses = elementBoilerplateClasses.concat(` vce-element-boilerplate--color-${mixinData.selector}`)
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    const doAll = this.applyDO('all')

    return <div className={elementBoilerplateClasses} {...editor} {...customProps}>
      <div className={wrapperClasses} id={'el-' + id} {...doAll}>
        {output}
      </div>
    </div>
  }
}
