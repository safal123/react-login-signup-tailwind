import React from 'react';

const Button = ({ isLoading, text, type }) => {
    return (
        <div>
            <button
                type={type}
                disabled={isLoading}
                className={
                    (isLoading ? 'text-opacity-25' : '') +
                    ' group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                }
            >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    {isLoading ? (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-24 w-24 ml-0 mb-1'
                            style={{ marginLeft: '-30px' }}
                            // viewBox='0 0 100 100'
                            preserveAspectRatio='xMidYMid'
                        >
                            <g>
                                <path
                                    d='M50 39A11 11 0 1 0 55.14722795686631 40.27857806902438'
                                    fill='none'
                                    stroke='#e15b64'
                                    strokeWidth='2'
                                ></path>
                                <path
                                    d='M49 35L49 43L53 39L49 35'
                                    fill='#e15b64'
                                ></path>
                                <animateTransform
                                    attributeName='transform'
                                    type='rotate'
                                    repeatCount='indefinite'
                                    dur='1.3157894736842106s'
                                    values='0 50 50;360 50 50'
                                    keyTimes='0;1'
                                ></animateTransform>
                            </g>
                        </svg>
                    ) : (
                        <svg
                            className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    )}
                </span>
                {text}
            </button>
        </div>
    );
};

export default Button;
