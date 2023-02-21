const Mock = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 5);
      if (random > 1)
        resolve([
          {
            title: "6219861051445772",
            description: "کارت بانک سامان",
            detail: "122,232ریال",
            id: 1,
            image: "https://picsum.photos/64",
          },
          {
            title: "6104337887558110",
            description: "کارت بانک ملت",
            detail: "190,232ریال",
            id: 2,
            image: "https://picsum.photos/64",
          },
          {
            title: "6037861051445772",
            description: "کارت بانک ملی",
            detail: "134,252ریال",
            id: 3,
            image: "https://picsum.photos/64",
          },
          {
            title: "6219861057725114",
            description: "کارت بانک سامان",
            detail: "109,232ریال",
            id: 4,
            image: "https://picsum.photos/64",
          },
          {
            title: "6037861057787523",
            description: "کارت بانک صادرات",
            detail: "146,232ریال",
            id: 5,
            image: "https://picsum.photos/64",
          },
        ]);
      else resolve([]);
    }, 2000);
  });

export default Mock;
