"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ConfirmationAlert } from "./CustomAlert";

export default function CustomDialog({
	variant = "default",
	isEdit = false,
	id,
	showAlert,
	setShowAlert,
}) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		if (isEdit) {
			fetch(`http://localhost:3001/todo/${id}`)
				.then((res) => res.json())
				.then((data) => {
					setTitle(data.title);
					setDescription(data.description);
				});
		}
	}, [id, isEdit]);

	const saveTodo = async () => {
		if (title.trim().length === 0 || description.trim().length === 0) return;

		const todo = { title, description };

		if (isEdit) {
			await fetch(`http://localhost:3001/todo/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(todo),
			});

			setShowAlert(true);
		} else {
			await fetch("http://localhost:3001/todo", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(todo),
			});

			setShowAlert(true);
		}

		window.location.reload();
	};

	return (
		<>
			{showAlert && <ConfirmationAlert />}

			<Dialog>
				<form>
					<DialogTrigger asChild>
						<Button variant={variant} className={"cursor-pointer"}>
							{isEdit ? "Edit" : "Add Blog"}
						</Button>
					</DialogTrigger>

					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>{isEdit ? "Edit Blog" : "Add Blog"}</DialogTitle>
						</DialogHeader>

						<div className="grid gap-4">
							<div className="grid gap-3">
								<label htmlFor="title" className="font-semibold">
									Title
								</label>

								<input
									id="title"
									name="name"
									placeholder="Enter Title"
									value={title}
									onChange={(t) => setTitle(t.target.value)}
									className="border-neutral-300 border rounded-xs p-1"
								/>
							</div>
							<div className="grid gap-3">
								<label htmlFor="description" className="font-semibold">
									Description
								</label>

								<textarea
									id="description"
									name="username"
									rows={3}
									placeholder="Enter Description"
									value={description}
									onChange={(d) => setDescription(d.target.value)}
									className="border-neutral-300 border rounded-xs p-1"
								/>
							</div>
						</div>

						<DialogFooter>
							<DialogClose asChild>
								<Button
									type="submit"
									className={"w-full cursor-pointer"}
									onClick={saveTodo}
								>
									{isEdit ? "Update" : "Add"}
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</form>
			</Dialog>
		</>
	);
}
