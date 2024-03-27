import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

  
const PageToRead = () => {
    const storedDataString = localStorage.getItem("read");
    let storedData = JSON.parse(storedDataString) || [];
    console.log(storedData)
    return (
        <div>
            <BarChart width={730} height={250} data={storedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default PageToRead;