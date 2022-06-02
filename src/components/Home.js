import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/authActions'

const Home = () => {
    const dispatch = useDispatch() 
   

  return (
    <Button className="text-warning" type='button' variant="primary"
                    onClick={()=>dispatch(logoutAsync())}>
                            Cerrar Sesion 
                        </Button>
  )
}

export default Home