import { useEffect, useState } from "react";
import NotificationsHeader from "./NotificationsHeader";
import NotificationItem from "./NotificationItem";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

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
    0,
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
  function handleMarkReadWithHover(id: string) {
    if (notifications.find((not) => not.id === id)?.isReaded) return;
    setNotifications((cur) =>
      cur.map((not) => (not.id === id ? { ...not, isReaded: true } : not)),
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
    [showNotifications],
  );

  return (
    <div className="min-h-screen w-full">
      <NotificationsHeader
        hasNotification={hasNotification}
        numNotifications={numNotifications}
        onShowNotifications={handleShow}
      />
      <div className="py-12 text-center">
        <button
          onClick={handleResetNotifications}
          className="rounded-xl border bg-blue-700 px-4 py-2 text-stone-50"
        >
          Reset Notifications
        </button>
      </div>
      <AnimatePresence>
        {showNotifications && (
          <Modal onClose={handleHide}>
            <header className="flex justify-between pb-4">
              <h2 className="flex items-center gap-2">
                <span className="font-semibold ">Notifications</span>
                {hasNotification && (
                  <b className="rounded-md  bg-blue-800 p-0.5 px-2 text-sm text-stone-50">
                    {numNotifications}
                  </b>
                )}
              </h2>
              {hasNotification && (
                <button className="hover:underline" onClick={markAllRead}>
                  Mark all as read
                </button>
              )}
            </header>
            <ul className="flex flex-col gap-2">
              {notifications.map((not) => (
                <NotificationItem
                  notification={not}
                  key={not.id}
                  onMarkAsRead={handleMarkReadWithHover}
                />
              ))}
            </ul>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
