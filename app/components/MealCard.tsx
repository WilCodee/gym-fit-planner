'use client'

import React from 'react'
import { Meal } from '@/app/types'
import Card from './Card'

interface MealCardProps {
  meal: Meal
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <Card title={meal.name} className="mb-4">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">{meal.time}</p>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {meal.calories} cal
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-green-50 p-2 rounded text-center">
            <p className="text-xs text-gray-600">Protein</p>
            <p className="font-semibold text-green-700">{meal.protein}g</p>
          </div>
          <div className="bg-amber-50 p-2 rounded text-center">
            <p className="text-xs text-gray-600">Carbs</p>
            <p className="font-semibold text-amber-700">{meal.carbs}g</p>
          </div>
          <div className="bg-orange-50 p-2 rounded text-center">
            <p className="text-xs text-gray-600">Fats</p>
            <p className="font-semibold text-orange-700">{meal.fats}g</p>
          </div>
        </div>

        {meal.ingredients.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-semibold text-gray-700 mb-2">
              Ingredients:
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              {meal.ingredients.map((ingredient, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  )
}
