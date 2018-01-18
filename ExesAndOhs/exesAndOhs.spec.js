import {expect} from 'chai'
import {XO} from './exesAndOhs'

describe('XO', ()=>{
    it('should return a boolean', ()=>{
        expect(XO("xxx")).to.be.a('boolean')
    })

    it('should return true when equal x and o', ()=>{
        const result = XO('xxxooo')
        const expectedResult = true
        expect(result).to.eql(expectedResult)
    })

    it('should return false when unequal x and o', ()=>{
        const result = XO('xxxxfdsooo')
        const expectedResult = false
        expect(result).to.eql(expectedResult)
    })

    it('should return true when no x and o', ()=>{
        const result = XO('dsadsadsahgfdhgfd')
        const expectedResult = true
        expect(result).to.eql(expectedResult)
    })
})