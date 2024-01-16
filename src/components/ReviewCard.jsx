import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedBaack }) => {
  return (
    <div className='flex justify-center items-center flex-col shadow-3xl rounded-3xl p-16'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedBaack}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          alt='rating'
          width={24}
          height={24}
          className='object-contaain m-0'
        />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          ({rating})
        </p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{ customerName}</h3>
    </div>
  );
};

export default ReviewCard;
