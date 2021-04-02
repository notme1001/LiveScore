import React, {useState} from 'react'
import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner , faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { DataService } from '../../../config/dataService/dataService.js'
import ListSoccer from '../../components/ListSoccer'
import ListSoccerMobile from '../../components/ListSoccerMobile'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import moment from 'moment'

const fetchData = path => DataService.get(path).then()

const Index = () => {
    const dateNow = moment(new Date()).format("YYYYMMDD");
    const [date, setDate] = useState(null)
    const [utc, setUtc] = useState('7')
    const {mutate, error, data} = useSWR(`${process.env.REACT_APP_BASE_URL}/api/football/match/matchfixtures?date=${date ?? dateNow}&utc=${utc}`, fetchData)

    const comingSoon = data?.data?.result.sort((a, b) => a.status - b.status).slice(0, 5)
    const Running = data?.data?.result.filter((val) => val.status >= 2).slice(0, 3)

    return (
        <Layout>
            <div className="container mx-auto mb-5">
                <p className="text-4xl lg:text-5xl lg:mt-8 mt-5 font-semibold text-gray-800 text-center">Score Board</p>

            </div>

            <div className="hidden md:block">
                <div className="container mx-auto mb-8">
                    <p className="text-3xl lg:mt-8 mt-5 font-semibold text-gray-800">Now</p>
                </div>
                {!data ? (
                    <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                    </div>
                ) : Running.map((response, index) => { return(<ListSoccer response={response} />) })}
                <Link to="/allscore">
                    <p className="text-center text-lg text-blue-600">More <FontAwesomeIcon icon={faChevronDown} className="text-sm" /></p>
                </Link>
                <div className="container mx-auto mb-8">
                    <p className="text-3xl lg:mt-8 mt-5 font-semibold text-gray-800">Comming Soon</p>
                </div>
                {!data ? (
                    <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                    </div>
                ) : comingSoon.map((response, index) => { return(<ListSoccer response={response} />) })}
                <Link to="/allscore">
                    <p className="text-center text-lg text-blue-600">More <FontAwesomeIcon icon={faChevronDown} className="text-sm" /></p>
                </Link>
            </div>

            <div className="block md:hidden px-8">
                <div className="container mx-auto mb-8">
                    <p className="text-3xl lg:mt-8 mt-5 font-semibold text-gray-800">Now</p>
                </div>
                {!data ? (
                    <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                    </div>
                ) : Running.map((response, index) => { return(<ListSoccerMobile response={response} />) })}

                <Link to="/allscore">
                    <p className="text-center text-lg text-blue-600">More <FontAwesomeIcon icon={faChevronDown} className="text-sm" /></p>
                </Link>

                <div className="container mx-auto mb-8">
                    <p className="text-3xl lg:mt-8 mt-5 font-semibold text-gray-800">Comming Soon</p>
                </div>
                {!data ? (
                    <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
                    </div>
                ) : comingSoon.map((response, index) => { return(<ListSoccerMobile response={response} />) })}

                <Link to="/allscore">
                    <p className="text-center text-lg text-blue-600">More <FontAwesomeIcon icon={faChevronDown} className="text-sm" /></p>
                </Link>
            </div>

            <div className="border-t mt-10" style={{height: 161, backgroundColor: '#f5f6f8'}}/>

        </Layout>
    )
}

export default Index
