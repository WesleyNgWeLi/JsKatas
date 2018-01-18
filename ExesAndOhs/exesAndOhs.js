const XO= (str) => {
    const result = str.toUpperCase();
    const xCount = result.match(/X/g)
    const yCount = result.match(/O/g)
    if(xCount === null && yCount === null)
        return true
    else if(xCount === null || yCount === null)
        return false
        
    return(xCount.length === yCount.length) 
}


export  {XO}