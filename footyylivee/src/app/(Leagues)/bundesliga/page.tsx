import { filterLeague } from '@/library'
import Fixture from '@/app/components/Fixture'


const Bundesliga = async () => {
  const getBundesliga = await filterLeague('Bundesliga')
  return (
    <div className='w-[600px]'>
      {getBundesliga.map((data) => (
        <div key={data.id}>
          <Fixture data={data} />
        </div>
      ))}
    </div>
  )
}

export default Bundesliga