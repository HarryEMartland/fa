import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, Modal, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info'

function ChecklistItem (props: { label: string, images?: string[], quantity?: number }) {
  const [showModal, setShowModal] = useState<boolean>(false)

  const label = props.label + (props.quantity ? ` (${props.quantity})` : '')

  return <div>
        <FormControlLabel control={<Checkbox/>}
                          label={label}/>
      {props.images && <>
            <IconButton onClick={() => setShowModal(true)} component='span'><InfoIcon/></IconButton>
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box margin={2} >
                {props.images.map(i => <Box key={i} margin={1}><img style={{ width: '100%' }} src={`fa/${i}`}/></Box>)}
            </Box>
        </Modal>
      </>}

    </div>
}

export class Checklist extends React.Component<{ checklist: { name: string; list: ({ name: string, images?: string[], quantity?:number})[] } }> {
  render () {
    return <Box>
            <Typography variant="h4" component="div" gutterBottom>
                {this.props.checklist.name}
            </Typography>
            <FormGroup style={{ textAlign: 'left' }}>
                {this.props.checklist.list.map(({ name, images, quantity }) => <ChecklistItem key={name} label={name} images={images} quantity={quantity}/>
                )}
            </FormGroup>
        <Link to="/"><Button variant="contained">Back</Button></Link>

    </Box>
  }
}
