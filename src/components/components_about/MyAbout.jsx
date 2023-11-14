import styled from "@emotion/styled";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import ImgLogoPj from "../../assets/images/photos/img-experiencia-laboral/logo-pj.png";
import ImgLogoOnpe from "../../assets/images/photos/img-experiencia-laboral/logo-onpe.jpg";
import ImgLogoBitel from "../../assets/images/photos/img-experiencia-laboral/logo-bitel.png";
import Codeable from "../../assets/images/codeable.png";
import Unamba from "../../assets/images/unamba.png";

const GridAbout = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 1rem;
`;

const ItemHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

const MyAbout = () => {
  return (
    <GridAbout>
      <Item>
        <H2 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {" "}
          <IoSchoolSharp style={{ color: "red" }} />
          Educacion
        </H2>
        <ItemHeader>
          <div style={{ display: "flex", gap: "8px" }}>
            <Img src={Codeable} alt="img-codeable" />
            <H3>Codeable (www.codeable.la)</H3>
          </div>
          <div>
            <P style={{ fontStyle: "italic" }}>Lima, Peru 2023</P>
          </div>
        </ItemHeader>
        <P style={{ marginLeft: "20px" }}>
          Programa educativo intensivo de desarrollo web full-stack (tiempo
          completo, 6 meses
        </P>
        <ItemHeader>
          <div style={{ display: "flex", gap: "8px" }}>
            <Img src={Unamba} alt="img-unamba" />
            <H3>Universidad Nacional Micaela Bastidas de Apurimac</H3>
          </div>
          <div>
            <P style={{ fontStyle: "italic" }}>Abancay, Perú 2010 - 2016</P>
          </div>
        </ItemHeader>
        <P style={{ marginLeft: "20px" }}>Ing. Informático y Sistemas</P>
      </Item>
      <hr
        style={{
          border: "3px solid green",
          width: "100%",
          borderRadius: "8px",
        }}
      />
      <Item>
        <H2 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {" "}
          <MdWork style={{ color: "green" }} />
          Experiencia
        </H2>
        <ItemHeader>
          <div style={{ display: "flex", gap: "8px" }}>
            <Img src={ImgLogoPj} alt="img-pj" />
            <H3>Corte Superior de Justicia de Apurimac</H3>
          </div>
          <div>
            <P style={{ fontStyle: "italic" }}>Abancay 2018 - 2022</P>
          </div>
        </ItemHeader>
        <P style={{ marginLeft: "20px" }}>
          Entidad del sistema judicial del Perú encargada de administrar
          justicia a través de sus órganos jurisdiccionales.
          <br />
          <i>
            Apoyo Administrativo - Area de Estadistica e Informatica 2018 – 2022
          </i>
          <br />
          <i>
            Apoyo en Soporte Tecnico- Area de Estadistica e Informatica 2018
          </i>
        </P>
        <ItemHeader>
          <div style={{ display: "flex", gap: "8px" }}>
            <Img src={ImgLogoOnpe} alt="img-onpe" />
            <H3>Oficina Nacional de Procesos Electorales - ONPE</H3>
          </div>
          <div>
            <P style={{ fontStyle: "italic" }}>Abancay 2022</P>
          </div>
        </ItemHeader>
        <P style={{ marginLeft: "20px" }}>
          Es la autoridad máxima en la organización y ejecución de los procesos
          electorales, de referéndum y otros tipos de consulta popular a su
          cargo.
          <br />
          <i>Operador de Centro de Computo</i>
        </P>
        <ItemHeader>
          <div style={{ display: "flex", gap: "8px" }}>
            <Img src={ImgLogoBitel} alt="img-bitel" />
            <H3>Bitel Peru S.A.C</H3>
          </div>
          <div>
            <P style={{ fontStyle: "italic" }}>Abancay 2017 - 2018</P>
          </div>
        </ItemHeader>
        <P style={{ marginLeft: "20px" }}>
          Marca de servicios de telecomunicaciones con la que la empresa
          vietnamita Viettel Telecom se identifica comercialmente en Perú
          <br />
          <i>Colaborador Técnico O & M</i>
        </P>
      </Item>
    </GridAbout>
  );
};

export default MyAbout;
