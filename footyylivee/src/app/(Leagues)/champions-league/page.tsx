import { filterLeague } from '@/library'
import Fixture from '@/app/components/Fixture'


const ChampionsLeague = async () => {
  const getChampionsLeague = await filterLeague('UEFA Champions League ')
  return (
    <div className='w-[600px]'>
      {getChampionsLeague.map((data) => (
        <div key={data.id}>
          <Fixture data={data} />
        </div>
      ))}
    </div>
  )
}

export default ChampionsLeague