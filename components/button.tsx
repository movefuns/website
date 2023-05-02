import Link from "next/link";

export default function Button({ href, child }) {
  return (
    <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center cta-container">
      <Link
        className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl border border-transparent text-sm font-medium rounded-md  py-3 px-6 cta"
        href={href}
      >
        {child}
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
  );
}
