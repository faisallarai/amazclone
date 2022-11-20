import Image from 'next/image';
import React from 'react';
import ReactStars from 'react-stars';
import { IProduct } from '../../typings';
import NoSSR from '../NoSSR';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../redux/basketSlice';

interface ICheckoutProductProps {
  item: IProduct;
}

function CheckoutProduct({ item }: ICheckoutProductProps) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(item));
  };

  const RemoveItemFromBasket = () => {
    dispatch(removeFromBasket(item.id));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={item.image}
        width={200}
        height={200}
        style={{ objectFit: 'contain' }}
        alt={item.title}
      />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{item.title}</p>
        <NoSSR>
          <ReactStars
            count={5}
            size={20}
            color1="gray"
            edit={false}
            half={true}
            value={item.rating.rate}
            color2="#ffd700"
          />
        </NoSSR>
        <p className="text-xs my-2 line-clamp-3">{item.description}</p>
        <Currency quantity={item.price} currency="GHS" />

        {item.hasPrime && (
          <div>
            <Image
              src="https://links.papareact.com/fdw"
              width={48}
              height={48}
              alt={item.title}
            />
            <p>FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="basket" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="basket" onClick={RemoveItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
