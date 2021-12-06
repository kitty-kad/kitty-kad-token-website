import kittykad from './../kittykad.png';
import {useLayoutEffect, useState} from 'react';

export const Header = (props) => {
  const isSmallScreen = useWindowSize() <= 600;
  const screenStyleToAdd = isSmallScreen? smallScreenStyle : {};
  const screenStyle = {...style, screenStyleToAdd};
  const splitStyleToAddImg =  isSmallScreen ? smallImageStyle : {};
  const splitStyleImg = {...splitContainerStyle, ...splitStyleToAddImg};

  const splitStyleToAddTxt =  isSmallScreen ? smallTextStyle : normalTextStyle;
  const splitStyleText = {...splitContainerStyle, ...splitStyleToAddTxt};

  return (
    <header id='header'>
      <div className='intro' style={screenStyle}>
        <div style={splitStyleImg }>
          <img  src={kittykad} style={{width: "50%"}} alt="logo"/>
        </div>
        <div style={splitStyleText}>
          <div className="">
              <div className=' intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#roadmap'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const backgroundColor = "#58B2EE";
const style = {
  background: backgroundColor,
  display: "flex",
  direction: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: '100%',
  overflow: "auto",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const smallScreenStyle = {
  justifyContent: "center",
};

const splitContainerStyle= {
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "auto",
  paddingTop: "200px",
  paddingBottom: "100px",
};

const normalTextStyle= {
  justifyContent: "flex-start",
};

const smallImageStyle = {
  width: "100%",
  paddingTop: "100px",
  paddingBottom: "0px",
};

const smallTextStyle = {
  width: "100%",
  paddingTop: 0,
  paddingBottom: "30px",
}
