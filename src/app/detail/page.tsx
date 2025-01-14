"use client";

import "@/css/detail.css";
import { Item } from "@/domain/models/itemModel";
import { ColorCheck } from "@/utils/color_check";
import { MathUtils } from "@/utils/mathUtil";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { JSX, useEffect, useState } from "react";

interface SelectItem {
  color: string;
  size: string;
  price: number;
  qty: number;
}

function DetailPage(): JSX.Element {
  const searchParams = useSearchParams();

  const [item, setItem] = useState<Item>(null);

  //user selected item var.
  const [selectedColor, setColor] = useState<string>("");
  const [selectedSize, setSize] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<SelectItem[]>([]);

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
        const itemData: Item = list.find((item) => item.id === itemId);
        setItem(itemData);
      } catch (e) {}
    }
    GetItemData();
  }, []);
  useEffect(() => {}, [item]);
  // feature
  function SelectSize(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, size: string): void {
    e.preventDefault();
    setSize(size);
  }

  // UI
  const BuildSize = (): JSX.Element => {
    return (
      <>
        {item.size.map((s, i) => {
          return (
            <span key={i}>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => SelectSize(e, s)}
              >
                {s}
              </button>
            </span>
          );
        })}
      </>
    );
  };
  const BuildColor = (): JSX.Element => {
    return (
      <>
        {item.colors.map((code, i) => {
          const color = ColorCheck.CodeToString(code);
          return (
            <span key={i} className={color}>
              <button>{color}</button>
            </span>
          );
        })}
      </>
    );
  };

  if (!item) {
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
              <div className="item-sizes">{BuildColor()}</div>
              <div className="divider"></div>
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
