import React from 'react'
import GridItem from "../GridItem"
import * as C from "./styles"

const Grid = ({ items, setItems }) => {
    const onDelete = (ID) => {
        const newArray = items.filter((transaction) => transaction.id !== ID)
        setItems(newArray)
        localStorage.setItem("transactions", JSON.stringify(newArray))
    }


    return (
        <C.Table>
            <thead>
                <tr>
                    <C.Th width={40} >Descrição</C.Th>
                    <C.Th width={40} >Valor</C.Th>
                    <C.Th width={10} alignCenter >Tipo</C.Th>
                    <C.Th width={10} ></C.Th>
                </tr>
            </thead>
            <tbody>
                {items?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </tbody>
        </C.Table>
    )
}

export default Grid