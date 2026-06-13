import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="relative w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.magnific.com/free-vector/digital-money-transfer-techno-concept-background-with-circuit-diagram_1017-60301.jpg?semt=ais_hybrid&w=740&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full px-4">
        <div className="w-full max-w-lg mx-auto rounded-3xl border border-white/20 bg-yellow/10 backdrop-blur-xl shadow-2xl p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From Box */}
            <div className="w-full mb-3 overflow-hidden">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                // ✅ FIX: was setAmount(amount) — should update the selected currency
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-1">
              <button
                type="button"
                onClick={swap}
                className="
                  absolute left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  w-14 h-14 rounded-3xl
                  bg-gradient-to-r from-blue-500 to-cyan-500
                  text-black text-1xl font-bold
                  shadow-xl border-2 border-white/40
                  hover:scale-110 hover:rotate-180
                  transition-all duration-500
                "
              >
              Swap
              </button>
            </div>

            {/* To Box */}
            <div className="w-full mt-3 mb-6  overflow-hidden">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="
                w-full py-4 rounded-2xl
                text-lg font-semibold text-black
                bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500
                shadow-lg hover:shadow-cyan-500/50
                hover:scale-[1.02] transition-all duration-300
              "
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;