export function calculateTotalTime({
  baseWork = 0,
  totalWork = 0,
  longBreakInterval = 3,
}: {
  baseWork: number
  totalWork: number
  longBreakInterval: number
}): number[] {
  const baseWorkMinutes = baseWork * 60
  const totalWorkMinutes = totalWork * 60
  const pomodoroWork = totalWorkMinutes - baseWorkMinutes
  const pomodoros = Math.ceil(pomodoroWork / 25)
  const totalPomodoroTime = pomodoros * 30
  const extraBreakMinutes = Math.floor(pomodoros / longBreakInterval) * 10
  let totalMinutes = totalPomodoroTime + baseWorkMinutes

  if (Number.isFinite(extraBreakMinutes)) {
    totalMinutes += extraBreakMinutes
  }

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  const numberOf15Minutes = Math.floor(minutes / 15)

  return [hours, numberOf15Minutes * 15]
}
