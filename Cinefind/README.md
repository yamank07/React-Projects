# CineFind

**CineFind** is a movie discovery platform that provides users with the latest trending movies fetched from The Movie Database (TMDb). It features an intuitive search engine that allows users to search for movies and view the latest trending movies based on their searches. The project uses **Appwrite** as a Backend-as-a-Service (BaaS) provider to manage user authentication and data storage.

## Features

- **Trending Movies**: Display top 5 trending movies based on real-time data searched.
- **Search Engine**: Allows users to search for movies by title and returns a list of relevant results.
- **Movie Details**: View detailed information such as movie posters, movie title, ratings, language and release year.
<!-- - **User Authentication**: User registration and login powered by **Appwrite**.
- **Favorites**: Users can save their favorite movies to their account (optional). -->

## Tech Stack

- **Frontend**: HTML, CSS (Tailwind CSS), JavaScript (ReactJS)
- **Backend**: Appwrite (BaaS) for user authentication, data storage, and backend operations.
- **API**: TMDb API for fetching movie data (trending movies, search results).
<!-- - **Deployment**: Heroku/Vercel for hosting the frontend (optional). -->

## Installation

### Prerequisites

1. **TMDb API Key**:
   - Connect to any network other then JIO.
   - Sign up for an account at [TMDb](https://www.themoviedb.org/signup).
   - Generate an API key from the [API section](https://www.themoviedb.org/settings/api).
2. **Appwrite Account**:

   - Set up an **Appwrite** account at [Appwrite.io](https://appwrite.io/).
   - Install Appwrite on your server or use their cloud platform.

3. **Node.js** (If you're using Node.js for the frontend or backend):

   - [Install Node.js](https://nodejs.org/).

4. **React, Tailwind CSS and Appwrite SDK**:
   - Install the Appwrite SDK for your frontend (React).
   - For React, run:
     ```bash
     npm install react-use
     ```
   - For Tailwind, run:
     ```bash
     npm install tailwindcss @tailwindcss/vite
     ```
   - For Appwrite, run:
     ```bash
     npm install appwrite
     ```

### Steps to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yamank07/MovieTrends.git
   cd MovieTrends
   ```

2. **Set up your API Keys**:

   - In the project folder, create a **.env.local** file and add your TMDb API key:
     ```bash
     VITE_TMDB_API_KEY=tmdb_api_key
     ```
   - Set up your Appwrite project by creating an Appwrite API key, adding a database and collection and add inside **.env.local** file.
     ```bash
     VITE_APPWRITE_PROJECT_ID=appwrite_project_id
     VITE_APPWRITE_DATABASE_ID=appwrite_database_id
     VITE_APPWRITE_COLLECTION_ID=appwrite_collection_id
     ```

3. **Install dependencies (React JS)**:

   ```bash
   npm install
   ```

4. **Start the project**:

   ```bash
   npm run dev
   ```

5. **Access the app**:
   Open your browser and go to http://localhost:5173/

## Usage

1. **Trending Movies**
   The **Trending Movies** section will display the top 5 trending movies based on real-time data searched by the user. This section updates automatically based on the number of search counts.

2. **Search Movies**
   The **Search Engine** allows users to search for movies by title. As the user types, the app will fetch relevant results from TMDb and display them in a user-friendly way, with movie posters, movie title, ratings, language and release year.

3. **Example of Fetching Trending Movies**
   Navigate to the component ../Cinefind/src/App.jsx and search for fetchTrendingMovies() function component.

4. **Example of Search Functionality**
   Navigate to the component ../Cinefind/src/App.jsx and search for fetchMovies() function component.

5. **Displaying Movie Details**
   Each movie in the trending list or search results will display:

   - **Poster Image**: Fetch from the TMDb image API (https://image.tmdb.org/t/p/w500/${poster_path}).
   - **Movie Title**: Display the movie title.
   - **Rating**: The average rating given by users.
   - **Language**: The language of the movie.
   - **Release Year**: The release year of the movie.

   Example of a movie card:
   Navigate to the component ../Cinefind/src/Components/MovieCard.jsx in your project.

<!-- ## Contribution

We welcome contributions to CineFind! If you'd like to contribute, please fork the repository and submit a pull request. Contributions can be in the form of bug fixes, new features, or improvements to the existing functionality. -->

### Steps to Contribute

1. Fork the repository.
2. Create a new branch for your changes (git checkout -b feature/your-feature-name).
3. Make the necessary changes.
4. Commit the changes (git commit -m 'Add new feature').
5. Push to your branch (git push origin feature/your-feature-name).
6. Open a pull request on GitHub.

<!-- ## License

This project is licensed under the MIT License - see the LICENSE file for details. -->

## Acknowledgements

- **TMDb**: The Movie Database API for providing movie data.
- **Appwrite**: Backend-as-a-Service (BaaS) for handling user authentication and data storage.
- **React**: A JavaScript library for building user interfaces.
<!-- - **Open Source Contributors**: Thanks to everyone who contributed to the project. -->

### Key Sections in This README:

1. **Project Overview** – Brief introduction to what the project does and how it works with TMDb and Appwrite.
2. **Features** – What features the project offers.
3. **Tech Stack** – Technologies used in the project (React, Tailwind CSS, Appwrite, TMDb API).
4. **Installation** – Detailed setup instructions.
5. **Usage** – How to use the app (fetching trending movies, using the search functionality).
<!-- 6. **Contributions** – How others can contribute to the project.
6. **License & Acknowledgements** – Licensing details and credits. -->

This structure will help users easily understand the project's functionality and how to set it up for use or contribution.
