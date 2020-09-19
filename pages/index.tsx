import { Formik } from 'formik'
import { Input } from '../components/input'
import { SyncValues } from '../components/sync-values'
import { calculateTotalTime } from '../lib/calculate-total-time'

export interface Values {
  baseWork: number
  totalWork: number
  longBreakInterval: number
}

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Formik<Values>
        initialValues={{ baseWork: 0, totalWork: 8, longBreakInterval: 3 }}
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
                  step="0.25"
                />
              </div>
              <div className="mb-6">
                <Input
                  name="longBreakInterval"
                  label="Long Break Interval"
                  type="number"
                  min="1"
                  step="0.25"
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
