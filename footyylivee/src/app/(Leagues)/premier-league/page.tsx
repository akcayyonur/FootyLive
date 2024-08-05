import { filterLeague} from "@/library"
import Fixture from "@/app/components/Fixture"

const PremierLeague = async () => {
  const getEnglishLeague = await filterLeague('Premier League')

  return (
    <div className='w-[600px]'>
      {getEnglishLeague.map((data) => (
        <div key={data.id}>
          <Fixture data={data} />
        </div>
      ))}
    </div>
  )
}

export default PremierLeague