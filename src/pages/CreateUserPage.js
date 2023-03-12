import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../store/usersSlice"


export default function () {
    const dispatch = useDispatch()

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const { error, loading, success } = useSelector( state => state.usersReducer )

    const onSubmit = (e) => {
        e.preventDefault()

        name && email ? dispatch(createUser({name, email})) : alert("пустые поля")
    }
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">create user</button>
            </form>
            
            {   
                loading
                    ?
                    <p>идет загрузка</p>
                    :
                    error
                        ?
                        <p>{error}</p>
                        :
                        <p>{success}</p>
            }    
            
        </>

    )
}