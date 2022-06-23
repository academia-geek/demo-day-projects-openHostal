import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { BtnStyle, FormLanStyle } from '../styles/styleLandPage';
import { DateRangePicker } from 'rsuite';
import { useEffect } from 'react';
import hostales from '../mocks/hostal.json';
import { useDispatch } from 'react-redux';
import { agregarFiltro } from '../redux/actions/reservasActions';

const personalBusqueda = {
    ciudad: null,
    checkIn: null,
    checkOut: null,
    cantPersonas: null
}

const FormSearch = (props) => {
    const dispatch = useDispatch();
    const {hostals, setHostals, setRooms} = props;
    const [errorQuantity, setErrorQuantity] = useState(null);
    const [errorCity, setErrorCity] = useState(null);
    const [errorPicker, setErrorPicker] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { beforeToday } = DateRangePicker;
    const [busquedaInfo, setBusquedaInfo] = useState(personalBusqueda);
    

    useEffect(()=>{
        console.log('---')
        validateNumber(quantity);
    }, [quantity]);


    // function calcular(a, b) {
    //     let fecha1 = Date.UTC(a.getFullYear(), a.getMonth(), b.getDate);
    //     let fecha2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate);
    //     let diferencia = (a - b) / (1000 * 60 * 60 * 24);
    //     return Math.floor(diferencia);
    // }
    const handleDates = (e) => {
        if(e){
            setBusquedaInfo({
                ...busquedaInfo,
                checkIn: e[0],
                checkOut: e[1]
            });
            setErrorPicker(null);
        } else {
            setErrorPicker('Elige un rango de fechas');
            setBusquedaInfo({
                ...busquedaInfo,
                checkIn: null,
                checkOut: null
            });
        }
    }

    const handleSearch = () => {
        !busquedaInfo.ciudad ? setErrorCity('Elige una ciudad') : setErrorCity(null);
        !busquedaInfo.checkIn ? setErrorPicker('Elige un rango de fechas') : setErrorPicker(null);
        if (validateNumber(quantity) && busquedaInfo.ciudad && busquedaInfo.checkIn) {
            setHostals(hostales.hostales.filter((hostal) => hostal.ciudad === busquedaInfo.ciudad));
            dispatch(agregarFiltro(busquedaInfo));
            setRooms(null);
        }
        else {
            if (!busquedaInfo.cantPersonas) {
                setErrorQuantity('Elige la cantidad de personas')
            }
        }
    }

    const validateNumber = (quantity) => {
        if (Number.isInteger(quantity) && quantity > 0 && quantity <= 4) {
            setBusquedaInfo({
                ...busquedaInfo,
                cantPersonas: quantity,
            });
            setErrorQuantity(null);
            return true
        }
        else{
            setErrorQuantity('Reserva maxima 4 personas, revise')
            return false
        }
    }

    const handlePeople = (e) => {
        setQuantity(parseFloat(e.target.value));
    }

    const handleCity = (e) => {
        setBusquedaInfo({
          ...busquedaInfo,
          ciudad: e.target.value,
        });
        setErrorCity(null);
      }
    return (
        <>
            <FormLanStyle>
                <Form.Group className="mx-2 col-lg-3">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Select 
                        type="text"
                        name="ciudad"
                        isInvalid={errorCity}
                        onChange={handleCity}
                        defaultValue='null'
                    >
                        <option value='null' disabled>Seleccionar destino</option>
                        <option value='Bogota' >Bogota</option>
                        <option value='Medellin' >Medellin</option>
                        <option value='Santa Marta' >Santa Marta</option>
                    </Form.Select>
                    {
                        errorCity ? 
                        <Form.Text className="text-muted">
                            {errorCity}
                        </Form.Text>: null
                    }
                </Form.Group>
                <Form.Group className="mx-2 col-lg-3">
                    <Form.Label>Fechas</Form.Label>
                    <div className="form-group">
                        <DateRangePicker
                            method="get"
                            name="checkIn"
                            className="text-dark date-picker"
                            placeholder="CheckIn, CheckOut"
                            disabledDate={beforeToday()}
                            // value={busquedaInfo.checkIn}
                            onChange={handleDates}
                        />
                    </div>
                    {
                        errorPicker ? 
                        <Form.Text className="text-muted">
                            {errorPicker}
                        </Form.Text>: null
                    }
                </Form.Group>
                <Form.Group className="mx-2 col-lg-3">
                    <Form.Label>Cantidad de personas </Form.Label>
                        <Form.Control
                            type="number"
                            className="text-dark"
                            placeholder="Cantidad personas"
                            onChange={handlePeople}
                            value={isNaN(quantity) ? '': quantity}
                            maxLength="2"
                            isInvalid={errorQuantity}    
                        />
                    {
                        errorQuantity ? 
                        <Form.Text className="text-muted">
                            {errorQuantity}
                        </Form.Text>: null
                    }
                    
                </Form.Group>
                <BtnStyle onClick={handleSearch}>Buscar </BtnStyle>
            </FormLanStyle>
        </>
    )
}

export default FormSearch