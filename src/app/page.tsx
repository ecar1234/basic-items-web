"use client";
import "@/css/mainPage.css";
import Footer from "./footer";
import LoginModal from "@/components/modals/login_modal";
import { JSX, useEffect, useState } from "react";
import { item } from "@/domain/models/itemModel";

const home = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [items, setItems] = useState<item[]>([]);

  useEffect(() => {
    fetch("/mockUp/itemMockUp.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e));
      console.log(items)
  }, []);

  const ItemBuilder = (): JSX.Element => {
    return (
      <>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </>
    );
  };
  return (
    <>
      <div id="main-container">
        <div className="inner">
          <div className="main-body">{ItemBuilder()}</div>
        </div>
        <Footer />
      </div>
      {isLogin && <LoginModal />}
    </>
  );
};

export default home;
