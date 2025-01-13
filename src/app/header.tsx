"use client"
import "@/css/header.css";
import { useRef, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Image from "next/image";
import Link from "next/link";

function Header() {

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const searchInput = useRef(null);

  function checkLogin(e:React.MouseEvent<HTMLElement, MouseEvent>):void{
    e.preventDefault();
    if(isLogin){
      setIsLogin(false);
    }else{
      setIsLogin(true);
    }
  }
  function searchOnChange(e:React.ChangeEvent<HTMLInputElement>):void{
    setSearchValue(e.target.value);
    console.log(e.target.value);
  }
  function searchOnclick(e:React.MouseEvent<HTMLElement, MouseEvent>):void{
    e.preventDefault();
    console.log("search on click!")
  }

  return (
    <header>
      <div className="inner">
        <div className="nav-container">
          <div className="logo">
            <Link href="/"><Image src="/logo.png" alt="Logo" fill priority /></Link>
          </div>
          <div className="nav-wrap">
            <nav className="sub-nav">
              {isLogin ? <p onClick={checkLogin}>Logout</p> : <p onClick={checkLogin}>Login</p>}
              <div className="search-container">
                <input type="text" className="search-input" ref={searchInput} onChange={searchOnChange} />
                <span onClick={searchOnclick}><SearchIcon /></span>
                {isLogin ? <span><PersonOutlineOutlinedIcon/></span> : <span></span>}
              </div>
            </nav>
            <nav className="main-nav">
              <ul>
                <li>티셔츠</li>
                <li>셔츠</li>
                <li>팬츠</li>
                <li>아우터</li>
                <li>1+1</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
