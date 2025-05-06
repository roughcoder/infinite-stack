export function Bento() {
  return (
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 border-t border-dashed border-gray-300 py-24 sm:py-32">
        <h2 className="text-base/7 font-semibold text-indigo-600">Practical, hands-on help where it counts</h2>
        <p className="mt-2  text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
        From first brief to final deployment, we work alongside you to design, build, and deliver exactly what your business needs.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt="Performance graph"
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Understand</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Discovery & definition</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                We start by understanding the real problem. That means digging into your workflows, your users, and your goals—so we build the right thing, not just a thing.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt="Releases interface"
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Plan</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Design & architecture</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                We create clear, scalable plans that match the problem space—whether that’s wireframes, workflows, data models, or deployment pipelines. No overengineering, no guesswork.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt="Speed gauge"
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Build</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Build & integrate</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                We get hands-on with delivery, working across stacks, tools, and platforms. Fast loops, direct communication, and clean code that’s built to last.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt="Integrations logos"
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Refine</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Review & iterate</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Once it’s live, we review performance, gather feedback, and refine the product. We don’t disappear after handover—we help you keep improving.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt="Network globe"
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Support</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Support & evolve</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                We don’t vanish after delivery. We offer ongoing support, optimisation, and technical partnership to help your systems grow and stay resilient as your business evolves.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
  )
} 