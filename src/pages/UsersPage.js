import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import { getUsers } from "../store/usersSlice";



export default function () {

    const dispatch = useDispatch()
    const { users, error, loading } = useSelector( state => state.usersReducer )

    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <>
            <h1>Users List</h1>
            {   
                loading
                    ?
                    <p>loading...</p>
                    :
                    error
                        ?
                        <p>{error}</p>
                        :
                        users.map( user => <User user={user} key={user.id}/>)
            }
        </>
    )
}