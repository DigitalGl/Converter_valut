
# Currency Converter

A simple web-based currency converter built with HTML, CSS, and JavaScript. It allows users to convert between multiple currencies (USD, EUR, GBP, RUB, KZT, UAH) using real-time exchange rates fetched from the ExchangeRate-API.

## Live Demo
Check out the live version here: [Currency Converter](https://digitalgl.github.io/Converter_valut/)

## Features
- Convert between USD, EUR, GBP, RUB, KZT, and UAH.
- Displays current exchange rates relative to USD.
- Real-time conversion as you type or change currencies.
- Responsive design using Bootstrap 4.

## How It Works
The application fetches exchange rates from the [ExchangeRate-API](https://www.exchangerate-api.com/) using an API key embedded in `app.js`. The rates are displayed in a grid, and users can input an amount in one currency to instantly see the converted value in another.

## Project Structure

Converter_valut/
├── index.html      # Main HTML file with the structure of the app
├── style.css       # Custom styles for layout and design
├── app.js          # JavaScript logic for fetching rates and conversion
└── README.md       # Project documentation

## How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/digitalgl/Converter_valut.git


2.Navigate to the project folder:

cd Converter_valut

3.Open index.html in a browser:
   You can simply double-click index.html, or
   Use a local server (recommended) like Live Server in VS Code for a better experience.

4.Ensure an internet connection:
   The app requires internet access to fetch exchange rates from the API.

Note: The API key is currently hardcoded in app.js. For security, avoid exposing sensitive keys in production projects.

Deployment on GitHub Pages
The project is deployed on GitHub Pages and accessible at the link above. To deploy your own version:

1.Push the project to a GitHub repository.
2.Go to Settings > Pages in your repository.
3.Set the source to the main branch (or the branch containing your files).
4.Ensure all files (index.html, style.css, app.js) are in the root directory.


Limitations
The API key is embedded in app.js, making it publicly visible. For a production environment, consider using environment variables and a backend proxy.

GitHub Pages is a static hosting service, so dynamic server-side features are not supported.

Contributing
Feel free to fork this repository and submit pull requests with improvements! Suggestions for better security practices or UI enhancements are welcome.

License
This project is open-source and available under the MIT License.
