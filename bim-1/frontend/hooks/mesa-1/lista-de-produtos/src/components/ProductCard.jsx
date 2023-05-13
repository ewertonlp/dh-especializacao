/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const ProductCard = ({ thumbnail, title, description, brand, price }) => {
  return (
    <div>
      <div className="flex p-3 w-auto h-40 px-6 border border-neutral-300 rounded-lg m-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-out">
        <div>
          <img src={thumbnail} alt={title} className="w-36 max-h-32" />
        </div>
        <div className="grid grid-rows-3 w-48 pl-4">
          <p className="text-sm font-medium ">{description.slice(0, 50)}</p>
          <p className="font-medium py-1 text-yellow-400 pt-2">{brand}</p>
          <p className="font-medium text-neutral-700 text-xl pt-2">
            $ {price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
