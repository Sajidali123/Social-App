export default {
    form: {
        textAlign: 'center'
      },
      image: {
        width: '120px',
        height: 'auto'
       },
      textField: {
      margin: '10px auto 10px auto'
      },
      button: {
      marginTop: 20,
      postition: 'relative'
      },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 10
    },
    progress:{
      postition: 'absolute'
    },
    submitButton: {
      postition: 'relative',
      float: 'right',
      marginTop: 10
    },
    progressSpinner:{
      position: 'absolute'
    },
    closeButton: {
      position: 'absolute',
      left: '91%',
      top: '6%'

    },
    invisibleSeperator: {
      border: 'none',
      margin: 4
    },
    visibleSeperator: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: 20
    },
    profileImage: {
      maxWidth: 200,
      height: 200,
      borderRadius: '50%',
      objectFit: 'cover'
    },
    dialogContent: {
      padding: 20
    },
    expandButton: {
      postition: 'absolute',
      left: '90%'
    },
    spinnerDiv: {
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 50
     },
     commentImage: {
       maxWidth: '100%',
       height: 100,
       objectFit: 'cover',
       borderRadius: '50%'
     },
     commentData: {
       marginLeft: 20
     },
     card: {
       display: 'flex',
       marginBottom: 20,
     },
     cardContent:{
       width: '100%',
       flexDirection: 'column',
       padding: 25
     },
     cover:{
       minWidth: 200,
       objectFit: 'cover'
     },
     handle:{
       width: 60,
       height: 18,
       backgroundColor: '#00bcd4',
       marginBottom: 7
     },
     date:{
       height: 14,
       width: 100,
       backgroundColor: 'rgba(0,0,0, 0.3)',
       marginBottom: 10
     },
     fullLine: {
       height: 15,
       width: '90%',
       backgroundColor: 'rgba(0,0,0, 0.6)',
       marginBottom: 10
     },
     halfLine: {
      height: 15,
      width: '50%',
      backgroundColor: 'rgba(0,0,0, 0.6)',
      marginBottom: 10
    },
    paper: {
      padding: 20
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
        '& button': {
          position: 'absolute',
          top: '80%',
          left: '70%'
        }
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: '#00bcd4'
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      },
      '& svg.button': {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    },
    buttons: {
      textAlign: 'center',
      '& a': {
        margin: '20px 10px'
      }
    },
    paper: {
      padding: 20
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: '#00bcd4'
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      } 
    }
}