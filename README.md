# Arvdia ESG & Sustainability Services - React App

This is a React application converted from the original HTML website for Arvdia ESG & Sustainability Services.

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern React**: Built with React 18 and functional components with hooks
- **Styled Components**: CSS-in-JS styling for better component encapsulation
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Efficient rendering and loading

## Technologies Used

- React 18
- Styled Components
- React Intersection Observer
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "C:\Users\adams\Downloads\arvdia\New folder"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with smooth scrolling
│   ├── Hero.js            # Hero section with animated elements
│   ├── Services.js        # ESG services grid with cards
│   ├── Process.js         # Business methodology timeline
│   ├── Team.js            # Team members section
│   ├── Partner.js         # Strategic partnership information
│   └── Contact.js         # Contact information and CTA
├── App.js                 # Main application component
└── index.js              # React application entry point
```

## Components Overview

- **Header**: Fixed navigation with smooth scrolling and scroll effects
- **Hero**: Eye-catching hero section with animated floating elements
- **Services**: Grid of service cards with hover effects and animations
- **Process**: Timeline showing the business methodology steps
- **Team**: Team members with avatars and descriptions
- **Partner**: Strategic partnership information
- **Contact**: Contact details and call-to-action

## Customization

The application uses styled-components for styling. You can customize:

- Colors by modifying the gradient and color values in styled components
- Animations by adjusting keyframes and transition properties
- Layout by modifying the grid and flexbox properties
- Content by updating the data arrays in each component

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Arvdia ESG & Sustainability Services.