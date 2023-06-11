import Link from 'next/link';
import styles from './Button.module.css';

function news() {
    return (
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md sm:text-center">
      <h2 className={`mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white`}>
        訂閱
          <span className={styles.abc}>最新消息</span>
      </h2>
      <form action="https://ssangyongsports.us11.list-manage.com/subscribe/post?u=d2e34413aa6cbf7c94020e4ae&amp;id=6b0083dcd5&amp;f_id=00d796e0f0">
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
           <input
               <input className="input" type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="EMAIL" required />
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              subscribe
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
         我們關心保護您的數據。
          <Link
            href="/p"
            className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
           閱讀我們的隱私政策
          </Link>
          。
        </div>
      </form>
    </div>
  </div>
</section>
  )
}

export default news;
