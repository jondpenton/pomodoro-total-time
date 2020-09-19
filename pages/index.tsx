import { Formik } from 'formik'
import React from 'react'
import { Input } from '../components/input'
import { SyncValues } from '../components/sync-values'
import { calculateTotalTime } from '../lib/calculate-total-time'

export interface Values {
  baseWork: number
  totalWork: number
  longBreakInterval: number
}

function HomePage() {
  const localValues = React.useMemo(() => {
    try {
      const entry = localStorage.getItem('values')

      if (!entry) {
        throw new Error(`No entry for 'values' exists`)
      }

      const localValues = JSON.parse(entry)
      return localValues
    } catch (err) {
      console.debug(err.message)
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Formik<Values>
        initialValues={
          localValues || { baseWork: 0, totalWork: 8, longBreakInterval: 3 }
        }
        onSubmit={() => null}
      >
        {({ values }) => {
          const [hours, minutes] = calculateTotalTime(values)

          return (
            <div className="max-w-sm mx-auto flex flex-col justify-center mt-4 sm:mt-32">
              <div className="mb-6">
                <Input
                  name="baseWork"
                  label="Base Work"
                  description="Straight Work (hours)"
                  type="number"
                  min="0"
                  step="0.25"
                />
              </div>
              <div className="mb-6">
                <Input
                  name="totalWork"
                  label="Total Work"
                  description="Total Work (hours)"
                  type="number"
                  min="0"
                  step="0.5"
                />
              </div>
              <div className="mb-6">
                <Input
                  name="longBreakInterval"
                  label="Long Break Interval"
                  type="number"
                  min="1"
                />
              </div>
              <p>
                Total time: {hours} hours {minutes} minutes
              </p>
              <SyncValues />
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default HomePage
