const Tool = ({ tool }) => {
  return (
    <>
      {tool && <div className="bg-secondary rounded-lg px-3 py-2">{tool}</div>}
    </>
  )
}

export default Tool
