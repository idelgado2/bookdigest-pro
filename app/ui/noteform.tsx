import { useState } from "react";
import { ButtonNormal, ButtonSecondary } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Form({ saveQuotesToParent }: any) {
  const [inputs, setInputs] = useState([
    { id: crypto.randomUUID(), value: "", theme: "" },
  ]);

  const handleInputChange = (e: any, id: string) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value: e.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    const newInput = { id: crypto.randomUUID(), value: "", theme: "" };
    setInputs([...inputs, newInput]);
  };

  const handleRemoveInput = (id: string) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  const triggerCallBack = (event: any) => {
    event.preventDefault();
    saveQuotesToParent(inputs);
  };

  return (
    <form
      onSubmit={triggerCallBack}
      className="bg-white rounded-2xl p-6 space-y-6"
    >
      {inputs.map((input) => (
        <div key={input.id} className="p-4 rounded-lg border-gray-200">
          <label
            htmlFor="quote"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Paste Book Quote
          </label>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <input
              id="quote"
              name="quote"
              type="text"
              value={input.value}
              placeholder="To be, or not to be, that is the question"
              onChange={(e) => handleInputChange(e, input.id)}
              className="w-full text-gray-900 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FontAwesomeIcon
              onClick={() => handleRemoveInput(input.id)}
              icon={faTrash}
            />
          </div>
        </div>
      ))}

      <div className="flex flex-col md:flex-row gap-4 justify-end">
        <ButtonSecondary onClick={handleAddInput}>
          Add Another Quote
        </ButtonSecondary>
        <ButtonNormal type="submit">Start Organization</ButtonNormal>
      </div>
    </form>
  );
}
