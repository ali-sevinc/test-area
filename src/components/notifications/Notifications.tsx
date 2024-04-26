import { ReactNode, useEffect, useState } from "react";

const DUMMY_NOTIFICATONS = [
  {
    id: "n1",
    notification: {
      title: "followed you",
      name: "Json",
      img: "https://i.pravatar.cc/200?u=notification1",
      when: "1m ago",
    },
    isReaded: false,
  },
  {
    id: "n2",
    notification: {
      title: "commented on your picture",
      name: "Kimberly",
      img: "https://i.pravatar.cc/200?u=notification2",
      when: "5m ago",
    },
    isReaded: false,
  },
  {
    id: "n3",
    notification: {
      title: "reacted your post",
      name: "Nathan",
      img: "https://i.pravatar.cc/200?u=notification3",
      when: "1day ago",
    },
    isReaded: false,
  },
  {
    id: "n4",
    notification: {
      title: "send you a message",
      name: "Hassan",
      img: "https://i.pravatar.cc/200?u=notification4",
      when: "5days ago",
    },
    isReaded: true,
  },
  {
    id: "n5",
    notification: {
      title: "left the group",
      name: "Anna",
      img: "https://i.pravatar.cc/200?u=notification5",
      when: "1week ago",
    },
    isReaded: true,
  },
];

export default function Notifications() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(DUMMY_NOTIFICATONS);

  const numNotifications = notifications.reduce(
    (acc, not) => (!not.isReaded ? acc + 1 : acc),
    0
  );
  const hasNotification = numNotifications > 0;

  function handleShow() {
    setShowNotifications(true);
  }
  function handleHide() {
    setShowNotifications(false);
  }

  function markAllRead() {
    setNotifications((cur) => cur.map((item) => ({ ...item, isReaded: true })));
  }
  function markReadWithHover(id: string) {
    if (notifications.find((not) => not.id === id)?.isReaded) return;
    setNotifications((cur) =>
      cur.map((not) => (not.id === id ? { ...not, isReaded: true } : not))
    );
  }

  function handleResetNotifications() {
    setNotifications((cur) => cur.map((not) => ({ ...not, isReaded: false })));
  }

  useEffect(
    function () {
      if (!showNotifications) return;

      function eventHandler(event: KeyboardEvent) {
        if (event.key === "Escape") {
          setShowNotifications(false);
        }
      }
      document.addEventListener("keydown", eventHandler);

      return () => document.removeEventListener("keydown", eventHandler);
    },
    [showNotifications]
  );

  return (
    <>
      <header className="border-b-2 bg-stone-100 h-24 max-w-6xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications-Demo</h1>
        <div>
          <button
            onClick={handleShow}
            className="w-44 h-12 flex items-center gap-4 focus:outline-none"
          >
            <span className="font-semibold">Notifications</span>
            {hasNotification && (
              <b className="text-sm  p-0.5 px-2 rounded-md text-stone-50 bg-blue-800">
                {numNotifications}
              </b>
            )}
          </button>
        </div>
      </header>
      <div className="text-center py-12">
        <button
          onClick={handleResetNotifications}
          className="border bg-blue-700 text-stone-50 px-4 py-2 rounded-xl"
        >
          Reset Notifications
        </button>
      </div>
      {showNotifications && (
        <Modal onClose={handleHide}>
          <div className="flex justify-between pb-4">
            <h2 className="flex items-center gap-2">
              <span className="font-semibold ">Notifications</span>
              {hasNotification && (
                <b className="text-sm  p-0.5 px-2 rounded-md text-stone-50 bg-blue-800">
                  {numNotifications}
                </b>
              )}
            </h2>
            {hasNotification && (
              <button className="hover:underline" onClick={markAllRead}>
                Mark all as read
              </button>
            )}
          </div>
          <ul className="flex flex-col gap-2">
            {notifications.map((not) => (
              <li
                onMouseEnter={() => markReadWithHover(not.id)}
                key={not.id}
                className={`flex px-4 cursor-pointer py-2 rounded-lg gap-4 items-center ${
                  not.isReaded ? "" : "bg-slate-300"
                } `}
              >
                <img src={not.notification.img} className="w-16 rounded-full" />
                <div>
                  <div className="">
                    <p className="text-lg font-semibold">
                      {not.notification.name}
                    </p>
                    <p className="text-sm text-stone-600 tracking-wide">
                      {not.notification.title}
                    </p>
                  </div>
                  <time>{not.notification.when}</time>
                </div>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
}

type ModalType = { children: ReactNode; onClose: () => void };
function Modal({ children, onClose }: ModalType) {
  return (
    <>
      <div
        onClick={onClose}
        className="w-full min-h-screen bg-stone-900/60 fixed top-0 left-0"
      />
      <div className="bg-stone-100 rounded-xl px-4 py-6 fixed top-20 z-10 left-[50%] -translate-x-[50%] border-blue-700 p-4 max-w-xl w-full">
        {children}
      </div>
    </>
  );
}
