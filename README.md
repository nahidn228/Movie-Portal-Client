# Movie Portal 🎥  

**Live Link:** [Movie Portal](https://movieportal-e0d48.web.app/)  

## Overview  
Movie Portal is a dynamic web application designed to provide a seamless experience for exploring movies, viewing details, and managing a list of favorites. The app focuses on user interactivity, responsiveness, and modern design elements to enhance the user experience.  

---

## Features  
- **Movie Exploration:** Search and browse movies with detailed information.  
- **Favorites Management:** Add, delete, and manage your favorite movies effortlessly.  
- **User-specific Favorites:** Display user-specific favorite movies based on their email.  
- **Dynamic UI:**  
  - Sliders implemented using Swiper for a sleek look.  
  - Smooth animations with AOS and Animate.css for an engaging experience.  
- **Interactive Forms:**  
  - Custom forms built using `react-hook-form` for validation and smooth functionality.  
- **Real-time Feedback:** SweetAlert for user notifications and confirmations.  
- **Page Metadata Management:** Dynamic titles using React Helmet.  
- **Responsive Design:** Fully mobile-friendly and optimized for all screen sizes.  
- **SEO Optimization with React Helmet:**  
  Managed dynamic metadata with React Helmet, ensuring correct titles and descriptions for each movie page, especially when dealing with dynamic content.

---

## Tech Stack  
- **Frontend:**  
  - React.js  
  - Tailwind CSS  
  - DaisyUI  
- **Backend:**  
  - MongoDB: For efficient data management and API development.  
  - Firebase: For user authentication and database services.  
- **Libraries & Packages:**  
  - [AOS](https://michalsnik.github.io/aos/): Animate on Scroll for elegant animations.  
  - [Swiper](https://swiperjs.com/): Sliders for displaying content.  
  - [React Icons](https://react-icons.github.io/react-icons/): Beautiful icons for UI elements.  
  - [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/): Loaders for a better user experience.  
  - [Animate.css](https://animate.style/): Predefined animations for smooth transitions.  
  - [React Fast Marquee](https://www.react-fast-marquee.com/): Marquee effects for headlines.  
  - [React Hook Form](https://react-hook-form.com/): Efficient form handling with validation.  
  - [React Helmet](https://github.com/nfl/react-helmet): Manage meta tags for SEO optimization.  

---

## Challenges Encountered  

- **Filtering Favorite Data from the Same API:**  
  Faced difficulties filtering favorites from the same API response to avoid redundant or mismatched data, ensuring only the user's selected favorites were displayed.

- **Displaying User-specific Favorite Movies Based on Email:**  
  Struggled with displaying user-specific favorites based on email, ensuring secure and efficient mapping of users' favorites using Firebase and MongoDB.

- **Handling Forms with React-Hook-Form:**  
  Encountered challenges managing complex form validation with react-hook-form, especially with async operations and non-blocking validation.

- **Ensuring Dynamic User Interaction and Responsiveness:**  
  Worked to maintain smooth transitions and animations (AOS, Animate.css) while ensuring responsiveness across various screen sizes.


