import React from 'react';
import { BsWifi, BsSnow2, BsFillDice5Fill, BsPersonBoundingBox, BsFillGiftFill } from "react-icons/bs";
import { BootonStyle, CardImgStyle, CarDivStyle, CarHStyle, CartabStyle, CarthStyle, HDivStyle, IconCStyle, IconIIStyle, ImgDivStyle, PDivStyle, TitlesDivStyle } from '../styles/styleLandPage'

const MainInfo = () => {
  return (
    <>
    <ImgDivStyle>
        <TitlesDivStyle >
          <HDivStyle>
            Tus Mejores
            Momentos Esperan
          </HDivStyle>
          <PDivStyle>Hospedajes al menor precio, inolvidable experiencia </PDivStyle>
          <PDivStyle><BsFillGiftFill />   EL MEJOR REGALO . . .</PDivStyle>
        </TitlesDivStyle>
        <CarDivStyle>
          <div>
            <CarHStyle>Todo Incluido</CarHStyle>
            <CartabStyle>
              <thead>
                <tr>
                  <CarthStyle>Wifi</CarthStyle>
                  <CarthStyle>Juegos</CarthStyle>
                  <CarthStyle>Aire</CarthStyle>
                  <CarthStyle>Servicio</CarthStyle>
                </tr>
                <IconCStyle>
                  <IconIIStyle><BsWifi /></IconIIStyle>
                  <IconIIStyle> <BsFillDice5Fill /></IconIIStyle>
                  <IconIIStyle> <BsSnow2 /></IconIIStyle>
                  <IconIIStyle><BsPersonBoundingBox /></IconIIStyle>
                </IconCStyle>
              </thead>
            </CartabStyle>
          </div>
          <CardImgStyle>
            <p>Hospedaje para ti</p>
            <p>5 dias 6 noches</p>
            <BootonStyle> $890.000</BootonStyle>
          </CardImgStyle>
        </CarDivStyle>
      </ImgDivStyle>

    </>
  )
}

export default MainInfo