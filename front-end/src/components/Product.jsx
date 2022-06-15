import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardFindStyle,  CardImmStyle,  CardsStyle, ImgIgStyle, MainDivStyle } from '../styles/styleLandPage';
import { helpHttp } from '../helpers/helpHttp';
import { createAction, noAction, readAllAction } from '../redux/actions/crudActions';
import { NavLink } from 'react-router-dom';

const Product = () => {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const {db} = state.crud; 
  const [room, setRoom] = useState([])
  
  let api = helpHttp();
  let url = "https://openhostal.herokuapp.com/rooms";

  useEffect(() => {
   
    helpHttp()
      .get(url)
      .then((res) => {
      
        if (!res.err) {
          setRoom(res)
          dispatch(readAllAction(res));
          
        } else {
          dispatch(noAction());
         
        }
       
      });
  }, [url, dispatch]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //setDb([...db, res]);
        dispatch(createAction(res));
      } else {
       
      }
    });
  };

    // const pro = [1,2,3,4,5,6,7,8,9]
   
  return (
    <><MainDivStyle>
    <CardFindStyle>
        {
            room.map( (ele, index) =>(
            
                <CardsStyle key={index}>
                          <CardImmStyle>
                          <ImgIgStyle src={ele.foto[1]} />
                         </CardImmStyle>
                        <div>
                        <Card.Body>
                            <Card.Title>{ele.tipo}</Card.Title>
                            <Card.Text>
                            {ele.descripcion}
                            </Card.Text>
                  
                            {/* <NavLink product={db} to={`/descrip/${ele.id}`} ><Button variant="primary">Ver Producto</Button></NavLink> */}
                            <NavLink  to={`/descrip/${ele.id}`} ><Button variant="primary">Ver Producto</Button></NavLink>
                        </Card.Body>
                    </div>
              </CardsStyle>
            
            ))
        }
          </CardFindStyle>
              </MainDivStyle>
    </>
  )
}

export default Product