import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { signIn } from '../../Controllers/Redux/authSlice'
import './login.css'

export default()=> {
    const dispatch = useDispatch();

    const [formImput, setFormImput]=useState({
        name:'',
        password:''
    })

    function imputChanged(e){
        setFormImput({
            ...formImput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        dispatch(signIn(formImput));
        e.preventDefault();
    }

    return(
        <div className='loginBG'>
            <form className='login-panel'>
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange={imputChanged} value={formImput.name}/>
                <input name='password' type='password' placeholder='Password' onChange={imputChanged} value={formImput.password}/>
                <button type='submit' onClick={submit}>Login</button>

            </form>
        </div>
    )
}