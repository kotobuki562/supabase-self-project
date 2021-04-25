import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { icons } from "../../../../public/Icon";

export const MenuItem = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full text-right">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex justify-center focus:outline-none w-12 h-12 sm:w-20 sm:h-20">
                <img src={icons.menuIcon} alt="menu" />
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute z-10 right-0 w-56 mt-2 origin-top-right bg-gray-50 dark:bg-semiDark dark:text-fontDark divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:text-darkSushi dark:hover:text-sushi">
                        <Link href="/posts/create">
                          <a className="flex">
                            {active ? (
                              <EditActiveIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            ) : (
                              <EditInactiveIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            )}
                            Create Diary
                          </a>
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:text-darkSushi dark:hover:text-sushi">
                        <Link href="/emojis/create">
                          <a className="flex">
                            {active ? (
                              <ArchiveActiveIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            ) : (
                              <ArchiveInactiveIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            )}
                            Create Emoji
                          </a>
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-2">
                  <Menu.Item>
                    <div className="flex justify-around items-center">
                      <button
                        className="inline-block outline-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setTheme("dark");
                          // switchTheme();
                        }}
                      >
                        <img
                          className="w-10 sm:w-12 outline-none"
                          src={icons.moonIcon}
                          alt="moon"
                        />
                      </button>
                      <div className="text-darkSushi dark:text-sushi">MODE</div>
                      <button
                        className="inline-block outline-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setTheme("light");
                          // switchTheme();
                        }}
                      >
                        <img
                          className="w-10 sm:w-12 outline-none"
                          src={icons.sunIcon}
                          alt="sun"
                        />
                      </button>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#52BBA4"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#52BBA4"
        stroke="#76FADD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  const { theme, setTheme } = useTheme();
  return (
    <svg
      {...props}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="smile"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
    >
      <path
        fill={theme === "light" ? "#52BBA4" : "#76FADD"}
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
      />
    </svg>
    // <svg
    //   {...props}
    //   viewBox="0 0 20 20"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <rect
    //     x="5"
    //     y="8"
    //     width="10"
    //     height="8"
    //     fill="#EDE9FE"
    //     stroke="#52BBA4"
    //     strokeWidth="2"
    //   />
    //   <rect
    //     x="4"
    //     y="4"
    //     width="12"
    //     height="4"
    //     fill="#EDE9FE"
    //     stroke="#52BBA4"
    //     strokeWidth="2"
    //   />
    //   <path d="M8 12H12" stroke="#52BBA4" strokeWidth="2" />
    // </svg>
  );
}

function ArchiveActiveIcon(props) {
  const { theme, setTheme } = useTheme();
  return (
    <svg
      {...props}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="smile"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
    >
      <path
        fill={theme === "light" ? "#52BBA4" : "#76FADD"}
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
      />
    </svg>

    // <svg
    //   {...props}
    //   viewBox="0 0 20 20"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <rect
    //     x="5"
    //     y="8"
    //     width="10"
    //     height="8"
    //     fill="#52BBA4"
    //     stroke="#76FADD"
    //     strokeWidth="2"
    //   />
    //   <rect
    //     x="4"
    //     y="4"
    //     width="12"
    //     height="4"
    //     fill="#52BBA4"
    //     stroke="#76FADD"
    //     strokeWidth="2"
    //   />
    //   <path d="M8 12H12" stroke="#52BBA4" strokeWidth="2" />
    // </svg>
  );
}
