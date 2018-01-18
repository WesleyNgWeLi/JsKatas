import {expect} from 'chai'
import {hoopCount} from './KeepUpTheHoop'

describe('hoopCount', ()=>{
    it('should return a boolean', ()=>{
        expect(hoopCount(5)).to.be.a('string')
    })

    it('should return Keep at it until you get it when less than 10', ()=>{
        const result = hoopCount(3)
        const expectedResult = "Keep at it until you get it"
        expect(result).to.eql(expectedResult)
    })

    it('should return Great, now move on to tricks when 10 or more', ()=>{
        const result = hoopCount(10)
        const expectedResult = "Great, now move on to tricks"
        expect(result).to.eql(expectedResult)
    })


})