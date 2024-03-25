import { FormEvent, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import {
  HiOutlineAcademicCap,
  HiOutlineBolt,
  HiOutlineUser,
} from "react-icons/hi2";
import AddOns from "./AddOns";
import Summary, { SummaryType } from "./Summary";
import Steps from "./Steps";

const STEPS = [
  { id: "step-1", title: "your info" },
  { id: "step-2", title: "select plan" },
  { id: "step-3", title: "add-ons" },
  { id: "step-4", title: "summary" },
];

type PlanType = {
  id: string;
  title: string;
  price: number;
  icon: JSX.Element;
};
const PLANS: PlanType[] = [
  { id: "free-plan", title: "Free", icon: <HiOutlineUser />, price: 0 },
  {
    id: "premium-plan",
    title: "Premium",
    icon: <HiOutlineAcademicCap />,
    price: 10,
  },
  { id: "pro-plan", title: "Pro", icon: <HiOutlineBolt />, price: 15 },
];

export type AddonsType = {
  addonName: string;
  id: string;
  text: string;
  price: number;
};
const ADDONS: AddonsType[] = [
  {
    id: "addon-1",
    addonName: "Online service",
    text: "Access to online contents.",
    price: 1,
  },
  {
    id: "addon-2",
    addonName: "Larger storage",
    text: "Extra 1TB of cloud save.",
    price: 2,
  },
  {
    id: "addon-3",
    addonName: "Customizable profile",
    text: "Customize everything on your profile.",
    price: 3,
  },
];

export default function MultiStep() {
  const [step, setStep] = useState<number>(0);
  const [userInfos, setUserInfos] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [planLong, setPlanLong] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<
    (PlanType & { payPlan: "yearly" | "monthly" }) | null
  >(null);

  const [selectedAddOns, setSelectedAddOns] = useState<AddonsType[]>([]);

  function handleChange(key: "name" | "email" | "phone", value: string) {
    setUserInfos((cur) => ({ ...cur, [key]: value }));
  }

  function handleNext() {
    setStep((cur) => cur + 1);
  }
  function handlePrevious() {
    setStep((cur) => cur - 1);
  }

  function handleChangePayPlan(plan: "monthly" | "yearly") {
    setPlanLong(plan);
    if (!selectedPlan) return;
    setSelectedPlan({ ...selectedPlan, payPlan: plan });
  }

  function handleSelectPlan(
    plan: PlanType & { payPlan: "yearly" | "monthly" }
  ) {
    if (plan.id === selectedPlan?.id) return;
    setSelectedPlan(plan);
  }

  function handleSelectAddOns({
    addon,
    addonId,
  }: {
    addon?: AddonsType;
    addonId?: string;
  }) {
    if (addon) {
      setSelectedAddOns((cur) => [...cur, addon]);
    }
    if (addonId) {
      setSelectedAddOns((cur) => cur.filter((add) => add.id !== addonId));
    }
  }

  const summary: SummaryType = {
    user: { ...userInfos },
    addons: [...selectedAddOns],
    plan: {
      ...(selectedPlan
        ? { ...selectedPlan }
        : { id: "", title: "", price: 0, icon: <></>, payPlan: "monthly" }),
    },
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    window.alert("Successfully submittet...");
    console.log(summary);
    setStep(0);
    setSelectedPlan(null);
    setUserInfos({
      name: "",
      email: "",
      phone: "",
    });
    setSelectedAddOns([]);
  }

  return (
    <div className="bg-sky-100 h-screen flex flex-col justify-center items-center">
      <div className="w-96 md:max-w-[60rem] md:w-full p-4 rounded-xl bg-stone-50 md:grid md:grid-cols-[16rem,1fr]">
        <Steps steps={STEPS} step={step} />

        <form onSubmit={handleSubmit} className="">
          {step === 0 && (
            <PersonalInfo
              values={userInfos}
              onChange={handleChange}
              onNext={handleNext}
            />
          )}
          {step === 1 && (
            <SelectPlan
              plans={PLANS}
              onGoBack={handlePrevious}
              onNext={handleNext}
              selectedPlan={selectedPlan}
              onSelectPlan={handleSelectPlan}
              planLong={planLong}
              onSelectPlanLong={handleChangePayPlan}
            />
          )}
          {step === 2 && (
            <AddOns
              onSelectAddons={handleSelectAddOns}
              payPlan={selectedPlan?.payPlan}
              onNextStep={handleNext}
              onPrevious={handlePrevious}
              addons={ADDONS}
              selectedAddons={selectedAddOns}
            />
          )}
          {step === 3 && selectedPlan?.id && (
            <Summary onPrevious={handlePrevious} summary={summary} />
          )}
        </form>
      </div>
    </div>
  );
}
