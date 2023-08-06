import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Input = ({ setName }) => {

    const [formData, setFormData] = useState({}); // State to hold the form data
    let navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data); // Output the response from Flask backend
            setName(data.num);

        } catch (error) {
            console.error('Error:', error);
        }
        navigate("/result")
    };
    return (
        <>
            <form onSubmit={handleSubmit} action='/result'>
                <div className=' min-h-[100vh] flex flex-col gap-4 items-center justify-center'>
                    <input type="Number" min={0} max={100} className=' bg-orange-300 rounded-lg' name="num" onChange={handleChange} />
                    <button type="submit" className=' px-2 py-1 rounded-lg bg-black text-white' >Submit</button>
                </div>
            </form>
        </>
    )
}
