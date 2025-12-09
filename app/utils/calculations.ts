import { ProgressEntry } from '@/app/types'

export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100
  return weight / (heightInMeters * heightInMeters)
}

export const calculateDailyCalories = (
  weight: number,
  age: number,
  goal: string
): number => {
  const bmr = 10 * weight + 6.25 * 170 - 5 * age + 5
  const tdee = bmr * 1.55

  switch (goal) {
    case 'Muscle Gain':
      return Math.round(tdee + 300)
    case 'Fat Loss':
      return Math.round(tdee - 500)
    case 'Strength':
      return Math.round(tdee + 100)
    default:
      return Math.round(tdee)
  }
}

export const calculateProgress = (
  entries: ProgressEntry[]
): {
  weightChange: number
  percentChange: number
} | null => {
  if (entries.length < 2) return null

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  const firstWeight = sortedEntries[0].weight
  const lastWeight = sortedEntries[sortedEntries.length - 1].weight

  const weightChange = lastWeight - firstWeight
  const percentChange = (weightChange / firstWeight) * 100

  return {
    weightChange: Math.round(weightChange * 10) / 10,
    percentChange: Math.round(percentChange * 10) / 10,
  }
}

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const getWeekStartDate = (date: Date = new Date()): Date => {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day
  return new Date(d.setDate(diff))
}
