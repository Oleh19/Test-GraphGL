import { FC, useState } from 'react';
import { Rocket } from '../store/queries';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Items from '../components/Items';

interface HomeProps {
  rockets: Rocket[];
}

const ITEMS_PER_PAGE = 3;

const Home: FC<HomeProps> = ({ rockets }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = rockets.slice(startIndex, endIndex);

  const totalPages = Math.ceil(rockets.length / ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const pagination = (
    <>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            onClick={() => goToPage(page)}
            disabled={currentPage === page}
            className="scroll"
          >
            <div
              className={
                currentPage === page ? 'scrollEllipseActive' : 'scrollEllipse'
              }
              key={page}
            />
          </button>
        )
      )}
    </>
  );

  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Items
        rockets={currentItems}
        pagination={pagination}
      />
      <div></div>
    </div>
  );
};

export default Home;
