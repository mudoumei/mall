import{
  ADD_COUNTER,
  ADD_TO_CART
}from './mutations_type'
export default{
  addCart(context,payload){
    let oldProduct = context.state.cartList.find(item => item.id===payload.id)
    if(oldProduct){
      context.commit(ADD_COUNTER,oldProduct)
    }else{
      payload.count=1;
      context.commit(ADD_TO_CART,payload)
    }      
  }
}