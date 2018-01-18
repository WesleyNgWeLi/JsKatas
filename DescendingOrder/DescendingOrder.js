const descendingOrder = (n) =>
    parseInt(String.prototype.split.apply(n, [''])
    .sort(function(a,b) {return b-a})
    .join(''))
  

export {descendingOrder}