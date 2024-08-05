'use client'

import { matchesType } from '@/types'
import React, { useState } from 'react'
import Fixture from './Fixture'

const Status = ({matchesList, matchesListFinished} : {matchesList:matchesType[] , matchesListFinished:matchesType[]}) => {

    const [statusMatch, setStatusMatch] = useState <string>("TODAY")

  return (
    <div>
        <div className='flex space-x-4 mb-2 md:mb-4'>
            <button onClick={() => setStatusMatch("TODAY")} className={`px-2 
            py-1 text-primary text-xs md:text-sm rounded-md ${statusMatch ==='TODAY' ? 'bg-teal-400 font-semibold' :
            'bg-slate-500 font-regular'} `}>Today</button>
            <button onClick={() => setStatusMatch("WEEKLY")} className={`px-2  
            py-1 text-primary text-xs md:text-sm rounded-md ${statusMatch ==='WEEKLY' ? 'bg-teal-400 font-semibold' :
            'bg-slate-500 font-regular'} `}>Weekly</button>
        </div>
        <div className='w-full'>
            {statusMatch === "TODAY" ?  (
                matchesList.map((data) => (
                    <div key={data.id}>
                        {data.status === "TIMED" && (
                            <Fixture data={data} />
                        )}
                    </div>
                ))
            ) : null}

            {statusMatch === "WEEKLY" ? (
                matchesList.map((data) => (
                    <div key={data.id}>
                        {data.status === "WEEKLY" && (
                            <Fixture data={data} />
                        )}
                    </div>
                ))
            ) : null}
            {statusMatch === "WEEKLY" ? (
                matchesListFinished.map((data) => (
                    <div key ={data.id}>
                        <Fixture data={data} />
                    </div>     
                ))
            ) : null}
        </div>
    </div>
  )
}

export default Status