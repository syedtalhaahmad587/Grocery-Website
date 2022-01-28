
const INITIAL_STATE = {
  product: [],
  quantity: 0,
  total: 0,
  updateInc : 0,
  

};

const reducer = (state = INITIAL_STATE, action) => {
  let updatePrice = 0
  switch (action.type) {
    case 'GET_PRODUCT':
           const check = state.product.find((item) => item.id ===  action.payload.id)
             if(check) {
                    const increment = state.product.map(item => {
                          if(action.payload.id === item.id) {
                               item.count = action.payload.count
                               item.price = item.price *  item.count
                              item.total = item.price * Number(action.payload.count)                                                                              
                          }
                           
                          return item;
                        
                    } )
                   
                    return {
                      ...state,
                      product: increment
                    }
                   
                  }else{
                let cart_product = action.payload 
                console.log(cart_product)
                let updatedQyt  = state.quantity + 1;
                 let updatePrice = state.total  + cart_product.price
                return {
                  product : [cart_product , ...state.product ], 
                  total: updatePrice,
                  quantity : updatedQyt,
                

                }  
             }   
              
          break; 
          case "DEl" : 
                  let filtered = state.product.filter(product => product.id !== action.id)
                  console.log(state.product)
                  let cart =  action.payload
                  
                  console.log(cart)
                  let updatedQunt =  state.quantity - 1 ;
                  console.log(updatedQunt)
                  let uptedPrice = state.total - cart.price * Number(state.quantity)  
              return {
                   product : [...filtered] , total : uptedPrice ,quantity : updatedQunt    
              }
           default:
      return state
  }
} 


export default reducer;

 