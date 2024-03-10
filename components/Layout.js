import "flowbite";
import { GoCodeReview } from "react-icons/go";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <section className=" box-border ">
        <div className="flex py-4 px-2 gap-2 box-border  mx-20">
          <div className="  bg-white grid-cols-4 mw-[25%]">
            <nav className="flex-col ">
              <Link
                href="/users/JumiaAccount"
                className="flex py-3 px-4 hover:bg-blue-300 active:bg-blue-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white mr-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                My Jumia Account
              </Link>
              <Link
                href="/users/Orders"
                className="flex py-3 px-4 hover:bg-blue-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white mr-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 12c.3 0 .5 0 .8-.2.2 0 .4-.3.6-.5l.4-.7.2-.9c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6 0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6a2.5 2.5 0 0 0 .6 1.6l.6.5a1.8 1.8 0 0 0 1.6 0l.6-.5.4-.7.2-.9c0-1-1.1-3.8-1.6-5a1 1 0 0 0-1-.7h-11a1 1 0 0 0-.9.6A29 29 0 0 0 4 9.7c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7Zm0 0c.3 0 .7 0 1-.3l.7-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7.2.2.6.3.9.3.4 0 .7-.1 1-.4M6 12a2 2 0 0 1-1.2-.5m.2.5v7c0 .6.4 1 1 1h2v-5h3v5h7c.6 0 1-.4 1-1v-7m-5 3v2h2v-2h-2Z"
                  />
                </svg>
                Orders
              </Link>
              <Link
                href="/users/inbox"
                className="flex py-3 px-4 hover:bg-blue-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white mr-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 13h3.4a1 1 0 0 1 1 .6 4 4 0 0 0 7.3 0 1 1 0 0 1 .9-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"
                  />
                </svg>
                Inbox
              </Link>
              <Link
                href="/users/pendingReview"
                className="flex py-3 px-4 hover:bg-blue-300"
              >
                <GoCodeReview className="w-6 h-6 mr-4" />
                Pending Reviews
              </Link>
              <Link
                href="/users/Voucher"
                className="flex py-3 px-4  hover:bg-blue-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white mr-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
                Voucheers
              </Link>
              <Link
                href="/users/Saveditems"
                className="flex py-3 px-4 hover:bg-blue-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white mr-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
                Saved Item
              </Link>
              <Link
                href="/users/followedSeller"
                className="flex py-3 px-4 hover:bg-blue-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white mr-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 12c.3 0 .5 0 .8-.2.2 0 .4-.3.6-.5l.4-.7.2-.9c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6 0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6a2.5 2.5 0 0 0 .6 1.6l.6.5a1.8 1.8 0 0 0 1.6 0l.6-.5.4-.7.2-.9c0-1-1.1-3.8-1.6-5a1 1 0 0 0-1-.7h-11a1 1 0 0 0-.9.6A29 29 0 0 0 4 9.7c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7Zm0 0c.3 0 .7 0 1-.3l.7-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7.2.2.6.3.9.3.4 0 .7-.1 1-.4M6 12a2 2 0 0 1-1.2-.5m.2.5v7c0 .6.4 1 1 1h2v-5h3v5h7c.6 0 1-.4 1-1v-7m-5 3v2h2v-2h-2Z"
                  />
                </svg>
                Followed Sellers
              </Link>
              <Link
                href="/users/recentlyViewed"
                className="flex py-3 px-4 hover:bg-blue-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white mr-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Recently Viewed
              </Link>
              <Link
                href="/users/AccountManagement"
                className="flex p-3 hover:bg-blue-300"
              >
                Account Management
              </Link>
              <Link
                href="/users/AddressBook"
                className="flex p-3 hover:bg-blue-300"
              >
                Address Book
              </Link>
              <Link href="#" className="flex p-3 hover:bg-blue-300">
                NewsLetters Preference
              </Link>
              <Link
                href="/users/CloseAccount"
                className="flex p-3 hover:bg-blue-300"
              >
                Close Account
              </Link>
              <form className="p-4 text-center">
                <button className="text-yellow-500 hover:bg-orange-300 rounded-lg m-4 p-2">
                  LOGOUT
                </button>
              </form>
            </nav>
          </div>
          <main className="w-[75%]">
            <div className="bg-white  px-2 w-[100%] h-[100%]">
              {children}
              {/* <Vouchers /> */}
              {/* <PendingReviews/> */}
              {/* <AddressBook /> */}
              {/* <Orders /> */}
              {/* <Inbox/> */}
              {/* <FollowedSeller /> */}
              {/* <SavedItem /> */}
              {/* <Myaccount /> */}
              {/* <OutLet/> */}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Layout;

// function User({ children }) {
//   console.log(children);
//   return (
//     <>

//     </>
//   );
// }

// export default User;
