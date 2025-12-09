'use client'

import { useState, useRef } from 'react'
import styles from './table-styles.module.css'

interface DaySchedule {
  day: string
  enAyunas: string
  desayuno: string
  mediaMañana: string
  mediaMañana9to11: string
  almuerzo: {
    time: string
    recipes: string[]
  }
  mediaTarde: {
    time: string
    items: string[]
  }
  cena: {
    time: string
    description: string
    notes: string
  }
}

const weeklyFeedingProgram: DaySchedule[] = [
  {
    day: 'DÍA 01',
    enAyunas:
      '1 vaso de agua tibia con 2cdas de linaza - todos los días (remojar una noche antes)',
    desayuno:
      'En caso entrenar entre las 5 am y 8am, solo consumir 1 fruta pre entrenó',
    mediaMañana:
      '1 vaso de jugo de piña con 2cdas de linaza (1tz de papaya, 250 ml) + 1 pan Pita integral + 90 g de pollo deshilachado',
    mediaMañana9to11:
      '8 almendras o 3 cdas de granola integral + ½ vaso de yogur griego natural',
    almuerzo: {
      time: '12PM A 2PM',
      recipes: [
        'Guiso de pollo a la olla (150 g) (2 tazas de verdura cocidas: brócoli, choclo, vainitay zanahoria) con limón y pizza de sal con Guarnición: 1/2 tz de lentejas limonada sin azúcar',
      ],
    },
    mediaTarde: {
      time: '3 - 5PM',
      items: ['2 mandarinas'],
    },
    cena: {
      time: '8:30 - 9 PM',
      description:
        'Guiso de pollo a la olla (150 g) (2 tazas de verdura cocidas: brócoli, choclo, vainitay zanahoria) con limón y pizza de sal con 1 taza de té de manzanilla y Gelatina light',
      notes:
        'Cenar 2 horas antes de dormir y después de entrenar, en caso entrenes en la noche',
    },
  },
  {
    day: 'DÍA 02',
    enAyunas:
      '1 vaso de agua tibia con 2cdas de linaza - todos los días (remojar una noche antes)',
    desayuno:
      'En caso entrenar entre las 5 am y 8am, solo consumir 1 fruta pre entrenó',
    mediaMañana:
      '1 tz de infusión + 1 pan pita integral con ¼ de palta pequeña + 1 huevo sin yema',
    mediaMañana9to11:
      '8 almendras o 3 cdas de granola integral + ½ vaso de yogur griego natural',
    almuerzo: {
      time: '12PM A 2PM',
      recipes: [
        'Pescado a la plancha – 150 gr y 2tz verduras frescas (lechuga, pepino, tomate) con Guarnición: 1 papa cocida de 120g + 500 ml de naranjada sin azúcar',
      ],
    },
    mediaTarde: {
      time: '3 - 5PM',
      items: ['1 manzana verde'],
    },
    cena: {
      time: '8:30 - 9 PM',
      description:
        '½ choclo cocido + 90 g de atún en agua + 1 tz lechuga, zanahoria, pepino + 1 cda aceite de oliva + 1 vaso refresco sin azúcar y Gelatina light',
      notes:
        'Cenar 2 horas antes de dormir y después de entrenar, en caso entrenes en la noche',
    },
  },
  {
    day: 'DÍA 03',
    enAyunas:
      '1 vaso de agua tibia con 2cdas de linaza - todos los días (remojar una noche antes)',
    desayuno:
      'En caso entrenar entre las 5 am y 8am, solo consumir 1 fruta pre entrenó',
    mediaMañana:
      '1 vaso de jugo de papaya con 2cdas de linaza (1tz de papaya, 250 ml agua) + 1 pan pita integral con 1 rodaja de queso fresco',
    mediaMañana9to11:
      '8 almendras o 3 cdas de granola integral + ½ vaso de yogur griego natural',
    almuerzo: {
      time: '12PM A 2PM',
      recipes: [
        '3 taza de Ensalada fresca de espinaca, cebolla blanca y tomate + Croquetas de atún: ½ tz avena + 1 lata de atún + 2 huevos + cebolla picada + pizza de sal (revolver y al sartén) con 500 ml de limonada sin azúcar',
      ],
    },
    mediaTarde: {
      time: '3 - 5PM',
      items: ['2 mandarinas'],
    },
    cena: {
      time: '8:30 - 9 PM',
      description:
        'SANDWICH DE POLLO con 1 pan pita integral + 90 gr de pollo desmenuzado + tomate/ Lechuga +1 taza de infusión de anís y 1 porción de fruta y Gelatina light',
      notes:
        'Cenar 2 horas antes de dormir y después de entrenar, en caso entrenes en la noche',
    },
  },
  {
    day: 'DÍA 04',
    enAyunas:
      '1 vaso de agua tibia con 2cdas de linaza - todos los días (remojar una noche antes)',
    desayuno:
      'En caso entrenar entre las 5 am y 8am, solo consumir 1 fruta pre entrenó',
    mediaMañana:
      '1 Taza de avena bebible (250 ml) + 1 pan pita integral + 90 g de pollo deshilachado + 1 tz de piña',
    mediaMañana9to11:
      '8 almendras o 3 cdas de granola integral + ½ vaso de yogur griego natural',
    almuerzo: {
      time: '12PM A 2PM',
      recipes: [
        'Estofado de pollo (150 g) y 2tz verduras frescas (lechuga, pepino, tomate) con Guarnición: 1 papas amarilla pequeña limonada sin azúcar',
      ],
    },
    mediaTarde: {
      time: '3 - 5PM',
      items: ['3 cucharadas de granola NATURAL'],
    },
    cena: {
      time: '8:30 - 9 PM',
      description:
        '½ choclo cocido + 90 g de atún en agua + 1 tz lechuga, zanahoria, pepino + 1 cda aceite de oliva + 1 vaso refresco sin azúcar y Gelatina light',
      notes:
        'Cenar 2 horas antes de dormir y después de entrenar, en caso entrenes en la noche',
    },
  },
  {
    day: 'DÍA 05',
    enAyunas:
      '1 vaso de agua tibia con 2cdas de linaza - todos los días (remojar una noche antes)',
    desayuno:
      'En caso entrenar entre las 5 am y 8am, solo consumir 1 fruta pre entrenó',
    mediaMañana:
      '1 vaso de jugo verde (1 manzana verde, 1 tz de piña, 6 hojas de espinaca, ½ tz de pepino, 2 hojas de perejil, 3 ramos de apio) + 2 huevos sin yema',
    mediaMañana9to11:
      '8 almendras o 3 cdas de granola integral + ½ vaso de yogur griego natural',
    almuerzo: {
      time: '12PM A 2PM',
      recipes: [
        'Pavita a la plancha – 150 gr y 2tz verduras frescas (lechuga, pepino, tomate) con Guarnición: 1 camote pequeño de 120g + 500 ml de naranjada sin azúcar',
      ],
    },
    mediaTarde: {
      time: '3 - 5PM',
      items: ['8 almendras'],
    },
    cena: {
      time: '8:30 - 9 PM',
      description:
        'SANDWICH DE POLLO con 1 pan pita integral + 90 gr de pollo desmenuzado + tomate/ Lechuga +1 taza de infusión de anís y 1 tz de piña y Gelatina light',
      notes:
        'Cenar 2 horas antes de dormir y después de entrenar, en caso entrenes en la noche',
    },
  },
  {
    day: 'DÍA 06',
    enAyunas:
      '1 vaso de agua tibia con 2cdas de linaza - todos los días (remojar una noche antes)',
    desayuno:
      'En caso entrenar entre las 5 am y 8am, solo consumir 1 fruta pre entrenó',
    mediaMañana:
      '1 tz de té de manzanilla 250 ml + Panqueques de avena (1/2 tz de avena, 1 plátano, 1huevo, 1 cdta canela, 150 ml leche deslactosada) + Topping: 1 plátano o 6 fresas con 3 tz arándanos',
    mediaMañana9to11:
      '8 almendras o 3 cdas de granola integral + ½ vaso de yogur griego natural',
    almuerzo: {
      time: '12PM A 2PM',
      recipes: [
        'Salteado de verduras con trozos de pollo (120 g de pollo, tamaño: palma de mano en trozos), (verduras: brócoli, tomate, vainaita, cebolla) + 1 unidad de papa sancochada + ¼ de palta',
      ],
    },
    mediaTarde: {
      time: '3 - 5PM',
      items: ['Yogur Skyr + tz de piña picada'],
    },
    cena: {
      time: '8:30 - 9 PM',
      description:
        '¡OJO! Optar siempre por un alimento proteico (pollo, pescado, pavita o 4 claras de huevos) + 1 1/2 taza de verduras cocidas o crudas, el acompañamiento puede ser: 1 papa sancochada, arroz integral, 1 choclo, 1 camote o 2 tostadas integrales',
      notes:
        'Cenar 2 horas antes de dormir y después de entrenar, en caso entrenes en la noche',
    },
  },
  {
    day: 'DÍA 07',
    enAyunas:
      '1 vaso de agua tibia con 2cdas de linaza - todos los días (remojar una noche antes)',
    desayuno:
      'En caso entrenar entre las 5 am y 8am, solo consumir 1 fruta pre entrenó',
    mediaMañana:
      '1 tz de café 250 ml + Panqueques de avena (1/2 tz de avena, 1 plátano, 1huevo, 1 cdta canela, 150 ml leche deslactosada) + Topping: 3 fresas con 1/3 tz arándanos',
    mediaMañana9to11:
      '8 almendras o 3 cdas de granola integral + ½ vaso de yogur griego natural',
    almuerzo: {
      time: '12PM A 2PM',
      recipes: ['ALMUERZO LIBRE'],
    },
    mediaTarde: {
      time: '3 - 5PM',
      items: ['Yogur Skyr + ½ tz arándanos'],
    },
    cena: {
      time: '8:30 - 9 PM',
      description:
        '¡OJO! Optar siempre por un alimento proteico (pollo, pescado, pavita o 4 claras de huevos) + 1 1/2 taza de verduras cocidas o crudas, el acompañamiento puede ser: 1 papa sancochada, arroz integral, 1 choclo, 1 camote o 2 tostadas integrales',
      notes:
        'Cenar 2 horas antes de dormir y después de entrenar, en caso entrenes en la noche',
    },
  },
]

