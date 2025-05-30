
import { useState , useEffect } from 'react';
import './header.css';
const Header = () => {
    const [showModal, setshowModal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode")  ?? "dark");
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else{
            document.body.classList.remove("light");
            document.body.classList.add("dark");

        }
    }, [theme]);
    return (
        <header className='flex'>
            <button onClick={() => {
                setshowModal(true);
            }} className='menu icon-menu flex'></button>
            <div/>

            <nav>
               <ul className='flex'>
                <li><a href="">About</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Speaking</a></li>
                <li><a href="">Contact</a></li>
               </ul>
            </nav>


            <button onClick={() => {
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
                setTheme(localStorage.getItem("currentMode"))
            }} className='mode flex'>

              {theme === "dark" ? ( <samp className='icon-moon-o'></samp>  ) : ( <samp className='icon-sun'></samp>  )}
            </button>




            {showModal &&(
                <div className='fixed'>
                <ul className='modal'>
                    <li>
                        <button className='icon-close' onClick={() => {
                setshowModal(false);
            }} />
                    </li>
                    <li><a href="">About</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Uses</a></li>
                </ul>

        </div>
            )}

        </header>
    );
}

export default Header;
