import { useState } from "react";
function App() {
  const [lowerScreenText, setLowerScreenText] = useState("");
  const [upperScreenText, setUpperScreenText] = useState("");
  const [operator, setOperator] = useState("");
  const [equalSign, setEqualSign] = useState("");

  const operators = ["+", "-", "/", "*", "%"];

  const screen = (e) => {
    // clear
    if (e.target.value === "clear") {
      if (lowerScreenText === "") {
        setUpperScreenText("");
        setOperator("");
      } else {
        setLowerScreenText("");
        setEqualSign("");
      }

      return;
    }
    //clear all
    else if (e.target.value === "clearAll") {
      setUpperScreenText("");
      setLowerScreenText("");
      setOperator("");
      setEqualSign("");
      return;
    }
    //del
    else if (e.target.value === "del") {
      lowerScreenText && setLowerScreenText((old) => old.slice(0, -1));
      setEqualSign("");
      return;
    }
    //operator
    else if (operators.includes(e.target.value)) {
      setUpperScreenText(lowerScreenText);
      setOperator(e.target.value);
      setLowerScreenText("");
      setEqualSign("");
      return;
    }
    //result
    else if (e.target.value === "=") {
      let result = eval(`${upperScreenText}${operator}${lowerScreenText}`);

      if (
        result % 1 !== 0 &&
        result.toString().length - result.toString().indexOf(".") - 1 > 4
      ) {
        result = result.toFixed(4);
      }
      setUpperScreenText(`${upperScreenText} ${operator} ${lowerScreenText}`);
      setEqualSign("=");
      setLowerScreenText(result.toString());
    }
    //regular update
    else {
      setLowerScreenText((old) => old + e.target.value);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-300">
        <div className="calculator my-3 shadow-lg bg-gray-50  p-5 rounded-3xl w-[320px] flex flex-col justify-end">
          <div className=" mt-1 mb-5 text-right screen py-5 px-3 rounded-2xl">
            <div className="text-xl  text-gray-500 min-h-[6rem] break-words">
              {upperScreenText}
            </div>
            <div className="text-4xl font-semibold  text-gray-600  break-words">
              <span className="mr-3 text-gray-400">{equalSign}</span>
              {lowerScreenText}
            </div>
          </div>

          <div className="buttons grid grid-cols-4 gap-1 text-xl text-gray-600">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold"
              value="clear"
              onClick={(e) => screen(e)}
            >
              AC
            </button>

            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold"
              value="clearAll"
              onClick={(e) => screen(e)}
            >
              CE
            </button>

            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold"
              value="del"
              onClick={(e) => screen(e)}
            >
              DEL
            </button>
            <button className="operator" value="/" onClick={(e) => screen(e)}>
              /
            </button>

            <button className="number" value="7" onClick={(e) => screen(e)}>
              7
            </button>
            <button className="number" value="8" onClick={(e) => screen(e)}>
              8
            </button>
            <button className="number" value="9" onClick={(e) => screen(e)}>
              9
            </button>
            <button className="operator" value="*" onClick={(e) => screen(e)}>
              *
            </button>
            <button className="number" value="4" onClick={(e) => screen(e)}>
              4
            </button>
            <button className="number" value="5" onClick={(e) => screen(e)}>
              5
            </button>
            <button className="number" value="6" onClick={(e) => screen(e)}>
              6
            </button>
            <button className="operator" value="-" onClick={(e) => screen(e)}>
              -
            </button>
            <button className="number" value="1" onClick={(e) => screen(e)}>
              1
            </button>
            <button className="number" value="2" onClick={(e) => screen(e)}>
              2
            </button>
            <button className="number" value="3" onClick={(e) => screen(e)}>
              3
            </button>
            <button className="operator" value="+" onClick={(e) => screen(e)}>
              +
            </button>
            <button className="number" value="0" onClick={(e) => screen(e)}>
              0
            </button>

            <button className="number" value="." onClick={(e) => screen(e)}>
              .
            </button>
            <button className="equal" value="=" onClick={(e) => screen(e)}>
              =
            </button>
            <button className="operator" value="%" onClick={(e) => screen(e)}>
              %
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
