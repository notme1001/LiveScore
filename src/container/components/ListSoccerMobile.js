import React from 'react'
import { Link } from 'react-router-dom'
import Soccer from '../../static/assets/icons/soccer.svg'

function ListSoccer({response}) {
    return (
        <Link to={`/detail/${response.gameId}`}>
            <div className="my-4 bg-white border hover:shadow-md cursor-pointer rounded-2xl border-gray-300">
                    <div className="flex items-center justify-center space-x-8 py-6 px-6">
                        <div className="p-2 rounded-full ">
                            <img 
                                width={80}
                                alt={response?.homeTeamEvent?.name}
                                src={response?.homeTeamEvent?.logoUrl || Soccer}
                                className="lazyautosizes lazyloaded"
                            />
                        </div>
                        <div className="p-2 rounded-full">
                            <img 
                                width={80}
                                alt={response?.homeTeamEvent?.name}
                                src={response?.awayTeamEvent?.logoUrl || Soccer}
                                className="lazyautosizes lazyloaded"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center justify-center w-full">
                        <div>
                            <p className="text-md font-semibold text-center text-gray-800">{response?.homeTeamEvent?.name}</p>
                            <p className="text-md font-semibold text-gray-800 text-center mt-2">{response?.homeTeamEvent?.score}</p>
                        </div>
                        <div>
                            <p className="text-md font-semibold  text-center text-gray-800"> vs </p>
                            <p className="text-md font-semibold text-gray-800 text-center mt-2"> - </p>
                        </div>
                        <div>
                            <p className="text-md font-semibold  text-center text-gray-800"> {response?.awayTeamEvent?.name} </p>
                            <p className="text-md font-semibold text-gray-800 text-center mt-2"> {response?.awayTeamEvent?.score} </p>
                        </div>
                    </div>
                <div className={`${response?.status >= 8 ? 'bg-red-400' : response?.status <= 8 ? 'bg-green-400' : 'bg-yellow-400'} rounded-b-xl px-2 text-white items-center justify-center flex flex-col`}>
                    {response?.statusName}
                </div>
            </div>
        </Link>
    )
}

export default ListSoccer
