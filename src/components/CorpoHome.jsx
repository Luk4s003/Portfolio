import React from 'react';
import Foto from './Foto';
import './style/corpoHome.css'

export default (props) => (
    <div className='corpo'>
        <Foto />
        <div className='apresentacao'>
            <h2>Lukas Reis de Oliveira</h2>
            <p className='subtitulo'>Desenvolvedor Front-End</p>
            <hr />
            <p className='textoCorpo'>Me chamo Lukas, tenho {calculaIdade()} anos. Sou um desenvolvedor de aplicações web, apaixonado por tecnologia e o que ela nos fornece </p>
        </div>
    </div>
)

let calculaIdade = () => {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +2003,
        mes_aniversario = +4,
        dia_aniversario = +9,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos;
}