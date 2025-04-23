export const ErrorDisplay = ({err}: {err: Error}) => {
  console.log('ERROR', JSON.stringify(err))
  return (
    <div className="p-4 rounded-md border-red-500 border-2">
      <p className="text-red-500">{err.message}</p>
    </div>
  )
}
