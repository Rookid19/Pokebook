import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import styles from "./Pagination.module.css";
import useModal from "../modal/Modal";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const { colorTheme }: any = useModal();
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        id={styles.back}
      >
        <RiArrowLeftSLine size={24} />
      </button>
      <div>
        {totalPages > 1 && (
          <div className={styles.paginationList}>
            {getPageNumbers().map((pageNumber, index) => (
              <div
                key={index}
                className={styles.paginationItem}
                style={{
                  backgroundColor: currentPage === pageNumber ? colorTheme : "",
                  color: currentPage === pageNumber ? "white" : "",
                }}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        id={styles.next}
      >
        <RiArrowRightSLine size={24} />
      </button>
    </div>
  );
};

export default Pagination;
