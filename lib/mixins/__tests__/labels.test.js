import * as label from '../labels'
import { shallow } from 'enzyme'
import styled from 'styled-components'
import 'jest-styled-components'
import React from 'react'

describe('mixin: label', () => {
  describe('label_variant', () => {
    it('should accept named color', () => {
      const Comp = styled.span`
        ${label.label_variant('white')}
      `
      const wrapper = shallow(<Comp>styled label</Comp>)
      expect(wrapper).toHaveStyleRule('background-color', 'white')
      expect(wrapper).toMatchSnapshot()
    })

    it('should accept web color', () => {
      const Comp = styled.span`
        ${label.label_variant('#fff')}
      `
      const wrapper = shallow(<Comp>styled label</Comp>)
      expect(wrapper).toHaveStyleRule('background-color', '#fff')
      expect(wrapper).toMatchSnapshot()
    })

    it('should accept hsl color', () => {
      const hsl = 'hsl(0,0%,100%)'
      const Comp = styled.span`
        ${label.label_variant(hsl)}
      `
      const wrapper = shallow(<Comp>styled label</Comp>)
      expect(wrapper).toHaveStyleRule('background-color', hsl)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
