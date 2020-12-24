import React from 'react';

const TextInput = ({
    name,
    value,
    setName,
    nameError,
    type,
    required,
    placeholder,
    classAttr,
}) => {
    // const classAttr =
    //     ' appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm';
    return (
        <div>
            <label htmlFor='email-address' className='sr-only'>
                Email address
            </label>
            <input
                name={name ?? 'name'}
                type={type ?? 'text'}
                required={required ?? true}
                value={value ?? name}
                onChange={(e) => setName(e.target.value)}
                className={(nameError ? 'border-red-500' : '') + classAttr}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextInput;
