import { useState, useEffect } from 'react';
import Image from 'next/image'

const ChangeColor = () => {
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

    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    function toggleBurger() {
      setShowBurgerMenu(!showBurgerMenu);
    }

    return(
        <>
        <div className="navbar-container" style={{ backgroundColor: `rgba(${ChangeColor()})` }}>
            <div className="container">
                <div className="top">
                    <div className="square">
                    <div className="square">
                        <div className="square">
                        <div className="square">
                            <div className="square"><div className="square">
                            </div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="square">
                    <div className="square">
                        <div className="square">
                        <div className="square">
                            <div className="square"><div className="square">
                            </div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="left">
                    <div className="square">
                    <div className="square">
                        <div className="square">
                        <div className="square">
                            <div className="square"><div className="square">
                            </div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="right">
                    <div className="square">
                    <div className="square">
                        <div className="square">
                        <div className="square">
                            <div className="square"><div className="square">
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
                    className={`${showBurgerMenu ? 'hidden' : ''}`}
                    alt='show more'>
                </Image>
            </nav>
        </div>
        <div className={`menu-burger ${showBurgerMenu ? 'show-burger' : ''}`}>
            <Image
                src='/images/logo/cross.svg'
                width={40}
                height={50}
                onClick={toggleBurger}
                alt='close'>
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