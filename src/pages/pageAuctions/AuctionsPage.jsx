import React, { useState } from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';


import Filter from '../pageAuctions/Filter.jsx';
import Search from '../pageAuctions/Search.jsx';
import CardsAuctions from '../pageAuctions/CardAuctions.jsx';

import './AuctionsPage.scss'

const MyAuctionsPage = ({ title }) => {
  // эмитация данных с бэка
  const [data, changeCard] = useState([
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '2023-04-07T13:17', price: '50', places: 12, status: 'none', id: 1 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'iPhone 12 Pro 128 Gb', date: '2023-04-06T23:00', price: '86', places: 12, status: 'none', id: 2 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: '1 Bitcoin', date: '2023-04-06T23:00', price: '2458', places: 3, status: 'none', id: 3 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Vacuum Dyson', date: '2023-04-06T23:00', price: '98.3', places: 15, status: 'none', id: 4 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Hair Dryer Dyson', date: '2023-04-06T23:00', price: '85.9', places: 30, status: 'none', id: 5 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'MacBook Pro M1 256 Gb', date: '2023-04-06T23:00', price: '183.9', places: 0, status: 'none', id: 6 },
  ])

  const changeStatus = (id, change) => {
    changeCard(data.map(card => {
      if (card.id == id) {
        return { ...card, status: change }
      }
      return card
    }))
  }

  return (
    <>
      <AppHeader title={title} />
      {/* <div className='search__filter'> */}

      <Search />
      <div className='title'>Upcoming announcements </div>
      <div className='filter__cards'>
        {/* </div> */}
        <CardsAuctions data={data} all={true} changeStatus={changeStatus} />
        <Filter />
      </div>
    </>
  );
}

export default MyAuctionsPage;

