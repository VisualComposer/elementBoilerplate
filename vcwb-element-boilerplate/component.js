import React from 'react'
import vcCake from 'vc-cake'
const vcvAPI = vcCake.getService('api')

export default class ElementBoilerplate extends vcvAPI.elementComponent {
  render () {
    let { id, atts, editor } = this.props
    let { output, customClass, metaCustomId } = atts // destructuring assignment for attributes from settings.json with access public
    let textBlockClasses = 'vce-element-boilerplate-block'
    let wrapperClasses = 'vce-element-boilerplate-wrapper vce'
    let customProps = {}
    if (typeof customClass === 'string' && customClass) {
      textBlockClasses = textBlockClasses.concat(' ' + customClass)
    }

    let mixinData = this.getMixinData('boilerplateColorMixin')
    if (mixinData) {
      textBlockClasses.concat(` vce-element-boilerplate-block--color-${mixinData.selector}`)
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    let doAll = this.applyDO('all')

    return <div className={textBlockClasses} {...editor} {...customProps}>
      <div className={wrapperClasses} id={'el-' + id} {...doAll}>
        {output}
      </div>
    </div>
  }
}
