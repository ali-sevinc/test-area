import Message from "../comps/Message";

export default function Home() {
  return (
    <Message
      title="Welcome to Recipify"
      message="You can find wonderful and delicious recipes all over the world."
    >
      <p>You can search recipes by type or clicking by tag list.</p>
    </Message>
  );
}
