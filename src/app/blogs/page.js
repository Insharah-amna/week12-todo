import React from "react";
import Blogs from "@/components/blog";

const page = async () => {
	let todos = await fetch("http://localhost:3001/todo");
	todos = await todos.json();

	return <Blogs todos={todos} />;
};

export default page;
