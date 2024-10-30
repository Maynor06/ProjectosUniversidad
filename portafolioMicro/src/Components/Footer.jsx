export const Footer = () => {
    return(
        <div className="relative">
      <footer className="bg-[#A9A9A9] relative bottom-0 phone:relative w-full h-16 flex items-center justify-center text-white mt-4 ">
      <a href="https://www.instagram.com/_maynor_06/?next=%2F" target="_blank" className="absolute left-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-150">
          <img className="w-9 h-9" src="Instagram.svg" alt="about" />
        </a>
        
        <a href="http://www.linkedin.com/in/maynor-semeya" target="_blank" className="absolute left-14 rounded-full transition-transform duration-300 ease-in-out hover:scale-150">
          <img className="w-9 h-9" src="Linkedin.svg" alt="about" />
        </a>

        <div className="flex items-center justify-center mt-[-60px] ">
          <img src="logoMd.png" alt="logo" className="w-14 h-14" />
        </div>

        <a href="https://mdportafolio.netlify.app/" target="_blank" className="absolute right-14 rounded-full transition-transform duration-300 ease-in-out hover:scale-150">
          <img className="w-9 h-9" src="Maletin.svg" alt="github" />
        </a>


        <a href="https://github.com/Maynor06" target="_blank" className="absolute right-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-150">
          <img className="w-9 h-9" src="Github.svg" alt="github" />
        </a>


      </footer>
    </div>
    )
}