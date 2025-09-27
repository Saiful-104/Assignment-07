import React, { useEffect, useState } from "react";
import Nav from './component/Nav/Nav';
import Banner from './component/Banner/Banner';
import Tickets from './component/Tickets/Tickets';
import TaskStatus from './component/TaskStatus/TaskStatus';
import  Footer from './component/Footer/Footer'
import './index.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState([]);

  const [ongoingTask, setOngoingTask] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);


  const handleSelectTicket = (ticket) => {

    const exists = ongoingTask.some((t) => t.id === ticket.id);
    if (exists) {
      toast.info(`"${ticket.title}" is already In-Progress.`);
      return;
    }

    setOngoingTask((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.info(`Task "${ticket.title}" is now In-Progress!`);
  };


  const handleCompleteTask = (ticketId) => {
    const taskToComplete = ongoingTask.find((t) => t.id === ticketId);
    if (taskToComplete) {
      setResolvedTasks((prev) => [...prev, taskToComplete]);
      setOngoingTask((prev) => prev.filter((t) => t.id !== ticketId));
      toast.success(`Task "${taskToComplete.title}" has been Resolved!`);
    }
  };

  return (
    <>
      <Nav />

      <div className="bg-gray-50 pb-12">
        <div className="max-w-[1240px] m-auto">
          <Banner
            inProgressCount={ongoingTask.length} 
            resolvedCount={resolvedTasks.length}
          />

          <div className="mt-10 mx-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Tickets tickets={tickets} onSelectTicket={handleSelectTicket} />
              <TaskStatus
                ongoingTask={ongoingTask}
                resolvedTasks={resolvedTasks}
                onCompleteTask={handleCompleteTask}
              />
            </div>
          </div>
        </div>
      </div>
       
     
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
   < Footer></Footer>
     
    </>
  );
}

export default App;
