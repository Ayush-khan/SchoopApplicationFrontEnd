import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const Example = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock API call to fetch data
    const fetchData = async () => {
      try {
        // Replace the URL with your actual API endpoint
        const response = await axios.get("https://api.example.com/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback to hardcoded data in case of error
        setData([
          {
            class: "Nursery",
            "Section-A": 130,
            "Section-B": 228,
            "Section-C": 125,
            "Section-D": 277,
          },
          {
            class: "LKG",
            "Section-A": 32,
            "Section-B": 29,
            "Section-C": 26,
            "Section-D": 28,
          },
          {
            class: "UKG",
            "Section-A": 30,
            "Section-B": 28,
            "Section-C": 25,
            "Section-D": 27,
          },
          {
            class: "class 1",
            "Section-A": 30,
            "Section-B": 28,
            "Section-C": 25,
            "Section-D": 27,
          },
          {
            class: "class 2",
            "Section-A": 32,
            "Section-B": 29,
            "Section-C": 26,
            "Section-D": 28,
          },
          {
            class: "class 3",
            "Section-A": 30,
            "Section-B": 28,
            "Section-C": 25,
            "Section-D": 27,
          },
          {
            class: "class 4",
            "Section-A": 30,
            "Section-B": 28,
            "Section-C": 25,
            "Section-D": 27,
          },
          {
            class: "class 5",
            "Section-A": 32,
            "Section-B": 29,
            "Section-C": 26,
            "Section-D": 28,
          },
          {
            class: "class 6",
            "Section-A": 30,
            "Section-B": 28,
            "Section-C": 25,
            "Section-D": 27,
          },
          {
            class: "class 7",
            "Section-A": 309,
            "Section-B": 128,
            "Section-C": 215,
            "Section-D": 217,
          },
          {
            class: "class 8",
            "Section-A": 32,
            "Section-B": 29,
            "Section-C": 26,
            "Section-D": 28,
          },
          {
            class: "class 9",
            "Section-A": 30,
            "Section-B": 28,
            "Section-C": 25,
            "Section-D": 27,
          },
          {
            class: "class 10",
            "Section-A": 30,
            "Section-B": 28,
            "Section-C": 25,
            "Section-D": 27,
          },
          {
            class: "class 11",
            "Section-A": 32,
            "Section-B": 29,
            "Section-C": 26,
            "Section-D": 128,
          },
          {
            class: "class 12",
            "Section-A": 30,
            "Section-B": 28,
            "Section-C": 25,
            "Section-D": 27,
          },
        ]);
      }
    };

    fetchData();
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const sectionData = payload[0].payload;
      return (
        <div className="custom-tooltip" style={tooltipStyles}>
          <p style={labelStyles}>{`Class: ${sectionData.class}`}</p>
          {payload.map((entry, index) => (
            <p
              key={`item-${index}`}
              style={{ ...itemStyles, color: entry.color }}
            >{`${entry.name}: ${entry.value}`}</p>
          ))}
        </div>
      );
    }

    return null;
  };
  const tooltipStyles = {
    backgroundColor: "#fff",
    fontWeight: "bold",
    border: "1px solid #ccc",
    color: "#000",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.33)",
    borderRadius: "5px",
    padding: "10px",
    width: "100%",
    height: "50%",
    fontSize: ".7em",
  };

  const labelStyles = {
    fontWeight: "900",
    marginBottom: "5px",
  };

  const itemStyles = {
    // backgroundColor: "#E5E7EB",
    margin: 0,
  };

  return (
    <ResponsiveContainer
      className="w-2/3 gap-y-3 h-full bg-white rounded-lg"
      width={"100%"}
      height="70%"
      style={{ border: "2px solid black" }}
    >
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 5,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" />     */}{" "}
        {/* This is the cartision line that show background of the graphs */}
        <XAxis dataKey="class" tick={{ fontSize: ".8em" }} />
        <YAxis tick={{ fontSize: ".8em" }} />
        {/* <Tooltip /> */}
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Section-A" stackId="a" fill="#8884d8" />
        <Bar dataKey="Section-B" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Section-C" stackId="a" fill="#ffc658" />
        <Bar dataKey="Section-D" stackId="a" fill="#d0ed57" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
