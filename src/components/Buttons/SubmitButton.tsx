import React from 'react';


type ibtnType = {
    name: string;
    click: ()=>void;
    Iclass?: string;
    type?: string,


}




const SubmitButton = ({ name, click, Iclass,    type }:ibtnType) => {
    let btnclass = !Iclass ? 'bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded' : Iclass;

    console.log('sf',click)
    return (
        <div>
            
            <button 
            className={btnclass}
            onClick={click}
             
                >
                {name}
                </button>

        </div>
    );
};

export default SubmitButton;