 const initialState ={
   children:{}
 };
  
  const toolbar = (state = initialState, action: any) => {
    switch (action.type) {
      case "GET_TOOLBAR_SUCCESS":
        state.children = action.value.payload.children;
        console.log("toolbar state::",state)
        console.log("toolbar action::",action)
        return state;
     
      default:
        return state;
    }
  };
  
  export default toolbar;
  