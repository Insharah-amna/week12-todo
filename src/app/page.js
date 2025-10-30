import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-linear-to-r from-amber-200 to-amber-500 font-sansk">
			<h1 className="text-3xl font-bold">Explore Our Blogs</h1>
			<Button className="cursor-pointer">Button</Button>
		</div>
	);
}
