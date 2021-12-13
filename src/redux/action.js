const getData = (data) => ({
    type: "GET_PRODUCT",
    payload: data
})

const isNumberInc = (item , id ) => ({
  type: "INC",
  payload : item,
  id : id,
 
})

const isNumberDec = (item , id ) => ({
  type: "DEC",
  payload :  item,
  id : id
})
    
export { getData , isNumberInc , isNumberDec };
