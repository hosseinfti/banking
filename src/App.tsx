import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import { BankCardType } from "./config/types";
import Mock from "./mock";
import "./styles.css";
import light from "./assets/icon/light-mode.svg";
import dark from "./assets/icon/dark-mode.svg";
import refresh from "./assets/icon/reset.svg";

function App() {
  const [data, setData] = useState<Array<BankCardType> | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const getData = () => {
    setLoading(true);
    Mock().then((data: BankCardType[]) => {
      setData(data);
      setLoading(false);
    });
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const reload = () => {
    setData(undefined);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{ padding: "12px" }}
      className={`app${isDarkTheme ? "_dark" : ""}`}
    >
      <img
        data-testid={"theme"}
        width={"30px"}
        src={isDarkTheme ? light : dark}
        onClick={handleTheme}
        alt="theme"
      />
      {data?.length ? (
        <Carousel data={data} isDarkTheme={isDarkTheme} />
      ) : loading ? (
        <Card loading={loading} />
      ) : (
        !loading &&
        data?.length === 0 && (
          <img
            className="refresh"
            onClick={reload}
            src={refresh}
            width={"30px"}
          />
        )
      )}
    </div>
  );
}

export default App;
