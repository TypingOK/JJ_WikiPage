This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- <div className="flex h-full items-center">
            <button
              onClick={() => {
                router.push(`?page=${1}`);
              }}
              className="mr-2 text-[16px]"
            >{`<<`}</button>
            <button
              onClick={() => {
                if (page) {
                  const intPage = parseInt(page);
                  if (intPage - 1 > 1) {
                    router.push(`?page=${parseInt(page) - 1}`);
                  } else {
                    router.push(`?page=${1}`);
                  }
                }
              }}
              className="mr-2 text-[16px]"
            >{`<`}</button>
          </div>
          {Array.from({ length: data.endPage }, (_, index) => (
            <button
              onClick={() => {
                router.push(`?page=${index + 1}`);
              }}
              key={index}
              className={`mr-2 w-11 flex h-11 justify-center items-center text-[16px]font-medium  ${
                index + 1 === data.page ? `` : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <div className="flex h-full items-center">
            <button
              onClick={() => {
                if (page) {
                  const intPage = parseInt(page);
                  if (intPage + 1 >= data.endPage) {
                    router.push(`?page=${data.endPage}`);
                  } else {
                    router.push(`?page=${intPage + 1}`);
                  }
                }
              }}
              className="ml-2 text-[16px]"
            >{`>`}</button>
            <button
              onClick={() => {
                router.push(`?page=${data.endPage}`);
              }}
              className="ml-2 text-[16px]"
            >{`>>`}</button>
          </div> -->
