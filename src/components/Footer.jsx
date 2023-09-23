import Logo from '/images/logo.svg';
import FacebookIcon from '/images/icon-facebook.svg';
import InstagramIcon from '/images/icon-instagram.svg';
import PinterestIcon from '/images/icon-pinterest.svg';
import TwitterIcon from '/images/icon-twitter.svg';


export const Footer = () => {
  return (
    <div className="bg-[#90d4c5] w-[100%] h-[420px] text-primary-dark-desaturated-cyan font-bold font-barlow text-[21px] flex flex-col items-center justify-center space-y-12">

     <img
        src={Logo}
        alt="Logo"
        className="w-[230px]"
      />


      <div className="flex flex-row space-x-10 md:space-x-[80px] ">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Proyects</a>
      </div>

      <div className="flex flex-row space-x-9 pt-10">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={FacebookIcon}
            alt="FacebookIcon"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={InstagramIcon}
            alt="InstagramIcon"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={TwitterIcon}
            alt="TwitterIcon"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={PinterestIcon}
            alt="PinterestIcon"
            className="w-6 h-6"
          />
        </a>
      </div>
    </div>
  )
}
