export const Highlights = (props) => {
  return (
    <div id='highlights' className='text-center' style={{background: "#58B2EE"}}>
      <div className='container'>
        <div className='section-title'>
          <h2>Kitty Kad Highlights</h2>
          <p>
            Still deciding whether to get some Kitty Kad? Check out some reasons to support the project below
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
