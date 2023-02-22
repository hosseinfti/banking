import React, { useEffect, useState } from "react";
import Card from "./components/Card";
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
      {data && data.length ? (
        data.map((data) => {
          return (
            <Card
              title={data.title}
              description={data.description}
              detail={
                <div style={{ display: "flex", alignItems: "center" }}>
                  {data.detail}
                </div>
              }
              key={data.id}
              image={<img src={data.image} alt="card_image"></img>}
            ></Card>
          );
        })
      ) : loading ? (
        <Card loading={loading} />
      ) : (
        <button onClick={reload}>refresh</button>
      )}
    </div>
  );
}

export default App;
