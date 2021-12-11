export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Kitty Kad Token
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#roadmap' className='page-scroll'>
                Roadmap
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#highlights' className='page-scroll'>
                Highlights
              </a>
            </li>
            <li>
              <a href='#tokenomics' className='page-scroll'>
                Tokenomics
              </a>
            </li>
            <li>
              <a href='#projects' className='page-scroll'>
                Projects
              </a>
            </li>
            <li>
              <a href='#socials' className='page-scroll'>
                Socials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}