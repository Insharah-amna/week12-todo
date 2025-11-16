import Link from "next/link";
import { Button } from "../ui/button";

const SlideContent = ({ heading, buttonText }) => {
	return (
		<div className="flex flex-col gap-6 items-center justify-center min-h-screen">
			<h1 className="text-3xl font-bold">{heading}</h1>

			<Link href={"blogs"}>
				<Button className="cursor-pointer">{buttonText}</Button>
			</Link>
		</div>
	);
};

export default SlideContent;
