import Button from "./Button";
import PlanItem from "./PlanItem";
import StepContainer from "./StepContainer";

type PlanType = { id: string; title: string; icon: JSX.Element; price: number };
type PropsType = {
  plans: PlanType[];
  onGoBack: () => void;
  onNext: () => void;
  selectedPlan: PlanType | null;
  onSelectPlan: (plan: PlanType & { payPlan: "yearly" | "monthly" }) => void;
  planLong: "monthly" | "yearly";
  onSelectPlanLong: (plan: "monthly" | "yearly") => void;
};
export default function SelectPlan({
  onGoBack,
  onNext,
  plans,
  onSelectPlan,
  selectedPlan,
  planLong,
  onSelectPlanLong,
}: PropsType) {
  return (
    <StepContainer
      title=" Select Your Plan"
      text="You have to option of monthly or yearly billing or start free."
    >
      <menu className="flex gap-4 flex-col">
        {plans.map((plan) => {
          let price = "";
          if (planLong === "yearly") {
            price = `$${plan.price * 12}/year`;
          }
          if (planLong === "monthly") {
            price = `$${plan.price}/month`;
          }
          if (plan.price === 0) price = "";
          const isSelected = selectedPlan?.id === plan.id;
          return (
            <PlanItem
              key={plan.id}
              icon={plan.icon}
              price={price}
              title={plan.title}
              onSelect={() => onSelectPlan({ ...plan, payPlan: planLong })}
              isSelected={isSelected}
            />
          );
        })}
      </menu>
      <div className="text-center">
        <label
          className={
            planLong === "monthly"
              ? "font-bold text-stone-800"
              : "text-stone-300"
          }
        >
          Monthly
        </label>
        <div className="relative inline-block w-12 mx-2 align-middle select-none transition duration-200 ease-in">
          <input
            onChange={(e) => {
              onSelectPlanLong(e.target.checked ? "yearly" : "monthly");
            }}
            checked={planLong === "yearly" ? true : false}
            type="checkbox"
            name="toggle"
            id="toggle"
            className={`absolute block w-4 h-4 top-1 rounded-full bg-stone-50  appearance-none cursor-pointer ${
              planLong === "yearly" ? "right-1" : "left-1"
            }`}
          />
          <label
            htmlFor="toggle"
            className="block overflow-hidden h-6 rounded-full bg-blue-800 cursor-pointer"
          ></label>
        </div>
        <label
          className={
            planLong === "yearly"
              ? "font-bold text-stone-800"
              : "text-stone-300"
          }
        >
          Yearly
        </label>
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={onGoBack}>Go Back</Button>
        <Button disabled={!selectedPlan} onClick={onNext}>
          Next Step
        </Button>
      </div>
    </StepContainer>
  );
}
