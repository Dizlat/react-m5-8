import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/countSlice";



export default function CountPage () {

    const dispatch = useDispatch()
    const { count } = useSelector( state => state.countReducer )
    const { percent } = useSelector( state => state.precentReducer ) 
 

    return (

        <>
            <h2>{percent} %</h2>
            <h2>{count}</h2>

            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}