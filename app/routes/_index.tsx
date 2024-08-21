import type { MetaFunction } from "@remix-run/node";

import AdditionIcon from "~/assets/icons/addition.svg";
import SubtractionIcon from "~/assets/icons/subtraction.svg";
import MultiplicationIcon from "~/assets/icons/multiplication.svg";
import DivisionIcon from "~/assets/icons/division.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div className="text-blue-500">
            <img src={AdditionIcon} alt="Addition" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Addition</h3>
              <p className="text-sm text-gray-600"><code>/api/add?num1=3&num2=5</code></p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div className="text-red-500">
            <img src={SubtractionIcon} alt="Subtraction" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Subtraction</h3>
              <p className="text-sm text-gray-600"><code>/api/subtract?num1=10&num2=4</code></p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div className="text-green-500">
            <img src={MultiplicationIcon} alt="Multiplication" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Multiplication</h3>
              <p className="text-sm text-gray-600"><code>/api/multiply?num1=6&num2=7</code></p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <div className="text-purple-500">
            <img src={DivisionIcon} alt="Division" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Division</h3>
              <p className="text-sm text-gray-600"><code>/api/divide?num1=20&num2=4</code></p>
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
