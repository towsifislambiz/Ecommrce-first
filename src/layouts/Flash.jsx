import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Heading from '../Components/Heading'
import Countdown from '../Components/Countdown'
import Cross from '../Components/Cross'
import Card from '../Components/Card'
import Fs5 from '../assets/Fs5.png'
import Button from '../Components/Button'

const Flash = () => {
  const [alldata, SetAlldata] = useState([])
  const [saleEnded, setSaleEnded] = useState(false)
  const [show, SetShow] = useState(4)

  // Flash Sale End Check
  const FLASH_SALE_DATE = "2026-07-20T23:59:59";
useEffect(() => {
  const targetDate = new Date(FLASH_SALE_DATE).getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();



    if (now >= targetDate) {
      console.log("Sale Ended");
      setSaleEnded(true);
      clearInterval(timer);
    }
  }, 1000);

  return () => clearInterval(timer);
}, []);

  // Fetch Products
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => SetAlldata(data.products))
  }, [])

  return (
    <section className="mt-[140px] mb-20">
      <Container>
        <div className="relative w-full border-b border-black/30">

          {/* Overlay */}
          {saleEnded && (
           <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-[radial-gradient(circle,#B91C1C_0%,#3F0000_35%,#111111_75%,#000000_100%)] backdrop-blur-lg  ">

    <div className="w-[500px] bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-10 text-center shadow-[0_0_50px_rgba(0,0,0,0.4)]">

      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center">
        <span className="text-5xl">⏰</span>
      </div>

    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500 rounded-full px-5 py-2 mb-6 animate-pulse cursor-pointer">
  🔥 Flash Sale Ended
</div>

      <p className="text-gray-300 mt-4 text-lg leading-8">
        This limited-time offer has ended.
        Stay tuned for our next exclusive flash sale.
      </p>

      <button
        className="mt-8 px-8 py-3 bg-red-500 rounded-lg text-white font-semibold cursor-not-allowed opacity-80"
      >
        Sale Closed
      </button>

    </div>

  </div>
          )}

          <div className="relative z-0">
            <Button2 className="text-c1 text-base" Text="Today’s" />

            <div className="mt-6 flex justify-between mb-10">
              <Heading Text="Flash Sales" />
              <Cross />
              <Countdown
                className="absolute top-[50px] left-[300px]"
                 targetDate={FLASH_SALE_DATE}
              />
            </div>
          </div>

          <div className="flex gap-7.5 flex-wrap mb-15">
            {alldata.slice(0, show).map((item) => (
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

          <div className="flex gap-x-5 justify-center mb-[76px]">
            {show > 4 && (
              <div
                className="mb-4"
                onClick={() => !saleEnded && SetShow(show - 4)}
              >
                <Button
                  className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
                  Text="Less Products"
                />
              </div>
            )}

            {show < alldata.length && (
              <div onClick={() => !saleEnded && SetShow(show + 4)}>
                <Button
                  className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
                  Text="View All Products"
                />
              </div>
            )}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Flash