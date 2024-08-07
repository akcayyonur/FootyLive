import { filterLeague, getTableBSA } from '@/library';
import Fixture from '@/app/components/Fixture';
import StandingsLayout from '@/app/components/StandingsLayout';

const Brasileiro = async () => {
  const getBrasileiro = await filterLeague('Campeonato Brasileiro Série A');
  const getBrasileiroTableData = await getTableBSA(); 
  const tableDatas = getBrasileiroTableData?.standings[0]?.table || []; 

  return (
    <section className="flex justify-between">
      <div>
      <h1 className="text-md md:text-xl font-bold text-white">MATCHES</h1>
        <div className="w-[600px]">
          {getBrasileiro.map((data) => (
            <div key={data.id} className="mb-4"> 
              <Fixture data={data} />
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

export default Brasileiro;