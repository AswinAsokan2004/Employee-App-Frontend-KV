import { useState } from "react";


function useGetMyName(prop: { name: string }) {
    const dict = ['Aswin', 'Alex', 'John', 'Doe']

    const name = prop.name;
    const data = dict.filter((item) => (
        item.includes(name)) 
    )
    console.log(data);
    
    return data;
    
}
export default useGetMyName;