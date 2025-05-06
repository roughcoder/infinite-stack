import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'AI & data systems',
    description:
      'We design and build intelligent tools that help you automate processes, make smarter decisions, and unlock the value in your data. Whether it’s machine learning models, custom analytics, or embedded AI features, we tailor it to your goals.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Full-stack development',
    description:
      'From clean frontends to robust backends, we build everything your platform needs to run smoothly. We work across modern stacks to deliver stable, scalable systems that grow with your product and your customers.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Architecture & strategy',
    description:
      "We help you plan with confidence. Whether you're launching a new product or scaling an existing one, we shape the technical foundations that support growth, resilience, and clarity for the long term.  ",
    href: '#',
    icon: ArrowPathIcon,
  },
]

export function Features() {
  return (
      <div id="zero-fluff" className="mx-auto max-w-7xl px-6 lg:px-8 border-t border-dashed border-gray-300  py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">zero fluff</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Full-stack expertise, zero fluff
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          From AI to infrastructure, we build practical, modern systems that solve real business problems.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
  )
} 