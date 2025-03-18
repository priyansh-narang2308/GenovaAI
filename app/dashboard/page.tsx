"use client"

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateLists from './_components/TemplateLists'

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("")


  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      <TemplateLists userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard