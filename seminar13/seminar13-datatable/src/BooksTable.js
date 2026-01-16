import { useEffect, useRef } from "react";
import DataTable from "datatables.net-dt";

export default function BooksTable() {
  const tableRef = useRef();

  useEffect(() => {
    new DataTable(tableRef.current, {
      data: [
        [1, "Clean Code", 464],
        [2, "Design Patterns", 395],
        [3, "Refactoring", 448],
        [4, "The Pragmatic Programmer", 352]
      ],
      columns: [
        { title: "ID" },
        { title: "Titlu" },
        { title: "Număr pagini" }
      ],
      columnDefs: [
        {
          targets: 2,
          type: "num"
        }
      ]
    });
  }, []);

  return <table ref={tableRef} className="display" />;
}
