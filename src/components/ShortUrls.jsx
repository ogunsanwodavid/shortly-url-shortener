import { useState } from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import Button from "./Button";

import iconDelete from "../assets/icon-delete.svg";

function ShortUrls({ storedUrls, setStoredUrls }) {
  const { copied, copy } = useCopyToClipboard("", 3000);

  //THis states stores the index or id of the current url stored to the clipboard
  const [copyId, setCopyId] = useState(null);

  function handleCleanStoredUrls() {
    setStoredUrls([]);
  }

  return (
    <div className="w-full max-w-[720px] mx-auto px-7 space-y-4 md:px-0 lg:max-w-[1000px]">
      {/*** Clean up section */}
      {Boolean(storedUrls.length) && (
        <section
          className="w-max ml-auto flex justify-end items-center space-x-1 cursor-pointer"
          onClick={handleCleanStoredUrls}
        >
          <img src={iconDelete} className="h-4 md:h-5" />

          <p className="text-dark-violet text-lg font-bold md:text-xl">Clean</p>
        </section>
      )}

      {/*** List of long urls, short urls and copy buttons */}
      <ul className="space-y-5 text-left">
        {storedUrls.map((storedurl, index) => {
          const isUrlCopied = index === copyId;

          //Function handles clicking copy button
          function handleCopy() {
            copy(storedurl.shortUrl);
            setCopyId(index);
          }

          return (
            <li
              className="w-full bg-white rounded-lg text-base font-bold md:flex md:items-center md:p-5 md:text-lg md:space-x-4"
              key={index}
            >
              {/*** Long Url */}
              <p className="w-full p-4 border-b-[1px] border-gray break-words md:border-b-0 md:p-0 overflow-hidden line-clamp-1 text-ellipsis">
                {storedurl.longUrl}
              </p>

              <main className="w-full p-4 space-y-4 md:w-max md:flex md:items-center md:space-y-0 md:space-x-4 md:p-0">
                {/*** Short Url */}

                <p className="text-cyan">{storedurl.shortUrl}</p>

                {/*** Copy button */}
                <Button
                  buttonClass={`!text-base w-full !rounded-md md:w-[100px] md:!text-lg ${
                    isUrlCopied && copied ? "!bg-dark-violet" : ""
                  }`}
                  onClick={handleCopy}
                >
                  {isUrlCopied && copied ? "Copied!" : "Copy"}
                </Button>
              </main>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShortUrls;
