import React from "react"
import Header from "./Header"
import Journal from "./Journal"
import data from "./data"

export default function Main(){
    const places = data.map(item => {
        return (
            <Journal
             key={item.id}
             {...item}
            />
        )
    })
    return (
        <>
        <Header/>
        <section>
         {places}
        </section>
        
        </>
    )
}