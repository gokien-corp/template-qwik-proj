import { component$, Slot, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { BasePropsComponent } from "~/package/props/base-props";

export interface AInProps extends BasePropsComponent {
	href?: string;
}

export const AIn = component$((props: AInProps) => {
	console.log(props.children)
	return <Link href={props.href ?? ""} class={[`hover:opacity-60`, props.className ?? ""]}
		style={props.style}
	>
		{/* {props.children} */}
		<Slot />
	</Link>;
});