# Word Frequency Histogram

This is a React.js application that fetches the contents of a text file, calculates the frequency of occurrence of each word, and plots a histogram of the 20 most occurring words.

## Features

- Fetches the contents of https://www.terriblytinytales.com/test.txt
- Parses the content and calculates the frequency of each word
- Displays a histogram of the 20 most occurring words
- Provides an "Export" button to download a CSV file of the histogram data

## Technologies Used

- React.js
- Axios (for making HTTP requests)
- Plotly.js (for plotting the histogram)
- CSS (for styling)

## Installation

### 1. Clone the repository:
```bash
git clone <repository_url> && cd word-frequency-histogram
```
### 2. Navigate to the project directory:
```bash
cd word-frequency-histogram
```
### 3. Install the dependencies:
```bash
npm install
```
# Usage
1. Start the development server:

npm start

2. Open your browser and visit `http://localhost:3000` to access the application.

3. Click the "Submit" button to fetch the word frequency and display the histogram.

4. The top 20 words with the highest occurrence will be plotted in the histogram chart.

5. Click the "Export" button to download a CSV file containing the histogram data.

# Customization

- To modify the appearance of the application, you can update the CSS styles in the `WordFrequencyHistogram.css` file.

- To change the source of the text file, you can modify the URL in the `fetchWordFrequency function` of the `WordFrequencyHistogram` component.

# Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.



