import React, {useState} from "react";
import { useTable, useFilters, useSortBy  } from "react-table";
import './table.style.css';

/**
 * Table Component
 * @param columns object to define the table columns(headers, rows, how the row will be shown)
 * @param data got through the API call
 * @constructor
 */
export default function Table({ columns, data, redirectUrl, btnName }){
    const [filterInput, setFilterInput] = useState("");

    const {
        getTableProps,      // Table props for react-table
        getTableBodyProps,  // Table body props from react-table
        headerGroups,       // When our table has groupings
        rows,               // Rows for the table based on the data passed
        prepareRow,         // This function needs to be called for each row before getting the row props
        setFilter,
    } = useTable ({
       columns,
       data
    },
        useFilters,
        useSortBy
    );

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("name", value);
        setFilterInput(value);
    }

    /**
     * React Table does not provide UI, we need to put the react-table props from the Hooks.
     */
    return (
        <>
            <input
                className="pa2 input-reset ba bg-transparent w-100 measure"
                value={filterInput}
                onChange={handleFilterChange}
                placeholder={"Filter by name"}
            />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                        ? column.isSortedDesc
                                            ? "sort-desc"
                                            : "sort-asc"
                                        : ""
                                    }
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}