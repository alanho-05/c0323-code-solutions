import React, { useState } from 'react';

/**
 * Manages outstanding and completed tasks.
 * Outstanding and completed tasks are displayed in separate lists.
 * Displayed tasks can be filtered using the Filter input. Only tasks
 * whose name matches the filter value are displayed in either list.
 * Props:
 *   - tasks, an Array of { id: number, name: string, completed: boolean }
 * TODO: It doesn't work!
 */
export default function TaskManager({ tasks }) {
  const [completed, setCompleted] = useState({});

  function addTasks(tasks) {
    setCompleted({ ...completed, [tasks.id]: !tasks.completed });
  }

  return (
    <div>
      <Filter />
      <div>
        <OutstandingTasks
          tasks={tasks}
          completed={completed}
          setCompleted={addTasks}
        />
        <CompletedTasks tasks={tasks} completed={completed} />
      </div>
    </div>
  );
}

/**
 * An input field that can be used to filter a list of items.
 */
function Filter() {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <span>Filter: </span>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

/**
 * An array of tasks with a checkbox to indicate they are completed.
 * Props:
 *   - tasks, the tasks to display
 */
function OutstandingTasks({ tasks, completed, setCompleted }) {
  // Tracks completed state of all tasks. key = task.id, value = task.completed

  if (tasks.length === 0) return <div>No outstanding tasks.</div>;
  return (
    <div>
      <div>Outstanding Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {tasks.map((task) =>
          !!completed[task.id] ? undefined : (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={!!completed[task.id]}
                  onChange={() => setCompleted(task)}
                />
                <span>{task.name}</span>
              </label>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

/**
 * An array of tasks.
 * Props:
 *   - tasks, the tasks to display
 */
function CompletedTasks({ tasks, completed }) {
  if (tasks.length === 0) return <div>No completed tasks.</div>;
  return (
    <div>
      <div>Completed Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {tasks.map((task) =>
          !!completed[task.id] ? <li key={task.id}>{task.name}</li> : undefined
        )}
      </ul>
    </div>
  );
}
