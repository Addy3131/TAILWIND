import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
        <ul className='flex gap-6 font-lato text-gray-900'>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
        <div className='flex gap-2'>
            <img src="./assets//help.svg" alt="help" />
            <div >
                <p className='font-playfair font-thin'>
                    Have any questions
                </p>
                <a href="#" className='font-lato font-medium'>Talk to a expert developer</a>
            </div>
        </div>
    </div>
  );
}

export default Footer;

