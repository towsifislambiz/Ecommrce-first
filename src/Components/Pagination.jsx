import { useEffect, useState } from "react";
import * as ReactPaginateModule from "react-paginate";
import Card from "./Card";
import Fs5 from '../assets/Fs5.png'
import Container from "./Container";

const ReactPaginate = ReactPaginateModule.default.default;



function Pagination({ itemsPerPage }) {
  let [alldata , SetAlldata]=useState([])

useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>SetAlldata(data.products))
}, [])

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = alldata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(alldata.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % alldata.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
<Container>
  <div className="flex justify-between items-center ">
  <ReactPaginate
  breakLabel="..."
  nextLabel="Next >"
  previousLabel="< Prev"
  onPageChange={handlePageClick}
  pageCount={pageCount}
  pageRangeDisplayed={3}
   marginPagesDisplayed={0}
  containerClassName="flex gap-x-4 mt-35 mb-10 items-center"

  pageClassName="border border-black"
  pageLinkClassName="bg-white text-black py-2 px-7 cursor-pointer block"

  activeLinkClassName="!bg-black !text-white"

  previousLinkClassName="border px-4 py-2 cursor-pointer block"
  nextLinkClassName="border px-4 py-2 cursor-pointer block"
/>

<div className="mt-22 flex gap-x-7.5">

  <span className="font-bold text-xl font-pop text-black border border-black py-2 px-4 rounded">start : {itemOffset+1}</span>
  <span className="font-bold text-xl font-pop text-black border border-black py-2 px-4 rounded">end : {Math.min(endOffset, alldata.length)}</span>
  <span className="font-bold text-xl font-pop text-black border border-black py-2 px-4 rounded">total : {alldata.length}</span>

</div>
</div>
</Container>
    </>
  );
}

function Items({ currentItems }) {
  return (
    <div className="flex gap-x-11 gap-y-4 flex-wrap">
      {currentItems.map((item) => (
        <div key={item}>
         <Card
  key={item.id}
  id={item.id}
  src1={item.thumbnail}
  Text={item.title}
  value1={`$${item.price}`}
  src2={Fs5}
  num={item.stock}
/>
        </div>
      ))}
    </div>
  );
}

export default Pagination;