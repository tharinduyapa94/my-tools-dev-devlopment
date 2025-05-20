import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./todoSlicer";

const Todo = () => {
    const dispatch = useDispatch();
    // const data = useSelector(state => state) 
    const { data, isLoading, error } = useSelector((state) => state.todo);
    useEffect(() => {
        dispatch(fetchTodo())
    }, []);
    if (isLoading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    console.log(data);

    return (
        <div>

        </div>
    )
}

export default Todo;