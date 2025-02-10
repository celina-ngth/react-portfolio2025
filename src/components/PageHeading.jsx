const PageHeading = ({ title, description }) => {
  return (
    <>
      {title && (
        <section className="flex flex-col gap-2">
          <h1 className="pb-4 text-lg uppercase lg:max-w-xs lg:text-2xl">
            {title}
          </h1>
          {description && <p>{description}</p>}
        </section>
      )}
    </>
  )
}

export default PageHeading
