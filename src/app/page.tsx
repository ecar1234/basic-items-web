"use client";
import "@/css/mainPage.css";
import Footer from "../components/footer";
import LoginModal from "@/components/modals/login_modal";
import { JSX, useEffect, useState } from "react";
import { Item } from "@/domain/models/itemModel";
import Image from "next/image";
import { MathUtils } from "@/utils/mathUtil";
import Link from "next/link";
// import { MainUseCases } from "@/useCases/mainUse/mainUseCase";

const Home = () => {
  // const useCase = MainUseCases();

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // useCase.getItemsData();

    fetch("/mockUp/itemMockUp.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e));
    console.log(items);
  },[]);

  useEffect(() => {
    setIsLogin(false);
  }, []);

  const ItemBuilder = (): JSX.Element => {
    return (
      <>
        {items.map((item) => (
          <Link
            key={item.id}
            href={{ pathname: "/detail", query: { name: item.title, id: item.id } }}
            scroll={false}
          >
            <div className="item-container">
              <div className="item-img">{ItemImgBuild(item.images)}</div>
              <div className="item-info_container">
                {ItemColorBuild(item.colors)}
                <div className="item-info_title">
                  <p className="item_title">{item.title}</p>
                  <p className="item_description">{item.description}</p>
                </div>
                <div className="divider"></div>
                <div className="price">
                  {item.sale != null ? (
                    <span>
                      <p>{MathUtils.addComma(item.sale)}원</p>
                    </span>
                  ) : null}
                  <p>{MathUtils.addComma(item.price)}원</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </>
    );
  };

  const ItemImgBuild = (path: string[]): JSX.Element => {
    if (path.length === 0) {
      return (
        <>
          <p>no image</p>
        </>
      );
    } else {
      return <Image src={`${path[0]}`} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />;
    }
  };

  const ItemColorBuild = (colors: string[]): JSX.Element => {
    if (colors.length === 0) {
      return <div className="cfff"></div>;
    }
    return (
      <div className="item-colors">
        {colors.map((color, i) => {
          return <span key={i} className={`${color}`}></span>;
        })}
      </div>
    );
  };

  return (
    <>
      <main id="main-container">
        <div className="inner">
          <div className="main-body">{ItemBuilder()}</div>
        </div>
        <Footer />
      </main>
      {isLogin && <LoginModal />}
    </>
  );
};

export default Home;
