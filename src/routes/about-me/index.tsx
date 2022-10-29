import { component$, Slot } from "@builder.io/qwik";
import { BasePropsComponent } from "~/package/props/base-props";



export default component$(() => {

	return <div class="px-2 flex justify-center py-4">
		<div class={"max-w-5xl flex flex-col gap-y-6"}>
			<h1 class="text-4xl font-bold">
				It's me, Phat
			</h1>
			<section class={"flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-3"}>
				<img class={"border-white border-4 w-40 h-40 rounded-full shadow-white shadow-sm flex-shrink-0"} />
				<p class={""}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, exercitationem et nihil beatae, aut, minus ea dolorem possimus commodi pariatur quaerat expedita sit facilis voluptatum culpa repudiandae rerum aspernatur nobis.</p>
			</section>
			<section>
				<SectionHeader>Mobile development</SectionHeader>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsum soluta. Mollitia, veniam quis ducimus eligendi dolore itaque porro quo.
			</section>
			<section>
				<SectionHeader>Backend and other techs</SectionHeader>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas nostrum, numquam id dignissimos earum dolorum consectetur perferendis incidunt aperiam at, culpa quaerat et assumenda iste unde maiores nihil! Quas temporibus enim eligendi deleniti labore aspernatur ipsa debitis doloribus fuga?
			</section>
			<section>
				<SectionHeader>Hobby and plan</SectionHeader>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quibusdam fuga hic, quia ea dignissimos aliquid. Rerum asperiores commodi ducimus mollitia ea voluptatibus quia est!
			</section>
		</div>
	</div>
});


export interface SectionHeaderProps extends BasePropsComponent {

}

export const SectionHeader = component$((props: SectionHeaderProps) => {
	return (
		<h3 class={"font-normal text-2xl italic text-cyan-600"}>
			<Slot />
		</h3>
	);
});