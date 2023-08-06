import React, { useState, useEffect } from 'react'

export const Result = ({ name }) => {
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     // Function to fetch data from the API
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/api'); // Replace with your API URL
    //             const data = await response.json();
    //             console.log(data);
    //             setData(data); // Update the state with the fetched data
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData(); // Call the fetch function when the component mounts
    // }, []);

    return (
        <>
            <p className=' text-6xl'>
                Double is: {name}
            </p>
        </>
    )
}
