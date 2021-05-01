import React from 'react';
import DragableColorBox from '../DragableColorBox/DragableColorBox.component';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const DragableColorBoxList = SortableContainer((props) => {
 return(
     <div style={{height: '100%'}}>
        {props.colors.map((c, idx) => (
            <DragableColorBox key={c.name}
                            index={idx}
                            color={c.color}
                            name={c.name}
                            handleClick={()=> props.deleteColorBox(c.name)} />
        ))}
     </div>
 );
        
})


export default DragableColorBoxList;