import React from "react";
import { ButtonNormal, ButtonSecondary } from "./../button";

export default function Wizard({ children, handleFinializeQuotes }: any) {
  const [activePageIndex, setActivePageIndex] = React.useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
  };

  const ButtonPrev = () =>
    activePageIndex > 0 ? (
      <ButtonSecondary onClick={goPrevPage}>back</ButtonSecondary>
    ) : null;
  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <ButtonSecondary onClick={goNextPage}>Next</ButtonSecondary>
    ) : null;

  const ButtonFinish = () =>
    activePageIndex === pages.length - 1 ? (
      <ButtonNormal onClick={handleFinializeQuotes}>Finish</ButtonNormal>
    ) : null;

  return (
    <div className="wizard bg-white rounded-xl p-6">
      <div className="wizard__content mb-6">{currentPage}</div>

      <div className="wizard__buttons flex items-center justify-between">
        {/* Back button on the left */}
        <div>
          <ButtonPrev />
        </div>

        {/* Next and Finish buttons on the right */}
        <div className="flex gap-4">
          <ButtonNext />
          <ButtonFinish />
        </div>
      </div>
    </div>
  );
}