export default function FeedingProgramPage() {
  const [schedule, setSchedule] = useState(weeklyFeedingProgram)
  const [editCell, setEditCell] = useState<{
    dayIdx: number
    field: string
  } | null>(null)
  const [editValue, setEditValue] = useState('')
  const [almuerzoInfo, setAlmuerzoInfo] = useState(
    'Consumir dos vasos de agua antes'
  )
  const [mediaTardeInfo, setMediaTardeInfo] = useState(
    'Consumir dos vasos de agua'
  )
  const [cenaInfo, setCenaInfo] = useState(
    '¡OJO! Optar siempre por un alimento proteico (pollo, pescado, pavita o 4 claras de huevos) + 1 1/2 taza de verduras cocidas o crudas'
  )
  const tableRef = useRef<HTMLDivElement>(null)

  const handleCellClick = (
    dayIdx: number,
    field: string,
    currentValue: string
  ) => {
    setEditCell({ dayIdx, field })
    setEditValue(currentValue)
  }

  const handleSave = () => {
    if (!editCell) return

    const newSchedule = [...schedule]
    const { dayIdx, field } = editCell

    if (field === 'enAyunas') {
      newSchedule[dayIdx].enAyunas = editValue
    } else if (field === 'desayuno') {
      newSchedule[dayIdx].desayuno = editValue
    } else if (field === 'mediaMañana') {
      newSchedule[dayIdx].mediaMañana = editValue
    } else if (field === 'mediaMañana9to11') {
      newSchedule[dayIdx].mediaMañana9to11 = editValue
    } else if (field.startsWith('almuerzo.')) {
      const subField = field.split('.')[1]
      if (subField === 'recipes') {
        newSchedule[dayIdx].almuerzo.recipes = [editValue]
      }
    } else if (field.startsWith('mediaTarde.')) {
      const subField = field.split('.')[1]
      if (subField === 'items') {
        newSchedule[dayIdx].mediaTarde.items = [editValue]
      }
    } else if (field.startsWith('cena.')) {
      const subField = field.split('.')[1]
      if (subField === 'description') {
        newSchedule[dayIdx].cena.description = editValue
      }
    } else if (field === 'almuerzoInfo') {
      setAlmuerzoInfo(editValue)
    } else if (field === 'mediaTardeInfo') {
      setMediaTardeInfo(editValue)
    } else if (field === 'cenaInfo') {
      setCenaInfo(editValue)
    }

    setSchedule(newSchedule)
    setEditCell(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      setEditCell(null)
    }
  }

  const downloadPDF = () => {
    const pdfContainer = document.getElementById('CONTAINER-PDF-CONTENT')
    if (!pdfContainer) return

    // Create a new window for printing
    const printWindow = window.open('', '', 'width=1200,height=800')
    if (!printWindow) return

    // Clone the container
    const containerClone = pdfContainer.cloneNode(true) as HTMLElement

    // Copy computed styles from original elements to cloned elements
    const copyComputedStyles = (source: Element, target: Element) => {
      if (source.nodeType === 1) {
        // Element node
        const computed = window.getComputedStyle(source)
        const target_el = target as HTMLElement

        // Copy important style properties
        target_el.style.backgroundColor = computed.backgroundColor
        target_el.style.color = computed.color
        target_el.style.borderColor = computed.borderColor
        target_el.style.padding = computed.padding
        target_el.style.fontSize = computed.fontSize
        target_el.style.fontWeight = computed.fontWeight
        target_el.style.textAlign = computed.textAlign
        target_el.style.border = computed.border
      }

      // Recursively copy styles for children
      const sourceChildren = source.childNodes
      const targetChildren = target.childNodes

      for (let i = 0; i < sourceChildren.length; i++) {
        if (
          sourceChildren[i].nodeType === 1 &&
          targetChildren[i]?.nodeType === 1
        ) {
          copyComputedStyles(
            sourceChildren[i] as Element,
            targetChildren[i] as Element
          )
        }
      }
    }

    copyComputedStyles(pdfContainer, containerClone)

    // Create the HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Plan de Alimentación Semanal</title>
        <meta charset="UTF-8">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: Arial, sans-serif;
            padding: 8px;
            background: white;
          }
          h3 {
            text-align: center;
            color: #333;
            margin: 0 0 10px 0;
            font-size: 16px;
            padding: 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            font-size: 11px;
          }
          td, th {
            padding: 6px;
            border: 1px solid #333;
          }
          @page {
            margin: 5px;
            size: A4 landscape;
          }
          @media print {
            html, body {
              margin: 0;
              padding: 5px;
            }
            h3 {
              margin: 0 0 5px 0;
              padding: 0;
              page-break-after: avoid;
            }
            table {
              page-break-inside: avoid;
              margin: 0;
            }
            tr {
              page-break-inside: avoid;
            }
          }
        </style>
      </head>
      <body>
        ${containerClone.innerHTML}
      </body>
      </html>
    `

    // Write content to the new window
    printWindow.document.write(htmlContent)
    printWindow.document.close()

    // Wait for content to fully render before printing
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
      }, 500)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🍽️ Plan de Alimentación Semanal
        </h1>
        <p className="text-lg text-gray-600">
          Programa completo de nutrición para 7 días
        </p>
      </div>

      {/* Download PDF Button */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={downloadPDF}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-200"
        >
          📥 Descargar PDF
        </button>
      </div>

      <div id="CONTAINER-PDF-CONTENT">
        <h3 className="text-black text-center text-2xl mb-4">
          DIETA PÉRDIDA DE GRASA
        </h3>

        {/* Weekly Feeding Table */}
        <div
          ref={tableRef}
          className="overflow-x-auto bg-white rounded-lg shadow-lg"
        >
          <table className="w-full border-collapse text-sm">
            {/* Header */}
            <thead>
              <tr className={styles.tableHeader}>
                <th className={styles.tableHeaderCellFirst}></th>
                <th className={styles.tableHeaderCell}>DÍA 01</th>
                <th className={styles.tableHeaderCell}>DÍA 02</th>
                <th className={styles.tableHeaderCell}>DÍA 03</th>
                <th className={styles.tableHeaderCell}>DÍA 04</th>
                <th className={styles.tableHeaderCell}>DÍA 05</th>
                <th className={styles.tableHeaderCell}>DÍA 06</th>
                <th className={styles.tableHeaderCell}>DÍA 07</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {/* EN AYUNAS */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white">
                  EN AYUNAS
                </td>
                <td
                  colSpan={7}
                  className="border border-gray-300 px-4 py-3 bg-blue-200 text-gray-800 cursor-pointer hover:bg-blue-300 transition"
                  onClick={() =>
                    handleCellClick(0, 'enAyunas', schedule[0].enAyunas)
                  }
                >
                  {editCell?.dayIdx === 0 && editCell?.field === 'enAyunas' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleSave}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      placeholder="Editar..."
                      className="w-full px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    <p className="italic text-xs md:text-sm text-center">
                      {schedule[0].enAyunas}
                    </p>
                  )}
                </td>
              </tr>

              {/* DESAYUNO */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white">
                  DESAYUNO
                </td>
                <td
                  colSpan={7}
                  className="border border-gray-300 px-4 py-3 bg-green-200 text-gray-800 cursor-pointer hover:bg-green-300 transition"
                  onClick={() =>
                    handleCellClick(0, 'desayuno', schedule[0].desayuno)
                  }
                >
                  {editCell?.dayIdx === 0 && editCell?.field === 'desayuno' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleSave}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      placeholder="Editar..."
                      className="w-full px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    <p className="italic text-xs md:text-sm text-center">
                      {schedule[0].desayuno}
                    </p>
                  )}
                </td>
              </tr>

              {/* 6AM A 8AM - Daily Breakfast Details */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white text-xs md:text-sm">
                  6AM A<br />
                  8AM
                </td>
                {schedule.map((day, idx) => (
                  <td
                    key={idx}
                    className="border border-gray-300 px-3 py-3 bg-blue-200 text-gray-800 text-xs align-top cursor-pointer hover:bg-blue-300 transition"
                    onClick={() =>
                      handleCellClick(idx, 'mediaMañana', day.mediaMañana)
                    }
                  >
                    {editCell?.dayIdx === idx &&
                    editCell?.field === 'mediaMañana' ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        placeholder="Editar..."
                        className="w-full px-2 py-1 border border-gray-400 rounded"
                      />
                    ) : (
                      <p>{day.mediaMañana}</p>
                    )}
                  </td>
                ))}
              </tr>

              {/* MEDIA MAÑANA 9AM -11AM */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white text-xs md:text-sm">
                  MEDIA
                  <br />
                  MAÑANA
                  <br />
                  <span className="text-xs font-normal">9AM -11AM</span>
                </td>
                <td
                  colSpan={7}
                  className="border border-gray-300 px-4 py-3 bg-blue-200 text-gray-800 cursor-pointer hover:bg-blue-300 transition"
                  onClick={() =>
                    handleCellClick(
                      0,
                      'mediaMañana9to11',
                      schedule[0].mediaMañana9to11
                    )
                  }
                >
                  {editCell?.dayIdx === 0 &&
                  editCell?.field === 'mediaMañana9to11' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleSave}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      placeholder="Editar..."
                      className="w-full px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    <p className="italic text-xs md:text-sm text-center">
                      {schedule[0].mediaMañana9to11}
                    </p>
                  )}
                </td>
              </tr>

              {/* ALMUERZO 12PM A 2PM */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white text-xs md:text-sm">
                  ALMUERZO
                  <br />
                  <span className="text-xs font-normal"></span>
                </td>
                <td
                  colSpan={7}
                  className="border border-gray-300 px-4 py-3 bg-blue-200 text-gray-800 cursor-pointer hover:bg-blue-300 transition"
                  onClick={() =>
                    handleCellClick(0, 'almuerzoInfo', almuerzoInfo)
                  }
                >
                  {editCell?.dayIdx === 0 &&
                  editCell?.field === 'almuerzoInfo' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleSave}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      placeholder="Editar..."
                      className="w-full px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    <p className="italic text-xs md:text-sm text-center">
                      {almuerzoInfo}
                    </p>
                  )}
                </td>
              </tr>

              {/* ALMUERZO - Daily Recipes */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white">
                  12PM A<br />
                  2PM
                </td>
                {schedule.map((day, idx) => (
                  <td
                    key={idx}
                    className="border border-gray-300 px-3 py-3 bg-blue-200 text-gray-800 text-xs align-top cursor-pointer hover:bg-blue-300 transition"
                    onClick={() =>
                      handleCellClick(
                        idx,
                        'almuerzo.recipes',
                        day.almuerzo.recipes.join(' + ')
                      )
                    }
                  >
                    {editCell?.dayIdx === idx &&
                    editCell?.field === 'almuerzo.recipes' ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        placeholder="Editar..."
                        className="w-full px-2 py-1 border border-gray-400 rounded"
                      />
                    ) : (
                      <p>{day.almuerzo.recipes.join(' + ')}</p>
                    )}
                  </td>
                ))}
              </tr>

              {/* MEDIA TARDE 3 - 5PM */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white text-xs md:text-sm">
                  MEDIA
                  <br />
                  TARDE
                  <br />
                </td>
                <td
                  colSpan={7}
                  className="border border-gray-300 px-4 py-3 bg-blue-200 text-gray-800 cursor-pointer hover:bg-blue-300 transition"
                  onClick={() =>
                    handleCellClick(0, 'mediaTardeInfo', mediaTardeInfo)
                  }
                >
                  {editCell?.dayIdx === 0 &&
                  editCell?.field === 'mediaTardeInfo' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleSave}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      placeholder="Editar..."
                      className="w-full px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    <p className="italic text-xs md:text-sm text-center">
                      {mediaTardeInfo}
                    </p>
                  )}
                </td>
              </tr>

              {/* MEDIA TARDE - Daily Items */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white">
                  <span className="text-xs font-normal">3 - 5PM</span>
                </td>
                {schedule.map((day, idx) => (
                  <td
                    key={idx}
                    className="border border-gray-300 px-3 py-3 bg-blue-200 text-gray-800 text-xs align-top cursor-pointer hover:bg-blue-300 transition"
                    onClick={() =>
                      handleCellClick(
                        idx,
                        'mediaTarde.items',
                        day.mediaTarde.items.join(' + ')
                      )
                    }
                  >
                    {editCell?.dayIdx === idx &&
                    editCell?.field === 'mediaTarde.items' ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        placeholder="Editar..."
                        className="w-full px-2 py-1 border border-gray-400 rounded"
                      />
                    ) : (
                      <p>{day.mediaTarde.items.join(' + ')}</p>
                    )}
                  </td>
                ))}
              </tr>

              {/* CENA */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white text-xs md:text-sm">
                  CENA
                  <br />
                </td>
                <td
                  colSpan={7}
                  className="border border-gray-300 px-4 py-3 bg-blue-200 text-gray-800 cursor-pointer hover:bg-blue-300 transition"
                  onClick={() => handleCellClick(0, 'cenaInfo', cenaInfo)}
                >
                  {editCell?.dayIdx === 0 && editCell?.field === 'cenaInfo' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleSave}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      placeholder="Editar..."
                      className="w-full px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    <p className="italic text-xs md:text-sm text-center">
                      {cenaInfo}
                    </p>
                  )}
                </td>
              </tr>

              {/* CENA - Daily Dinners 8:30 - 9 PM */}
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold bg-green-500 text-white text-xs md:text-sm">
                  8:30 - 9<br />
                  PM
                </td>
                {schedule.map((day, idx) => (
                  <td
                    key={idx}
                    className="border border-gray-300 px-3 py-3 bg-blue-200 text-gray-800 text-xs align-top cursor-pointer hover:bg-blue-300 transition"
                    onClick={() =>
                      handleCellClick(
                        idx,
                        'cena.description',
                        day.cena.description
                      )
                    }
                  >
                    {editCell?.dayIdx === idx &&
                    editCell?.field === 'cena.description' ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        placeholder="Editar..."
                        className="w-full px-2 py-1 border border-gray-400 rounded"
                      />
                    ) : (
                      <p>{day.cena.description}</p>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
