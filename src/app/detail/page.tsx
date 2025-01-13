"use client";

import "@/css/detail.css";
import { Item } from "@/domain/models/itemModel";
import { MathUtils } from "@/utils/mathUtil";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { JSX, Suspense, useEffect, useState } from "react";

function DetailPage(): JSX.Element {
  const searchParams = useSearchParams();

  const [item, setItem] = useState<Item>(null);

  useEffect(() => {
    const itemId: string | null = searchParams.get("id");
    if (itemId == null) {
      console.error("id 값이 없습니다.");
      return;
    }

    async function GetItemData(): Promise<void> {
      try {
        const res: Response = await fetch("/mockUp/itemMockUp.json");
        if (!res.status) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        const list: Item[] = await res.json();
        console.log(list);
        const itemData: Item = list.find((item) => item.id === itemId);
        if (itemData != null) {
          setItem(itemData);
        } else {
          const item: Item = {
            id: "0",
            register: new Date(),
            category: 1,
            title: "기모 베이직 맨투맨",
            images: ["/mockImg/231231944_01.png"],
            price: 8800,
            sale: 12000,
            size: ["free size", "M", "L", "XL", "2XL"],
            description: "고 퀄리티 맨투맨",
            colors: ["cfe2e2e", "c01df01", "cfe642e", "c01df01"],
            quantity: null,
          };
          setItem(item);
        }
      } catch (e) {}

      console.log(item);
    }
    GetItemData();
    console.log(item);
  }, []);

  const BuildSize = (): JSX.Element => {
    if (item.size.length > 1) {
      item.size.map((s) => {
        return <div className="size">{s}</div>;
      });
    } else if (item.size.length >= 1) {
      return <div className="size">Free Size</div>;
    } else {
      return <></>;
    }
  };

  if(!item){
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <>
      <main id="detail-main-container">
        <div className="inner">
          <div className="item-info_wrap">
            <div className="item-img_container">
              <div className="img-potions">
                <button className="prev"></button>
                <button className="next"></button>
              </div>
             <Image src={`${item.images[0]}`} alt="" fill />
            </div>
            <div className="item-purchase_container">
              <div className="item-title">
                <p>{item.title}</p>
              </div>
              <div className="divider"></div>
              <div className="item-price">
                <span>판매가 : </span>
                <span>{MathUtils.addComma(item.price)}원</span>
              </div>
              <div className="item-sizes">{BuildSize()}</div>
            </div>
          </div>
          <div className="detail-section"></div>
          <div className="notice-section"></div>
        </div>
      </main>
    </>
  );
}

export default DetailPage;
