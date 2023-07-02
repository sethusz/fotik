import './AuctionsPage.scss'
import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_AUCTIONS } from '@/shared/schemas/auctions/auctions'
import AuctionsPageContent from '../../entities/auction/ui/auction-page-content/AuctionsPageContent'
import Filter from '../../feauters/filter/Filter.js'
import Search from '../../feauters/search/Search.js'
import AppHeader from '../../widgets/header/AppHeader.jsx'

const MyAuctionsPage = ({ title }) => {
  // эмитация данных с бэка

  const [auctData, setAuctData] = useState(null)

  const { data, loading } = useQuery(GET_AUCTIONS)
  console.log(auctData)

  useEffect(() => {
    if (!loading) {
      setAuctData(data.getAuctions)
    }
  }, [data])

  return (
    <>
      <AppHeader title={title} />

      <div className="auctions__components">
        <div className="auctions__search--card">
          <Search />

          <AuctionsPageContent data={auctData} />
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
