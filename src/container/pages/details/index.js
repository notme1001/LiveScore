import React from 'react'
import Layout from '../../components/LayoutDetail'
import { DataService } from '../../../config/dataService/dataService.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faInfo, faSquare } from '@fortawesome/free-solid-svg-icons'
import useSWR from 'swr'
import moment from 'moment'

const fetchData = path => DataService.get(path).then()

function Index({match}) {
    const {mutate, error, data} = useSWR(`${process.env.REACT_APP_BASE_URL}/api/football/match/matchdetail/${match.params.id}`, fetchData)

    if(!data){
        return (
            <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
            </div>
        )
    }

    console.log(data?.data)

    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-xl font-semibold text-center mt-8 text-gray-800 block md:hidden">{data?.data?.matchevent?.name_en}</h2>
                <div className="bg-white border-b md:border md:rounded-2xl mt-4 md:mt-0 p-8 border-gray-300 flex items-center justify-between">
                    <div>
                        <img
                            src={data?.data?.home_team?.logo}
                            alt="Soccerr right img"
                            width={180}
                            className="lazyautosizes lazyloaded"
                        />
                        <h3 className="text-center text-sm md:text-lg font-medium text-gray-800 mt-4">{data?.data?.home_team?.name_en}</h3>
                        <h3 className="text-center text-sm md:text-lg font-medium block md:hidden text-gray-800 mt-4">{data?.data?.home_team?.score}</h3>
                    </div>

                    <div className="hidden md:block">
                        <h2 className="text-sm md:text-xl font-semibold text-center text-gray-800 mt-">{data?.data?.matchevent?.name_en}</h2>
                        <h2 className="text-sm md:text-xl font-semibold text-center text-gray-800 mt-">
                            {data?.data?.home_team?.score} - {data?.data?.away_team?.score}
                        </h2>
                    </div>
                    <h3 className="text-center text-lg font-semibold text-gray-800 block md:hidden mt-4 mx-8">VS</h3>
                    <div>
                        <img
                            src={data?.data?.away_team?.logo}
                            alt="Soccerr right img"
                            className="lazyautosizes lazyloaded"
                            width={180}
                        />
                        <h3 className="text-center text-sm md:text-lg font-medium text-gray-800 mt-4">{data?.data?.away_team?.name_en}</h3>
                        <h3 className="text-center text-sm md:text-lg font-medium block md:hidden text-gray-800 mt-4">{data?.data?.home_team?.score}</h3>
                    </div>
                </div>
                <div className="bg-white border-b md:border md:rounded-2xl mt-6 p-8 border-gray-300">
                    <h3 className="text-xl font-medium mb-6 text-gray-800">Incident</h3>
                    <table class="border-separate border border-blue-800 w-full">
                        <thead>
                            <tr>
                            <th class="border text-sm md:text-lg border-blue-600">incident Name</th>
                            <th class="border text-sm md:text-lg border-blue-600">player</th>
                            <th class="border text-sm md:text-lg border-blue-600">in player</th>
                            <th class="border text-sm md:text-lg border-blue-600">out player</th>
                            </tr>
                        </thead>
                    {!data ? (
                        <div className="flex justify-center items-center w-full bg-primeSand">
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                        </div>
                    ) : data?.data?.incidents?.map((incident, index) => {
                        return (
                            <>
                            <tbody>
                                <tr>
                                    <td class="border text-sm md:text-lg border-blue-600 px-3">{incident?.incidentName}</td>
                                    <td class="border text-sm md:text-lg border-blue-600 px-3">{incident?.player_name}</td>
                                    <td class="border text-sm md:text-lg border-blue-600 px-3">{incident?.in_player_id}</td>
                                    <td class="border text-sm md:text-lg border-blue-600 px-3">{incident?.out_player_id}</td>
                                </tr>
                            </tbody>
                            </>
                        )
                    })}
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Index
