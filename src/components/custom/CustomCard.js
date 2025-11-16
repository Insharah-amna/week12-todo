"use client";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import CustomDialog from "./CustomDialog";
import { ConfirmationAlert } from "./CustomAlert";

const CustomCard = ({ id, title, description, showAlert, setShowAlert }) => {
	let shortenedTitle = title;
	let shortenedDescription = description;

	if (title.length > 100) {
		shortenedTitle = title.substring(0, 50) + "...";
	}
	if (description.length > 100) {
		shortenedDescription = description.substring(0, 100) + "...";
	}

	const deleteConfirmation = async (id) => {
		let res = confirm("Are you sure you want to delete this blog?");

		if (res) {
			await fetch(`http://localhost:3001/todo/${id}`, {
				method: "DELETE",
			});

			setShowAlert(true);
			window.location.reload();
		}
	};

	return (
		<>
			{showAlert && <ConfirmationAlert />}

			<Card
				className={
					"py-4 gap-0 bg-[#fffefa] shadow-md flex flex-col justify-between"
				}
			>
				<div>
					<CardHeader>
						<CardTitle className={"text-lg"}>{shortenedTitle}</CardTitle>
					</CardHeader>

					<CardContent>{shortenedDescription}</CardContent>
				</div>

				<CardFooter className={"flex gap-4 mt-3"}>
					<CustomDialog
						variant={"secondary"}
						id={id}
						isEdit={true}
						showAlert={showAlert}
						setShowAlert={setShowAlert}
					/>

					<Button
						variant={"destructive"}
						className={"cursor-pointer"}
						onClick={() => deleteConfirmation(id)}
					>
						Delete
					</Button>
				</CardFooter>
			</Card>
		</>
	);
};

export default CustomCard;
