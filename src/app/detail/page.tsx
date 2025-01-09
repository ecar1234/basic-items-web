"use client"

import "@/css/detail.css";
import { Item } from "@/domain/models/itemModel";
import { useEffect, useState } from "react";

function DetailPage() {
	const [item, setItem] = useState<Item>(null);
	
	useEffect(() => {
		
	},[]);

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
