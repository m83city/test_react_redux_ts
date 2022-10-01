import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { useState } from "react";
export const Counter = () =>{
    const dispatch = useDispatch();
    const count = useSelector((state:any) => state.counter.count);
    const [incrementAmount, setIncrementAmount ] = useState(0);

    const setIncrement  = (e:string) =>{
        const number = Number(e)?Number(e):0
        setIncrementAmount(number)
    } 
    const  resetState = () =>{
        setIncrementAmount(0);
        dispatch(reset());

    }


    return(
        <>
        <h1>{count}</h1>

        <div>
            <input  onChange={(e) =>{setIncrement(e.target.value)}} value={incrementAmount} ></input> 
            <button onClick={resetState}  >Reset</button>
            <button onClick={()=>{dispatch(incrementByAmount(incrementAmount))}} >Increment by Amount</button>

        </div>


        <div>
        <button onClick={()=>{dispatch(increment())}}> + </button>
        <button onClick={()=>{dispatch(decrement())}}> - </button>
        </div>
        </>
        )
}