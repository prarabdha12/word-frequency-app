import React, { useState } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import "./a.css"; // Import CSS file

const ChatHistogram = () => {
  const [wordFrequency, setWordFrequency] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // New state variable to track submission status

  const fetchWordFrequency = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      const content = response.data;
      const words = content.split(/\s+/); // Split the content into individual words
      const wordCountMap = {};

      // Count the frequency of each word
      words.forEach((word) => {
        wordCountMap[word] = (wordCountMap[word] || 0) + 1;
      });

      // Convert the wordCountMap object into an array of objects
      const wordFrequencyArray = Object.entries(wordCountMap).map(
        ([word, count]) => ({ word, count })
      );

      // Sort the array by word count in descending order
      wordFrequencyArray.sort((a, b) => b.count - a.count);

      // Take the top 20 words
      const top20Words = wordFrequencyArray.slice(0, 20);

      setWordFrequency(top20Words);
      setSubmitted(true); // Set submitted state to true
    } catch (error) {
      console.error("Error fetching word frequency:", error);
    }
    setLoading(false);
  };

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      wordFrequency.map(({ word, count }) => `${word},${count}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "word_frequency.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      {/* {!submitted && <h1 className="title">Word Frequency Analysis</h1>} */}
      {!submitted && (
        <button
          className="submit-btn"
          onClick={fetchWordFrequency}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      )}
      {submitted && wordFrequency.length > 0 && (
        <div>
          <Plot
            data={[
              {
                x: wordFrequency.map(({ word }) => word),
                y: wordFrequency.map(({ count }) => count),
                type: "bar",
              },
            ]}
            layout={{
              width: 800,
              height: 600,
              // title: "Word Frequency Histogram",
              xaxis: {
                title: "Words",
              },
              yaxis: {
                title: "Frequency",
              },
            }}
            className="chart"
          />
          <button className="export-btn" onClick={exportToCSV}>
            Export
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatHistogram;
