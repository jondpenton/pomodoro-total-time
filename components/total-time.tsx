import { useFormikContext } from 'formik'
import { calculateTotalTime } from '../lib/calculate-total-time'
import { Values } from '../pages/index'

function TotalTime() {
  const { values } = useFormikContext<Values>()

  const [hours, minutes] = calculateTotalTime(values)

  return (
    <p>
      Total time: {hours} hours {minutes} minutes
    </p>
  )
}

export { TotalTime }
