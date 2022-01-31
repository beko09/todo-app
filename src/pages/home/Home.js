import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import TodoList from '../../components/todoList/TodoList';

const Home = () => {
    return <>
        <Navbar title="Home" />
        <div className="container mx-auto mt-6">
            <div className="w-1/2 mx-auto text-4xl leading-snug text-center my-[70px]">
                <h1 className="capitalize">Welcome To Test <span className="text-green-400">Todo app</span>  by react testing library</h1>
            </div>
            <TodoList />
        </div>
    </>;
};

export default Home;
