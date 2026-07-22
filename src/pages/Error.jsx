import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";

import Subnav from "../layouts/Subnav";
import Navber from "../layouts/Navber";
import { activeuser } from "../slices/BreadcrumbSlice";
import Footer from "../layouts/Footer";

const Error = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.breadcrumb.history);

  useEffect(() => {
    dispatch(activeuser("Error"));
  }, []);

  return (
    <div>
      <Subnav />
      <Navber />

      {/* Breadcrumb */}
      <div className="container mx-auto">
        <p className="flex items-center text-sm my-10">
          {history.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              {index > 0 && (
                <span className="mx-2">
                  <RxSlash />
                </span>
              )}

              {index === history.length - 1 ? (
                <span>{item}</span>
              ) : (
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => dispatch(activeuser(item))}
                >
                  <span className="text-black/50 hover:text-black duration-300">
                    {item}
                  </span>
                </Link>
              )}
            </React.Fragment>
          ))}
        </p>

        {/* Error Content */}
        <div className="flex flex-col items-center justify-center py-40">
          <h1 className="text-8xl font-bold text-red-500">404</h1>
          <h2 className="text-[110px] font-semibold mt-2">
            Page Not Found
          </h2>
          <p className="text-gray-500  text-base">
            Sorry, the page you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-10 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Error;