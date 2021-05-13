import chroma from 'chroma-js';
import mediaQueries from './mediaQueries';


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
       },
       [mediaQueries.down('lg')]:{
           width: '25%',
           height: '20%'
       },
       [mediaQueries.down('lg')]:{
           width: '50%',
           height: '10%'
       },
       [mediaQueries.down('sm')]:{
           width: '100%',
           height: '5%'
       },
   },
   boxContent: {
       position: 'absolute',
       left: '0px',
       bottom: '0px',
       padding: '10px',
       color: props => chroma(props.color).luminance() <= 0.08 ? 'white' : 'black',
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