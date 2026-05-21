import { redirect } from "next/navigation";

export const metadata = {
  title: "Actividades",
};

export default function CafeJuridicoPage() {
  redirect("/actividades");
}
