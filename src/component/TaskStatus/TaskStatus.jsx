import React from "react";

const TaskStatus = ({ ongoingTask, resolvedTasks, onCompleteTask }) => {
  return (
    <div>
      <h1 className="font-bold text-xl text-gray-800">Task Status</h1>

   
      {ongoingTask && ongoingTask.length > 0 ? (
        <div className="mt-4 space-y-3">
          {ongoingTask.map((task) => (
            <div key={task.id} className="p-4 rounded-xl bg-white shadow-sm">
              <h1 className="font-semibold mb-2">{task.title}</h1>
             
              <button
                className="w-full bg-green-800 text-white py-2 rounded-lg"
                onClick={() => onCompleteTask(task.id)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-500">Select a ticket to add to Task Status</p>
      )}

  
      <h1 className="font-bold mt-6">Resolved Tasks</h1>
      {resolvedTasks.length > 0 ? (
        resolvedTasks.map((task) => (
          <div key={task.id} className="p-4 rounded-xl bg-white shadow-sm mt-2">
            <h1 className="font-semibold  text-gray-600">{task.title}</h1>
          </div>
        ))
      ) : (
        <p className="mt-2 text-gray-500">No resolved tasks yet.</p>
      )}
    </div>
  );
};

export default TaskStatus;
