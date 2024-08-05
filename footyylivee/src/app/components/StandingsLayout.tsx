import React from 'react';
import { matchesTable } from '@/types';

const StandingsLayout = ({ data }: { data: matchesTable[] }) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='text-teal-400 px-6 py-3'>#</th>
            <th scope='col' className='text-teal-400 px-6 py-3'>Team</th>
            <th scope='col' className='text-teal-400 px-6 py-3'>P</th>
            <th scope='col' className='text-teal-400 px-6 py-3'>W</th>
            <th scope='col' className='text-teal-400 px-6 py-3'>D</th>
            <th scope='col' className='text-teal-400 px-6 py-3'>L</th>
            <th scope='col' className='text-teal-400 px-6 py-3'>Goals</th>
            <th scope='col' className='text-teal-400 px-6 py-3'>P</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team, index) => (
            <tr key={team.team?.id || index} className='odd:bg-white odd:dark:bg-gray-800 even:bg-gray-50 even:dark:bg-gray-700 border-b dark:border-gray-700'>
              <td className='text-white px-6 py-3'>{index + 1}</td>
              <td className='text-white px-6 py-3 flex items-center'>
                <img src={team.team?.crest} alt={`${team.team?.name} crest`} className='w-6 h-6 mr-2' />
                {team.team?.name}
              </td>
              <td className='text-white px-6 py-3'>{team.playedGames}</td>
              <td className='text-white px-6 py-3'>{team.won}</td>
              <td className='text-white px-6 py-3'>{team.draw}</td>
              <td className='text-white px-6 py-3'>{team.lost}</td>
              <td className='text-white px-5 py-3'>{team.goalsFor} : {team.goalsAgainst}</td>
              <td className='text-white px-6 py-3'>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StandingsLayout;
