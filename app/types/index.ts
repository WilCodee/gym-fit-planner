export interface Meal {
  id: string
  name: string
  time: string
  calories: number
  protein: number
  carbs: number
  fats: number
  ingredients: string[]
}

export interface DayPlan {
  day: string
  meals: Meal[]
  waterIntake: string
  notes: string
}

export interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  weight?: number
  duration?: number
  rest: number
  notes?: string
}

export interface WorkoutDay {
  day: string
  focus: string
  exercises: Exercise[]
  duration: number
  intensity: 'Low' | 'Medium' | 'High'
}

export interface WeeklyPlan {
  week: number
  workouts: WorkoutDay[]
  nutritionPlan: DayPlan[]
  goals: string[]
}

export interface ProgressEntry {
  date: string
  weight: number
  bodyFat?: number
  measurements?: {
    chest: number
    waist: number
    arms: number
    legs: number
  }
  notes: string
}

export interface User {
  id: string
  name: string
  email: string
  age: number
  height: number
  weight: number
  goal: 'Muscle Gain' | 'Fat Loss' | 'General Fitness' | 'Strength'
  experience: 'Beginner' | 'Intermediate' | 'Advanced'
}
