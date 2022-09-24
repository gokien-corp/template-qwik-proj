import { component$, Slot } from '@builder.io/qwik';
import { Nav } from '~/components/nav';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <Nav />
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer class={"flex items-center justify-center h-20 bg-slate-100"}>
        <a rel='noopener' href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
