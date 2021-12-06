export const Tokenomics = (props) => {
  return (
    <div id='tokenomics' style={{padding: "50px"}} className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title' style={{marginBottom: 20}}>
          <h2>Tokenomics</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4'>
                  {' '}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
