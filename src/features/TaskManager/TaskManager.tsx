import React, { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="New task..."
          // ➡️ ADD DARK MODE CLASSES HERE ⬅️
          className="flex-1 p-2 border rounded 
                     bg-white border-gray-300 text-gray-900 
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                     focus:ring-blue-500 focus:border-blue-500" // Added focus styles for completeness
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      {tasks.map((task) => (
        <Card key={task.id} title={task.text}>
          <div className="flex justify-between items-center">
            <span className={task.completed ? "line-through" : ""}>{task.text}</span>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => toggleTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskManager;
