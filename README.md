# Somashekhar Arabali | Portfolio

This is a personal portfolio website built with React.js, showcasing projects, experience, certifications, and hobbies. It features a responsive design, smooth animations, and a clean user interface.

## 🎨 Tech Stack Overview

*   **Frontend Framework**: React.js
*   **Language**: JavaScript (JSX)
*   **UI Library**: Material-UI (MUI) for comprehensive UI components.
*   **Styling**: MUI's `styled` utility (powered by Emotion) for component-specific styling and theme customization.
*   **Animation**: Framer Motion for declarative and fluid animations.
*   **Routing**: React Router DOM for client-side navigation between pages.
*   **Smooth Scrolling**: React Scroll for smooth transitions to specific sections within a page.
*   **Content Management**: Local JSON files (`src/content/`) for structured data like navigation, projects, and books.
*   **Icons**: Material-UI Icons (`@mui/icons-material`).
*   **Carousel**: React Slick for responsive carousels and sliders.

## 🛠 How Things Work

This application is a single-page application (SPA) built with React.
*   **Component-Based Structure**: The UI is composed of reusable React components, organized into `src/components` and `src/components/sections`.
*   **Routing**: `react-router-dom` handles client-side navigation, allowing for distinct URLs for different views (e.g., the main portfolio and the books read page).
*   **Styling**: Material-UI components are used extensively, with custom styling applied via MUI's `styled` utility to maintain a consistent look and feel based on the defined `src/Theme.js`.
*   **Animations**: `Framer Motion` is integrated throughout the application to provide smooth and engaging transitions and interactive elements.
*   **Content Management**: All dynamic content, such as navigation links, project details, and book information, is sourced from local JSON files located in the `src/content/` directory, making it easy to update.

## 🚀 Installation & Setup

Follow these steps to get the project up and running on your local machine:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```
    (Replace `your-username/your-repo-name.git` with the actual repository URL if different.)

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the application locally**:
    ```bash
    npm start
    ```

4.  **Open in browser**:
    The application will open in your default browser at `http://localhost:3000`.

## 📄 Page Previews

Here's a brief description of the main pages in the application, along with placeholders for screenshots:

### Home Page
This is the main landing page of the portfolio. It's a scrollable page divided into several sections:
*   **Hero**: An introductory section with a welcome message and a call to action.
*   **About**: Details about the developer's skills and professional interests.
*   **Experience**: A timeline or list of work experience.
*   **Certifications**: Displays various professional certifications obtained.
*   **Projects**: Showcases a collection of projects with descriptions, technologies used, and links to live demos/GitHub repositories.
*   **Hobbies**: Highlights personal interests and pastimes, including a link to the "Books I Have Read" page.
*   **Contact**: Provides information on how to get in touch.

![Home Page](public/images/books/Home.gif)
### Books Read Page 
Accessible from the "Hobbies" section, this dedicated page displays a curated list of books the developer has read. Each book includes its title, author, cover image, and an inspiring quote.

![Books Read](public/images/books.gif)


## 💖 Thank you for visiting

Please leave a ⭐ on this repo if you like it!