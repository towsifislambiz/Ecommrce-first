import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Heading from '../Components/Heading'
import Button from '../Components/Button'
import Card from '../Components/Card'
import Fs5 from '../assets/Fs5.png'

const Product = () => {
  const START_INDEX = 5
  const INITIAL_SHOW = 9

  const [alldata, SetAlldata] = useState([])
  const [show, SetShow] = useState(INITIAL_SHOW)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => SetAlldata(data.products))
  }, [])

  

  return (
    <section className='mb-[140px]'>
      <Container>
        <Button2 className='text-c1 text-base' Text='This Month' />

        <div className='flex justify-between items-center mt-5 mb-15'>
          <Heading Text='Best Selling Products' />

          {show < alldata.length && (
            <div onClick={() => SetShow(alldata.length)}>
              <Button
                className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
                Text="View All"
              />
            </div>
          )}
        </div>

        <div className='flex gap-7.5 flex-wrap mb-15'>
          {alldata.slice(START_INDEX, show).map((item) => (
            <Card
              key={item.id}
                id={item.id}
              src1={item.thumbnail}
              Text={item.title}
              value1={`$${item.price}`}
              value2="$160"
              src2={Fs5}
              num={item.stock}
            />
          ))}
        </div>

        <div className='flex justify-center'>
          {show >= alldata.length && (
            <div onClick={() => SetShow(INITIAL_SHOW)}>
              <Button
                className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
                Text="Less All Products"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Product