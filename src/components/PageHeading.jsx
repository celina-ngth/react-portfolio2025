const PageHeading = ({ title, description, center }) => {
  return (
    <>
      <section
        className={`flex flex-col ${center && 'items-center text-center'}`}
      >
        <h2 className="pb-4 text-xl font-black">
          {title} {!center && <>—</>}
          {center && <div>—</div>}
        </h2>
        {description && (
          <div className="pb-5 text-lg font-semibold">{description}</div>
        )}
      </section>
    </>
  )
}

export default PageHeading
