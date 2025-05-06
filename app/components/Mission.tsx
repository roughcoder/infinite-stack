const stats = [
  { label: ' Rapid delivery with reliable architecture.', value: 'Speed without shortcuts' },
  { label: ' From AI models to backend systems.', value: 'End-to-end expertise' },
  { label: ' Technology that solves, not just stacks.', value: 'Built for outcomes' },
]

export function Mission() {
  return (
      <div id="mission" className="mx-auto max-w-7xl px-6 lg:px-8 border-t border-dashed border-gray-300 py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none ">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our mission</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
              Infinite Stack exists to help businesses turn complex challenges into clear, working technology. We bring deep, cross-discipline expertise—spanning AI, infrastructure, and full-stack systems—to deliver solutions that are both smart and scalable.
              </p>
              <p className="mt-10 max-w-xl text-base/7 text-gray-700">
              As a lean, high-impact team, we work closely with clients to move fast, make sharp decisions, and build tech that lasts. Whether it's launching a new product or modernising a legacy platform, our mission is simple: solve real problems, deliver real value.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
  )
} 