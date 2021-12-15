import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const Modal = ({ open = true, onClose, children }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<div className="p-all-1">
				{children}
			</div>
		</Dialog>
	)
}

export default Modal