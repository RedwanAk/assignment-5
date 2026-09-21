const Footer = () => {
    return (
       <footer className="mt-30">
    
    <div className="flex justify-between items-center container mx-auto border-b-2 p-4 border-gray-100">
    
        <div className="text-[#475569]">
          <img className="my-5" src="/src/assets/logo-text.png" alt="" />
          <p className="text-[#64748B]">Curated tools, technologies, and resources for developers building <br />
            modern software.</p>
            <ul className="my-5 flex gap-5 font-bold">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
        </div>
        <div>
          <h2 className="font-bold my-5">PRODUCT</h2>
          <ul className="text-[#64748B]">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold my-5">COMPANY</h2>
          <ul className="text-[#64748B]">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold my-5">LEGAL</h2>
          <ul className="text-[#64748B]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
</div>

    <p className="mx-auto text-[#94A3B8] container my-10">© 2026 Dev Stack. All rights reserved.</p>
      </footer>
    );
};

export default Footer;