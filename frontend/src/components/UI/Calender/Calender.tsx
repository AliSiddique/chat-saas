interface CardProps {
  title: string;
  showSub: boolean;
  rounded: boolean;
  textColour: string;
  children: React.ReactNode;
}
import React from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parse,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";

export default function Calnder({
  title,
  showSub,
  textColour,
  rounded,
  children,
}: CardProps) {
  let [selectedDate, setSelectedDate] = useState<Date | null>(null); // New state to store the clicked date
  console.log(selectedDate);
  let [monthString, setMonthString] = useState<string>(
    format(new Date(), "yyyy-MM")
  );
  let [direction, setDirection] = useState<number>();
  let [isAnimating, setIsAnimating] = useState<boolean>(false);
  let month = parse(monthString, "yyyy-MM", new Date());

  function handleDateClick(day: Date) {
    setSelectedDate(day); // Update the state with the clicked date
  }

  function nextMonth() {
    if (isAnimating) return;

    let next = addMonths(month, 1);

    setMonthString(format(next, "yyyy-MM"));
    setDirection(1);
    setIsAnimating(true);
  }

  function previousMonth() {
    if (isAnimating) return;

    let previous = subMonths(month, 1);

    setMonthString(format(previous, "yyyy-MM"));
    setDirection(-1);
    setIsAnimating(true);
  }

  let days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end: endOfWeek(endOfMonth(month)),
  });

  return (
    <>
      {selectedDate && (
        <div className="bg-white p-2 rounded-md shadow-md">
          <p className="text-center font-semibold">Selected Date:</p>
          <p className="text-center">{format(selectedDate, "MMMM d, yyyy")}</p>
        </div>
      )}
      <MotionConfig transition={transition}>
        <div className="flex min-h-screen items-start bg-stone-800 pt-16 text-stone-900">
          <div className="relative mx-auto w-96 max-w-7xl overflow-hidden rounded-2xl bg-white">
            <div className="py-8">
              <div className="flex flex-col justify-center rounded text-center">
                <ResizablePanel>
                  <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    custom={direction}
                    onExitComplete={() => setIsAnimating(false)}
                  >
                    <motion.div
                      key={monthString}
                      initial="enter"
                      animate="middle"
                      exit="exit"
                    >
                      <header className="relative flex justify-between px-8">
                        <motion.button
                          initial={{
                            opacity: 0,
                            visibility: "hidden",
                          }}
                          animate={{
                            opacity: 1,
                            visibility: "visible",
                          }}
                          exit={{
                            opacity: 0,
                            visibility: "hidden",
                          }}
                          className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                          onClick={previousMonth}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                          </svg>
                        </motion.button>
                        <motion.p
                          variants={variants}
                          custom={direction}
                          className="absolute inset-0 flex items-center justify-center font-semibold"
                        >
                          {format(month, "MMMM yyyy")}
                        </motion.p>
                        <motion.button
                          initial={{
                            opacity: 0,
                            visibility: "hidden",
                          }}
                          animate={{
                            opacity: 1,
                            visibility: "visible",
                          }}
                          exit={{
                            opacity: 0,
                            visibility: "hidden",
                          }}
                          className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                          onClick={nextMonth}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </motion.button>
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, white 15%, transparent 30%, transparent 70%, white 85%)",
                          }}
                        />
                      </header>
                      <motion.div
                        initial={{
                          opacity: 0,
                          visibility: "hidden",
                        }}
                        animate={{
                          opacity: 1,
                          visibility: "visible",
                        }}
                        exit={{
                          opacity: 0,
                          visibility: "hidden",
                        }}
                        className="mt-6 grid grid-cols-7 gap-y-6 px-8"
                      >
                        <span className="font-medium text-stone-500">Su</span>
                        <span className="font-medium text-stone-500">Mo</span>
                        <span className="font-medium text-stone-500">Tu</span>
                        <span className="font-medium text-stone-500">We</span>
                        <span className="font-medium text-stone-500">Th</span>
                        <span className="font-medium text-stone-500">Fr</span>
                        <span className="font-medium text-stone-500">Sa</span>
                      </motion.div>
                      <motion.div
                        variants={variants}
                        custom={direction}
                        className="mt-6 grid grid-cols-7 gap-y-6 px-8"
                      >
                        {days.map(day => (
                          <span
                            className={`${
                              isSameMonth(day, month)
                                ? "bg-white rounded p-2 cursor-pointer"
                                : "text-stone-300"
                            } font-semibold ${
                              isSameDay(day, new Date())
                                ? "bg-blue-500 text-white"
                                : ""
                            } ${
                              selectedDate && isSameDay(day, selectedDate)
                                ? "bg-blue-100"
                                : ""
                            }`}
                            key={format(day, "yyyy-MM-dd")}
                            onClick={() => handleDateClick(day)} // Call handleDateClick when a date is clicked
                          >
                            {format(day, "d")}
                          </span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </ResizablePanel>
              </div>
            </div>
          </div>
        </div>
      </MotionConfig>
    </>
  );
}

// ... (the ResizablePanel, transition, variants, and removeImmediately remain the same)

function ResizablePanel({ children }: { children: React.ReactNode }) {
  let [ref, bounds] = useMeasure();

  return (
    <motion.div
      animate={{
        height: bounds.height ? bounds.height.toString() : "auto",
      }}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
}

let transition: { type: string; bounce: number; duration: number } = {
  type: "spring",
  bounce: 0,
  duration: 0.25,
};

let variants: {
  enter: (direction: number) => { x: string; opacity: number };
  middle: { x: string; opacity: number };
  exit: (direction: number) => { x: string; opacity: number };
} = {
  enter: direction => {
    return { x: `${100 * direction}%`, opacity: 0 };
  },
  middle: { x: "0%", opacity: 1 },
  exit: direction => {
    return { x: `${-100 * direction}%`, opacity: 0 };
  },
};

let removeImmediately: { exit: { visibility: string } } = {
  exit: { visibility: "hidden" },
};
