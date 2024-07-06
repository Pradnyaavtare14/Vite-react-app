// import React from 'react';
import Sidebar from "./Sidebar";
import { FaSearch, FaFilter, FaBell, FaPowerOff, FaClock, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Proposal = () => {
  return (
    <div className="flex h-screen"> {/* Flex container for horizontal layout */}
      <div className="bg-[#091143] text-white h-screen overflow-y-auto"> {/* Sidebar container */}
        <Sidebar />
      </div>
      <div className="flex-grow bg-white p-4 shadow-md  w-screen mt-10"> {/* Proposal content container */}
        <div className="mr-52">
        <div className="flex justify-between items-center mb-4">
          <div>
            <nav className="text-sm text-gray-500">
              <Link to="/" className="hover:underline"><span className="text-xl font-semibold text-black">Proposal </span>Home</Link> <span>•</span> Proposal
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <FaSearch className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaClock className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaPlus className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaBell className="text-gray-500 hover:text-gray-700 cursor-pointer relative">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-orange-500 text-white text-xs rounded-full text-center">540</span>
            </FaBell>
            <FaPowerOff className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Duration</span>
            <span className="text-gray-600">Start Date To End Date</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Lead</span>
            <select className="border border-gray-300 rounded p-1">
              <option>All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <input 
            type="text" 
            placeholder="Start typing to search" 
            className="border border-gray-300 rounded p-2 flex-grow"
          />
          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>
        <div className="p-6">
      <div className="bg-blue-100 p-4 rounded-md text-blue-700 mb-4">
        Proposals are for Leads. If you want to create for existing clients, then create Estimate.
      </div>
      <div className="flex space-x-4 mb-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Create Proposal
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          Proposal Template
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          Export
        </button>
      </div>
      <table className="min-w-full bg-white border rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Proposal</th>
            <th className="py-2 px-4 border-b">Deals</th>
            <th className="py-2 px-4 border-b">Contact Name</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Valid Till</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8" className="py-4 text-center text-gray-500">
              No data available in table
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          Show
          <select className="ml-2 p-1 border rounded">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          entries
        </div>
        <div>
          Showing 0 to 0 of 0 entries
        </div>
        <div>
          <button className="p-2 border rounded bg-gray-200 text-gray-700 mr-2">
            Previous
          </button>
          <button className="p-2 border rounded bg-gray-200 text-gray-700">
            Next
          </button>
        </div>
      </div>
    </div>
        </div>
      
        {/* Additional content for Proposal */}
        
      </div>
    </div>
  );
}

export default Proposal;
