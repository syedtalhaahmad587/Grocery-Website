
const INITIAL_STATE = {
  product: [],
  quantity: 0,
  totalPrice: 0,
  updateInc : 0,
  

};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
           const check = state.product.find((item) => item.id ===  action.payload.id)
           console.log(check);
             if(check) {
                    const increment = state.product.map(item => {
                          if(action.payload.id === item.id) {
                               item.count = action.payload.count
                              item.total = item.price * Number(action.payload.count) 
                          
                                                                                                                               
                          } 
                          return item;
                    } )
                    return {
                      ...state,
                      product: increment
                    }
                   console.log(action, increment)
                  }else{
                let cart_product = action.payload 
                console.log(cart_product);  
                let updatedQyt  = state.quantity + 1 
                let updatePrice = state.totalPrice + action.payload.price 
                return {
                  product : [cart_product , ...state.product ], 
                  totalPrice : updatePrice,
                  quantity : updatedQyt,
                

                }  
             }   
              
          break; 

           default:
      return state
  }
} 


export default reducer;

 