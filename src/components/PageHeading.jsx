const PageHeading = ({ title, description }) => {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="pb-4 text-xl">{title} —</h1>
        {description && <p className="text-md pb-6">{description}</p>}
      </section>
    </>
  )
}

export default PageHeading
