/* eslint-disable react-hooks/exhaustive-deps */
import Card from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Pagination from "@/components/pagination/Pagination";
import Dropdown from "@/components/dropdown/Dropdown";

function ListView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<any>([]);
  const [selectedOption, setSelectedOption] = useState(8);

  const itemsPerPage = 1;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  let totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    totalPages = Math.ceil(data.length / itemsPerPage);
  }, [data]);

  useEffect(() => {
    setData([...Array(150)]);
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.card_container}>
        {[...Array(8)].map((_, i) => (
          <Card key={i} id={i} />
        ))}
      </div>
      cc {currentPage} {selectedOption}
      <div className={styles.pagination_offset}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Dropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </div>
  );
}

export default ListView;
