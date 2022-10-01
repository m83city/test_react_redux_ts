import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
export const Counter = () =>{
    const dispatch = useDispatch();
    const count = useSelector((state:any) => state.counter.count);

    return(
        <>
        <p>{count}</p>
        <button onClick={()=>{dispatch(increment())}}> + </button>
        <button onClick={()=>{dispatch(decrement())}}> - </button>
        </>
        )
}