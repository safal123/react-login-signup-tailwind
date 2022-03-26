import React from 'react'

const BurgerIcon = ({ isMobile, setIsMobile }) => {
  return (
    <div className='md:hidden text-white cursor-pointer'>
      <span className='sr-only'>Open main menu</span>
      <button onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            className='block h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        )}
      </button>
  </div>
  )
}

export default BurgerIcon