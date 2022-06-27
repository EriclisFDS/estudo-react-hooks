import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
    const n = parseInt(num);
    if(n < 0) return -1;
    if(n ===0) return 1;
    return calcFatorial(n - 1) * n;
}

function calcParOuImpar(num) {
    const n = parseInt(num);
    const result = n % 2;
    if(n === 0 || num === "" ) return 0;
    return result === 0 ? "Par" : "Impar";
}

function UseEffect(props) {

    const [number, setNum] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    const [number2, setNum2] = useState(0);
    const [parOuImpar, setParOuImpar] = useState("0");

    useEffect(function() {
        setFatorial( calcFatorial(number) )
    }, [number]);

    useEffect(function(){
        if(fatorial > 1000000){
            document.title = "Eita!!!"
        }
    }, [fatorial]);

    useEffect(function(){
        setParOuImpar( calcParOuImpar(number2) )
    }, [number2]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />

            <div className="center">
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Nao existe' : fatorial }</span>

                </div>
                <input 
                    type="number" 
                    className='input'
                    value={number}
                    onChange={ e => setNum( e.target.value ) }
                />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <label htmlFor="parimpar" className="text">Status: </label>
                    <span id="parimpar" className="text red">{ parOuImpar }</span>

                    <input 
                    type="number" 
                    className='input'
                    value={number2}
                    onChange={ e => setNum2( e.target.value ) }
                />
                </div>
            </div>

        </div>
    )
}

export default UseEffect
