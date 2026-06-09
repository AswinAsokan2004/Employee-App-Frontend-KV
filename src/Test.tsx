import { useState } from "react";
import useGetMyName from "./CustomHook";

function TextInput() {
    const [value, setValue] = useState('');
    const data = useGetMyName({ name: value });
    return (
        <>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        {/* <h1>{name}</h1> */}
        {data.map((item) => (
            <h1>{item}</h1>
        ))}
        </>
    )
}

export default TextInput;