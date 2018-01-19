import {expect} from 'chai'
import {buildArr, getSum} from './SumOfNumbers'

describe('buildArr', ()=>{
    it('should return an array',()=>{
        expect(buildArr(1,4)).to.be.an('array')
    })

    it('should return a populated array with correct range',()=>{
        const result = buildArr(1, 3)
        const expectedResult = [1, 2, 3]
        expect(result).to.eql(expectedResult)
    })
})

describe('getSum', ()=>{
    it('should return a number', ()=>{
        expect(getSum(1,3)).to.be.a('number')
    })
    it('should return the sum of input range', ()=>{
        const result = getSum(0, -1)
        const expectedResult = -1
        expect(result).to.eql(expectedResult)
    })
    it('should return the sum of input range', ()=>{
        const result = getSum(0, 1)
        const expectedResult = 1
        expect(result).to.eql(expectedResult)
    })
})