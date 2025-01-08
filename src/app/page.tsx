"use client";
import "@/css/mainPage.css";
import Footer from "./footer";
import LoginModal from "@/components/modals/login_modal";
import { JSX, useEffect, useState } from "react";
import { Item } from "@/domain/models/itemModel";
import Image from "next/image";
import { MainUseCases } from "@/useCases/mainUse/mainUseCase";

const Home = () => {
  const useCase = MainUseCases();

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // useCase.getItemsData();

    fetch("/mockUp/itemMockUp.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e));
      console.log(items)
  }, [items]);

  useEffect(() => {
    setIsLogin(false);
  },[])

  const ItemBuilder = (): JSX.Element => {
    return (
      <>
        {items.map((item) => (
          <div key={item.id} className="item-container">
            <div className="item-img">
              {ItemImgBuild(item.images)}
            </div>
          </div>
        ))}
      </>
    );
  };
  const ItemImgBuild = (path:string[]):JSX.Element =>{
    if(path.length === 0){
      return <><p>no image</p></>
    }else{
      return <Image src={`${path[0]}`} alt=""/>
    }
  }


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

export default Home;
