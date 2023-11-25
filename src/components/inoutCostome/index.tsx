import React, { useState } from 'react';



type inputType = {
    name: string;
    id?: string;
    placeholder?: string;
    Iclass?: string;
    type?: string,
    setFormValues: any,
    formValues: any
    
}

const InoutCostome = ({ type = 'text', name, id, placeholder, Iclass , setFormValues, formValues }: inputType) => {
    let defClass = !Iclass ? 'bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full' :Iclass

    function updateForm(val: any, type: string) {
        setFormValues({ ...formValues, [type]: val })

    }
    return (
            <input
                value={formValues[name].value}
                type={type}
                id={id}
                className={defClass}
                placeholder={placeholder}
                onChange={(e: any) => updateForm((e.target.value), name)}

            />

    );
};

export default InoutCostome;