import Button from "./Button";
import { AddonsType } from "./MultiStep";
import StepContainer from "./StepContainer";

type PropsType = {
  onSelectAddons: ({
    addon,
    addonId,
  }: {
    addon?: AddonsType;
    addonId?: string;
  }) => void;
  addons: AddonsType[];
  selectedAddons: AddonsType[];
  payPlan?: "yearly" | "monthly";
  onNextStep: () => void;
  onPrevious: () => void;
};
export default function AddOns({
  onSelectAddons,
  payPlan,
  onNextStep,
  onPrevious,
  addons,
  selectedAddons,
}: PropsType) {
  return (
    <StepContainer
      title="Pick add-ons"
      text="Add-ons help enchence your user experience"
    >
      <ul className="flex flex-col gap-4">
        {addons.map((add) => (
          <li
            key={add.id}
            className="flex items-center justify-between border rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <input
                checked={
                  selectedAddons.find((item) => item.id === add.id)
                    ? true
                    : false
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    onSelectAddons({ addon: add });
                  } else {
                    onSelectAddons({ addonId: add.id });
                  }
                }}
                id={add.id}
                type="checkbox"
                className="w-5 h-5"
              />
              <p className="flex flex-col">
                <label htmlFor={add.id}>
                  <b>{add.addonName}</b>
                </label>
                <span className="text-xs">{add.text}</span>
              </p>
            </div>
            {payPlan === "monthly" && <p>+${add.price}/mo</p>}
            {payPlan === "yearly" && <p>+${add.price * 12}/yr</p>}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <Button onClick={onPrevious}>Go Back</Button>
        <Button onClick={onNextStep}>Next Step</Button>
      </div>
    </StepContainer>
  );
}
