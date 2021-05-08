
const styles ={
   root: {
       height: '25%',
       display: 'inline-block',
       position: 'relative',
       width: '20%',
       margin: '0 auto',
       cursor: 'pointer',
       marginBottom: '-3.5px',
       '&:hover svg': {
           color:'rgb(224,224,224)',
           transform: 'scale(1.5)',
       }
   },
   boxContent: {
       position: 'absolute',
       left: '0px',
       bottom: '0px',
       padding: '10px',
       color: 'rgba(0,0,0,0.5)',
       letterSpacing: '1px',
       textTransform: 'uppercase',
       fontSize: '12px',
       width: '100%',
       display: 'flex',
       justifyContent:'space-between'
    },
    deleteIcon: {
        transition: 'all 0.3s ease-in-out'
    }
   
}
export default styles;