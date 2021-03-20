import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Web3 from 'web3/dist/web3.min.js'
import ContractRegisterer, {
  ContractContext,
  ContractProvider,
} from '@components/ContractRegisterer'
import Title from './Title'
import Intro from './Intro'
import Stars from './Stars'
import TokensContainer from './TokensContainer'
import s from './App.module.css'
import './fonts.css'
import './reset.css'
import './index.css'

const web3 = new Web3(window.ethereum)

const App = () => {
  return (
    <ContractProvider>
      <ContractRegisterer web3={web3} />
      <div className={s.background}>
        <Stars />
        <Title />
        <Intro />
        <TokensContainer />
      </div>
    </ContractProvider>
  )
}

export default hot(App)
