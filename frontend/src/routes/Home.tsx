import { ReactElement } from "react";
import FormMain from "../components/FormMain";
import MapArea from "../components/MapArea";
import TableMain from "../components/TableMain";
import TableDetails from "../components/TableDetails";

export default function Home(): ReactElement {
  return (
    <main>
      <FormMain />
      <MapArea />
      <TableMain />
      <TableDetails />
    </main>
  );
}
