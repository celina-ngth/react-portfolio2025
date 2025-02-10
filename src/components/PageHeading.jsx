const PageHeading = ({ title, description }) => {
  return (
    <>
      {title && (
        <section className="flex flex-col">
          <h1 className="pb-4 text-lg uppercase lg:text-2xl">{title}</h1>
          {description && <p className="pb-4">{description}</p>}
        </section>
      )}
    </>
  )
}

export default PageHeading
