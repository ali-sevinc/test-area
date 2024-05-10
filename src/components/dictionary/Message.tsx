type PropsType = { title: string; message: string };
export default function Message({ title, message }: PropsType) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center ">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-lg">{message}</p>
    </div>
  );
}
