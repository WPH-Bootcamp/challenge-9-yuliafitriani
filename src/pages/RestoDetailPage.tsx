import { useParams } from "react-router-dom";
import { useRestoDetail } from "@/features/restaurant/hooks/use-resto-detail";
import RestoDetailMenus from "@/features/restaurant/ui/MenuList";

export default function RestoDetailPage() {
  const { id } = useParams();
  const { data, isLoading } = useRestoDetail(Number(id));

  if (isLoading) return <div>Loading...</div>;

  const resto = data?.data;

  return (
    <div className="px-4">
      <h1 className="text-xl font-extrabold">{resto?.name}</h1>

      <div className="my-4">
        <RestoDetailMenus menus={resto?.menus ?? []} />
      </div>
    </div>
  );
}
