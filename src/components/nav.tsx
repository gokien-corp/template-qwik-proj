import { component$, Slot } from "@builder.io/qwik";
import site from "../../site.config"
import { AIn } from "./a-in";

export const Nav = component$(() => {
	return <nav class={["sticky top-0 left-0 right-0 flex items-center px-2"]} style={{ height: site.navHeight.toString() + "px" }}>
		<AIn>
			abcde
		</AIn>
	</nav>
})