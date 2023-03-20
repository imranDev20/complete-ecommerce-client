import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";

// Type Declarations
type DeliveryAddressModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function DeliveryAddressModal(props: DeliveryAddressModalProps) {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Add New Address Information</DialogTitle>
        <DialogContent sx={{ paddingTop: "18px!important" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            pb: 2,
            px: 3,
          }}
        >
          <Button size="small" variant="contained" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default DeliveryAddressModal;
