import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function RatingMUI({ value=5, editable ,onClick }) {

    return (
        <>
            {editable ? <Rating
            onChange={(event,newValue)=>{onClick(newValue)}}
                editable
                name="simple-controlled"
            />
                :
                
                <Rating
                readOnly
                    name="simple-controlled"
                    value={value}
                />}
        </>
            
    );
}