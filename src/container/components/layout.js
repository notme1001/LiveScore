import Navigation from './Navigation'
import RightImg from '../../static/assets/images/rightImg.png'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen bg-normal dark:text-whitedarktheme">
      <div className="bg-gradient-to-b from-blue-500 to-blue-600 m-0 md:m-8 md:rounded-3xl">
        <Navigation />
        <div className="bghead flex flex-wrap justify-between md:item-center">
          <div className="px-10 pb-20 lg:flex-1 m-auto">
              <h2 className="text-5xl font-semibold text-white">Dicover all about sport</h2>
              <p className="text-lg md:px-10 text-white w-10/12">
              Search millions of jobs and get the inside scoop on companies. Wait for what? Let’s get start it! </p>
          </div>
          <div className="lg:flex-shrink-0 w-full lg:w-1/2">
            <img src={RightImg} alt="Soccerr right img" className="lazyautosizes lazyloaded w-10/12 sm:px-10 md:px-16 m-auto" />
          </div>
        </div>
      </div>
          <main>{children}</main>
      </div>
    </>
  )
}
