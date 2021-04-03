import React, {useState} from 'react'
import Layout from '../../components/layout'
import { DataService } from '../../../config/dataService/dataService.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import ListSoccer from '../../components/ListSoccer'
import ListSoccerMobile from '../../components/ListSoccerMobile'
import useSWR from 'swr'
import moment from 'moment'
import InfiniteScroll from "react-infinite-scroll-component";

const fetchData = path => DataService.get(path).then()

function Index() {
    const dateNow = moment(new Date()).format("YYYYMMDD");
    const [date, setDate] = useState(null)
    const [utc, setUtc] = useState('7')
    const [pagination, setPagination] = useState(10)
    
    const {mutate, error, data} = useSWR(`${process.env.REACT_APP_BASE_URL}/api/football/match/matchfixtures?date=${date ?? dateNow}&utc=${utc}`, fetchData)
    const AllData = data?.data?.result.sort((a, b) => a.status - b.status).slice(0, pagination)
    
    return (
        <Layout>
            <div className="container mx-auto mb-5">
                <p className="text-4xl lg:text-5xl lg:mt-8 mt-5 font-semibold text-gray-800 text-center">All Score</p>
            </div>

            {!data ? (
                <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                </div>
            ) : 
            <InfiniteScroll
                dataLength={AllData.length}
                next={() => {
                    setTimeout(() => {
                        setPagination(pagination + 10)
                    }, 2000)
                }}
                hasMore={true}
                loader={
                    <div className="flex justify-center items-center w-full mb-5 bg-primeSand">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                    </div>
                }
            >
                <div className="hidden md:block">
                    <div className="container mx-auto mb-8">
                        <input className="lg:mt-8 mt-5 text-gray-500 font-medium rounded-md p-2 bg-gray-200" type="date" />
                    </div>
                        {!data ? (
                            <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                            </div>
                        ) : AllData.map((response, index) => { return(<ListSoccer response={response} />) })}
                </div>

                <div className="block md:hidden px-8">
                    <div className="container mx-auto mb-8">
                        <input className="lg:mt-8 mt-5 text-gray-500 font-medium rounded-md p-2 bg-gray-200" type="date" />
                    </div>
                    {!data ? (
                        <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                        </div>
                    ) : AllData.map((response, index) => { return(<ListSoccerMobile response={response} />) })}
                </div>
            </InfiniteScroll>
            }
        </ Layout>
    )
}

export default Index
