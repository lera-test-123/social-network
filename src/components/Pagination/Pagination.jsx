import { useMemo } from "react";

import styles from './Pagination.module.css';


const NUMBER_TO_SHOW_CLOSER_ITEMS = 3;

const Pagination = (props) => {
  const totalPageCount = useMemo(() => {
    return Math.ceil(props.totalUsersCount / props.pageSize);
  }, [props.totalUsersCount, props.pageSize]);

  const onPageChange = (pageNumber) => {
    let pageToGo = pageNumber;
    if (pageToGo < 1) {
      pageToGo = 1;
    }

    if (pageToGo > totalPageCount) {
      pageToGo = totalPageCount;
    }

    props.onPageChange(pageToGo);
  }

  const pagesToShow = useMemo(() => {
    let itemsToShow = [];
    for (let i = 1; i <= NUMBER_TO_SHOW_CLOSER_ITEMS; i += 1) {
      const pageToShow = props.currentPage - i;

      if (pageToShow > 0) {
        itemsToShow = [<button key={pageToShow} onClick={() => onPageChange(pageToShow)}>{pageToShow}</button>, ...itemsToShow];
      } else {
        break;
      }
    }

    itemsToShow.push(<button key={props.currentPage} className={styles.active}>{props.currentPage}</button>);

    for (let i = 1; i <= NUMBER_TO_SHOW_CLOSER_ITEMS; i += 1) {
      const pageToShow = props.currentPage + i;

      if (pageToShow <= totalPageCount) {
        itemsToShow.push(<button key={pageToShow} onClick={() => onPageChange(pageToShow)}>{pageToShow}</button>);
      } else {
        break;
      }
    }

    return itemsToShow;
  }, [props, totalPageCount]);


  return (
    <div className={styles.pagination}>
      <button onClick={() => onPageChange(1)} disabled={props.currentPage === 1}>{"<<"}</button>
      <button onClick={() => onPageChange(props.currentPage - 1)}disabled={props.currentPage === 1}>{"<"}</button>
      {pagesToShow}
      <button onClick={() => onPageChange(props.currentPage + 1)} disabled={props.currentPage === totalPageCount}>{">"}</button>
      <button onClick={() => onPageChange(totalPageCount)} disabled={props.currentPage === totalPageCount}>{">>"}</button>
    </div>
  )
}

export default Pagination;