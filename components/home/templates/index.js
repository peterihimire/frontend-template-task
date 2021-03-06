import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Card from "../../ui/card";
import Pagination from "../../ui/pagination";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions";

const Templates = () => {
  const [pageNum, setPageNum] = useState(0);
  const templatesPerPage = 15;
  const pagesVisited = pageNum * templatesPerPage;

  const nextPage = () => {
    dispatch(actions.loadNewPage({ page: 1 }));
  };

  const previousPage = () => {
    dispatch(actions.loadNewPage({ page: -1 }));
  };

  const goToPage = (page) => {
    dispatch(actions.loadExactPage({ page }));
  };

  const dispatch = useDispatch();
  // console.log(actions);

  const {
    allTemplates,
    filteredTemplates,
    loading,
    error,
    currentTemplatePage,
    countPerTemplatePage,
    filteredTemplatePage,
    filteredTemplateCount,
    totalTemplateCount,
    totalTemplatePages,
  } = useSelector((state) => {
    // console.log(state);
    // console.log(error, loading);
    return {
      allTemplates: state.templates.allTemplates,
      filteredTemplates: state.templates.filteredTemplates,
      loading: state.templates.loading,
      error: state.templates.error,
      currentTemplatePage: state.templates.currentTemplatePage,
      countPerTemplatePage: state.templates.countPerTemplatePage,
      filteredTemplatePage: state.templates.filteredTemplatePage,
      filteredTemplateCount: state.templates.filteredTemplateCount,
      totalTemplateCount: state.templates.totalTemplateCount,
      totalTemplatePages: state.templates.totalTemplatePages,
    };
  });
  console.log(error);
  console.log(allTemplates);
  console.log(filteredTemplates);
  console.log(filteredTemplatePage);
  console.log(filteredTemplateCount);
  console.log(totalTemplateCount);
  console.log(totalTemplatePages);
  console.log(currentTemplatePage);
  console.log(countPerTemplatePage);


  // const setAllTemplateLength = () => {
  //   if (!allTemplates) {
  //     return loading;
  //   } else {
  //     return allTemplates;
  //   }
  // };
  // console.log(setAllTemplateLength());

  // Handles page count numbers
  const pageCount = Math.ceil(
    filteredTemplates && filteredTemplates.length / templatesPerPage,
  );

  //Handle page click
  const changePageHandler = ({ selected }) => {
    return setPageNum(selected);
  };

  // useEffect(() => {
  //   localStorage.setItem("templates", JSON.stringify(allTemplates));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [allTemplates]);

  useEffect(() => {
    dispatch(actions.templates());
  }, []);

  useEffect(() => {
    dispatch(actions.loadData());
  }, []);

  return (
    <section className={styles.searchSort}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.searchInfo}>
          <img src='images/info-icon.svg' alt='' />
          <span>
            Tada! Get started with a free template. Can't find what you are
            looking for? Search from the 1000+ available templates
          </span>
        </div>

        <div className={styles.categoryInfo}>
          <h3>All Templates</h3>
          <span>
            {filteredTemplates ? filteredTemplates.length : 0} templates
          </span>
        </div>

        {loading && (
          <div className={styles.noTemplate}>
            <h3>Loading...</h3>
          </div>
        )}
        {filteredTemplates ? (
          filteredTemplates.length === 0 ? (
            <div className={styles.noTemplate}>
              <h3>NO TEMPLATES AVAILABLE</h3>
            </div>
          ) : (
            <div className={styles.grid}>
              {filteredTemplates
                .slice(pagesVisited, pagesVisited + templatesPerPage)
                .map((templates) => {
                  // console.log(templates);
                  // console.log(templates.category);
                  return (
                    <Card
                      title={templates.name}
                      info={templates.description}
                      link={templates.link}
                      template={templates.category}
                    />
                  );
                })}
            </div>
          )
        ) : (
          loading
        )}

        {filteredTemplates ? (
          <div className={styles.gridPaginate}>
            <Pagination
              pageCount={pageCount}
              onPageChange={changePageHandler}
              containerClassName='pagination'
              activeClassName='paginate-active'
              disabledClassName='paginate-disabled'
              previousClassName='paginate-previous'
              nextClassName='paginate-next'
              breakLabel='...'
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
            />
          </div>
        ) : (
          loading
        )}
        {/* <section className={styles.customPagination}>
          <button
            className='button pagination-previous'
            onClick={() => {
              previousPage();
            }}
          >
            Previous
          </button>
          <button
            className='button pagination-next'
            onClick={() => {
              nextPage();
            }}
          >
            Next page
          </button>
          <ul className='pagination-list'>
            {[...Array(filteredTemplates)].map((value, index) => (
              <button
                className={`button pagination-link ${
                  currentTemplatePage === index + 1 ? "is-current" : ""
                }`}
                aria-label='Page 1'
                onClick={() => goToPage(index + 1)}
                aria-current='page'
              >
                {index + 1}
              </button>
            ))}
          </ul>
        </section> */}
      </div>
    </section>
  );
};

export default Templates;
