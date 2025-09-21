import { useState } from "react";

type InputValues = {
    [key: string]: unknown; //Helper type
};

export function useManageInputs<T extends InputValues>(initialValues: T) { //A generic hook, so whatever shape of object we pass, the hook will infer that shape
    const [values, setValues] = useState<T>(initialValues)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const reset = () => setValues(initialValues)


  return { values, reset, handleChange, setValues }
   

}
