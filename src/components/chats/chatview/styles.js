const styles = theme => ({

  content: {
    height: 'calc(100vh - 100px)',
    overflow: 'auto',
    padding: '25px',
    marginLeft: '100px',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    top: '100px',
    width: 'calc(100% - 300px)',
    position: 'absolute'
  },

  userSent: {
    float: 'left',
    clear: 'both',
    padding: '20px',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    marginTop: '10px',
    backgroundColor: '#707BC4',
    color: 'white',
    width: '300px',
    borderRadius: '10px'
  },

  friendSent: {
    float: 'right',
    clear: 'both',
    padding: '20px',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    marginTop: '10px',
    backgroundColor: '#707BC4',
    color: 'white',
    width: '300px',
    borderRadius: '10px'
  },

  chatHeader: {
    width: 'calc(100% - 301px)',
    height: '50px',
    backgroundColor: '#344195',
    position: 'fixed',
    marginLeft: '109px',
    fontSize: '18px',
    textAlign: 'center',
    color: 'white',
    paddingTop: '10px',
		boxSizing: 'border-box',
		marginBottom: '20px'
  }

});

export default styles;