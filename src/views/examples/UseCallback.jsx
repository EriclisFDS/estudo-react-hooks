import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import ButtonsCallback from './ButtonsCallback';

function UseCallback(props) {

    const [count, setCount] = useState(0);

    const inc = useCallback(function (delta){
        setCount( curr => curr + delta )
    }, [setCount] )
    
    // function inc(delta) {
    //     setCount(count + delta)
    // }
    
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{ count }</span>

                <ButtonsCallback inc={ inc }></ButtonsCallback>
                
            </div>
        </div>
    );
}

export default UseCallback
