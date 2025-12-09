'use client'

import React from 'react'
import { Exercise, WorkoutDay } from '@/app/types'
import Card from './Card'

interface WorkoutCardProps {
  workout: WorkoutDay
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const intensityColors = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800',
  }

  return (
    <Card title={workout.day} className="mb-4">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Focus:</span> {workout.focus}
          </p>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              intensityColors[workout.intensity]
            }`}
          >
            {workout.intensity} Intensity
          </span>
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-semibold">Duration:</span> {workout.duration}{' '}
          minutes
        </div>

        <div className="bg-gray-50 rounded p-4">
          <h4 className="font-semibold text-gray-800 mb-3">Exercises</h4>
          <div className="space-y-3">
            {workout.exercises.map((exercise, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-3">
                <p className="font-medium text-gray-800">{exercise.name}</p>
                <p className="text-xs text-gray-600">
                  {exercise.sets} sets × {exercise.reps} reps
                  {exercise.weight && ` @ ${exercise.weight}lbs`}
                  {exercise.duration && ` • ${exercise.duration}min`} • Rest:{' '}
                  {exercise.rest}s
                </p>
                {exercise.notes && (
                  <p className="text-xs text-gray-500 mt-1 italic">
                    {exercise.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
