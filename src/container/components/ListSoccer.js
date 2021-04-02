import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function ListSoccer({response}) {
    return (
        <Link to={`/detail/${response.gameId}`}>
            <div className="grid grid-flow-col md:grid-flow-col p-5 mx-10 bg-white border rounded-2xl border-gray-300 mb-8">
                <div className="flex items-center">
                    <div className={`w-4 h-4 ${response?.status >= 8 ? 'bg-red-400' : response?.status <= 8 ? 'bg-green-400' : 'bg-yellow-400'} rounded-full mr-2`}/>
                    <p className={`text-lg font-medium ${response?.status >= 8 ? 'text-red-400' : response?.status <= 8 ? 'text-green-400' : 'bg-yellow-400'}`}>{response?.statusName}</p>
                </div>
                <div className="flex justify-center items-center" >
                    <div className="flex justify-between">
                        <div className="px-5" style={{width: 120}}>
                            <img 
                                alt={response?.homeTeamEvent?.name}
                                src={response?.homeTeamEvent?.logoUrl}
                                width={100}
                                className="lazyautosizes lazyloaded"
                            />
                        </div>
                        <div className="flex space-x-4 items-center">
                            <div>
                                <p className="text-md font-semibold text-gray-800">{response?.homeTeamEvent?.name}</p>
                                <p className="text-md font-semibold text-gray-800 text-center mt-2">{response?.homeTeamEvent?.score}</p>
                            </div>
                            <div>
                                <p className="text-md font-semibold text-gray-800"> vs </p>
                                <p className="text-md font-semibold text-gray-800 text-center mt-2"> - </p>
                            </div>
                            <div>
                                <p className="text-md font-semibold text-gray-800"> {response?.awayTeamEvent?.name} </p>
                                <p className="text-md font-semibold text-gray-800 text-center mt-2"> {response?.awayTeamEvent?.score} </p>
                            </div>
                        </div>
                        <div className="px-5" style={{width: 120}}>
                            <img 
                                alt={response?.homeTeamEvent?.name}
                                src={response?.awayTeamEvent?.logoUrl}
                                width={100}
                                className="lazyautosizes lazyloaded"
                            />
                        </div>
                    </div>
                </div>
                <span className="text-right my-auto">Detail  <FontAwesomeIcon icon={faChevronRight} />	</span>
            </div>
        </Link>
    )
}

export default ListSoccer
