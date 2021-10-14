import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./VerifyWindow.module.scss";
import BounceKapusta from "./BounceKapusta";
import { motion } from "framer-motion";
import GoBackButton from "../GoBackButton";

const VerifyWindow = () => {
  const { verifyToken } = useParams();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(`/users/verify/${verifyToken}`);
        setResponse(result);
        setTimeout(() => {
          history.push("/login");
        }, 4000);
      } catch (error) {
        setError(error.message);
      }
    }
    setTimeout(() => {
      getData();
    }, 300);
  }, [history, verifyToken]);

  const createMessage = (message) => {
    if (message.includes(500)) {
      return "Внутренняя ошибка сервера. Попробуйте обновить страницу";
    }
    return `Вы перешли по недействительной ссылке. Убедитесь, что вы ввели ссылку правильно. Если вы копируете эту ссылку из почты, убедитесь, что вы скопировали все строки ссылки.`;
  };

  return (
    <Fragment>
      <div className={styles.button}>
        <GoBackButton />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.25 } }}
        className={styles.verifyDiv}
      >
        {error && <h1 className={styles.verifyText}>{createMessage(error)}</h1>}
        {response && (
          <h1 className={styles.verifyText}>
            Ваш email успешно верифицирован, в течении нескольких секунд вас
            перенаправит на страницу логина.
          </h1>
        )}
        {!error & !response ? <BounceKapusta /> : <Fragment />}
      </motion.div>
    </Fragment>
  );
};

export default VerifyWindow;
