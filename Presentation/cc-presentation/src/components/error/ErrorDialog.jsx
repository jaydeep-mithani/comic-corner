import React, { useState } from "react";
import classes from "./ErrorDialog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/fontawesome-free-solid";

const ErrorDialog = ({ message, onClose }) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => {
		setIsOpen(false);
		onClose();
	};

	return isOpen ? (
		<div className={classes["error-dialog-wrapper"]} onClick={handleClose}>
			<div className={classes["error-dialog-content"]} onClick={(e) => e.stopPropagation()}>
				<div className={classes["error-dialog-header"]}>
					<h3 className="d-flex align-items-center">
						<FontAwesomeIcon icon={faExclamationTriangle} className="me-2 fs-5" />
						Error
					</h3>
					<button className={"btn-close btn-close-white fs-6 " + classes["close-button"]} onClick={handleClose} />
				</div>
				<div className={classes["error-dialog-body"]}>
					<p className={classes.msg}>{message}</p>
				</div>
			</div>
		</div>
	) : null;
};

export default ErrorDialog;
