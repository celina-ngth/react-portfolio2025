const PageHeading = ({ title, description }) => {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="py-4 text-xl font-black">{title} —</h1>
        {description && <div className="text-md pb-5">{description}</div>}
      </section>
    </>
  )
}

export default PageHeading
