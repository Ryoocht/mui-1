import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Checkbox } from '@mui/material'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import DeleteIcon from '@mui/icons-material/Delete'

const MuiCheckbox = () => {

    const [checked, setChecked] = useState()

    return (
        <div>
            <FormControlLabel
                control={<Checkbox
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                    inputProps={{
                        'aria-label': 'secondary checkbox'
                    }}
                    icon={<DeleteIcon />}
                    checkedIcon={<SaveAsIcon />}
                />}
                label='Testing Checkbox'
            />
        </div>
    )
}

export default MuiCheckbox;
