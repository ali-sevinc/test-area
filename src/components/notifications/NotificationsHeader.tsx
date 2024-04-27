type PropsType = {
  onShowNotifications: () => void;
  hasNotification: boolean;
  numNotifications: number;
};
export default function NotificationsHeader({
  onShowNotifications,
  hasNotification,
  numNotifications,
}: PropsType) {
  return (
    <header className="mx-auto flex h-24 max-w-6xl items-center justify-between border-b-2 bg-stone-100 px-4">
      <h1 className="text-2xl font-bold">Notifications-Demo</h1>

      <button
        onClick={onShowNotifications}
        className="flex h-12  items-center gap-4 focus:outline-none"
      >
        <span className="font-semibold">Notifications</span>
        {hasNotification && (
          <b className="rounded-md  bg-blue-800 p-0.5 px-2 text-sm text-stone-50">
            {numNotifications}
          </b>
        )}
      </button>
    </header>
  );
}
