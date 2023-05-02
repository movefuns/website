import Link from "next/link"
import LogosBlock from "../logosBlock"
import Projects from "../projects"

export default function Index({
  title,
  slogan,
  description,
  button,
  tags,
  buttonHref,
}: {
  title: string;
  slogan: string;
  description: string;
  button: string;
  tags: Array<any>;
  buttonHref: string;
}) {

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-60 pb-40">
        {/* <!-- Title --> */}
        <div className="mt-5 max-w-5xl text-center mx-auto">
          <p className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            {title}
          </p>
          <p className="block pt-2 font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-gray-200">
            {slogan}
          </p>
        </div>
        {/* <!-- End Title --> */}

        <div className="mt-5 max-w-2xl text-center mx-auto">
          {description}
          <p className="text-lg text-gray-600 dark:text-gray-400"></p>
        </div>

        <div className="grid grid-flow-col justify-center auto-cols-max gap-10">
          {tags.map((e) => {
            return (
              <div>
                <p className="text-4xl text-center text-gray-600 dark:text-gray-400">
                  {e.large}
                </p>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400">
                  {e.little}
                </p>
              </div>
            );
          })}
        </div>

        {/* <!-- Buttons --> */}
        {button ? (
          <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center cta-container">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl border border-transparent text-sm font-medium rounded-md  py-3 px-6 cta"
              href={buttonHref}
            >
              {button}
              <svg
                className="w-3 h-3"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        ) : (
          <></>
        )}
        {/* <!-- End Buttons --> */}
      </div>

      <div className="py-16">
        <div className="mx-auto">
          <p className="pb-8 text-sm font-semibold tracking-wide text-center text-gray-400 uppercase dark:text-gray-500">
            Trusted by teams from around the world
          </p>
          <LogosBlock />
        </div>
      </div>

      <div className="relative from-gray-50 to-gray-100">
      <div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
        <h2 className="nx-text-4xl font-extrabold tracking-tight lg:nx-text-5xl xl:nx-text-6xl lg:text-center dark:text-white">
        We are trying our best.
        </h2>
        <p className="mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center">
        Help builders find long term success building with Move
        </p>
        <Projects />
      </div>
    </div>
    </>
  )
}
