import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Wcard from '../Components/Wcard'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const Data = useSelector((state) => state.Wish.value)

  return (
    <section className='mt-20 mb-20'>
      <Container>

        <div className='flex justify-between items-center'>
          <h4 className='font-pop font-normal text-xl text-black'>
            Wishlist ({Data.length})
          </h4>

          <Button
            className='bg-white text-black border border-black/50 hover:bg-black hover:border-transparent hover:text-white'
            Text='Move All To Bag'
          />
        </div>

        <div className='mt-15 flex gap-x-7.5 flex-wrap'>
          {Data.map((item) => (
            <Wcard
              key={item.id}
              id={item.id}
              src1={item.image}
              Text={item.title}
              value1={item.price}
              value2={item.price2}
            />
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Wishlist