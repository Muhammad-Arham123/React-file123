import react, { useEffect, useState } from 'react'
import Cards from './Cards'

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((result) => {
                // console.log(result)
                setData(result)
            })
        console.log(data)
    })
    return (
        <>
            <div className="container">
                <div className="row">

                    {
                        data.map((v,i) => {
                            return (
                                <Cards key={i} imgUrl={v.image} PName={v.title} Pdesc={v.description} />
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}