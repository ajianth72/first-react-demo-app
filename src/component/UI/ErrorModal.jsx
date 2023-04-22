import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const backdrop = (
    <div className={classes.backdrop} onClick={props.onConfirm}></div>
  );

  const modalOverlay = (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.massage}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </Card>
  );

  return (
    <React.Fragment>
      {ReactDOM.createPortal(backdrop, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(modalOverlay, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
}

export default ErrorModal;
