import data from "../../../__mocks__/goodsList.json";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../../firebase";

export type Goods = {
  id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  url: string;
};

// const goodsList = data.goodsList as Goods[];

export type Hooks = {
  goodsList: Goods[];
};

export const useHooks = (): Hooks => {
  const [goodsList, setGoodsList] = useState<Goods[]>([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setGoodsList(
        (snapShot.docs.map((item) => ({ ...item.data() })) as Goods[]) || []
      );
    });
    // リアルタイムで取得
    onSnapshot(postData, (post) => {
      setGoodsList(
        (post.docs.map((item) => ({ ...item.data() })) as Goods[]) || []
      );
    });
  }, []);

  return {
    goodsList,
  };
};
