import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import { Alert, AlertTitle } from "@/components/ui/alert";

export function ConfirmationAlert({
	type = "success",
	message = "Your changes have been saved successfully.",
}) {
	return (
		<div className="fixed top-4 right-4 z-50 w-full max-w-sm">
			{type === "success" && (
				<Alert className="bg-green-100 text-green-800 flex items-center gap-2 p-4 rounded-md">
					<FaCircleCheck className="text-green-600" />
					<AlertTitle>{message}</AlertTitle>
				</Alert>
			)}

			{type === "error" && (
				<Alert className="bg-red-100 text-red-800 flex items-center gap-2 p-4 rounded-md">
					<FaCircleExclamation className="text-red-600" />
					<AlertTitle>{message}</AlertTitle>
				</Alert>
			)}
		</div>
	);
}
