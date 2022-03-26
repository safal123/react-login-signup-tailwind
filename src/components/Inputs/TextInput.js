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
    return (
        <div>
            <label htmlFor='email-address' className='sr-only'>
                Email address
            </label>
            <input
                name={name ?? 'name'}
                type={type ?? 'text'}
                required={required ?? false}
                value={value ?? name}
                onChange={(e) => setName(e.target.value)}
                className={(nameError ? 'border-red-500' : '') + classAttr}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextInput;
