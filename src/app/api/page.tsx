import { getPrefectures } from "@/lib/getPrefectures";

export default async function Page() {
    const data = await getPrefectures();
    console.log(data);
}