import { useEffect, useState } from "react";
import Table from "./Table";

type Product = { id: number; thumbnail: string; title: string; price: number };
type Todo = { id: number; todo: string; completed: boolean };
export default function CCPTable() {
  const [data, setData] = useState<{ todos: Todo[]; products: Product[] }>({
    products: [],
    todos: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(function () {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const [productsRes, todosRes] = await Promise.all([
          await fetch("https://dummyjson.com/products?limit=5&skip=10"),
          await fetch("https://dummyjson.com/todos?limit=6&skip=0"),
        ]);
        if (!productsRes.ok || !todosRes.ok) throw new Error("Failed to fetch");

        const productsData = await productsRes.json();
        const todosData = await todosRes.json();

        setData((prev) => ({
          ...prev,
          products: productsData.products,
          todos: todosData.todos,
        }));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br pb-8 from-emerald-500 to-emerald-900 pt-12 flex flex-col gap-4">
      <h1 className="mb-12 text-center text-lg md:text-3xl text-emerald-50">
        Table With CCP&RenderProps
      </h1>
      {isLoading && (
        <p className="text-center text-emerald-50 text-2xl animate-pulse">
          Loading....
        </p>
      )}
      {isError && (
        <p className="text-red-300 text-xl text-center">
          Failed to fetching tables data.
        </p>
      )}

      {!isLoading && !isError && (
        <>
          <Table columns="4rem 1.6rem 1fr 4rem">
            <Table.Header>
              <div />
              <div className="italic text-lg">Id</div>
              <div className="italic text-lg">Name</div>
              <div className="italic text-lg">Price</div>
            </Table.Header>
            <Table.Body
              data={data.products}
              render={(product) => (
                <Table.Row key={product.id}>
                  <img
                    className="w-9 h-9 md:w-[3.2rem] md:h-[3.2rem] rounded-full "
                    src={product.thumbnail}
                  />
                  <p>{product.id}</p>
                  <p>{product.title}</p>
                  <p>{`$${product.price}`}</p>
                </Table.Row>
              )}
            />
            <Table.Footer>Product List</Table.Footer>
          </Table>

          <Table columns="2rem 1fr 8rem">
            <Table.Header>
              <div></div>
              <div>Todo</div>
              <div className="text-center">Completed</div>
            </Table.Header>
            <Table.Body
              data={data.todos}
              render={(todo) => (
                <Table.Row key={todo.id}>
                  <p>{todo.id}</p>
                  <p>{todo.todo}</p>
                  <p className="text-center">{todo.completed ? "✔" : "❌"}</p>
                </Table.Row>
              )}
            />
            <Table.Footer>Todo List</Table.Footer>
          </Table>
        </>
      )}
    </div>
  );
}
