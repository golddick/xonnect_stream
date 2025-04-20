import React from 'react'
import { PartnersDataTable } from './_component/Table/UserTable'
import { PartnerColumns } from './_component/Table/columns'
import { getPartners } from '@/lib/Adminpartners'

const page = async () => {
    const partners = await getPartners()
  return (
    <>
      <PartnersDataTable data={partners} columns={PartnerColumns}/>
    </>
  )
}

export default page
