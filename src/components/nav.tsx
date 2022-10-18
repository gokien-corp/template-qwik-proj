import { component$, Slot } from "@builder.io/qwik";
import site from "../../site.config"
import { AIn } from "./a-in";

export const Nav = component$(() => {
	return <nav class={["sticky top-0 left-0 right-0 flex items-center px-2 sm:px-4 bg-white z-20",
		"shadow", "flex justify-between"]} style={{ height: site.navHeight.toString() + "px" }}>
		<div class={"flex gap-x-4"}>
			<AIn class={"text-blue-600"} href={"/"}>
				Home
			</AIn>
			<AIn class={"text-blue-600"} href={"/flower"}>
				Flower
			</AIn>
		</div>
	</nav>
})