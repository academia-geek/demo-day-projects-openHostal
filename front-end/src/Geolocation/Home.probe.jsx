import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


//  se crea un componente que se encarga de mostrar la informacion de la ubicacion 
// actual del usuario, se prueba este componente ya que el front end no se muestra
// en el navegador


const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    // se imprime la ubicacion actual del usuario 
    //despues de otorgar el permiso


    <div>
      <h1>Geolocation</h1>
      <p>Latitude: {state.latitude}</p>
      <p>longitude: {state.longitude}</p>

      <Link
        to={{
          pathname: "/map",
          // state: {
          //   hello: 'world'
          // }
          state,
        }}
      >
        See marker
      </Link>
    </div>
  );
};

export default Home;
