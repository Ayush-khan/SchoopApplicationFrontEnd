import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
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
            "Section-A": 321,
            "Section-B": 292,
            "Section-C": 261,
            "Section-D": 281,
          },
          {
            class: "UKG",
            "Section-A": 303,
            "Section-B": 281,
            "Section-C": 252,
            "Section-D": 271,
          },
          {
            class: "class 1",
            "Section-A": 301,
            "Section-B": 218,
            "Section-C": 215,
            "Section-D": 217,
          },
          {
            class: "class 2",
            "Section-A": 321,
            "Section-B": 219,
            "Section-C": 262,
            "Section-D": 281,
          },
          {
            class: "class 3",
            "Section-A": 301,
            "Section-B": 218,
            "Section-C": 251,
            "Section-D": 271,
          },
          {
            class: "class 4",
            "Section-A": 301,
            "Section-B": 228,
            "Section-C": 215,
            "Section-D": 127,
          },
          {
            class: "class 5",
            "Section-A": 132,
            "Section-B": 292,
            "Section-C": 226,
            "Section-D": 128,
          },
          {
            class: "class 6",
            "Section-A": 320,
            "Section-B": 218,
            "Section-C": 225,
            "Section-D": 217,
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
            "Section-A": 312,
            "Section-B": 219,
            "Section-C": 226,
            "Section-D": 228,
          },
          {
            class: "class 9",
            "Section-A": 310,
            "Section-B": 228,
            "Section-C": 225,
            "Section-D": 217,
          },
          {
            class: "class 10",
            "Section-A": 130,
            "Section-B": 228,
            "Section-C": 215,
            "Section-D": 217,
          },
          {
            class: "class 11",
            "Section-A": 312,
            "Section-B": 219,
            "Section-C": 226,
            "Section-D": 128,
          },
          {
            class: "class 12",
            "Section-A": 130,
            "Section-B": 128,
            "Section-C": 125,
            "Section-D": 127,
          },
        ]);
      }
    };

    fetchData();
  }, []);

  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const sectionData = payload[0].payload;
      const totalStudents =
        sectionData["Section-A"] +
        sectionData["Section-B"] +
        sectionData["Section-C"] +
        sectionData["Section-D"];
      return (
        <div className="custom-tooltip" style={tooltipStyles}>
          <p style={labelStyles}>{`Class: ${sectionData.class}`}</p>
          {payload.map((entry, index) => (
            <p
              key={`item-${index}`}
              style={{ ...itemStyles, color: entry.color }}
            >{`${entry.name}: ${entry.value}`}</p>
          ))}
          <p style={totalStyles}>{`Total Students: ${totalStudents}`}</p>
        </div>
      );
    }

    return null;
  };
  const tooltipStyles = {
    boxSizing: "border-box",
    backgroundColor: "#fff",
    fontWeight: "bold",
    // border: "1px solid #ccc",
    // color: "#000",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.33)",
    borderRadius: "5px",
    padding: "10px",
    paddingBottom: "0px",
    width: "100%",
    // height: "130px",
    fontSize: ".7em",
  };
  //   const tooltipStyles = {
  //     backgroundColor: "#fff",
  //     border: "1px solid #ccc",
  //     borderRadius: "5px",
  //     padding: "10px",
  //     width: "200px",
  //     height: "auto",
  //     fontSize: "14px",
  //   };

  const labelStyles = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const itemStyles = {
    margin: 0,
  };

  const totalStyles = {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "1em",
  };

  return (
    <ResponsiveContainer
      //   className="w-2/3 gap-y-3 h-full rounded-lg"
      width={"100%"}
      margin={"auto"}
      height={"100%"}
      //   style={{ border: "2px solid black" }}
    >
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 40,
          bottom: 20,
        }}
      >
        <XAxis
          dataKey="class"
          tick={{ fontSize: 12 }}
          interval={0}
          tickMargin={10}
        />
        <YAxis />
        <Tooltip content={renderTooltip} />
        <Legend />
        <Bar dataKey="Section-A" stackId="a" fill="#00FFFF">
          <LabelList
            dataKey="Section-A"
            // position="top"
            fill="#083344"
            style={{ fontSize: ".6em" }}
          />
        </Bar>
        <Bar dataKey="Section-B" stackId="a" fill="#34d399">
          <LabelList
            dataKey="Section-B"
            // position="top"
            fill="#022c22"
            style={{
              fontSize: ".6em",
            }}
          />
        </Bar>
        <Bar dataKey="Section-C" stackId="a" fill="#a78bfa">
          <LabelList
            dataKey="Section-C"
            // position="top"

            fill="#2e1065"
            style={{ fontSize: ".6em" }}
          />
        </Bar>
        <Bar dataKey="Section-D" stackId="a" fill="#E77EE7">
          <LabelList
            dataKey="Section-D"
            // position="top"
            fill="black"
            style={{ fontSize: ".6em" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
