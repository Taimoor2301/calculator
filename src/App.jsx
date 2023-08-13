import { useState } from "react";
function App() {
  const [lowerScreenText, setLowerScreenText] = useState("");
  const [upperScreenText, setUpperScreenText] = useState("");
  const [operator, setOperator] = useState("");

  const operators = ["+", "-", "/", "*", "%"];

  const screen = (e) => {
    if (e.target.value === "clear") {
      if (lowerScreenText === "") {
        setUpperScreenText("");
        setOperator("");
      } else {
        setLowerScreenText("");
      }

      return;
    } else if (e.target.value === "del") {
      setLowerScreenText((old) => old.slice(0, -1));
      return;
    } else if (operators.includes(e.target.value)) {
      setUpperScreenText(lowerScreenText);
      setOperator(e.target.value);
      setLowerScreenText("");
      return;
    } else if (e.target.value === "=") {
      let result = eval(`${upperScreenText}${operator}${lowerScreenText}`);

      if (
        result % 1 !== 0 &&
        result.toString().length - result.toString().indexOf(".") - 1 > 4
      ) {
        result = result.toFixed(4);
      }
      setUpperScreenText(`${upperScreenText} ${operator} ${lowerScreenText}`);
      setOperator("=");
      setLowerScreenText(result);
    } else {
      setLowerScreenText((old) => old + e.target.value);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="calculator my-3  shadow bg-indigo-700 p-5 rounded-lg w-[360px]">
          <div className=" mt-1 mb-5 text-right font-semibold">
            <div className="text-xl p-2 rounded bg-indigo-100 mb-1 min-h-[4rem] break-words">
              {upperScreenText || "Hey there.."} <span>{operator}</span>
            </div>
            <div className="text-3xl py-4 px-2 min-h-[4.5rem] bg-white rounded break-words">
              {lowerScreenText}
            </div>
          </div>

          <div className="buttons grid grid-cols-4 gap-1 text-3xl">
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold  py-3 col-span-2"
              value="clear"
              onClick={(e) => screen(e)}
            >
              AC
            </button>

            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="del"
              onClick={(e) => screen(e)}
            >
              DEL
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="/"
              onClick={(e) => screen(e)}
            >
              /
            </button>

            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold  py-3"
              value="7"
              onClick={(e) => screen(e)}
            >
              7
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="8"
              onClick={(e) => screen(e)}
            >
              8
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="9"
              onClick={(e) => screen(e)}
            >
              9
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="*"
              onClick={(e) => screen(e)}
            >
              *
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold  py-3"
              value="4"
              onClick={(e) => screen(e)}
            >
              4
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="5"
              onClick={(e) => screen(e)}
            >
              5
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="6"
              onClick={(e) => screen(e)}
            >
              6
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="-"
              onClick={(e) => screen(e)}
            >
              -
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold  py-3"
              value="1"
              onClick={(e) => screen(e)}
            >
              1
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="2"
              onClick={(e) => screen(e)}
            >
              2
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="3"
              onClick={(e) => screen(e)}
            >
              3
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="+"
              onClick={(e) => screen(e)}
            >
              +
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold  py-3"
              value="0"
              onClick={(e) => screen(e)}
            >
              0
            </button>

            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="."
              onClick={(e) => screen(e)}
            >
              .
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="="
              onClick={(e) => screen(e)}
            >
              =
            </button>
            <button
              className="flex justify-center items-center bg-white hover:bg-indigo-300 font-semibold "
              value="%"
              onClick={(e) => screen(e)}
            >
              %
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
