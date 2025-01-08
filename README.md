# 🎥 Movie Portal  

Welcome to **Movie Portal**, a dynamic web application to explore movies, view detailed information, and manage your favorites list. With a sleek and modern design, this app provides an engaging and interactive experience for all movie enthusiasts.

## 🌟 Live Preview

Visit the live site here: [Movie Portal](https://movieportal-e0d48.web.app/)

---

## 📜 Project Overview

Movie Portal allows users to:
- Browse and explore movies from various genres.
- View detailed information about each movie.
- Manage a personal list of favorite movies.
- Enjoy an engaging and responsive design with smooth animations and transitions.

---

## 🛠️ Key Features

### 1. **Movie Exploration**
   - Search and explore a wide variety of movies.
   - View detailed information like ratings, release dates, and descriptions.

### 2. **Favorites Management**
   - Add and remove movies to/from your personal favorites list.
   - Display user-specific favorite movies based on their email.

### 3. **Dynamic UI**
   - Interactive sliders for movie categories using **Swiper**.
   - Smooth animations and transitions with **AOS** and **Animate.css**.

### 4. **Responsive Design**
   - Fully optimized for mobile, tablet, and desktop screens.
   - Clean and adaptive layout using **TailwindCSS** and **DaisyUI**.

### 5. **Real-Time User Feedback**
   - **SweetAlert** used for user notifications and confirmations.

### 6. **SEO Optimization**
   - Dynamic page metadata management with **React Helmet**.

---

## 🧰 Tech Stack

### Frontend
- **React**: Component-based library for building the user interface.
- **React Router**: For navigation and routing.
- **TailwindCSS** & **DaisyUI**: For styling and responsive design.
- **Swiper**: For interactive movie sliders.
- **AOS** & **Animate.css**: For smooth animations and transitions.
- **React Icons**: For UI icons.
- **React Loader Spinner**: For loading indicators.
- **React Hook Form**: For efficient form handling.
- **React Helmet**: For managing dynamic meta tags for SEO.

### Backend
- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express**: A fast, minimalistic web framework for Node.js, used for building RESTful APIs.
- **MongoDB**: A NoSQL database for storing and managing movie data and user information.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file for secure configuration.
- **Firebase**: For user authentication and real-time database.

---


## 🌐 Project Structure

### **Main Pages**
- **Home Page**: Displays the movie categories and a featured movie slider.
- **Movie Detail Page**: Provides in-depth information about each movie.
- **My Favorites**: Users can manage and view their favorite movies.
- **Error Page**: Custom 404 page that redirects to home.

---

## 📝 Challenges Faced

- Filtering favorite data from the same API response while ensuring only the user’s selected favorites are displayed.
- Handling user-specific favorite movies using **Firebase** and **MongoDB**.
- Managing complex form validations with **React Hook Form**.
- Ensuring a smooth, responsive layout and transitions with animations (AOS, Animate.css).

---

## 🔗 Links

- **Live Site**: [Movie Portal](https://movieportal-e0d48.web.app/)

---

## 🚀 Next Steps & Future Enhancements
- Add user reviews and ratings for movies.
- Introduce a search feature for personalized movie suggestions.
- Improve movie filtering and categorization features.

Thank you for exploring **Movie Portal**! 🎬✨

---

## 📦 Dependencies

 "@smastrom/react-rating": "^1.5.0",
    "animate.css": "^4.1.1",
    "aos": "^2.3.4",
    "firebase": "^11.0.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-fast-marquee": "^1.6.5",
    "react-helmet": "^6.1.0",
    "react-hook-form": "^7.53.2",
    "react-icons": "^5.4.0",
    "react-loader-spinner": "^6.1.6",
    "react-rating-stars-component": "^2.2.0",
    "react-router-dom": "^7.0.2",
    "react-simple-star-rating": "^5.1.7",
    "react-slick": "^0.30.3",
    "slick-carousel": "^1.8.1",
    "sweetalert2": "^11.14.5",
    "swiper": "^11.1.15"


## 📦 devDependencies

    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1"