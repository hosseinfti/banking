import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import { BankCardType } from "./config/types";
import Mock from "./mock";

function App() {
  const [data, setData] = useState<Array<BankCardType> | undefined>(undefined);
  const [loading, setLoading] = useState(false);

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

  const reload = () => {
    setData(undefined);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ padding: "12px" }}>
      {data?.length ? (
        <Carousel data={data} />
      ) : loading ? (
        <Card loading={loading} />
      ) : (
        !loading &&
        data?.length === 0 && <button onClick={reload}>refresh</button>
      )}
    </div>
  );
}

export default App;
