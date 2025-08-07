"use client";
import { useState } from "react";
import Form from "../../ui/noteform";
import WizardContainer from "../../ui/wizard/wizard-container";
import Review from "../../ui/review";

export default function Page() {
  const [data, setData] = useState([]);
  const [themes, setThemes] = useState([""]);
  const [newTheme, setNewTheme] = useState("");
  const [finalizeQuotes, setFinializeQuotes] = useState(false);

  const saveQuotes = (formData: any) => {
    setData(
      formData.filter((quote: any) => {
        return quote.value !== "";
      })
    );
  };

  const handleUpdateQuoteTheme = (id: number, newTheme: string) => {
    setData((prevData: any) => {
      return prevData.map((quote: any) => {
        if (quote.id === id) {
          return { ...quote, theme: newTheme };
        } else {
          return quote;
        }
      });
    });
  };

  const handleSelctedTheme = (id: number, newTheme: string) => {
    setData((prevData: any) => {
      return prevData.map((quote: any) => {
        if (quote.id === id) {
          return { ...quote, theme: newTheme };
        } else {
          return quote;
        }
      });
    });
  };

  const handleNewThemeOption = (event: any) => {
    setNewTheme(event.target.value);
  };

  const handleAddTheme = (id: number) => {
    if (newTheme.trim() !== "") {
      setThemes([...themes, newTheme]);
      setData((prevData: any) => {
        return prevData.map((quote: any) => {
          if (quote.id === id) {
            return { ...quote, theme: newTheme };
          } else {
            return quote;
          }
        });
      });
      setNewTheme("");
    }
  };

  const handleThemeDelete = (themeToRemove: any) => {
    setThemes(
      themes.filter((theme: any) => {
        return theme !== themeToRemove;
      })
    );
  };

  const handleFinializeQuotes = () => {
    setFinializeQuotes(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8 border-b pb-2">
          Log Your Notes!
        </h3>

        {data.length === 0 && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Form saveQuotesToParent={saveQuotes} />
          </div>
        )}

        {data.length !== 0 && !finalizeQuotes && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <WizardContainer
              quotes={data}
              themes={themes}
              newTheme={newTheme}
              handleFinializeQuotes={handleFinializeQuotes}
              finalizeQuotes={finalizeQuotes}
              handleSelctedTheme={handleSelctedTheme}
              handleNewThemeOption={handleNewThemeOption}
              handleAddTheme={handleAddTheme}
              handleUpdateQuoteTheme={handleUpdateQuoteTheme}
              handleThemeDelete={handleThemeDelete}
            />
          </div>
        )}

        {data.length !== 0 && finalizeQuotes && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Review quotes={data} />
          </div>
        )}
      </div>
    </main>
  );
}
