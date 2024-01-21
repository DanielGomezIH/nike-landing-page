import {Button} from '../components'

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10 '
    >
      <h3 className='text-4xl  leading-[68px] lg:max-w-lg  font-palanquin font-bold'>
        Sign Up from <span className='text-coral-red'>Updates</span> &
        Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-7 sm:border sm:border-slate-gray rounded-full'>
        <input type='email' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full '>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
