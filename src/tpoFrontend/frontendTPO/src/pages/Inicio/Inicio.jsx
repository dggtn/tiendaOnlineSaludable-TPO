import { Link, useParams, useSearchParams } from "react-router-dom";

import { Banner1 } from "./components/Banner1";
import Banner2 from "./components/Banner2";

export default function Inicio() {
  return (
    <main className="bg-green-100">
      <Banner2 />
      <Banner1 />
    </main>
  );
}
