import React from "react";

const TableUserType: React.FC<{setUserType: React.Dispatch<React.SetStateAction<string>>}> = ({setUserType}) => {
    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                user
                            </th>
                            <th scope="col" className="px-6 py-3">
                                beneficios
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Selected</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                admin
                            </th>
                            <td className="px-6 py-4">
                                todos
                            </td>
                            <td className="px-6 py-4">
                                none
                            </td>
                            <button onClick={() => setUserType('admin')} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                selected
                            </button>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                user1
                            </th>
                            <td className="px-6 py-4">
                                mejor rendimiento
                            </td>
                            <td className="px-6 py-4">
                                $600
                            </td>
                            <button onClick={() => setUserType('user1')} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                selected
                            </button>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                user2
                            </th>
                            <td className="px-6 py-4">
                                mejores dietas, mas estricto
                            </td>
                            <td className="px-6 py-4">
                                $200
                            </td>
                            <button onClick={() => setUserType('user2')} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                selected
                            </button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableUserType;