import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) {
      str += "0123456789";
    }

    if (charAllow) {
      str += "!@#$%^&*()-_=+[]{}<>?";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    alert("Password Copied!");
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black p-4">
      <div className="w-full max-w-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-3xl p-6">

   
        <h1 className="text-4xl font-bold text-center text-white mb-2">
           Password Generator
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Generate strong and secure passwords instantly
        </p>

        <div className="flex overflow-hidden rounded-xl shadow-lg mb-6">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Generated Password"
            className="w-full bg-gray-900 text-green-400 px-4 py-4 font-mono text-lg outline-none"
            ref={passwordRef}
          />

          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 text-white font-semibold"
          >
            Copy
          </button>
        </div>

   
        <div className="bg-gray-900 rounded-xl p-4 mb-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white font-medium">
              Password Length
            </span>

            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {length}
            </span>
          </div>

          <input
            type="range"
            min="8"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-orange-500 cursor-pointer"
          />
        </div>

      
        <div className="space-y-4">

          <label className="flex items-center justify-between bg-gray-900 p-4 rounded-xl cursor-pointer hover:bg-gray-800 transition">
            <span className="text-white font-medium">
              Include Numbers (0-9)
            </span>

            <input
              type="checkbox"
              checked={numAllow}
              onChange={() => setNumAllow((prev) => !prev)}
              className="w-5 h-5 accent-blue-500"
            />
          </label>

          <label className="flex items-center justify-between bg-gray-900 p-4 rounded-xl cursor-pointer hover:bg-gray-800 transition">
            <span className="text-white font-medium">
              Include Special Characters
            </span>

            <input
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow((prev) => !prev)}
              className="w-5 h-5 accent-purple-500"
            />
          </label>

        </div>

     
        <button
          onClick={passwordGenerator}
          className="w-full mt-6 py-4 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-[1.02] transition-all duration-300 shadow-lg"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;