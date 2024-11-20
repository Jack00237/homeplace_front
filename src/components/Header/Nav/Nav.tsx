import Logo from '@assets/Whited.svg';
import AuthContext from '@context/AuthContext';
import React, { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiHomeModern, HiBars3 } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';
// import Logo from "@assets/domilix.png";

export default function Nav(): React.ReactElement {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { user, toggleModal } = useContext(AuthContext);
  const content = (
    <>
      <div className='md:hidden  text-black bg-[#fff] h-screen absolute z-[3] block top-[80px] w-full left-0 right-0 transition'>
        <ul className='text-center  text-xs mt-16 z-[50000] transition-all '>
          <Link to='/'>
            <li className='my-2 py-2 hover:bg-white hover:rounded'>Accueil</li>
          </Link>
          <Link to='/houses'>
            <li className='my-2 py-2 hover:bg-white hover:rounded'>
              Imobilier
            </li>
          </Link>
          <Link to='/furnitures'>
            <li className='my-2 py-2 hover:bg-white hover:rounded'>mobilier</li>
          </Link>
          {user && (
            <Link to='Dashboard'>
              <li className='my-2 py-2 hover:bg-white hover:rounded'>
                dashboard
              </li>
            </Link>
          )}

          <Link to='Services'>
            <li className='my-2 py-2 hover:bg-white hover:rounded'>
              Contact us
            </li>
          </Link>

          {!user && (
            <li>
              <button
                onClick={toggleModal}
                className='transition cursor-pointer bg-[#D88A3B] text-white font-bold py-2 my-2 mx-[10vw] rounded'
              >
                sign
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );

  return (
    <nav
      className={`relative w-[100%] *:!border-none z-4  ${click ? 'active' : ''}`}
    >
      <div className='bg-gray-900 border-0 z-20 absolute w-full h-[80px] colorer'></div>
      <div
        className={`border-0 h-[80px] flex justify-between first-letter:  items-center text-white lg:py-3 px-6 py-2 border-b relative z-50`}
      >
        <div className='flex items-center flex-1 '>
          <NavLink className='text-2xl text-white flex' to='/'>
            <img src={Logo} alt='logo' className='h-5' />
          </NavLink>

          {/* <span className="text-2xl font-bold flex">
            <HiHomeModern className="h-auto" />
            Domilix
          </span> */}
        </div>
        <div className='lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden'>
          <div className='flex-10 '>
            <ul className='flex gap-8 text-[16px] font-medium items-center'>
              <Link to='/404'>
                <li className=' hover:scale-110 transition-colors hover:font-semibold cursor-pointer'>
                  Contact us
                </li>
              </Link>
              <Link to='/houses'>
                <li className=' hover:scale-110 transition-colors hover:font-semibold cursor-pointer'>
                  Houses
                </li>
              </Link>
              <Link to='/furnitures'>
                <li className=' hover:scale-110 transition-colors hover:font-semibold cursor-pointer'>
                  Furnitures
                </li>
              </Link>

              {user && (
                <Link to='/dashboard'>
                  <li className='hover:scale-110 transition-colors hover:font-semibold cursor-pointer'>
                    dashboard
                  </li>
                </Link>
              )}

              {!user && (
                <li>
                  <button
                    onClick={toggleModal}
                    className=' transition-border duration-300 cursor-pointer bg-white   text-black font-bold py-2 px-4 rounded '
                  >
                    Sign in
                  </button>
                </li>
              )}
              <Link to='Signup '></Link>
            </ul>
          </div>
        </div>
        <button className='block md:hidden ' onClick={handleClick}>
          {click ? (
            <FaTimes className='text-2xl' />
          ) : (
            <HiBars3 className='text-4xl' />
          )}
        </button>
      </div>
      {click && content}
    </nav>
  );
}
