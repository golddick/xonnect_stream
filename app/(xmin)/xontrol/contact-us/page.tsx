import React from 'react'
import { getPartners } from '@/lib/Adminpartners'
import { RequestColumns } from './_component/Table/columns'
import { fetchAdminContactMessages } from '@/actions/admin'
import { ContactUSTAble } from './_component/Table/contact-us-table'

const page = async () => {
    const request = await fetchAdminContactMessages()
  return (
    <>
      <ContactUSTAble data={request} columns={RequestColumns}/>
    </>
  )
}

export default page
