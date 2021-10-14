import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./VerifyWindow.module.scss";

const VerifyWindow = () => {
  const { verifyToken } = useParams();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(`/users/verify/${verifyToken}`);
        setResponse(result);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);

  const createMessage = (message) => {
    if (message.includes(500)) {
      return "Внутренняя ошибка сервера. Попробуйте обновить страницу";
    }
    return `Вы перешли по недействительной ссылке. Убедитесь, что вы ввели ссылку правильно. Если вы копируете эту ссылку из почты, убедитесь, что вы скопировали все строки ссылки.`;
  };

  return (
    <div className={styles.verifyDiv}>
      {error && <h1 className={styles.verifyText}>{createMessage(error)}</h1>}
      {response && <h1 className={styles.verifyText}>{response}</h1>}
    </div>
  );
};

export default VerifyWindow;
