export function calculateTotalTime({
  baseWork,
  totalWork,
}: {
  baseWork: number
  totalWork: number
}): number[] {
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
