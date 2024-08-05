import { filterLeague } from '@/library'
import Fixture from '@/app/components/Fixture'


const Championship = async () => {
  const getChampionship = await filterLeague('Championship')
  return (
    <div className='w-[600px]'>
      {getChampionship.map((data) => (
        <div key={data.id}>
          <Fixture data={data} />
        </div>
      ))}
    </div>
  )
}

export default Championship