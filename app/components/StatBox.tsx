'use client'

import React from 'react'

interface StatBoxProps {
  label: string
  value: string | number
  unit?: string
  icon?: string
  color?: string
}

export default function StatBox({
  label,
  value,
  unit,
  icon,
  color = 'blue',
}: StatBoxProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    red: 'bg-red-50 border-red-200 text-red-700',
  }

  return (
    <div
      className={`border-2 rounded-lg p-4 ${
        colorClasses[color as keyof typeof colorClasses]
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-2xl font-bold mt-1">
            {value}
            {unit && <span className="text-sm ml-1">{unit}</span>}
          </p>
        </div>
        {icon && <span className="text-3xl">{icon}</span>}
      </div>
    </div>
  )
}
