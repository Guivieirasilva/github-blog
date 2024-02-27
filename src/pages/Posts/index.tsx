import { HeaderPost } from './components/HeaderPosts'

export function Posts() {
  return (
    <section className="flex w-4/5 flex-col items-center justify-center gap-10 text-base-text md:w-[90%]">
      <HeaderPost />
      <div className="flex flex-col gap-6 p-6">
        <p>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another
          </strong>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>
        <a className="text-blue underline-offset-1">Dynamic typing</a>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
        <code className="bg-base-border" lang="javacript">
          let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a
          string foo = true; // foo is now a boolean
        </code>
      </div>
    </section>
  )
}
