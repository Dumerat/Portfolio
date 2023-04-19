import { useState, useEffect } from 'react';
import Image from 'next/image'

const changeColor = () => {
    const [background, setBackground] = useState('transparent');
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) setBackground('17, 41, 70, 1');
        else setBackground('128, 128, 128, 0.05');
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return background;
  };
  

export default function Navbar() {

    const color = changeColor()
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    function toggleBurger() {
      setShowBurgerMenu(!showBurgerMenu);
    }

    return(
        <>
        <div className="navbar-container" style={{ backgroundColor: `rgba(${color})` }}>
            <div  class="container">
                <div class="top">
                    <div class="square">
                    <div class="square">
                        <div class="square">
                        <div class="square">
                            <div class="square"><div class="square">
                            </div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="square">
                    <div class="square">
                        <div class="square">
                        <div class="square">
                            <div class="square"><div class="square">
                            </div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="left">
                    <div class="square">
                    <div class="square">
                        <div class="square">
                        <div class="square">
                            <div class="square"><div class="square">
                            </div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="right">
                    <div class="square">
                    <div class="square">
                        <div class="square">
                        <div class="square">
                            <div class="square"><div class="square">
                            </div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <nav>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#project'>Projects</a>
                <a href='#skill'>Skills</a>
                <a href='#contact'>Contact</a>
                <Image 
                    src='/images/logo/bars-solid.svg'
                    width={40}
                    height={40}
                    onClick={toggleBurger}
                    className={`${showBurgerMenu ? 'hidden' : ''}`}>
                </Image>
            </nav>
        </div>
        <div className={`menu-burger ${showBurgerMenu ? 'show-burger' : ''}`}>
            <Image
                src='/images/logo/cross.svg'
                width={40}
                height={50}
                onClick={toggleBurger}>
            </Image>
            <nav>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#project'>Projects</a>
                <a href='#skill'>Skills</a>
                <a href='#contact'>Contact</a>
            </nav>
        </div>
        </>
    )
}