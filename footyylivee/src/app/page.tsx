import { getMatch, getMatchFinished } from "@/library";
import Status from "./components/Status";
import News from "./components/News";



export default async function Home() {

  const getDatas = await getMatch()
  const getDatasFinished = await getMatchFinished()


  const matchesDatas = getDatas?.matches
  const matchesDatasFinished = getDatasFinished?.matches



  const d = new Date()
  const dateConvert = d.toLocaleDateString()

  return (
    <section className="px-2 md:px-4 md:w-[900px] flex flex-col md:flex-row justify-between">
      <div className="md:w-2/3">
        <div className="flex justify-between items-center mb-4 md:mb-4">
          <h1 className="text-md md:text-xl font-bold text-white">MATCHES</h1>
          <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm">
            <p className="text-white">{dateConvert}</p>
          </div>
        </div>
        <Status matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} />
      </div>
      <div className="md:w-1/3 md:pl-20">
        <News />
      </div>
    </section>
  );
}