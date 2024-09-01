import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { v4 as uuidv4 } from 'uuid';
const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: #f8f9fa; /* Light pastel background */
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledButton = styled(Button)`
  background-color: #6c63ff; /* Pastel purple */
  color: white;
  &:hover {
    background-color: #5848c2;
  }
`;

const ShapeModal = ({ open, onClose, onSave, onCancel, layer  }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [severity, setSeverity] = useState('');

  const handleSave = () => {
    onSave({ id: uuidv4(), name, type, severity, layer });
    onClose();
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel(layer);
    }
    onClose();
  };

  return (
    <CustomDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="text-2xl font-bold text-gray-700">Add Shape Information</DialogTitle>
      <DialogContent className="space-y-4">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
          className="bg-white rounded-lg shadow-sm"
        />
        <TextField
          select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
          className="bg-white rounded-lg shadow-sm"
        >
          <MenuItem value="Tree">Tree</MenuItem>
          <MenuItem value="Building">Building</MenuItem>
          <MenuItem value="Waterbody">Waterbody</MenuItem>
          <MenuItem value="Park">Park</MenuItem>
          <MenuItem value="Road">Road</MenuItem>
          {/* Add more types as needed */}
        </TextField>
        <TextField
          select
          label="Severity"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
          className="bg-white rounded-lg shadow-sm"
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions className="space-x-4">
        <Button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">Cancel</Button>
        <StyledButton onClick={handleSave} variant="contained">Save</StyledButton>
      </DialogActions>
    </CustomDialog>
  );
};

export default ShapeModal;
