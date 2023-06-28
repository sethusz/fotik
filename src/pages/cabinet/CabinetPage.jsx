import React from 'react'
import { createPortal } from 'react-dom'
import AppHeader from '../../widgets/header/AppHeader.jsx'
import PlayersAmount from "../../feauters/players-amount/PlayersAmount";
import RotoIncome from '@/shared/charts-data/RotoIncome'
import DoubleIncome from '@/feauters/double-income/DoubleIncome'
import RublesIncome from '@/shared/charts-data/RublesIncome'
import { AuctionsInfo } from "@/widgets/user-info";
import UserInfo from "../../widgets/user-info/ui/user-info-cabinet/UserInfoCabinet";
import useNoAuth from '../../shared/lib/hooks/useNoAuth.jsx';
import './CabinetPage.scss'

const CabinetPage = ({ title }) => {
  const auctions = {}

  useNoAuth()

  return (
    <div className='cabinet'>
      <AppHeader title={title} />
      <UserInfo />
      <AuctionsInfo amount={12} rotoSpent={10} winsSum={400000} wins={5} auctions={auctions} />
      <div className='cabinet__charts'>
        <PlayersAmount />
        <DoubleIncome currency={['ROTO', 'Rubles']} data={[RotoIncome, RublesIncome]} color={['#2F53FF', '#00FFA3']} />
      </div>
    </div>
  )
}

export default CabinetPage