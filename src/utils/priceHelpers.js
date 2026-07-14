// Small helpers shared by Cart.jsx and CheckOut.jsx.
// Different parts of the app add items to Cart/BuyNow with slightly
// different shapes (static demo cards vs live DummyJSON products), so we
// normalize price + image reading here instead of duplicating the same
// parsing logic in every page.

// DummyJSON prices are numbers (e.g. 12.99). Some of the existing static
// cards in this project store price as a string like "$120". This safely
// returns a plain number either way.
export const getNumericPrice = (price) => {
  if (typeof price === "number") return price;
  if (typeof price === "string") {
    const parsed = parseFloat(price.replace("$", ""));
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
};

// DummyJSON products expose "thumbnail", while the existing static cards in
// this project use "image". Try both so nothing renders broken.
export const getItemImage = (item) => item?.image || item?.thumbnail || "";
