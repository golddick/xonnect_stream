import React from 'react'
import { getPartners } from '@/lib/Adminpartners'
import { CreatorsRequestTable } from './_component/Table/CreatorsRequestTable'
import { RequestColumns } from './_component/Table/columns'
import { fetchAllCreatorRequests } from '@/actions/admin'

const page = async () => {
    const request = await fetchAllCreatorRequests()
  return (
    <>
      <CreatorsRequestTable data={request} columns={RequestColumns}/>
    </>
  )
}

export default page
