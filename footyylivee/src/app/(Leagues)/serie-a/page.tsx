import { filterLeague, getTableSA } from '@/library';
import Fixture from '@/app/components/Fixture';
import StandingsLayout from '@/app/components/StandingsLayout';

const SerieA = async () => {
  const getSerieA = await filterLeague('Serie A');
  const getSerieATableData = await getTableSA(); 
  const tableDatas = getSerieATableData?.standings[0]?.table || []; 

  return (
    <section className="flex justify-between">
      <div>
      <h1 className="text-md md:text-xl font-bold text-white">MATCHES</h1>
        <div className="w-[600px]">
          {getSerieA.map((data) => (
            <div key={data.id} className="mb-4"> 
              <Fixture data={data} />a
            </div>
          
          ))}
        </div>
        </div>
      <div>
      <h1 className="text-md md:text-xl font-bold text-white">STANDINGS</h1>
        <div className="w-full max-w-[700px] ml-6"> 
          <StandingsLayout data={tableDatas} />
        </div>
      </div>
    </section>
  );
};

export default SerieA;