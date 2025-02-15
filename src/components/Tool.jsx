const Tool = ({ tool }) => {
  return (
    <>
      {tool && (
        <div className="bg-secondary flex flex-col items-center rounded-lg px-3 py-2 font-semibold">
          {tool}
        </div>
      )}
    </>
  )
}

export default Tool
