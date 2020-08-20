import { Field, Formik } from 'formik'
import { Input } from '../components/Input'

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Formik
        initialValues={{ baseWork: 0, totalWork: 8 }}
        onSubmit={() => null}
      >
        {({ values }) => {
          const [hours, minutes] = calculateTotalTime(values)

          return (
            <div className="max-w-sm mx-auto flex flex-col justify-center mt-32">
              <div className="mb-6">
                <Input
                  name="baseWork"
                  label="Base Work"
                  description="Straight Work (hours)"
                  type="number"
                />
              </div>
              <div className="mb-6">
                <Input
                  name="totalWork"
                  label="Total Work"
                  description="Total Work (hours)"
                  type="number"
                />
              </div>
              <p>
                Total time: {hours} hours {minutes} minutes
              </p>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

function calculateTotalTime({
  baseWork,
  totalWork,
}: Record<string, number>): number[] {
  const baseWorkMinutes = baseWork * 60
  const totalWorkMinutes = totalWork * 60
  const pomodoroWork = totalWorkMinutes - baseWorkMinutes // 285
  const totalPomodoroTime = Math.ceil(pomodoroWork / 25) * 30 // 360
  const totalMinutes = totalPomodoroTime + baseWorkMinutes // 495
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  const numberOf15Minutes = Math.floor(minutes / 15)

  return [hours, numberOf15Minutes * 15]
}

export default HomePage
