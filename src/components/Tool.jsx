const Tool = ({ tool }) => {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {tool && (
          <div className="bg-secondary flex flex-col items-center rounded-lg px-3 py-2 font-semibold">
            {tool}
          </div>
        )}
      </div>
    </>
  )
}

export default Tool
