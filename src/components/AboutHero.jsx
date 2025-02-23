import celina from '../assets/celina-ngeth.jpeg'

const AboutHero = () => {
  return (
    <>
      <div className="bg-dark p-4 text-white lg:py-10">
        <div className="relative container flex h-[600px] flex-col overflow-hidden md:h-fit lg:py-10">
          <div className="z-10 flex h-full flex-col justify-end gap-4 text-xl">
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
