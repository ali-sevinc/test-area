type NotificationType = {
  id: string;
  notification: { title: string; name: string; img: string; when: string };
  isReaded: boolean;
};
type PropsType = {
  notification: NotificationType;
  onMarkAsRead: (id: string) => void;
};
export default function NotificationItem({
  notification,
  onMarkAsRead,
}: PropsType) {
  return (
    <li
      onMouseEnter={() => onMarkAsRead(notification.id)}
      key={notification.id}
      className={`flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 transition-colors ${
        notification.isReaded ? "" : "bg-slate-300"
      } `}
    >
      <img src={notification.notification.img} className="w-16 rounded-full" />
      <div>
        <div className="">
          <p className="text-lg font-semibold">
            {notification.notification.name}
          </p>
          <p className="text-sm tracking-wide text-stone-600">
            {notification.notification.title}
          </p>
        </div>
        <time>{notification.notification.when}</time>
      </div>
    </li>
  );
}
