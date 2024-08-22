import type { MetaFunction } from "@remix-run/node";

import AdditionIcon from "~/assets/icons/addition.svg";
import SubtractionIcon from "~/assets/icons/subtraction.svg";
import MultiplicationIcon from "~/assets/icons/multiplication.svg";
import DivisionIcon from "~/assets/icons/division.svg";
import SquareRootIcon from "~/assets/icons/square-root.svg";
import PowerIcon from "~/assets/icons/power.svg";
import ModuloIcon from "~/assets/icons/modulo.svg";
import HistoryIcon from "~/assets/icons/history.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Calculator" },
    { name: "description", content: "Welcome to Remix Calculator!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Remix Calculator API</h1>
      <p className="text-lg text-gray-600">
        Welcome to the Remix Calculator API! Perform basic mathematical operations via our REST API.
      </p>
    </header>

    <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">How to Use</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="flex items-center space-x-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div>
            <img src={AdditionIcon} alt="Addition" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Addition</h3>
              <h6 className="text-sm text-gray-500">Returns the sum of two numbers</h6>
              <p className="text-sm text-gray-600"><code>/add?x=3&y=5</code></p>
            </div>
          </div>

          <div className="flex items-center space-x-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div>
            <img src={SubtractionIcon} alt="Subtraction" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Subtraction</h3>
              <h6 className="text-sm text-gray-500">Returns the subtraction of two numbers</h6>
              <p className="text-sm text-gray-600"><code>/subtract?x=10&y=4</code></p>
            </div>
          </div>

          <div className="flex items-center space-x-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div>
            <img src={MultiplicationIcon} alt="Multiplication" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Multiplication</h3>
              <h6 className="text-sm text-gray-500">Returns the multiplication of two numbers</h6>
              <p className="text-sm text-gray-600"><code>/multiply?x=6&y=7</code></p>
            </div>
          </div>

          <div className="flex items-center space-x-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div>
            <img src={DivisionIcon} alt="Division" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Division</h3>
              <h6 className="text-sm text-gray-500">Returns the division of two numbers</h6>
              <p className="text-sm text-gray-600"><code>/divide?x=20&y=4</code></p>
            </div>
          </div>

          <div className="flex items-center space-x-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div className="text-purple-500">
            <img src={SquareRootIcon} alt="Square root" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Square root</h3>
              <h6 className="text-sm text-gray-500">Returns the square root of a number</h6>
              <p className="text-sm text-gray-600"><code>/sqrt?x=16</code></p>
            </div>
          </div>

          <div className="flex items-center space-x-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div className="text-purple-500">
            <img src={PowerIcon} alt="Power" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Power</h3>
              <h6 className="text-sm text-gray-500">Returns x to the power y</h6>
              <p className="text-sm text-gray-600"><code>/pow?x=3&y=4</code></p>
            </div>
          </div>

          <div className="flex items-center space-x-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div className="text-purple-500">
            <img src={ModuloIcon} alt="Modulo" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Modulo</h3>
              <h6 className="text-sm text-gray-500">Returns x modulo y</h6>
              <p className="text-sm text-gray-600"><code>/modulo?x=10&y=3</code></p>
            </div>
          </div>

          <div className="flex items-center space-x-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div className="text-purple-500">
            <img src={HistoryIcon} alt="History" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">History</h3>
              <h6 className="text-sm text-gray-500">Returns the history of previous operations</h6>
              <p className="text-sm text-gray-600"><code>/history</code></p>
            </div>
          </div>

        </div>

      </section>

    <footer className="mt-8 text-gray-600">
      <p>&copy; 2024 Remix Calculator API. All rights reserved.</p>
    </footer>
  </div>
  );
}