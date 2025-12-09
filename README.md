# 💪 GymFit Planner

A comprehensive fitness planning web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Plan your workouts, track nutrition, and monitor your fitness progress all in one place.

## Features

### 🏋️ Workout Planning

- **Weekly Workout Plans**: Structured 7-day workout routines with detailed exercises
- **Exercise Tracking**: Track sets, reps, weights, and rest periods
- **Multiple Intensity Levels**: Low, Medium, and High intensity workouts
- **Detailed Instructions**: Exercise notes and form tips
- **Time-Based Sessions**: Know exactly how long each workout takes

### 🥗 Nutrition Planning

- **Customized Meal Plans**: Daily meal planning with specific macro targets
- **Macronutrient Tracking**: Track protein, carbs, and fats for each meal
- **Calorie Counting**: Automatic calorie calculations and daily summaries
- **Meal Ingredients**: Detailed ingredient lists for each meal
- **Nutrition Timing**: Strategically timed meals around workouts

### 📊 Progress Tracking

- **Weight Tracking**: Monitor weight loss or gain over time
- **Body Measurements**: Track chest, waist, arms, and legs
- **Body Fat Percentage**: Track body composition changes
- **Visual Charts**: Interactive charts showing progress metrics
- **Progress History**: Detailed historical data with notes

### 🎨 User Interface

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Styling**: Built with Tailwind CSS for a clean, professional look
- **Navigation**: Easy-to-use navigation between all sections
- **Cards & Components**: Organized information in reusable components

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- **UI Components**: Custom React components
- **Data**: Mock data (ready for backend integration)

## Project Structure

```
gym-fit-planner/
├── app/
│   ├── components/           # Reusable React components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Card.tsx          # Reusable card component
│   │   ├── WorkoutCard.tsx   # Workout display component
│   │   ├── MealCard.tsx      # Meal display component
│   │   └── StatBox.tsx       # Statistics box component
│   ├── pages/                # Page components directory
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── utils/
│   │   └── calculations.ts   # Utility functions
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   ├── workout/
│   │   └── page.tsx          # Workout plans page
│   ├── nutrition/
│   │   └── page.tsx          # Nutrition plans page
│   └── progress/
│       └── page.tsx          # Progress tracking page
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone or navigate to the project**

```bash
cd gym-fit-planner
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Pages

### 🏠 Home (`/`)

- Dashboard with quick stats
- Feature overview
- Fitness tips and best practices
- Quick links to other sections

### 🏋️ Workouts (`/workout`)

- Complete 7-day workout plan
- Detailed exercise information
- Sets, reps, and weight tracking
- Intensity levels for each workout
- Rest period recommendations
- Program notes and tips

### 🥗 Nutrition (`/nutrition`)

- Meal plans for multiple days
- Macronutrient breakdown
- Daily calorie targets
- Ingredient lists for each meal
- Timing strategies around workouts
- Nutrition tips and guidelines

### 📈 Progress (`/progress`)

- Weight progress tracking
- Body measurement tracking
- Body fat percentage monitoring
- Interactive progress charts
- Historical data table
- Progress statistics and insights

## Components

### Header

Navigation bar with links to all major sections. Responsive mobile menu included.

### Card

Reusable container component for organizing content with consistent styling.

### WorkoutCard

Displays workout information including exercises, sets, reps, weights, and rest periods.

### MealCard

Shows meal details including time, calories, macronutrients, and ingredients.

### StatBox

Displays statistics with color-coded indicators and icons.

## TypeScript Types

The application includes comprehensive TypeScript interfaces:

- `User` - User profile information
- `WorkoutDay` - Daily workout structure
- `Exercise` - Individual exercise details
- `Meal` - Meal information
- `DayPlan` - Daily nutrition plan
- `ProgressEntry` - Progress tracking data
- `WeeklyPlan` - Complete week plan

## Utility Functions

### calculations.ts

- `calculateBMI()` - Calculate Body Mass Index
- `calculateDailyCalories()` - Calculate daily calorie needs
- `calculateProgress()` - Analyze progress over time
- `formatDate()` - Format dates consistently
- `getWeekStartDate()` - Get start of week

## Styling with Tailwind CSS

This project uses **Tailwind CSS v4** with modern utility classes:

- Responsive breakpoints (sm, md, lg, xl)
- Color system with multiple shades
- Gradient backgrounds (bg-linear-to-r, bg-linear-to-t)
- Flexbox and Grid layouts
- Transition effects and hover states

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Database for storing user data
- [ ] Workout history and analytics
- [ ] Custom workout builder
- [ ] Meal database and recipe suggestions
- [ ] Export progress reports
- [ ] Mobile app version
- [ ] Social features (sharing, challenges)
- [ ] AI-powered recommendations

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Click Deploy

```bash
# Alternative: Deploy directly
vercel
```

### Other Hosting Options

- Netlify
- AWS Amplify
- Heroku
- DigitalOcean

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please create an issue in the repository.

---

**Built with 💪 for fitness enthusiasts**

# or

pnpm dev

# or

bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```
