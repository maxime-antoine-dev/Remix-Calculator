import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container text-center my-5">
      <header>
        <h1 className="display-4">Remix Calculator API</h1>
        <p className="lead">
          Welcome to the Remix Calculator API! This application provides basic mathematical operations via a REST API.
        </p>
      </header>
      <section>
        <h2>How to Use</h2>
        <p>To perform a calculation, send a request to one of the following API endpoints:</p>
        <ul className="list-group">
          <li className="list-group-item"><strong>Addition:</strong> <code>/api/add?num1=3&num2=5</code></li>
          <li className="list-group-item"><strong>Subtraction:</strong> <code>/api/subtract?num1=10&num2=4</code></li>
          <li className="list-group-item"><strong>Multiplication:</strong> <code>/api/multiply?num1=6&num2=7</code></li>
          <li className="list-group-item"><strong>Division:</strong> <code>/api/divide?num1=20&num2=4</code></li>
        </ul>
      </section>
      <footer className="mt-5">
        <p>&copy; 2024 Remix Calculator API. All rights reserved.</p>
      </footer>
    </div>
  );
}
