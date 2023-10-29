import { useEffect, useState } from "react";
import Card from "./Card";
function Body() {
    const [originalData, setoriginalData] = useState([]);
    useEffect(() => {
        getBurgerData();
    }, [])
    async function getBurgerData() {
        const apikey = '53ec9fe5247658e75d6bb1eedef0cdf7';
        const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;
        // fetch(url)
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         const articles = data.articles;
        //         setoriginalData(articles);

        //     });
        const rawData = await fetch(url);
        const jsonData = await rawData.json();
        setoriginalData(jsonData.articles);
    }
    console.log(originalData);

    return (
        <div className="body">
            {
                originalData.map((items) => {
                    return <Card {...items} />
                })
            }
            {/* <Card {...originalData} /> */}
        </div>
    )
}
export default Body;