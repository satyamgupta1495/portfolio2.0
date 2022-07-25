import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hii, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          atyam
          <br />
          Web Developer
        </h1>

        <h2>Frontend Developer / Web3 Noob / Open Source Contributor /</h2>
        <Link to="/contact" className="flat-button">
          {' '}
          CONTACT ME{' '}
        </Link>
      </div>
    </div>
  )
}

export default Home
