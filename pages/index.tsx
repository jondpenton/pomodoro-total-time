import { Field, Formik } from 'formik'

function HomePage() {
  return (
    <Formik initialValues={{ baseWork: 0, totalWork: 8 }} onSubmit={() => null}>
      {({ values }) => {
        const [hours, minutes] = calculateTotalTime(values)

        return (
          <>
            <label>
              Base Work
              <br />
              <Field name="baseWork" type="number" />
            </label>
            <br />
            <label>
              Total Work
              <br />
              <Field name="totalWork" type="number" />
            </label>
            <p>
              Total time: {hours} hours {minutes} minutes
            </p>
          </>
        )
      }}
    </Formik>
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
