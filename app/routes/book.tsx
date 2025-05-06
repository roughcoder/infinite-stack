import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import { Mission } from "../components/Mission";
import { Features } from "../components/Features";
import { Bento } from "../components/Bento";
import { Notification } from "../components/Notifications";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Form, useActionData } from 'react-router';
import type { ActionFunctionArgs } from 'react-router'; // Or ActionFunction if not using defer

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: "Infinite Stack | Modern Tech Consulting & AI Solutions" },
    { name: "description", content: "Infinite Stack helps businesses solve real problems with AI, full-stack systems, and modern tech. Smart, fast delivery from a small, expert team." },
  ];
}

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const requirements = formData.get("requirements");

  // In a real app, you'd send this data to your backend, email service, etc.
  console.log("React Router Action Data:", { name, email, requirements });

  // For React Router, you typically return the data directly or a Response object
  // If you need to return JSON, you might need to ensure your route loader/action setup handles it.
  // For simplicity, we'll return an object that `useActionData` can use.
  return {
    ok: true,
    message: "Thanks for your submission! We'll get back to you shortly.",
  };
}

export function BookContent() {
  const actionData = useActionData() as { ok?: boolean; message?: string } | undefined;

  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base/7 font-semibold text-indigo-600">Talkr</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Book a call with Infinite Stack
          </h1>
          <p className="mt-6 text-xl/8 text-gray-700">
          We're now taking bookings for August and September. Whether you're exploring ideas or ready to build, now's the time to get on the calendar.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            {actionData?.ok ? (
              <div className="lg:col-span-5">
                <h2 className="text-base/7 font-semibold text-indigo-600">Submission Successful!</h2>
                <p className="mt-4 text-base/7 text-gray-700">Thanks for booking a call with Infinite Stack. We're looking forward to speaking with you. You'll receive a confirmation email shortly with the details, and we'll be in touch if we need anything ahead of time.

Until then, if you have any questions or want to share more context, feel free to reach out—we're all ears.</p>
              </div>
            ) : (
              <Form method="post" className="space-y-6 lg:col-span-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium leading-6 text-gray-900">
                    Project Requirements
                  </label>
                  <p className="mt-1 text-sm text-gray-500">
                    The more information you provide, the better the onboarding.
                  </p>
                  <div className="mt-2">
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={4}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book Appointment
                  </button>
                </div>
              </Form>
            )}
          </div>
          <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
            <p>
            At Infinite Stack, we believe good work starts with good conversations. Booking a call is your first step toward working with us—no pressure, just a chance to talk, share, and see how we can help.

Every intro call is a video chat, led by one of our core team members. If we move forward together, you'll likely meet the whole team before a single line of code is written. We value transparency, trust, and collaboration—and that begins from the very first call.
            </p>
            <ul className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Open onboarding.</strong> We work closely with our clients to make onboarding simple and fast. Once we understand your goals and challenges, we'll walk you through what working together might look like—timeline, scope, team fit, and next steps.

This is a two-way conversation: you're learning about us, and we're learning about you. We're not just here to pitch—we're here to listen.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Your team, not just a contact</strong> Unlike agencies where you're handed off after the sale, we introduce you directly to the people who'll be working on your project. You'll speak with real engineers and strategists, not just sales reps. That means better answers, better alignment, and a smoother start.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Ready to talk?</strong> Slots are currently open for August and September. Use the calendar below to find a time that suits you. We're looking forward to meeting you.
                </span>
              </li>
            </ul>
        
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Let's build something that matters</h2>
            <p className="mt-6">
            We don't chase volume—we choose partnerships. If you're looking for a sharp, honest, and capable team to help you solve real problems with modern tech, we'd love to hear from you. Book a call and let's explore what we can create together.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Book() {
  return (
    <>
    <NavBar />
      <BookContent />
      <Footer />

    </>
  );
}
