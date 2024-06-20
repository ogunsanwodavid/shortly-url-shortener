import logoWhite from "../assets/logo-white.svg";

import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";

import iconFacebookCyan from "../assets/icon-facebook-cyan.svg";
import iconTwitterCyan from "../assets/icon-twitter-cyan.svg";
import iconPinterestCyan from "../assets/icon-pinterest-cyan.svg";
import iconInstagramCyan from "../assets/icon-instagram-cyan.svg";

function Footer() {
  return (
    <div className="w-full bg-very-dark-violet cursor-pointer px-7 md:px-0">
      <div className="w-full max-w-[720px] mx-auto pt-12 pb-20 space-y-10 md:flex md:justify-between md:pt-16 md:pb-24 md:space-y-0 lg:max-w-[1000px]">
        {/** Logo */}
        <img src={logoWhite} className="mx-auto h-8" />

        {/*** Footer navlinks */}
        <section className="w-full space-y-8 text-center text-gray font-semibold text-lg md:h-max md:space-y-0 md:text-left md:grid md:grid-cols-2 md:gap-y-8 md:px-4 lg:grid-cols-3 lg:gap-y-0 lg:ml-20">
          <div className="space-y-4">
            <h4 className="text-white  md:hover:text-cyan">Features</h4>

            <ul className="space-y-2">
              <li className="md:hover:text-cyan">Link Shortening</li>
              <li className="md:hover:text-cyan">Branded Links</li>
              <li className="md:hover:text-cyan">Analytics</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white  md:hover:text-cyan">Resources</h4>

            <ul className="space-y-2">
              <li className="md:hover:text-cyan">Blog</li>
              <li className="md:hover:text-cyan">Developers</li>
              <li className="md:hover:text-cyan">Support</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white  md:hover:text-cyan">Company</h4>

            <ul className="space-y-2">
              <li className="md:hover:text-cyan">About</li>
              <li className="md:hover:text-cyan">Our Team</li>
              <li className="md:hover:text-cyan">Careers</li>
              <li className="md:hover:text-cyan">Contact</li>
            </ul>
          </div>
        </section>

        {/*** Footer social icons */}
        <section className="w-full flex items-center justify-center space-x-6 md:h-max md:w-max">
          {/** Facebook icon */}
          <img
            src={iconFacebook}
            className="h-7"
            alt="facebook icon"
            onMouseOver={(e) => (e.target.src = iconFacebookCyan)}
            onMouseOut={(e) => (e.target.src = iconFacebook)}
          />

          {/** Twitter icon */}
          <img
            src={iconTwitter}
            className="h-7"
            alt="twitter icon"
            onMouseOver={(e) => (e.target.src = iconTwitterCyan)}
            onMouseOut={(e) => (e.target.src = iconTwitter)}
          />

          {/** Pinterest icon */}
          <img
            src={iconPinterest}
            className="h-7"
            alt="pinterest icon"
            onMouseOver={(e) => (e.target.src = iconPinterestCyan)}
            onMouseOut={(e) => (e.target.src = iconPinterest)}
          />

          {/** Instagram icon */}
          <img
            src={iconInstagram}
            className="h-7"
            alt="instagram icon"
            onMouseOver={(e) => (e.target.src = iconInstagramCyan)}
            onMouseOut={(e) => (e.target.src = iconInstagram)}
          />
        </section>
      </div>
    </div>
  );
}

export default Footer;
