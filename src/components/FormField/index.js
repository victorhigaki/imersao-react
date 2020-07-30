import React from 'react';

function FormField({ tag, label, type, name, value, onChange }) {
    if (tag === 'input') {
        return (
            <div>
                <label>
                    {label}:
                    <input
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }

    if (tag === 'textarea') {
        return (
            <div>
                <label>
                    {label}:
                    <textarea
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }
}

export default FormField;