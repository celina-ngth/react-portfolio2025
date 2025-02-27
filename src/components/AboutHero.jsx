import celina from '../assets/pp-celina.jpg'

const AboutHero = () => {
  return (
    <>
      <div className="p-4 py-6 lg:py-8">
        <div className="relative container flex h-[600px] flex-col overflow-hidden py-6 md:h-fit md:py-10">
          <div className="z-10 flex h-full translate-y-4 flex-col justify-end gap-4 text-xl">
            <h1>
              — Célina Ngeth,
              <div className="font-semibold">
                Développeuse <strong>front-end JavaScript</strong>
              </div>
              depuis plus de 4 ans
            </h1>
          </div>

          <img
            style={{
              borderRadius: '60% 40% 63% 45%',
              width: '420px',
              height: '380px',
              objectFit: 'cover',
            }}
            className="absolute top-0 right-0 h-full w-full object-cover"
            src={celina}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default AboutHero
