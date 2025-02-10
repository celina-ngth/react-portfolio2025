const PageHeading = ({ title, description }) => {
	return (
		<>
			{title && (
				<section className="flex flex-col gap-2">
					<h1 className="text-lg lg:text-2xl lg:max-w-xs uppercase pb-4">
						{title}
					</h1>
					{description && <p>{description}</p>}
				</section>
			)}
		</>
	)
}

export default PageHeading
