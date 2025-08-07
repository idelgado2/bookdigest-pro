import Link from "next/link";
import React from "react";
import { ButtonNormal, ButtonSecondary } from "./button";

const link = [{ name: "Home", href: "/" }];

export default function Review({ quotes }: any) {
  const handleExport = () => {
    const groupedQuotes = quotes.reduce((acc: any, quote: any) => {
      if (!acc[quote.theme]) {
        acc[quote.theme] = [];
      }
      acc[quote.theme].push(quote.value);
      return acc;
    }, {});

    const quoteText = Object.keys(groupedQuotes)
      .map(
        (theme) =>
          `${theme}\n\n${groupedQuotes[theme]
            .map((quote: string) => `- ${quote}`)
            .join("\n")}`
      )
      .join("\n\n");

    const blob = new Blob([quoteText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-6 mb-6">
        <p className="text-2xl font-bold text-indigo-700 mb-6">
          Time to Finalize Quotes!
        </p>

        <div className="space-y-4">
          {quotes.map((quote: any) => (
            <div
              key={quote.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50"
            >
              <p className="text-lg text-gray-800">
                <span className="font-semibold">Quote:</span> {quote.value}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-semibold">Theme:</span> {quote.theme}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center gap-4 mt-6">
          <ButtonSecondary onClick={handleExport}>Export</ButtonSecondary>

          <Link key={link[0].name} href={link[0].href}>
            <ButtonNormal>Home</ButtonNormal>
          </Link>
        </div>
      </div>
    </>
  );
}
