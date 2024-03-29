import Image from "next/image";
import Link from "next/link";

export default function Books() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-5'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          <Link href='/'>
            <code className='font-mono font-bold'>Books</code>
          </Link>
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://dash.cloudflare.com/4ebe76ed282b3d96baf6afe89ab8eb6f'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/cloudflare.svg'
              alt='Clooudflare Logo'
              className='dark:invert'
              width={60}
              height={15}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      <div className='mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <a
          href='https://www.amazon.com/Designing-React-Hooks-Right-Way-ebook/dp/B09LYZMN16/ref=pd_ci_mcx_mh_mcx_views_0?pd_rd_w=tI2pF&content-id=amzn1.sym.225b4624-972d-4629-9040-f1bf9923dd95%3Aamzn1.symc.40e6a10e-cbc4-4fa5-81e3-4435ff64d03b&pf_rd_p=225b4624-972d-4629-9040-f1bf9923dd95&pf_rd_r=YVKW37VF4MXBW5C3V0TN&pd_rd_wg=u5iPZ&pd_rd_r=1a4d6f28-cabd-4eea-9e6d-bbbcf87b4e9c&pd_rd_i=B09LYZMN16'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold flex justify-center'>
            <Image
              src='/reacthook.jpg'
              alt='Designing React Hooks The Right Way'
              width={200}
              height={400}
              priority
            />
          </h2>
          <h2>Designing React Hooks the Right Way</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore design techniques and solutions to debunk the myths about
            adopting states using React Hooks
          </p>
        </a>
      </div>
    </main>
  );
}
