"use client";
import { useState } from "react";
import CustomDialog from "../custom/CustomDialog";
import CustomCard from "../custom/CustomCard";

const Blogs = ({ todos }) => {
	const [showAlert, setShowAlert] = useState(false);

	return (
		<div className="min-h-screen px-8 py-10 bg-linear-to-r from-amber-200 to-orange-300 flex flex-col gap-7">
			<CustomDialog showAlert={showAlert} setShowAlert={setShowAlert} />

			{todos.length === 0 ? (
				<p className="text-gray-700 min-h-[60vh] flex items-center justify-center">
					{`No blogs available. Click on "Add Blog" to create a new blog.`}
				</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
					{todos.map((blog) => (
						<CustomCard
							key={blog.id}
							id={blog.id}
							title={blog.title}
							description={blog.description}
							showAlert={showAlert}
							setShowAlert={setShowAlert}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Blogs;
