const PageHeading = ({ title, description }) => {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="pb-3 text-xl">{title} —</h1>
        {description && <p className="pb-4">{description}</p>}
      </section>
    </>
  )
}

export default PageHeading
