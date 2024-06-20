import mobileShortenerBg from "../assets/bg-shorten-mobile.svg";
import desktopShortenerBg from "../assets/bg-shorten-desktop.svg";

import Button from "./Button";
import { useRef, useState } from "react";

function Shortener({ isDesktopWidth, storedUrls, setStoredUrls }) {
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState("");
  const inputRef = useRef();
  const [longUrl, setLongUrl] = useState("");

  //Function checks if a string is a valid Url input
  function isValidURL(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  //Function checks if a url has already been shortened
  function isURLShortened(longUrl) {
    const sameLongUrl = storedUrls.filter((storedurl) => {
      return storedurl.longUrl === longUrl;
    });

    return sameLongUrl.length > 0;
  }

  //This function handles the entire shortnening of urls
  //Then stores the long url and the fetched short url version in Local storage using the useLocalStorage hook
  function handleShortenUrl(e) {
    e.preventDefault();

    //Check if there's no previous fetch request
    if (isLoading) return;

    //Checks if input is empty
    if (!inputRef.current.value) {
      setInputError("Please add a link");
      return;
    } else {
      setInputError("");
    }

    //Checks if input is a valid Url
    if (inputRef.current.value && !isValidURL(longUrl)) {
      setInputError("Invalid input - not a url");
      return;
    } else {
      setInputError("");
    }

    //Checks if input has not been shortened before
    if (isURLShortened(longUrl)) {
      setInputError(
        "URL has already been shortened. Check the list below for your short link"
      );
      return;
    } else {
      setInputError("");
    }

    setIsLoading(true);

    //Fetch shortened url version from the API
    let xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://corsproxy.io/?" + "https://cleanuri.com/api/v1/shorten"
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          // Save shortUrl and longUrl as separate items

          const shortUrl = data.result_url;

          //Stores the longurl and short url values in local Storage
          setStoredUrls([
            { longUrl: longUrl, shortUrl: shortUrl },

            ...storedUrls,
          ]);
        } else {
          console.error("Error:", xhr.status);
          setInputError("Failed to fetch short link");
          /* setStoredUrls([
            {
              longUrl: `https://frontendmentor.io/${Math.floor(
                Math.random() * 10000
              )}`,
              shortUrl: `https://res.link/${Math.floor(Math.random() * 10000)}`,
            },
            ...storedUrls,
          ]); */
        }
      }
      setIsLoading(false);
    };
    xhr.send("url=" + encodeURIComponent(longUrl));
  }

  return (
    <div className="absolute top-0 left-[50%] translate-x-[-50%]  translate-y-[-50%] w-full max-w-[720px] mx-auto px-7 md:px-0 lg:max-w-[1000px]">
      <form
        className="w-full p-4 bg-dark-violet rounded-lg md:p-7 md:flex md:space-x-4"
        style={{
          backgroundImage: `url(${
            isDesktopWidth ? desktopShortenerBg : mobileShortenerBg
          })`,
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "80% 80%",
        }}
      >
        <div className=" md:w-[70%]">
          <input
            type="text"
            className={`w-full rounded-md p-3 bg-white font-bold border-4 border-transparent md:text-lg ${
              inputError
                ? " border-red placeholder:text-[hsla(0,87%,67%,0.6)]"
                : ""
            }`}
            placeholder="Shorten a link here..."
            ref={inputRef}
            onInput={(e) => setLongUrl(e.target.value)}
          />

          {inputError && (
            <p className="mt-1 text-[12px] text-red text-left font-medium italic md:text-sm">
              {inputError}
            </p>
          )}
        </div>

        <Button
          buttonClass={
            "!rounded-md w-full mt-4 border-4 border-transparent md:w-[30%] md:mt-0 md:h-max md:py-3"
          }
          onClick={handleShortenUrl}
        >
          {isLoading ? "Loading..." : "Shorten it!"}
        </Button>
      </form>
    </div>
  );
}

export default Shortener;
