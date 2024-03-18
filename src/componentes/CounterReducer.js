import {useReducer } from 'react';

const initialState = {
    resultado: 0
}

const reducer = (state, action)=>{
    switch(action.type){

        case "SUM":
            return{
                
                resultado: state.resultado + 1
            }
        case "REST":
            return{
                
                resultado: state.resultado -1
            }
        case "A_CERO":
            return{
                
                resultado: 0
            }
        default:
            return state;
                   
    }


}
function CounterReducer(){
    const [state, dispatch] = useReducer(reducer, initialState);



    return(
        <div>
        <button 
          type="button" 
          onClick={() => dispatch({ type: "SUM" })}> 
          + 
        </button>
        <button 
          type="button" 
          onClick={() => dispatch({ type: "REST" })}> 
          - 
        </button>
        <button 
          type="button" 
          onClick={() => dispatch({ type: "A_CERO" })}> 
          Poner a 0
        </button>
        <p>Resultado: {state.resultado}</p>
      </div>

    )

}
export default CounterReducer;