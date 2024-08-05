import { filterLeague } from '@/library'
import Fixture from '@/app/components/Fixture'


const PrimeraDivision = async () => {
  const getPrimera = await filterLeague('Primera Division')
  return (
    <div className='w-[600px]'>
      {getPrimera.map((data) => (
        <div key={data.id}>
          <Fixture data={data} />
        </div>
      ))}
    </div>
  )
}

export default PrimeraDivision