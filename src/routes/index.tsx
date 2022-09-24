import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return <div class={"p-2"}>
    <h1 class={"font-semibold text-xl"}>Hello man</h1>
    <p>Tailwindcss integrated</p>
    <Link href={"/flower"}>Flower heavy js</Link>
  </div>
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
