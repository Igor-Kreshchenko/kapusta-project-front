// Требует пропсы: text (передаем текст сообщения),
// и onClose - функцию закрытия. Она должна тогглить булевое значение
// поля showModal в стейте родительского компонента. Рендерим М. при showModal= true

import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import Button from "../Button/Button";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  closeModal = (event) => {
    this.props.onClose();
  };

  toAgree = (e) => {
    console.log("Да, я согласен на все, о чем вы спрашиваете");
  };
  toRefuse = (e) => {
    console.log("Нет, я отказываюсь от  всего, что вы мне предлагаете");
  };
  render() {
    const textContent = this.props.text;
    return createPortal(
      <div
        className={styles.Modal__backdrop}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal__content}>
          <button
            type="button"
            className={styles.Modal__close}
            onClose={this.closeModal}
          >
            <CloseIcon width="12" height="12" />
          </button>
          <p className={styles.textContent}>{textContent}</p>
          <div className={styles.btnContainer}>
            <Button buttonText={"ДА"} buttonHandler={this.toAgree} />
            <Button buttonText={"НЕТ"} buttonHandler={this.toRefuse} />
          </div>
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
