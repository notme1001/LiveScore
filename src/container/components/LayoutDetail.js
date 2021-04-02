import Navigation from './Navigation'
import RightImg from '../../static/assets/images/rightImg.png'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen bg-normal">
      <div className="bg-gradient-to-b from-blue-500 to-blue-600 m-0 md:m-8 md:rounded-3xl">
        <Navigation />
      </div>
          <main>{children}</main>
      </div>
    </>
  )
}
