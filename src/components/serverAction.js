"use server";

export async function deleteBlog({ id }) {
	await fetch(`http://localhost:3001/todo/${id}`, {
		method: "DELETE",
	});
}
