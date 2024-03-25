import Button from "./Button";
import StepContainer from "./StepContainer";

type User = { name: string; email: string; phone: string };
type Addons = { addonName: string; id: string; price: number }[];
type Plan = {
  id: string;
  title: string;
  price: number;
  icon: JSX.Element;
  payPlan: "yearly" | "monthly";
};
export type SummaryType = { user: User; addons: Addons; plan: Plan };
type PropsType = {
  summary: SummaryType;
  onPrevious: () => void;
};

export default function Summary({ summary, onPrevious }: PropsType) {
  const { user, addons, plan } = summary;

  const totalPrice =
    (plan.price + addons.reduce((acc, add) => acc + add.price, 0)) *
    (plan.payPlan === "monthly" ? 1 : 12);

  return (
    <StepContainer
      title="Finishing up"
      text="Double-check everthing look okay before submitting."
    >
      <div className="flex flex-col gap-4">
        <div className="border bg-stone-100 p-4 rounded-xl">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
        <p className="border bg-stone-100 p-4 rounded-xl flex items-center justify-between">
          <span>
            {plan.title}({plan.payPlan})
          </span>
          {plan.payPlan === "monthly" && <b>${plan.price}/mo</b>}
          {plan.payPlan === "yearly" && <b>${plan.price * 12}/yr</b>}
        </p>
        <ul className="flex flex-col  divide-y-2 bg-stone-100 px-4 border rounded-xl">
          {addons.map((add) => (
            <li key={add.id} className="py-4 flex items-center justify-between">
              <span>{add.addonName}</span>
              {plan.payPlan === "monthly" && <b>${add.price}/mo</b>}
              {plan.payPlan === "yearly" && <b>${add.price * 12}/yr</b>}
            </li>
          ))}
        </ul>
        <p className="flex justify-between px-4">
          <b>Total price</b>
          <b>
            ${totalPrice}/{plan.payPlan === "monthly" ? "mo" : "yr"}
          </b>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={onPrevious}>Go Back</Button>
        <Button type="submit">Submit</Button>
      </div>
    </StepContainer>
  );
}
