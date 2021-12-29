import React, {useContext} from 'react'
import { TempUnitContext } from '../Context/TempUnit';

export default function ButtonTempUnit(props) {
    const {tempUnit, setTempUnit} = useContext(TempUnitContext);

    const changeTempUnit = (unit) => {
        setTempUnit(unit);
    }

    //bg-[#E7E7EB]
    //bg-[#585676]

    return (
        <button className={`${tempUnit == props.tempUnit ? "bg-[#E7E7EB] text-[#110E3C]" : "bg-[#585676] text-white"} p-1.5 rounded-full mr-4 w-10 h-10  font-bold text-[18px]`} onClick={() => changeTempUnit(props.tempUnit)}>°{props.tempUnit}</button>
    )
}
