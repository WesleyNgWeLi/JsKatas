const buildArr = (start,end) => {
    start>end ? [start, end] = [end, start]  : [start, end]
    return Array(end-start+1).fill()
            .map((_, idx)=> start + idx)
}

const getSum = (start, end) => 
    buildArr(start,end)
    .reduce((a,b)=>a+b, 0)

export {buildArr, getSum}