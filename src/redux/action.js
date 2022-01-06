const getData = (data) => ({
    type: "GET_PRODUCT",
    payload: data
})

// const isNumberInc = (item , id ) => ({
//   type: "INC",
//   payload : item,
 
// })

const isNumberDec = (item , id ) => ({
  type: "DEl",
  payload :  item,
  id : id
})
    
export { getData , isNumberDec };
