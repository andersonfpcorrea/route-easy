import { ReactElement } from "react";
import FormMain from "../components/FormMain";
import MapArea from "../components/MapArea";
import TableMain from "../components/TableMain";

export default function Home(): ReactElement {
  return (
    <main>
      <FormMain />
      <MapArea />
      <TableMain />
    </main>
  );
}
