import {expect} from 'chai'
import {descendingOrder} from './DescendingOrder'

describe('descendingOrder', ()=>{
    it('should return a number', ()=>{
        expect(descendingOrder(123)).to.be.a('number')
    })
    it('should return a number sorted in desencending order', ()=>{
        const result = descendingOrder(132456789)
        const expectedResult = 987654321
        expect(result).to.eql(expectedResult)
    })
})