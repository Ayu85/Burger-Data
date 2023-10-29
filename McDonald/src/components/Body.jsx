import { useEffect, useState } from "react";
import Card from "./Card";
function Body() {
    const [originalData, setoriginalData] = useState(["temp"]);
    useEffect(() => {
        getBurgerData();
    }, [])
    async function getBurgerData() {
        const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '15f19f359dmshaf7c7f46201e030p11ec4cjsn6d395da34885',
                'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
            }
        };


        const response = await fetch(url, options);
        const result = await response.json();
        setoriginalData(result.d)
        // console.log(originalData);

    }

    return (
        <div>
            {
                originalData.map((items) => {
                    return <Card {...items} /> 
                })
            }
        </div>
    )
}
export default Body;