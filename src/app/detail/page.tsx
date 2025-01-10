"use client"

import "@/css/detail.css";
import { Item } from "@/domain/models/itemModel";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function DetailPage() {
  const searchParams = useSearchParams();

	const [item, setItem] = useState<Item>(null);
	
	useEffect(() => {
		GetItemData();
	},[]);

  async function GetItemData():Promise<void>{
    const data:Response = await fetch("/mockUp/itemMockUp.json");
    if(!data.ok){
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const list:Item[] = await data.json();
    const item:Item = list.find(e => e.id === searchParams.get('id'));

    setItem(item);

    console.log(item);
  }
  return (
    <>
      <main id="detail-main-container">
        <div className="inner">
          <div className="item-info_wrap">
            <div className="item-img_container"></div>
            <div className="item-purchase_container"></div>
          </div>
          <div className="detail-section"></div>
          <div className="notice-section"></div>
        </div>
      </main>
    </>
  );
}

export default DetailPage;
