import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Tickets = ({ tickets = [], onSelectTicket }) => {
  return (
    <div className="md:col-span-2">
      <h1 className="font-bold text-xl text-gray-800">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {tickets && tickets.length > 0 ? (
          tickets.map((ticket) => {
            const status = (ticket.status || "").toLowerCase();

            // OPEN -> green, anything else -> yellow
            const isOpen = status === "open";
            const buttonBgClass = isOpen ? "bg-green-200 text-green-800" : "bg-yellow-100 text-yellow-800";
            const circleClass = isOpen ? "bg-green-500 text-white" : "bg-yellow-500 text-white";

            return (
              <div
                key={ticket.id}
                className="border-none p-4 rounded-xl bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onSelectTicket(ticket)}
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold">{ticket.title}</h1>

                  <button
                    className={`flex items-center gap-2 ${buttonBgClass} p-1 px-3 rounded-2xl text-sm font-medium`}
                    aria-label={`Status: ${ticket.status}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span
                      className={`${circleClass} w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold`}
                    >
                      
                    </span>
                    <span className="capitalize">{ticket.status}</span>
                  </button>
                </div>

                <p className="text-sm text-gray-600 mt-2">{ticket.description}</p>

                <div className="flex justify-between items-center mt-3 text-sm text-gray-700">
                  <div className="flex gap-4">
                    <p>#{ticket.id}</p>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        ticket.priority === "HIGH"
                          ? "bg-red-100 text-red-700"
                          : ticket.priority === "MEDIUM"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {ticket.priority} PRIORITY
                    </span>
                  </div>

                  <div className="flex gap-6 items-center">
                    <h4 className="text-gray-700">{ticket.customer}</h4>

                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-blue-400" size={15} />
                      <p>{ticket.createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="md:col-span-2">
            <p className="text-gray-500 text-center py-10">No more tickets available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
