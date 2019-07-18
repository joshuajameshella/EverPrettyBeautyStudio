export const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '15vh',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    zIndex: 15,
    fontFamily: 'Muli, sans-serif',
  },
  logoBig: {
    height: '13vh',
    marginTop: '2vh',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: 200,
    maxHeight: 120,
  },
  logoSmallDesktop: {
    position: 'absolute',
    height: '10vh',
    minWidth: 300,
    paddingTop: 'calc((15vh - 77px) / 1.5)',
    paddingLeft: '5vw'
  },
  logoSmallMobile: {
    position: 'absolute',
    width: '10vh',
    minWidth: 250,
    paddingTop: 'calc((20vh - 77px) / 2)',
    paddingLeft: '1vw'
  },
  leftHolder: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '35vw',
    height: '15vh',
  },
  rightHolder: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '35vw',
    height: '15vh',
  },
  leftLink: {
    position: 'relative',
    float: 'right',
    marginRight: '15%',
    marginTop: '6vh',
    textDecoration: 'none',
    color: 'rgb(80, 80, 80)',
  },
  rightLink: {
    position: 'relative',
    float: 'left',
    marginLeft: '15%',
    marginTop: '6vh',
    textDecoration: 'none',
    color: 'rgb(80, 80, 80)',
  },
  menuHolder: {
    position: 'absolute',
    width: '20vw',
    right: 0,
    top: 0,
    height: '15vh',
  },
  menuIcon: {
    position: 'absolute',
    height: '100%',
    margin: 'calc(9vh - 28px)',
    right: 0
  },
  menuCover: {
    position: 'fixed',
    top: '20vh',
    left: 0,
    width: '100vw',
    height: '80vh',
    backgroundColor: 'rgb(100, 100, 100)',
  },

  container: {
    display: 'flex',
  },
  dropdownMenu: {
    width: '100vw',
    height: '85vh',
    marginTop: '15vh',
    backgroundColor: 'rgb(220, 220, 220)',
    paddingTop: '5vh',
    fontSize: 20,
    fontWeight: 300,
    zIndex: 30,
  },

};
